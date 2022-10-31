import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: '',
  response: ''
};

export const authenticate = createAsyncThunk('user/authenticate', (data) =>
  axios.post('/api/auth/login', data, {
    headers: { 'Content-Type': 'application/json' }
  })
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.response = action.payload;
    });
    builder.addCase(authenticate.rejected, (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.error = action.error;
    });
  }
});

export default userSlice.reducer;
