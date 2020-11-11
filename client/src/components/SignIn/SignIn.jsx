import React from 'react';

import './SignIn.scss';

import TelegramIcon from '@material-ui/icons/Telegram';

import { authTelegram } from '@features/user/userSlice';

import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch();

    const clickAuthTelegram = (e) => {
        dispatch(authTelegram());
    };

    return (
        <div className='SignIn'>
            <div className='telegram-btn' onClick={clickAuthTelegram}>
                <div className='wrapper-icon'>
                    <TelegramIcon />
                </div>
                <span>SignIn with telegram</span>
            </div>
        </div>
    );
};

export default SignIn;
