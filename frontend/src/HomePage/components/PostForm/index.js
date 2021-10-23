
import React, { useState } from 'react'

export default function PostForm(values) {
  const {id, title, author, text, onCancelClick, onFormSubmit} = values;

    const [postToSubmit, setPostToSubmit] = useState({
      title: title || '',
      author: author || '',
      text: text || '',
    });

    const handleFormSubmit = (evt) => {
      evt.preventDefault();
      onFormSubmit(postToSubmit);
    }
    const handleTitleUpdate = (evt) => {
      setPostToSubmit({title: evt.target.value});
    }
    const handleAuthorUpdate = (evt) => {
      setPostToSubmit({author: evt.target.value});
    }
    const handleTextUpdate = (evt) => {
      setPostToSubmit({text: evt.target.value});
    }
    const buttonText = id ? 'Update Post': 'Create Post';
      return (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Title
            </label>
            <input type="text" placeholder="Enter a title"
              value={title} onChange={handleTitleUpdate}
            />
          </div>
          <div>
            <label>
              Author
            </label>
            <input type="text" placeholder="Author's name"
              value={author} onChange={handleAuthorUpdate}
            />
          </div>
          <div>
            <label>
              Text
            </label>
            <textarea placeholder="Blog Text"
              rows="5" value={text}
              onChange={handleTextUpdate}
            >
              {text}
            </textarea>
          </div>
          <div>
            <button type="submit">
              {buttonText}
            </button>
            <button type="button" onClick={onCancelClick}>
              Cancel
            </button>
          </div>
        </form>
        )
  }
