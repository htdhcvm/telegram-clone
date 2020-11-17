import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ItemUser.scss';

import { useSelector } from 'react-redux';


const ItemUser = ({ id, name, photo, change, joinToRoom }) => {
    const currentId = useSelector((state) => state.user.id);

    const joinRoom = () => {
        joinToRoom(`${currentId}-${id}`, name);
    };

    return (
        <div className='ItemUser' onClick={joinRoom} >
            <div className='icon'>
                <Avatar src={photo} />
            </div>
            <div className='info'>
                <div className='top'>
                    <h5>{name}</h5>
                    <span className='time'>11:45 AM</span>
                </div>
                <div className='bottom'>
                    <span className='text-user'>
                        {'Lorem awldmwalkdnlwan lwdal wakdlkwnal lwan lkndlwakldnlwanldk'.substring(
                            0,
                            20
                        ) + '...'}
                    </span>
                    <span className='count'>225</span>
                </div>
            </div>
        </div>
    );
};

export default ItemUser;
