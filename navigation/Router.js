import React from 'react';
import Welcome from '../src/components/Welcome';
import Login from '../src/components/Login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

const switchNavigation = createSwitchNavigator({
    Welcome,
    Login,
});

export default createAppContainer(switchNavigation)