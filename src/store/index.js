import { configureStore } from '@reduxjs/toolkit';
import logReducer from './logSlice';
import transactionReducer from './transactionSlice';
import userReducer from './userSlice';
import walletReducer from './walletSlice';

const store = configureStore({
  reducer: {
    log: logReducer,
    transaction: transactionReducer,
    user: userReducer,
    wallet: walletReducer
  }
});

export default store;
