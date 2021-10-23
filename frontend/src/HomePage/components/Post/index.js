import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { FiEdit, FiTrash2 } from "react-icons/fi";

import "./index.scss"

export default function Post(values) {
  const {title, author, text, onEditClick, onDeleteClick} = values
    return (
      <Card className="card-content">
        <CardBody>
        {/*temporary image */}
        <img width="100%" src="https://picsum.photos/200/120" alt="Card cap" />
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6">{author}</CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{text}</CardText>
          <div className="buttons-group">
            <Button color="primary" onClick={onEditClick}><FiEdit /></Button>
            <Button color="primary" onClick={onDeleteClick}><FiTrash2 /></Button>
          </div>
        </CardBody>
      </Card>
    )
}
