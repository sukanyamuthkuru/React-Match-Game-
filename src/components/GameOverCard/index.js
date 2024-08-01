import './index.css'

const GameOverCard = props => {
  const {score, playAgain} = props
  const onclickPlayAgain = () => {
    playAgain()
  }
  return (
    <div className="game-card-container">
      <div className="game-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="your-score-text">YOUR SCORE</p>
        <p className="scores">{score}</p>
        <button
          className="button-playagain"
          type="button"
          onClick={onclickPlayAgain}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          <p className="buttonText">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GameOverCard
