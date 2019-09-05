import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList, Image,Dimensions
} from 'react-native';
import { Fonts } from '../utilts/Fonts';
import { Header } from './common'
import StudentData from '../Students.json'



const HEIGHT = Math.round(Dimensions.get('window').height);
class DashBoard extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        }
    }
    renderRow({ item }) {
        console.log('data', item)
        return (<View style={{ flexDirection: 'row' }} >
            <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', borderColor: 'black', width: 200 }}>
                <Image source={{ uri: item.img }} style={{ marginBottom: 10, marginTop: 10, marginLeft: 10, height: 40, width: 40, borderRadius: 50 }} />
                <Text style={{ marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProRegular }}>
                    {item.name}
                </Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', borderColor: 'black', width: 250 }}>
                <Text style={{ marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProRegular }}>
                    Schedule
                    </Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', borderColor: 'black', width: 150 }}>
                <Text style={{ marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProRegular }}>
                    DOB
                    </Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', borderColor: 'black', width: 150 }}>
                <Text style={{ marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProRegular }}>
                    Enrolled
                    </Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', justifyContent: 'center', borderColor: 'black', width: 150 }}>
                <Text style={{ marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProRegular }}>
                    Alergies
                    </Text>
            </View>
            <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', borderColor: 'black', width: 120 }}>
                <Text style={{ marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProRegular }}>
                    actions
                    </Text>
            </View>
        </View>)
    }

    render() {
        //console.log('data: ', StudentData)
        return (
            <View style={{ flex: 1, backgroundColor: '#E0EEF5' }}>
                <Header headerText="INFANT" />
                <View style={styles.studentView}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#8B63E6' }} >
                        <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', alignItems: "center", borderColor: 'black', width: 200 }}>
                            <Text style={{ fontSize:20, color: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProBold}}>
                                STUDENT
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', alignItems: "center", borderColor: 'black', width: 250 }}>
                            <Text style={{ fontSize:20,color: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProBold}}>
                                SCHEDULE
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', alignItems: "center", borderColor: 'black', width: 150 }}>
                            <Text style={{ fontSize:20,color: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProBold}}>
                                DOB
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', alignItems: "center", borderColor: 'black', width: 150 }}>
                            <Text style={{ fontSize:20,color: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProBold}}>
                                ENROLLED
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', alignItems: "center", borderColor: 'black', width: 150 }}>
                            <Text style={{ fontSize:20,color: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProBold}}>
                                ALLERGIES
                    </Text>
                        </View>
                        <View style={{ flexDirection: 'row', borderWidth: .5, justifyContent: 'center', alignItems: "center", borderColor: 'black', width: 120 }}>
                            <Text style={{ fontSize:20,color: 'white', marginBottom: 10, marginTop: 20, marginLeft: 10, fontFamily: Fonts.BurlingameProBold}}>
                                ACTION
                    </Text>
                        </View>
                    </View>
                    <FlatList
                        data={StudentData}
                        renderItem={this.renderRow}
                    />


                </View>
            </View>
        );
    }
}

export default DashBoard

const styles = StyleSheet.create({
    studentView: {
        marginTop: 90,
        alignSelf:'center',
        height:HEIGHT-300,
        borderColor: 'black',
        borderWidth: 1,borderRadius:2
        //backgroundColor:'red'
    },
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
        // width: WIDTH - 55,
        height: 40,
        fontSize: 15,
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: 'black',
        borderColor: 'gray',
        //shadowOpacity: 2,
        borderRadius: 3,
        borderWidth: 0.3,
        marginHorizontal: 25
    },
})