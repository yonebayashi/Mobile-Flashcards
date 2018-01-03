import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import { black } from "../utils/colors";
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/api";
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'

class NewDeck extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add Deck'
    })
    state = {
        title: ''
    }
    submit = () => {
        const deckTitle = this.state.title
        saveDeckTitle(deckTitle)
        this.props.dispatch(addDeck({
            [deckTitle]: {
                title: deckTitle,
                cards: []
            }
        }))
        this.props.navigation.dispatch(NavigationActions.reset(
            {
                index: 1,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                    NavigationActions.navigate({ routeName: 'Deck', params: { title: deckTitle } })
                ]
            }));
        this.setState({ title: '' })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.title}
                    placeholder='Deck Title'
                    onChangeText={(text) => this.setState({ title: text })}
                />
                <Button
                    title='Submit'
                    onPress={this.submit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        width: 200,
        fontSize: 21
    },
    input: {
        width: 200,
        height: 40,
        marginTop: 20,
        borderColor: black,
        borderWidth: 1,
        borderRadius: 4,
        color: black
    }
})
export default connect()(NewDeck)