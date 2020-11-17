import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ContentItems.scss';

const ContentItems = ({ text, time, name, photo, side }) => {
    let hours = new Date(Date.parse(time)).getHours();
    let minutes = new Date(Date.parse(time)).getMinutes();
    return (
        <div className={`ContentItems ContentItems-${side}`}>
            <div className='wrapper'>
                <div className="user-data">
                    <Avatar src={photo} />
                    <h5>{name}</h5><br/>
                    <span>{text}</span>
                </div>
                <span>
                    {hours}:{minutes}
                </span>
            </div>
        </div>
    );
};

export default ContentItems;
