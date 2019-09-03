import React, {Component} from 'react';
import {Text,View} from 'react-native'
import AppContaier from '../navigation/Router'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'
class App extends Component{

    render(){
        console.disableYellowBox = true;
        const store = createStore(reducers)
                return(
                    <Provider store={store}>
                        <AppContaier/>
                    </Provider>
        );
    }
}

export default App;