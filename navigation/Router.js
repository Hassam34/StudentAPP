import React from 'react';
import Welcome from '../src/components/Welcome';
import Login from '../src/components/Login';
import DashBoard from '../src/components/Dashboard';

import { createAppContainer, createSwitchNavigator } from 'react-navigation'

const switchNavigation = createSwitchNavigator({
    Welcome,
    Login,
     DashBoard,
});

export default createAppContainer(switchNavigation)