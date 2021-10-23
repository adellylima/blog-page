
export default function Post(values) {
  const {title, author, text, onEditClick, onDeleteClick} = values
    return (
      <div>
        <div>
          <span>
            <strong>Title: </strong>{title}
          </span>
        </div>
        <div>
        <strong>Text:</strong> {text}
        </div>
        <div>
          <strong>Author:</strong>  {author}
        </div>
        <div>
            <span onClick={onEditClick}>EDIT</span>
            <span onClick={onDeleteClick}>DELETE</span>
        </div>
      </div>
    )
}
