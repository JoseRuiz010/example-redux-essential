import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice';
import userReducer from '../features/posts/userSlice'
import { apiSlice } from '../features/api/apiSlice';
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})