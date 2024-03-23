import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '0', name: 'Tom Amundala' },
  { id: '1', name: 'John Doe' },
  { id: '2', name: 'Doe 250' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer