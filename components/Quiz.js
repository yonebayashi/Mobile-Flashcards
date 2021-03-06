import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'
import QuizButtons from './QuizButtons'
import {
    completeQuiz,
    showQuizAnswer,
    hideQuizAnswer,
    resetQuiz,
    updateQuestionsCompleted,
    updateQuizScore
} from "../actions";
import {
    clearLocalNotification,
    setLocalNotification
} from "../utils/helpers";


class Quiz extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Quiz'
    })
    updateQuizStatus = () => {
        if (this.props.completedCards === this.props.totalCards - 1) {
            this.props.dispatch(completeQuiz())
        } else {
            this.props.dispatch(updateQuestionsCompleted(this.props.completedCards + 1))
        }
    }
    handleShowAnswer = () => {
        this.props.dispatch(showQuizAnswer())
    }
    handleCorrect = () => {
        this.props.dispatch(updateQuizScore(this.props.score + 1))
        this.updateQuizStatus()
        this.props.dispatch(hideQuizAnswer())
    }
    handleIncorrect = () => {
        this.updateQuizStatus()
        this.props.dispatch(hideQuizAnswer())
    }
    resetQuiz = () => {
        this.props.dispatch(resetQuiz())
        clearLocalNotification()
            .then(setLocalNotification)
    }
    render() {
        const { completedCards, totalCards } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {completedCards}/{totalCards}
                </Text>
                <View style={styles.quizContainer}>
                    <QuizCard navigation={this.props.navigation}/>
                    <QuizButtons
                        handleCorrect={this.handleCorrect}
                        handleIncorrect={this.handleIncorrect}
                        handleShowAnswer={this.handleShowAnswer}
                        resetQuiz={this.resetQuiz}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 400
    },
    quizContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text: {
        fontSize: 18
    }
})

function mapStateToProps(state, { navigation }) {
    const title = navigation.state.params.title
    const deck = state.decks[title]
    const quiz = state.quiz
    return {
        title,
        completedCards: quiz.questionsCompleted,
        totalCards: deck.cards.length,
        score: quiz.score
    }
}

export default connect(mapStateToProps)(Quiz)