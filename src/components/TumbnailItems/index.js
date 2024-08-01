import './index.css'

const TumbnailItems = props => {
  const {details, thumbnailClick} = props
  const onClickThumbnail = () => {
    thumbnailClick(details.id)
  }
  return (
    <li className="tumbnail-list-item-container">
      <button
        type="button"
        className="button-thumbnail"
        onClick={onClickThumbnail}
      >
        <img
          src={details.thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
        />
      </button>
    </li>
  )
}

export default TumbnailItems
