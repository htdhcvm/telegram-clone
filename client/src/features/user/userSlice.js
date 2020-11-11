import '@babel/polyfill';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const authTelegram = createAsyncThunk("user/AuthTelegram", async () => {
    window.open("http://localhost:3001/auth/google", "_self")
})


export const checkAuth = createAsyncThunk("user/checkAuth", async () =>
    fetch("http://localhost:3001/auth/check", {
        method: "POST",
        credentials: 'include'
    }).then(response => response.json())
        .then(data => data)
)


export const logoutUser = createAsyncThunk("user/logoutUser", async () =>
    fetch("http://localhost:3001/auth/logout", {
        method: "POST",
        credentials: "include"
    }).then(response => response.status)
);


export const getAllUsers = createAsyncThunk("user/getAllUsers", async () =>
    fetch("http://localhost:3001/user/getAll", {
        method: "GET",
        credentials: "include"
    }).then(response => response.json())
)

export const getCurrentUser = createAsyncThunk("user/currentUser", async () =>
    fetch("http://localhost:3001/user/currentUser", {
        method: "GET",
        credentials: "include"
    }).then(response => response.json())
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: false,
        id: "",
        name: "",
        photo: "",
        listUsers: []
    },
    extraReducers: {
        [checkAuth.fulfilled]: (state, action) => {
            console.log("Fulfilled", action);
            if (action.payload.status === "success") {
                state.status = true;
                state.id = action.payload.id;
            }
            return state;
        },

        [checkAuth.rejected]: (state, action) => {
            console.log("Rejected", action);
        },

        [logoutUser.fulfilled]: (state, action) => {
            console.log("Fulfilled", action);
            if (action.payload === 200) {
                state.status = false;
                state.id = "";
                state.name = "";
                state.photo = "";
            }
            return state;
        },

        [logoutUser.rejected]: (state, action) => {
            console.log("Rejected", action);
        },


        [getAllUsers.fulfilled]: (state, action) => {
            state.listUsers = action.payload.users;
            return state;
        },

        [getAllUsers.rejected]: (state, action) => {
            console.log("Rejected", action);
        },


        [getCurrentUser.fulfilled]: (state, action) => {
            state.name = action.payload.currentUser.name;
            state.photo = action.payload.currentUser.photo;

            return state;
        },

        [getCurrentUser.rejected]: (state, action) => {
            console.log("Rejected", action);

        },




        
    }
})

export default userSlice.reducer;