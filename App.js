import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Entypo, EvilIcons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { white, black, purple} from "./utils/colors";
import Navigator from "./components/Navigator";
import { setDummyData } from "./utils/helpers";
import { setLocalNotification } from "./utils/helpers";

export default class App extends Component {
    componentDidMount() {
        setDummyData()
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Navigator/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: black,
        fontSize: 16,
    }
});

