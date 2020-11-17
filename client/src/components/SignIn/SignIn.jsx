import React from 'react';

import './SignIn.scss';

import TelegramIcon from '@material-ui/icons/Telegram';
import GitHubIcon from '@material-ui/icons/GitHub';
import RowingIcon from '@material-ui/icons/Rowing';

import { authTelegram, authGithub, authYandex } from '@features/user/userSlice';

import { useDispatch } from 'react-redux';

const SignIn = () => {
    const dispatch = useDispatch();

    const clickAuthTelegram = () => {
        dispatch(authTelegram());
    };
    const clickAuthGithub = () => {
        dispatch(authGithub());
    };

    return (
        <div className='SignIn'>
            <div className='telegram-btn' onClick={clickAuthTelegram}>
                <div className='wrapper-icon'>
                    <TelegramIcon />
                </div>
                <span>SignIn with telegram</span>
            </div>
            <div className='github-btn' onClick={clickAuthGithub}>
                <div className='wrapper-icon'>
                    <GitHubIcon />
                </div>
                <span>SignIn with github</span>
            </div>
        </div>
    );
};

export default SignIn;
