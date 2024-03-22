import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onTitleChange = e => setTitle(e.target.value)
  const onContentChange = e => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded({
        id: nanoid(),
        title,
        content
      }))
      setTitle('')
      setContent('')
    }
  }
  return (
    <>
      <section>
        <h2>Add a new Post</h2>
        <form>
          <div>
            <div>
              <label htmlFor="postTitle">Post Title:</label>
            </div>
            <div>
              <input
                className='border-2'
                type="text"
                id="postTitle"
                name='postTitle'
                value={title}
                onChange={onTitleChange} />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="postContent">Post Content:</label>
            </div>
            <div>
              <textarea name="postContent" onChange={onContentChange} value={content} id="postTipostContenttle" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div>
            <button type='submit' onClick={onSavePostClicked}>Save</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddPostForm
