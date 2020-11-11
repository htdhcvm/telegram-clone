import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { useSelector } from 'react-redux';

const PrivateRoute = ({
    component: Component,
    user : userData,
    ...rest
}) => {
    let state = useSelector(state => state.user)
    // console    
    console.log(state);
    return (
        <Route
            {...rest}
            render={(props) => {
                return state.status === true ? (<Component/>) : (<Redirect to="/"/>);
            }}
        />
    );
};

export default PrivateRoute;
