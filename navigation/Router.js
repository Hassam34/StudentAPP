import React from 'react';
import Welcome from '../src/components/Welcome';
import Login from '../src/components/Login';
import Signout from '../src/components/Signout';
import Dashboard from '../src/components/Dashboard';
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
import {AsyncStorage} from 'react-native'
import { createAppContainer, createSwitchNavigator, DrawerContent,createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'


const TabNav = createBottomTabNavigator({
    Home: {
        screen: Dashboard,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon1  name='home' size={30} style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    },
    Calender: {
        screen: Welcome,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon  size={30} name='calendar' style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    },


    ADD: {
        screen: Welcome,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    
                        <Icon1 size={30} name='plus' style={{ color: focused ? "red" : "#363636" }} />
                
                );
            }
        }
    },
    Edit: {
        screen: Welcome,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                        <Icon1 size={30} name='form' style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    },
    Mail: {
        screen: Welcome,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                        <Icon2 size={30} name='mail' style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    }


}, {
        tabBarOptions: {
            activeTintColor: "black",
            inactiveTintColor: "white",
            showIcon: true,
            labelStyle: {
                fontSize: 10,
                textTransform: "uppercase",
                paddingTop: 10,
                fontWeight:'bold'
            },

            style: {
                backgroundColor: "gray",
                paddingVertical: 10,
                height: 60,
                marginBottom: 0,
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowColor: "#000",
                shadowOffset: { height: 0, width: 0 }
            }
        }
    }
);


const drawerNavigation = createDrawerNavigator({
    //DashBoard: { screen: Dashboard },
     TabNav: {screen:TabNav},
    SigOut: {screen:Signout},
    //Welcome,
},


)
const drawercontainer = createAppContainer(drawerNavigation)

const stackNavigation= createStackNavigator({
    Login,
    drawercontainer
},
{
    defaultNavigationOptions: ({ navigation }) => {
        console.log('hi');
        return {
            header:null
    }
}}
)

const switchNavigation = createSwitchNavigator({
    Welcome,
    TabNav,
    Login:{screen:stackNavigation}
    
});

export default createAppContainer(switchNavigation)