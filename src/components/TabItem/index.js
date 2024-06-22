// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, updateState, isActive} = props
  const {displayText, tabId} = tabItem
  const hoverCall = isActive ? "hover" : ""
  const onclickTabItem = () => {
    updateState(tabId)
  }
  return (
    <li className="tab-items">
      <button className={`button ${hoverCall}`} type="button" onClick={onclickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
