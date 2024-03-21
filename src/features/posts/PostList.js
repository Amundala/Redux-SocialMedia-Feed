import React from 'react'
import { useSelector } from 'react-redux'


function PostList() {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <div className='' id={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
    </div>
  ))
  return (
    <div className='container'>
      <h3>Post</h3>
      {renderedPosts}
    </div>
  )
}

export default PostList
