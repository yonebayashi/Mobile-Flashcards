import React, { Component } from 'react'
import {View, Text, Button, StyleSheet, Animated} from 'react-native'
import { connect } from 'react-redux'
import {white, black, red} from "../utils/colors";

class QuizCard extends Component {
    render() {
        const { cards, totalCards, score, completed, isComplete, showAnswer } = this.props
        return (
            <View>
                { !(isComplete) ? (
                    <View>
                        <Text style={styles.text}>
                            {cards[completed].question}
                        </Text>
                    </View>
                ) :
                    <View>
                        <Text style={styles.text}>
                            Your score: {score/totalCards * 100}%
                        </Text>
                    </View>
                }
                { showAnswer && (
                    <View>
                        <Text style={styles.text}>
                            {cards[completed].answer}
                        </Text>
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
    }
})

function mapStateToProps(state, { navigation }) {
    const title = navigation.state.params.title
    const deck = state.decks[title]
    return {
        cards: deck.cards,
        totalCards: deck.cards.length,
        score: state.quiz.score,
        completed: state.quiz.questionsCompleted,
        isComplete: state.quiz.isComplete,
        showAnswer: state.quiz.showAnswer
    }
}

export default connect(mapStateToProps)(QuizCard)