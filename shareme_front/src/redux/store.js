import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
    reducer: {
        authSlice: authReducer,
    },
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware().concat(
    //         authApi.middleware
    //     )
});

export default store;
