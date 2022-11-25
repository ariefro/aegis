import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';
import transactionReducer from './transactionSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    transaction: transactionReducer,
    user: userReducer
  }
});

export default store;
