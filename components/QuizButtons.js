import React, { Component } from 'react'
import { connect } from  'react-redux'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import {green, red, white, blue, black, purple} from '../utils/colors'

class QuizButtons extends Component {
    render() {
        return (
            <View>
                { this.props.isComplete ?
                    <TouchableOpacity
                        style={[styles.btn, { backgroundColor: blue }]}
                        onPress={this.props.resetQuiz}>
                        <Text style={styles.btnText}>
                            Redo Quiz
                        </Text>
                    </TouchableOpacity>
                    : <View>
                        <TouchableOpacity
                            onPress={this.props.handleShowAnswer}>
                            <Text style={{ color: red }}>
                                Answer
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.btn, { backgroundColor: green }]}
                            onPress={this.props.handleCorrect}>
                            <Text style={styles.btnText}>
                                Correct
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.btn, { backgroundColor: red }]}
                            onPress={this.props.handleIncorrect}>
                            <Text style={styles.btnText}>
                                Incorrect
                            </Text>
                        </TouchableOpacity>
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        marginTop: 15,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 8
    },
    btnText: {
        color: white
    }
})

function mapStateToProps(state) {
    return {
        isComplete: state.quiz.isComplete,
        completed: state.quiz.questionsCompleted
    }
}

export default connect(mapStateToProps)(QuizButtons)