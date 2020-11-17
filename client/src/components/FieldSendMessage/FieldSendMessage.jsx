import React, { useEffect, useRef } from 'react';

import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

import { useSelector, useDispatch } from 'react-redux';

import './FieldSendMessage.scss';

import { addMessages } from '@features/messages/messagesSlice';

import socket from '../../connectionSocket';

const FieldSendMessage = () => {
    let dispatch = useDispatch();
    const idCurrentRoom = useSelector((state) => state.room.current);
    const refMessages = useRef('');

    const idCurrentUser = useSelector((state) => state.user.id);

    const sendMessages = () => {
        let message = refMessages.current.value;
        if (message.length > 0) {
            socket.emit('addMessages', idCurrentRoom, message, idCurrentUser);
        }
    };

    useEffect(() => {
        socket.on('addMessagesRes', ({ text, name, photo }) => {
            console.log(text, name, photo)
            dispatch(
                addMessages({
                    text: text,
                    name: name,
                    photo: photo,
                })
            );
            refMessages.current.value = '';
        });
    }, []);

    return (
        <div className='FieldSendMessage'>
            <AttachFileIcon className='clip' />
            <input ref={refMessages} placeholder='Write a message...' />
            <SentimentSatisfiedIcon className='smile' />
            <SendIcon onClick={sendMessages} className='send' />
        </div>
    );
};

export default FieldSendMessage;
