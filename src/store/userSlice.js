import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cookie from 'cookiejs';
import axios from '../utils/axiosConfig';

const baseUrl = process.env.NEXT_PUBLIC_AEGIS_API;
const initialState = {
  loading: false
};

export const authenticate = createAsyncThunk(
  'user/authenticate',
  async (req) => {
    try {
      const { data, status } = await axios.post(`/api/login`, req);
      if (status !== 200) {
        throw data;
      }
      cookie.set('aegis_token', data.access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;
      return { data, status };
    } catch (err) {
      return { data: err.response.data, status: err.status };
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

export const logout = createAsyncThunk('user/logout', async (req) => {
  try {
    const { data, status } = await axios.post('/api/logout', req);
    if (status !== 200) {
      throw data;
    }
    cookie.remove('aegis_token');
    delete axios.defaults.headers.common.Authorization;
    return { data, status };
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
