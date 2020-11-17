import React, { useEffect } from 'react';

import './AlertUser.scss';

import Avatar from '@material-ui/core/Avatar';

import { useSelector, useDispatch } from 'react-redux';

import { getCurrentUser, logoutUser } from '@features/user/userSlice';

import CloseIcon from '@material-ui/icons/Close';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import AlertItemMenu from '../AlertItemMenu/AlertItemMenu';

const AlertUser = ({ closeMenu }) => {
    let currentUser = useSelector((state) => {
        return {
            name: state.user.name,
            photo: state.user.photo,
        };
    });
    const dispatch = useDispatch();

    


    const exit = () => {
        dispatch(logoutUser());
    }

    return (
        <div className='AlertUser'>
            <div className='header'>
                <Avatar src={currentUser.photo} />
                <h4>{currentUser.name}</h4>
                <CloseIcon onClick={closeMenu} />
            </div>
            <div className='items'>
                <AlertItemMenu Icon={SettingsIcon} text='Settings' />
                <AlertItemMenu Icon={ExitToAppIcon} text='Exit' exit={exit}/>
            </div>

            <div className='footer'>
                <span>Telegram clone</span>
                <br />
                <span>Version 1.0</span>
            </div>
        </div>
    );
};

export default AlertUser;
