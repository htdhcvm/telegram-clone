import React from 'react';

import './Manipulate.scss';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Manipulate = ({ openMenu }) => {
    return (
        <div className='Manipulate'>
            <div className='icon'>
                <IconButton onClick={openMenu} >
                    <MenuIcon />
                </IconButton>
            </div>
            <input placeholder='Search' />
        </div>
    );
};

export default Manipulate;
