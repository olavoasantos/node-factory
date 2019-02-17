import React from 'react';

const PostList = ({ list }) => (
  <>
    <h2>Posts</h2>
    <ul>
      {list.map(post => (
        <li key={post.id}>
          <a href={`/posts/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </>
);

export default PostList;
