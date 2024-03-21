import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { postAdded } from './postSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(
          {
            id: nanoid(),
            title,
            content
          }
        )
      )
      setTitle('')
      setContent('')
    }
  }

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  return (
    <>
      <div className='container mx-auto'>
        <h2>Add a New Post</h2>
        <div className='flex flex-row'>
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
                <input
                  className='border-2'
                  type="text"
                  id="postTipostContenttle"
                  name='postContent'
                  value={content}
                  onChange={onContentChange} />
              </div>
            </div>

            <div>
              <button type='submit' onClick={onSavePostClicked}>Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddPostForm
