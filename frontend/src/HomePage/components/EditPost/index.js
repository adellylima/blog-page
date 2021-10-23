import PostForm  from "../PostForm";
import Post from "../Post";
import React, { useState } from 'react'

export default function EditPost(values) {
    const {id, title, author, text, onDeleteClick, onUpdateClick} = values;
    const [inEditMode, setInEditMode] = useState('false');
    const enterEditMode = () => {
      setInEditMode('true');
    }
    const leaveEditMode = () => {
      setInEditMode('false');
    }
    const handleDelete = () => {
      onDeleteClick(id);
    }
    const handleUpdate = (post) => {
      leaveEditMode()
      onUpdateClick(post);
    }

    const component = () => {
      if(inEditMode === "true") {
        return (
          <PostForm
          id={id}
          title={title}
          author={author}
          text={text}
          onCancelClick={leaveEditMode}
          onFormSubmit={handleUpdate}
          />
          );
        }
        return (
          // <span>{title}</span>
        <Post
          title={title}
          author={author}
          text={text}
          onEditClick={enterEditMode}
          onDeleteClick={handleDelete}
        />
      )
    }
      return (
        <div>
          {component()}
        </div>
      )
  }
