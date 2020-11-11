import React from "react";

import "./Main";

import {useSelector, useDispatch} from "react-redux";

import { logoutUser } from '@features/user/userSlice';


const Main = () => {
    const dispatch = useDispatch();
    

    const logout = () => {
        dispatch(logoutUser())
    }

    return (
        <div className="Main">
            Main
            <span onClick={logout}>Logout</span>
        </div>
    );
}

export default Main;