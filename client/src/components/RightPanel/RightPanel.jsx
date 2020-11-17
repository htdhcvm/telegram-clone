import React, { useEffect } from 'react';
import WhomDialog from '../WhomDialog/WhomDialog';
import FieldSendMessage from '../FieldSendMessage/FieldSendMessage';
import ContentDialog from '../ContentDialog/ContentDialog';

import './RightPanel.scss';

const RightPanel = () => {
    useEffect(() => {
        console.log('Render RightPanel');
    });

    return (
        <div className='RightPanel'>
            <WhomDialog />
            <ContentDialog />
            <FieldSendMessage />
        </div>
    );
};

export default RightPanel;
