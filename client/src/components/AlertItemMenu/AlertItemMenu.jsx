import React from 'react';

import './AlertItemMenu.scss';

const AlertItemMenu = ({ Icon, text, exit }) => {
    return (
        <div className='AlertItemMenu' onClick={exit}>
            <Icon />
            <span>{text}</span>
        </div>
    );
};

export default AlertItemMenu;
