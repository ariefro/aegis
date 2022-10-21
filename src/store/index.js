import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: { counter: counterReducer } // Example for reducer
});

export default store;
