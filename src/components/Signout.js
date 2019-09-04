import React from 'react';
import {AsyncStorage,View,Text} from 'react-native'
export default class Signout extends React.Component{
    componentDidMount(){
        AsyncStorage.clear();
        alert('You are signout')
        //console.log('hahah', this.props)
        this.props.navigation.navigate('Login')
    }
    render(){
        return null
    }
}