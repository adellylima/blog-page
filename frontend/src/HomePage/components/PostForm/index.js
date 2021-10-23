
import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import './index.scss';

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
      <Form onSubmit={handleFormSubmit} className="post-form">
        <Row>
          <Col>
             <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" onChange={handleTitleUpdate} name="title" id="title" placeholder="Enter a title" />
            </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for="author">Author</Label>
            <Input type="text" onChange={handleAuthorUpdate} name="author" id="author" placeholder="Author's name" />
          </FormGroup>
        </Col>
        </Row>
        <FormGroup>
          <Label for="text">Text</Label>
          <Input type="textarea" onChange={handleTextUpdate} name="text" id="text" placeholder="Text" />
        </FormGroup>
        <FormGroup className="button-group">
          <Button>{buttonText}</Button>
          <Button type="button" onClick={onCancelClick}>Cancel</Button>
        </FormGroup>
      </Form>
    )
  }
