import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = []

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => action.payload)
  }
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await response.json();
  console.log(res);
  return res;
})

export const { } = userSlice.actions
export default userSlice.reducer