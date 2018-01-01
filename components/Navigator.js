import React, { Component } from 'react'
import { StackNavigator } from "react-navigation";
import { white, black, purple} from "../utils/colors";
import { View, Text, StyleSheet} from "react-native";
import Home from './Home'
import AddCard from './AddCard'
import NewDeck from './NewDeck'
import Deck from './Deck'
import Quiz from './Quiz'

const Stack = StackNavigator({
    Home: {
        screen: Home,
    },
    NewDeck: {
       screen: NewDeck,
    },
    Deck: {
        screen: Deck
    },
    NewCard: {
        screen: AddCard,
    },
    Quiz: {
        screen: Quiz
    }
})

export default class Navigator extends Component {
    render() {
        return (
            <Stack style={styles.container}/>
        )
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

