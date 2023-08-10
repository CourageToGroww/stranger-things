//This component will fetch and display all the posts. It will use the getPosts function from the api.js file.

const PostList = () => {
  import React, { useEffect, useState } from 'react';

  const Posts = () => {
    const [posts, setPosts] = useState([]);
  
  const COHORT_NAME = '2302-ACC-CT-WEB-PT-A';
  const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
  
  useEffect(() => {
      fetchPosts();
    }, []);
  
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Author: {post.author.username}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Posts;
