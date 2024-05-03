import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    isLoggedIn: false
};

export const authApi = createSlice({
    name: 'authApi',
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.data = action.payload;
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
});

export const { setAuthState } = authApi.actions

export default authApi.reducer