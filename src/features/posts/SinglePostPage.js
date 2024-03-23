import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'

export const SinglePostPage = () => {

  const { postId } = useParams()
  const post = useSelector(state => state.posts.find(post => post.id === postId))
  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    )
  }
  return (
    <>
      <section>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p><PostAuthor userId={post.user} /></p>
        <Link to={`/editPost/${post.id}`}>Edit Post</Link>
      </section>
    </>
  );
}


