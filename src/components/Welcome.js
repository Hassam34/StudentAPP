import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, AsyncStorage, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';
import { background } from '../../constants/Image'
import { Fonts } from '../utilts/Fonts';
import Swiper from 'react-native-swiper';
import { Spinner } from './common'
import { verticalScale, scale } from '../components/common/Scaling';
import { thisTypeAnnotation } from '@babel/types';
// import { MAIN_WHITE } from '../theme/color';
// import AutoHeightImage from 'react-native-auto-height-image';


const BackgroundImages = [
    {
        title: 'Secured, Forever',
        img: background.welcome
    },
    {
        title: 'Secured, Forever',
        img: background.encrypted
    },
    {
        title: 'Secured, Forever',
        img: background.security
    },
]




class Welcome extends Component {
    state = { spinnerShow: null }
    checkLogedIn = async () => {
        const isLogedIn = await AsyncStorage.getItem('isLogedIn')
        console.log("isLogedIn: ", isLogedIn)
        if (isLogedIn == '1') {
            this.setState({ spinnerShow: false })
            this.props.navigation.navigate('TabNav')
        }
        else {
            this.setState({ spinnerShow: false })
            this.props.navigation.navigate('Login')
        }

    }

    createBannersSlider() {
        return (
            <View style={{ flex: 1, marginTop: verticalScale(4) }}>
                <Swiper style={{ height: verticalScale(144), }}
                    autoplay={true}
                    dot={<View style={{
                        backgroundColor: 'white',
                        width: scale(5),
                        height: verticalScale(5),
                        borderRadius: verticalScale(4),
                        marginLeft: scale(2),
                        marginRight: scale(2),

                    }} />}
                    activeDot={
                        <View style={{
                            backgroundColor: '#8B63E6',
                            width: scale(7),
                            height: verticalScale(8),
                            borderRadius: verticalScale(4),
                            marginLeft: scale(2),
                            marginRight: scale(2)
                        }} />

                    }
                    paginationStyle={{
                        alignSelf: "center",
                        marginBottom: verticalScale(4),
                    }}
                >
                    {BackgroundImages.map((item, index) => (
                        <View key={`img-${index}`}>
                            <Image source={item.img}
                                resizeMode='center'
                                style={{ marginTop: 10, width: 350, height: 350, alignSelf: 'center' }} />
                        </View>
                    ))}
                </Swiper>
            </View>
        );
    }
    renderSpinner() {
        if (this.state.spinnerShow) {
            console.log('Hi I am spinner')
            return <Spinner color={'blue'} size={'large'} />
        }
    }

    renderDots() {
        return (
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: 'gray', height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
                <View style={{ backgroundColor: '#D1D1D1', height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
                <View style={{ backgroundColor: '#D1D1D1', height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#E0EEF5' }}>
                <View style={styles.maincontainer}>
                    <Text style={{ flex: 0.2, marginTop: 90, fontSize: 70, fontFamily: Fonts.BurlingameProBold }}>
                        Student App
                    </Text>
                    {this.createBannersSlider()}
                </View>
                <View style={styles.bottomButton}>
                    <View style={{ marginBottom: 10 }} >
                        <Text style={{ fontSize: 20, fontFamily: Fonts.BurlingameProSemiBold }}>
                            Manage Your Students
                    </Text>
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 40 }}>

                        <Text style={{ alignItems: 'center', fontSize: 11, fontFamily: Fonts.BurlingameProRegular }}>
                            Easy use with onse-click authentication
                    </Text>
                    </View>
                    <TouchableOpacity onPress={() => (this.checkLogedIn(), this.setState({ spinnerShow: true }))} >
                        <View style={{ borderRadius: 45, width: 260, height: 90, justifyContent: 'center', backgroundColor: '#8B63E6', alignItems: 'center' }}>
                            <Text style={{ fontSize: 38, color: 'white', fontFamily: Fonts.BurlingameProSemiBold }}>Get Started</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{height:20,marginTop:10}}>
                    {this.renderSpinner()}
                    </View>
                   
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 3,
        alignItems: 'center',
        //sjustifyContent: 'center',
        //height:10,
        // backgroundColor:'yellow',
        // marginBottom:300
    },
    bottomButton: {
        //backgroundColor:'yellow',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 30,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
})
export default Welcome;