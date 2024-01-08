import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        diplayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (currentValue, action) => {

        },
        logout: (currentValue, action) => {

        },
        checkingCredentials: (currentValue, action) => {
            currentValue.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials  } = authSlice.actions;
