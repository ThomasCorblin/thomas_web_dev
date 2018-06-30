import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return(
        <ul>
            <NavigationItem link="/">Home</NavigationItem>
            <NavigationItem link="/test">Test</NavigationItem>
        </ul>
    );
}

export default navigationItems;