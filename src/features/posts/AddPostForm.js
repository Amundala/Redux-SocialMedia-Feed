import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postSlice'

const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(state => state.users)
  //console.log(users, "ABA USER KBSS");

  const onTitleChange = e => setTitle(e.target.value)
  const onContentChange = e => setContent(e.target.value)
  const onAuthorChange = e => setUserId(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))
      setTitle('')
      setContent('')
    }
  }
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>{user.name}</option>
  ))

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
              <label htmlFor="postAuthor">Author</label>
            </div>
            <div>
              <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                {usersOptions}
              </select>
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
            <button type='submit' onClick={onSavePostClicked} disabled={!canSave}>Save</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddPostForm
