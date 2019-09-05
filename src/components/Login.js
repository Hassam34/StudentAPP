import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    ToastAndroid,AsyncStorage
} from 'react-native';
import { Fonts } from '../utilts/Fonts';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux'
const WIDTH = Math.round(Dimensions.get('window').width); a = 2;

class Login extends Component {
    constructor(){
        super();
    }
    static navigationOptions=({navigation})=>{
        return{
            header:null
        }
    }
    onEmailChanged(text) {
        this.props.emailChanged(text)
    }
    onPasswordChanged(text) {
        this.props.passwordChanged(text)
    }
    onLoginClick=async()=> {
        const { email, password } = this.props;
        if (email == 'Hassam' && password == '123') {
            await AsyncStorage.setItem('isLogedIn', '1')
            this.props.navigation.navigate('TabNav')
        }
        else {
            alert('LOGIN FAILED')        }
    }




    render() {
        //console.log('email: ', this.props.email)
        return (
            <View style={{ flex: 1, backgroundColor: '#E0EEF5' }}>
                <KeyboardAvoidingView behavior='position'>
                    <Image source={require('../../assets/images/welcome.png')}
                    resizeMode='contain'
                        style={{ marginTop: 20, width: 350, height: 440, alignSelf: 'center' }} 
                        
                        />


                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            placeholder='Phone number, email address or username'
                            placeholderTextColor={'gray'}
                            onChangeText={this.onEmailChanged.bind(this)}
                            underlineColorAndroid='transparent'
                            style={styles.inputStyle}
                            value={this.props.email} 
                            />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <TextInput
                            secureTextEntry
                            placeholder='Password'
                            placeholderTextColor={'gray'}
                            underlineColorAndroid='transparent'
                            onChangeText={this.onPasswordChanged.bind(this)}
                            style={styles.inputStyle}
                            value={this.props.password} />
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <TouchableOpacity onPress={this.onLoginClick.bind(this)} >
                        <View style={{ borderRadius: 20, width: 260, height: 70, justifyContent: 'center', backgroundColor: '#8B63E6', alignItems: 'center' }}>
                            <Text style={{ fontSize: 38, color: 'white', fontFamily:Fonts.BurlingameProSemiBold }}>LOGIN</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    }
}
export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);

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