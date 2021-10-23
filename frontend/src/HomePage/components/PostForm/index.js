
import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import './index.scss';

export default function PostForm(values) {
  const {id, title, author, text, onCancelClick, onFormSubmit} = values;
  const [inputs, setInputs] = useState({
    title: title || '',
    author: author || '',
    text: text || '',
  });

  const set = name => {
    return ({ target: { value } }) => {
      setInputs(oldValues => ({...oldValues, [name]: value }));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(inputs);
  }


  const buttonText = id ? 'Update Post': 'Create Post';
  return (
    <Form onSubmit={handleFormSubmit} className="post-form">
      <Row>
        <Col>
            <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" onChange={set('title')} value={inputs.title} name="title" id="title" placeholder="Enter a title" />
          </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input type="text" onChange={set('author')} value={inputs.author} name="author" id="author" placeholder="Author's name" />
        </FormGroup>
      </Col>
      </Row>
      <FormGroup>
        <Label for="text">Text</Label>
        <Input type="textarea" onChange={set('text')} value={inputs.text} name="text" id="text" placeholder="Text" />
      </FormGroup>
      <FormGroup className="button-group">
        <Button>{buttonText}</Button>
        <Button type="button" onClick={onCancelClick}>Cancel</Button>
      </FormGroup>
    </Form>
  )
}
