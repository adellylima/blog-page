import React, { useState } from 'react'
import PostForm from "../PostForm";
import { Button } from 'reactstrap';
import { FiPlusCircle } from "react-icons/fi";

import './index.scss';

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
    <Button onClick={handleCreateClick} className="new-post" title='Add new post'><FiPlusCircle /></Button>
  )
}
