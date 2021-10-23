import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import './index.scss';

export default function Home() {

  return (
    <Container className='content'>
      <Row>
        <h1 className="title">Blog</h1>
      </Row>
    </Container>
  )
}
