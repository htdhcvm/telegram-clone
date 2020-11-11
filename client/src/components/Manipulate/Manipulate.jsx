import React from 'react';

import "./Manipulate.scss";

import MenuIcon from '@material-ui/icons/Menu';

const Manipulate = ({toggleMenu}) => {

    return(
        <div className="Manipulate">
            <div className="icon">
                <MenuIcon onClick={toggleMenu} />
            </div>
            <input placeholder="Search"/>
        </div>
    )
}

export default Manipulate;
