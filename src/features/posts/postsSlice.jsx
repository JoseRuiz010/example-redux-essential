import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
const initialState = {
  posts: [],
  status: 'idle',
  error: null
}
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, idUser) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: idUser
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(postPost.fulfilled, (state, action) => {
        state.posts.push(action.payload)
      })
  }
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await response.json();
  console.log(res);
  return res;
})
export const postPost = createAsyncThunk('post/postPost', async (newPost) => {
  console.log(newPost)
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newPost })
  });
  const res = await response.json();
  return res.newPost;
})
export const selectAllPosts = state => state.posts
export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer