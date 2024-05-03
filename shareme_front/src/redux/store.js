import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './slices/authSlice';

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => 
    //     getDefaultMiddleware().concat(
    //         authApi.middleware
    //     )
});

export default store;
