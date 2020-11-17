import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import Main from './components/Main/Main';

import { useSelector, useDispatch } from 'react-redux';

import { checkAuth } from '@features/user/userSlice';

import PrivateRoute from './components/Private/PrivateRoute';

import CircularProgress from '@material-ui/core/CircularProgress';

import './App.scss';

const App = () => {
    const dispatch = useDispatch();
    let stateUser = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return (
        <Router>
            {stateUser.status === undefined ? <CircularProgress /> : null}
            <Switch>
                <PrivateRoute component={Main} path='/user/:id' />
                {stateUser.status === true ? (
                    <Redirect
                        to={{
                            pathname: `/user/${stateUser.id}`,
                        }}
                    />
                ) : stateUser.status === false ? (
                    <Route path='/' exact component={SignIn} />
                ) : null}
            </Switch>
        </Router>
    );
};

export default App;
