import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Classes  from './Toolbar.css';

const toolbar = (props) => {
    return(
        <nav className={Classes.Toolbar}>
            <NavigationItems/>
        </nav>
    );
}

export default toolbar;