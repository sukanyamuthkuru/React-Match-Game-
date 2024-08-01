import {Component} from 'react'
import MatchGameTabItem from '../MatchGameTabItem'
import TumbnailItems from '../TumbnailItems'
import GameOverCard from '../GameOverCard'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTabId: props.tabsList[0].tabId,
      matchImage: props.imagesList[0].imageUrl,
      matchId: props.imagesList[0].id,
      score: 0,
      gameOver: false,
      time: 60,
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(pre => ({time: pre.time - 1}))
    }, 1000)
  }

  onChangeTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  playAgain = () => {
    const {tabsList, imagesList} = this.props

    this.setState({
      activeTabId: tabsList[0].tabId,
      matchImage: imagesList[0].imageUrl,
      matchId: imagesList[0].id,
      score: 0,
      gameOver: false,
      time: 60,
    })
    this.timerAfterPlayAgain = setInterval(() => {
      this.setState(pre => ({time: pre.time - 1}))
    }, 1000)
  }

  thumbnailClick = id => {
    const {matchId} = this.state
    const {imagesList} = this.props
    const list = [...imagesList]
    imagesList.sort(() => Math.random() - 0.5)
    if (id === matchId) {
      const shuffeledlist = imagesList.sort(() => Math.random() - 0.5)
      this.setState(pre => ({
        score: pre.score + 1,
        matchImage: shuffeledlist[0].imageUrl,
        matchId: shuffeledlist[0].id,
      }))
    } else {
      clearInterval(this.timer)
      this.setState({gameOver: true})
    }
  }

  render() {
    const {activeTabId, matchImage, time, score} = this.state
    let {gameOver} = this.state
    const {tabsList, imagesList} = this.props

    const tabItemRelatedTumbnail = imagesList.filter(
      each => each.category === activeTabId,
    )
    if (time === 0 || gameOver === true) {
      clearInterval(this.timer)
      clearInterval(this.timerAfterPlayAgain)
      gameOver = true
    }
    return (
      <>
        <div className="navbar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
            className="logo"
          />

          <div className="score-and-timer-container">
            <div className="score-container">
              <p className="score-text">Score: </p>
              <h1 className="score-nuber">{score}</h1>
            </div>
            <div className="timer-cccontainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-logo"
              />
              <p className="timer-text">{time} sec</p>
            </div>
          </div>
        </div>
        {gameOver ? (
          <GameOverCard score={score} playAgain={this.playAgain} />
        ) : (
          <div className="app-container">
            <img src={matchImage} alt="match" className="matchImage" />
            <ul className="tabItem-list-container">
              {tabsList.map(each => (
                <MatchGameTabItem
                  key={each.tabId}
                  details={each}
                  isActive={each.tabId === activeTabId}
                  onChangeTabId={this.onChangeTabId}
                />
              ))}
            </ul>
            <ul className="tumbnail-list-container">
              {tabItemRelatedTumbnail.map(each => (
                <TumbnailItems
                  key={each.id}
                  details={each}
                  thumbnailClick={this.thumbnailClick}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default MatchGame
