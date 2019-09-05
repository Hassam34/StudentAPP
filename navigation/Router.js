import React from 'react';
import Welcome from '../src/components/Welcome';
import Login from '../src/components/Login';
import Signout from '../src/components/Signout';
import Dashboard from '../src/components/Dashboard';
import Calendar from '../src/components/Calendar';
import Add from '../src/components/Add';
import Edit from '../src/components/Edit';
import Mail from '../src/components/Mail';
import Icon from 'react-native-vector-icons/EvilIcons'
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
// import {AsyncStorage,ActivityIndicator,StatusBar} from 'react-native'
import { createAppContainer, createSwitchNavigator,createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation'


const TabNav = createBottomTabNavigator({
    Home: {
        screen: Dashboard,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon1  name='home' size={50} style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    },
    Calendar: {
        screen: Calendar,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    <Icon  size={50} name='calendar' style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    },


    Add: {
        screen: Add,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                    
                        <Icon1 size={50} name='pluscircleo' style={{ color: focused ? "red" : "#363636" }} />
                
                );
            }
        }
    },
    Edit: {
        screen: Edit,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                        <Icon1 size={50} name='form' style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    },
    Mail: {
        screen: Mail,
        navigationOptions: {
            tabBarIcon: ({ focused }) => {
                return (
                        <Icon2 size={50} name='mail' style={{ color: focused ? "red" : "#363636" }} />
                );
            }
        }
    }


}, {
        tabBarOptions: {
            activeTintColor: "black",
            inactiveTintColor: "white",
            showIcon: true,
            showLabel:false,
            // labelStyle: {
            //     fontSize: 10,
            //     textTransform: "uppercase",
            //     paddingTop: 5,
            //     fontWeight:'bold'
            // },

            style: {
                backgroundColor: '#6DBAD7  ',
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