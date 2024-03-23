import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'




const initialState = [
  { id: '1', title: 'First Post', content: 'Hello', date: sub(new Date(), { minutes: 10 }).toISOString() },
  { id: '2', title: 'Second Post', content: 'More Text', date: sub(new Date(), { minutes: 5 }).toISOString() },
  { id: '3', title: 'Third Post', content: 'Let it shine', date: sub(new Date(), { minutes: 3 }).toISOString() }
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            user: userId
          }
        }
      }
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find(post => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    }
  }
})
export const { postAdded, postUpdated } = postSlice.actions
export default postSlice.reducer