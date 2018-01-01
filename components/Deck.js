import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {black, white} from "../utils/colors";
import { connect } from 'react-redux'

class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title
        }
    }
    render() {
        const { title, totalCards, navigation } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}> { title }</Text>
                <Text> {totalCards} cards </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {navigation.navigate('NewCard', { title: title })
                }}>
                    <Text style={styles.btnText}>
                        Add Card
                    </Text>
                </TouchableOpacity>
                { totalCards > 0 && (
                    <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {navigation.navigate('Quiz', { title: title })
                    }}>
                    <Text style={styles.btnText}>
                        Start Quiz
                    </Text>
                </TouchableOpacity>
                )}
            </View>
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
    title: {
        fontSize: 36
    },
    btn: {
        backgroundColor: black,
        alignItems: 'center',
        width: 200,
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    btnText: {
        color: white
    }
})

function mapStateToProps(state, { navigation }) {
    const title = navigation.state.params.title
    const totalCards = state.decks[title].cards.length
    return {
        title,
        totalCards
    }
}
export default connect(mapStateToProps)(Deck)