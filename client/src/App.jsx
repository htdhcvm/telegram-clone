import React, { useEffect } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
} from 'react-router-dom';

import SignIn from './components/SignIn/SignIn';
import Main from './components/Main/Main';

import { useSelector, useDispatch } from 'react-redux';

import { checkAuth } from '@features/user/userSlice';

import PrivateRoute from './components/Private/PrivateRoute';

import './App.scss';

const App = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let stateUser = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    console.log(stateUser);

    return (
        // (state.user.status !== true) ? <SignIn /> : <Main/>
        <Router>
            <Switch>
                <PrivateRoute component={Main} path='/user/:id' />
                {stateUser.status === true ? (
                    <Redirect
                        to={{
                            pathname: `/user/${stateUser.id}`,
                        }}
                    />
                ) : null}
                <Route path='/' exact component={SignIn} />
            </Switch>
        </Router>
    );
};

export default App;
