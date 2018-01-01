import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import DeckList from './DeckList'
import { Foundation } from '@expo/vector-icons';
import {black, white} from "../utils/colors";

const newDeckButton = (navigation) => {
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('NewDeck')}}>
            <Foundation
                name='plus'
                size={28}
                color={black}
                style={{marginRight: 10}}
            />
        </TouchableOpacity>
    )
}
class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Decks',
            headerRight: newDeckButton(navigation)
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <DeckList navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default Home