import React, { useCallback, useEffect } from 'react';

import './Main.scss';

import ListUsers from '../ListUsers/ListUsers';

import RightPanel from '../RightPanel/RightPanel';

import { useSelector, useDispatch } from 'react-redux';

import background from '../../assets/img/background.jpg';

import { getCurrentUser } from '@features/user/userSlice';

const Main = () => {
    const dispatch = useDispatch();
    const dialogIsActive = useSelector((state) => state.user.whomDialog.length);

    useEffect(() => {
        dispatch(getCurrentUser());
    }, []);

    return (
        <div className='Main'>
            <ListUsers />
            {dialogIsActive !== 0 ? (
                <RightPanel />
            ) : (
                <img className='background' src={background} />
            )}
        </div>
    );
};

export default Main;
