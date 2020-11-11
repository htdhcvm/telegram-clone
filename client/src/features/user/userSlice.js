import '@babel/polyfill';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authTelegram = createAsyncThunk("user/AuthTelegram", async () => {
    window.open("http://localhost:3001/auth/google", "_self")
})


export const checkAuth = createAsyncThunk("user/checkAuth", async () => {
    return fetch("http://localhost:3001/auth/check", {
        method : "POST",
        credentials: 'include'
    }).then(response => response.json())
    .then(data => data)
})


export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
    return fetch("http://localhost:3001/auth/logout", {
        method : "POST",
        credentials: "include"
    }).then( response => response.status)
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: false,
        id : "",
        name: "",
        photo: ""
    },
    extraReducers: {
        [checkAuth.fulfilled]: (state, action) => {
            console.log("Fulfilled", action);
            if(action.payload.status === "success") {
                state.status = true;
                state.id = action.payload.data.id;
                state.name = action.payload.data.name;
                state.photo = action.payload.data.photo;
            }
            return state;
        },

        [checkAuth.rejected]: (state, action) => {
            console.log("Rejected", action);
        },



        [logoutUser.fulfilled]: (state, action) => {
            console.log("Fulfilled", action);
            if(action.payload === 200) { 
                state.status = false;
                state.id = "";
                state.name = "";
                state.photo = "";
            }
            return state;
        },

        [logoutUser.rejected]: (state, action) => {
            console.log("Rejected", action);
        }
    }
})

export default userSlice.reducer;