// Write your code here
import './index.css'

const AppItem = props => {
  const {appList} = props
  const {appName, imageUrl} = appList

  return (
    <li className="app-item-container">
      <img src={imageUrl} className="image-url" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
