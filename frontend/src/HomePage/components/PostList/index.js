import EditPost from '../EditPost';
import { Row, Alert } from 'reactstrap';
import './index.scss';

export default function PostList(values) {
  const { posts, onDeleteClick, onUpdateClick } = values

  const allPosts = posts.map(post => (
    <EditPost
      key={post.id}
      id={post.id}
      title={post.title}
      author={post.author}
      text={post.text}
      onDeleteClick={onDeleteClick}
      onUpdateClick={onUpdateClick}
    ></EditPost>
  ));
  return (
    <Row className="posts-list">
      {allPosts.length===0 ?
        <Alert color="warning">
          <span>There are no registered posts!".</span>
        </Alert>
        : allPosts}
    </Row>
  );
}



