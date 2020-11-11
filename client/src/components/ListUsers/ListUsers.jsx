import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './ListUsers.scss';

import ItemUser from '../ItemUser/ItemUser';
import Manipulate from '../Manipulate/Manipulate';
import AlertUser from '../AlertUser/AlertUser';

import { useSelector, useDispatch } from 'react-redux';

import { getAllUsers } from '@features/user/userSlice';

const ListUsers = () => {
    const [toggleMenuUser, setToggleMenuUser] = useState(false);

    const dispatch = useDispatch();

    const listUsersState = useSelector((state) => state.user.listUsers);

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    const toggleMenu = () => {
        setToggleMenuUser(true);
    };

    const closeMenu = () => {
        setToggleMenuUser(false);
    };

    return (
        <div className='ListUsers'>
            <Manipulate toggleMenu={toggleMenu} />
            {toggleMenuUser === true ? <AlertUser closeMenu={closeMenu}/> : null}
            {listUsersState.map((item) => (
                <ItemUser key={uuidv4()} name={item.name} photo={item.photo} />
            ))}
        </div>
    );
};

export default ListUsers;
