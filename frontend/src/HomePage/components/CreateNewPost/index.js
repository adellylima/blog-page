import React, { useState } from 'react'
import PostForm from "../PostForm";

export default function CreateNewPost(values) {
  const {onPostCreate} = values
  const [inCreateMode, setInCreateMode] = useState('');

  const handleCreateClick = () => {
    setInCreateMode(true);
  }
  const leaveCreateMode = () => {
    setInCreateMode(false);
  }
  const handleCancleClick = () => {
    leaveCreateMode();
  }
  const handleFormSubmit = (post) => {
    leaveCreateMode();
    onPostCreate(post);
  }
  if (inCreateMode) {
    return (
      <div>
        <PostForm
          onFormSubmit={handleFormSubmit}
          onCancelClick={handleCancleClick}></PostForm>
      </div>
    )
  }
  return (
    <button onClick={handleCreateClick} className="btn btn-secondary">Create new post</button>
  )
}
