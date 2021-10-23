import EditPost from '../EditPost';

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
    <div>
      {allPosts}
    </div>
  );
}



