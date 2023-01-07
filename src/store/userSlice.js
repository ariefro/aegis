import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'cookiejs';

const baseUrl = process.env.NEXT_PUBLIC_AEGIS_API;
const initialState = {
  loading: false
};

export const authenticate = createAsyncThunk(
  'user/authenticate',
  async (req) => {
    try {
      const { data, status } = await axios.post(`${baseUrl}/api/login`, req);
      if (status === 200) {
        cookie.set('aegis_token', data.token);
      } else {
        throw data;
      }
      return data;
    } catch (err) {
      return err.response;
    }
  }
);

export const register = createAsyncThunk('user/register', async (req) => {
  try {
    const { status, data } = await axios.post(`${baseUrl}/api/register`, req);
    if (status !== 200) {
      throw data;
    }
    return data;
  } catch (err) {
    return err.response.data;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
    });
  }
});

export default userSlice.reducer;
