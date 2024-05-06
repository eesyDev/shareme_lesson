import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: null,
    isLoggedIn: false
};

export const authSlice = createSlice({
    name: 'authApi',
    initialState,
    reducers: {
        setAuthState: (state, action) => {
            state.data = action.payload.data;
            state.isLoggedIn = action.payload.isLoggedIn
        }
    }
});

export const { setAuthState } = authSlice.actions

export default authSlice.reducer