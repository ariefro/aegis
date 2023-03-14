import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../utils/axiosConfig';

const initialState = {
  notifications: null,
  loading: false
};

export const getNotifications = createAsyncThunk(
  'wallet/getNotification',
  async () => {
    try {
      const { data, status } = await axios({
        method: 'GET',
        url: '/api/logs'
      });

      if (status !== 200) {
        throw data;
      }

      return data;
    } catch (err) {
      return err.response.data;
    }
  }
);

const logSLice = createSlice({
  name: 'log',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotifications.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload.notifications;
      state.loading = false;
    });
  }
});

export default logSLice.reducer;
