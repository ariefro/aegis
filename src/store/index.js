import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import transactionReducer from './transactionSlice';
import userReducer from './userSlice';
import walletReducer from './walletSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    transaction: transactionReducer,
    user: userReducer,
    wallet: walletReducer
  }
});

export default store;
