import React, { useEffect } from 'react';

import './ContentDialog.scss';

import ContentItems from '../ContentItems/ContentItems';

import { v4 as uuidv4 } from 'uuid';

import { useSelector, useDispatch } from 'react-redux';

import socket from '../../connectionSocket';

import { setMessages } from '@features/messages/messagesSlice';

const ContentDialog = () => {
    const dispatch = useDispatch();
    const listMessages = useSelector((state) => state.messages.listMessages);
    const idCurrentUser = useSelector((state) => state.user.id);
    const idCurrentRoom = useSelector((state) => state.room.current);

    useEffect(() => {
        socket.on('setAllMessages', (res) => {
            // console.log(res);
            dispatch(setMessages(res));
        });
    }, []);

    useEffect(() => {
        console.log('Render ContentDialog');
    });

    useEffect(() => {
        socket.emit('getAllMessages', idCurrentRoom, idCurrentUser);
    }, [idCurrentRoom, idCurrentUser]);
    return (
        <div className='ContentDialog'>
            {listMessages.length !== 0 ? (
                listMessages.map((item) => (
                    <ContentItems
                        key={uuidv4()}
                        text={item.text}
                        time={item.time}
                        name={item.name}
                        photo={item.photo}
                        side={item.side}
                    />
                ))
            ) : (
                <span>Empty</span>
            )}
        </div>
    );
};

export default ContentDialog;
