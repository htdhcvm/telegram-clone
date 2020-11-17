import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ListUsers.scss';

import ItemUser from '../ItemUser/ItemUser';
import Manipulate from '../Manipulate/Manipulate';
import AlertUser from '../AlertUser/AlertUser';

import { useSelector, useDispatch } from 'react-redux';

import { getAllUsers, setWhomDialog } from '@features/user/userSlice';
import { setIdRoomReduxStore } from '@features/room/roomSlice';
import { clearMessages } from '@features/messages/messagesSlice';

import socket from '../../connectionSocket';

const ListUsers = ({ openRightPanel }) => {
    const [toggleMenuUser, setToggleMenuUser] = useState(false);
    const [idRoom, setIdRoom] = useState('');

    const dispatch = useDispatch();
    const listUsersState = useSelector((state) => state.user.listUsers);

    useEffect(() => {
        dispatch(getAllUsers());

        // socket.on('successJoinRoom', _ => {
        // });
    }, []);

    const joinToRoom = async (newIdRoom, name) => {
        await setIdRoom((prev) => {
            if (prev.length !== 0) socket.emit('unsubscribeRoom', prev);
            return newIdRoom;
        });

        await dispatch(setIdRoomReduxStore(newIdRoom));
        socket.emit('joinRoom', newIdRoom);
        dispatch(clearMessages());
        dispatch(setWhomDialog(name));
    };

    const openMenu = () => {
        setToggleMenuUser(true);
    };

    const closeMenu = () => {
        setToggleMenuUser(false);
    };

    return (
        <div className='ListUsers'>
            <Manipulate openMenu={openMenu} />
            {toggleMenuUser === true ? (
                <AlertUser closeMenu={closeMenu} />
            ) : null}
            {listUsersState.map((item) => (
                <ItemUser
                    key={uuidv4()}
                    joinToRoom={joinToRoom}
                    name={item.name}
                    photo={item.photo}
                    id={item.id}
                />
            ))}
        </div>
    );
};

export default ListUsers;
