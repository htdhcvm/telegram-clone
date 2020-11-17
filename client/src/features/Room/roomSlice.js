import '@babel/polyfill';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const roomSlice = createSlice({
    name: "room",
    initialState: {
        current: ""
    },
    reducers: {
        setIdRoomReduxStore(state, action) {
            state.current = action.payload;
            return state;
        }
    }
})

export const { setIdRoomReduxStore } = roomSlice.actions


export default roomSlice.reducer;