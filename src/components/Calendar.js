import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,

} from 'react-native';
import { Fonts } from '../utilts/Fonts';
import { Header } from './common'


const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class Calendar extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#E0EEF5' }}>
                <Header headerText="INFANT" />
                <Text>
                    Calendar
                    </Text>
            </View>
        );
    }
}

export default Calendar

const styles = StyleSheet.create({
    maincontainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        //height:10,
        // backgroundColor:'yellow',
        // marginBottom:300
    },
    bottomButton: {
        //backgroundColor:'yellow',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        alignItems: 'center'
    },
    viewStyle: {

        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.9,
        elevation: 2,
        position: 'relative',
        // borderBottomWidth:3,
        // borderColor:'11111',
        // borderWidth:2,

    },
    textStyle: {
        fontFamily: Fonts.BurlingameProRegular,
        fontSize: 20
    },
    inputStyle: {
        marginTop: 10,
        paddingLeft: 10,
        width: WIDTH - 55,
        height: 60,
        fontSize: 30,
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: 'black',
        borderColor: 'gray',
        //shadowOpacity: 2,
        borderRadius: 3,
        borderWidth: 0.3,
        marginHorizontal: 25
    },
})