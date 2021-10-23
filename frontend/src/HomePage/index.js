import React, { useState, useEffect } from 'react'
import PostList from './components/PostList';
import CreateNewPost from './components/CreateNewPost';
import { Container, Row, Col } from 'reactstrap';
import './index.scss';

export default function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/posts/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
        .then(response => response.json())
        .then(data => {
          setPosts(data);
        });
  }, []);


  const createNewPost = (post) => {
        fetch('http://localhost:8000/api/posts/', {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
        .then(response => response.json())
        .then(post => {
          setPosts(posts.concat(post));
        });
    };
  const updatePost = (newPost) => {
        fetch(`http://localhost:8000/api/posts/${newPost.id}/`, {
            method: 'PUT',
            headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        }).then(response => response.json())
        .then(newPost => {
            const newPosts = posts.map(post => {
                if(post.id === newPost.id) {
                    return Object.assign({}, newPost)
                } else {
                    return post;
                }
            });
          setPosts(newPosts);

        });
      }
  const deletePost = (postId) => {
        fetch(`http://localhost:8000/api/posts/${postId}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(() => {
          setPosts(posts.filter(post => post.id !== postId));
        });
    }

  return (
    <Container>
      <Row className="align-right">
        <CreateNewPost onPostCreate={createNewPost}></CreateNewPost>
      </Row>
      <Row>
        <Col>
          <PostList
              posts={posts}
              onDeleteClick={deletePost}
              onUpdateClick={updatePost}
            ></PostList>
          </Col>
      </Row>
    </Container>
  )
}
