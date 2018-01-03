import {
    ADD_DECK,
    ADD_CARD,
    ADD_DECKS,
    SHOW_QUIZ_ANSWER,
    HIDE_QUIZ_ANSWER,
    UPDATE_QUIZ_SCORE, RESET_QUIZ, COMPLETE_QUIZ, UPDATE_QUESTIONS_COMPLETED
} from "../actions";
import { dummyData } from "../utils/helpers";
import { combineReducers } from 'redux'

function decks(state = dummyData, action) {
    switch (action.type) {
        case ADD_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck
            }
        case ADD_CARD:
            return {
                ...state,
                [action.title]: {
                    ...state[action.title],
                    cards: [
                        ...state[action.title].cards,
                        action.card
                    ]
                }
            }
        default:
            return state
    }
}

const initialQuizState = {
    questionsCompleted: 0,
    score: 0,
    showAnswer: false,
    isComplete: false
}

function quiz(state = initialQuizState, action) {
    switch (action.type) {
        case SHOW_QUIZ_ANSWER:
            return {
                ...state,
                showAnswer: true
            }
        case HIDE_QUIZ_ANSWER:
            return {
                ...state,
                showAnswer: false
            }
        case UPDATE_QUESTIONS_COMPLETED:
            return {
                ...state,
                questionsCompleted: action.numQuestionsCompleted
            }
        case UPDATE_QUIZ_SCORE:
            return {
                ...state,
                score: action.score
            }
        case COMPLETE_QUIZ:
            return {
                ...state,
                isComplete: true
            }
        case RESET_QUIZ:
            return {
                ...state,
                ...initialQuizState
            }
        default:
            return state
    }
}

export default combineReducers({
    decks,
    quiz
})