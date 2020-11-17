import { configureStore } from "@reduxjs/toolkit";

import userReduser from "../features/user/userSlice";
import messagesSlice from "../features/messages/messagesSlice";
import roomSlice from "../features/room/roomSlice";





export default configureStore({
    reducer : ({
        user : userReduser,
        messages : messagesSlice,
        room : roomSlice
    })
})