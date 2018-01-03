import React, { Component } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Button
} from 'react-native'
import { addCardToDeck } from "../utils/api";
import { addCard } from "../actions";
import { white, black } from '../utils/colors'
import { connect } from 'react-redux'

class AddCard extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Add Card'
    })
    state = {
        question: '',
        answer: ''
    }
    submit = () => {
        const { title } = this.props.navigation.state.params
        const card = this.state

        addCardToDeck(title,card)
        this.props.dispatch(addCard(title,card))

        this.setState({
            question: '',
            answer: ''
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    value={this.state.question}
                    placeholder='Front'
                    multiline={true}
                    onChangeText={(text) => this.setState({ question: text })}
                />
                <TextInput
                    style={styles.textInput}
                    value={this.state.answer}
                    placeholder='Back'
                    multiline={true}
                    onChangeText={(text) => this.setState({ answer: text })}
                />
                <Button
                    title='Add'
                    style={styles.btn}
                    onPress={this.submit}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: white,
        width: 250,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: black,
        fontSize: 16,
        color: black,
    },
    btn: {
        backgroundColor: white,
        padding: 5,
        paddingLeft: 5,
        paddingRight: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnText: {
        color: black
    }
})

export default connect()(AddCard)