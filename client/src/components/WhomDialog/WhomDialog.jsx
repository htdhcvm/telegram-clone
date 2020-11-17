import React, {useEffect} from 'react';

import './WhomDialog.scss';

import { useSelector } from 'react-redux';

const WhomDialog = () => {
    const nameWhomDialog = useSelector((state) => state.user.whomDialog);

    useEffect(() => {
        console.log('Render WhomDialog');
    });

    return (
        <div className='WhomDialog'>
            <h4>{nameWhomDialog}</h4>
        </div>
    );
};

export default WhomDialog;
