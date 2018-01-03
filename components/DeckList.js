import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Deck from './Deck'
import { getDecks } from "../utils/api";
import { addDecks } from "../actions";
import {black, white} from "../utils/colors";

class DeckList extends Component {
    componentDidMount() {
        getDecks().then(decks => {
            this.props.dispatch(addDecks(decks))
        })
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                {this.props.decks.map(deck => (
                    <View key={deck.title}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {navigation.navigate('Deck', { title: `${deck.title}` })}}>
                            <View>
                                <Text style={styles.header}>
                                    {deck.title}
                                </Text>
                                <Text style={styles.body}>
                                    {deck.cards.length} cards
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: black,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    header: {
        color: white,
        fontSize: 26
    },
    body: {
        color: white,
        fontSize: 12
    }
})

function mapStateToProps (state) {
    const deck_keys = Object.keys(state.decks)
    const decks = deck_keys.map(key => state.decks[key])
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList)