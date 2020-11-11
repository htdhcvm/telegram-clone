import React from 'react';

import './Main.scss';

import ListUsers from '../ListUsers/ListUsers';
import WhomDialog from '../WhomDialog/WhomDialog';
import FieldSendMessage from '../FieldSendMessage/FieldSendMessage';
import ContentDialog from '../ContentDialog/ContentDialog';

const Main = () => {

    return (
        <div className='Main'>
            <ListUsers />
            <WhomDialog />
            <ContentDialog />
            <FieldSendMessage />
        </div>
    );
};

export default Main;
