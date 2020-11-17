import '@babel/polyfill';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: "messages",
    initialState: {
        listMessages: [],
        currentMessages: ""
    },
    reducers: {
        addMessages(state, action) {
            state.listMessages.push({ text: action.payload.text, time: new Date().toUTCString(), photo: action.payload.photo, name: action.payload.name, side : "right" })
        },
        clearMessages(state, _) {
            state.listMessages.length = 0;
        },
        setMessages(state, action) {
            state.listMessages = action.payload
        }
    },

})


export const { addMessages, clearMessages, setMessages } = messagesSlice.actions;


export default messagesSlice.reducer;