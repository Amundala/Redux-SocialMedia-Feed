import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'

const PostList = () => {
  const posts = useSelector(state => state.posts)
  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
  const renderedPost = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p><PostAuthor userId={post.user} /> <TimeAgo timestamp={post.date} /></p>
      <Link to={`/posts/${post.id}`}>View Post</Link>
    </article>
  ))

  return (
    <>
      <section>
        <h2>Posts</h2>
        {renderedPost}
      </section>
    </>
  )
}
export default PostList 
