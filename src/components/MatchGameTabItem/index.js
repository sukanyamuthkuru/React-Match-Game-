import './index.css'

const MatchGameTabItem = props => {
  const {details, isActive, onChangeTabId} = props
  const {tabId} = details

  const styling = isActive ? 'activeTabStyling' : 'tabItem-text'
  const onClicktab = () => {
    onChangeTabId(tabId)
  }

  return (
    <li className="tabItem-listItem-container">
      <button className={styling} type="button" onClick={onClicktab}>
        {details.displayText}
      </button>
    </li>
  )
}

export default MatchGameTabItem
