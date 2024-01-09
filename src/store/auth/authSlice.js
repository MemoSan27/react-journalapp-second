import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        diplayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: (currentValue, { payload }) => {
            currentValue.status = 'authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            currentValue.uid = payload.uid;
            currentValue.email = payload.email;
            currentValue.diplayName = payload.displayName;
            currentValue.photoURL = payload.photoURL;
            currentValue.errorMessage = null;
        },
        logout: (currentValue, { payload }) => {
            currentValue.status = 'not-authenticated'; // 'checking', 'not-authenticated', 'authenticated'
            currentValue.uid = null;
            currentValue.email = null;
            currentValue.diplayName = null;
            currentValue.photoURL = null;
            currentValue.errorMessage = payload.errorMessage;
        },
        checkingCredentials: (currentValue, action) => {
            currentValue.status = 'checking';
        },
    }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials  } = authSlice.actions;
