export const ADD_DECKS = 'ADD_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function addDecks(decks) {
    return {
        type: 'ADD_DECKS',
        decks
    }
}

export function addDeck(deck) {
    return {
        type: 'ADD_DECK',
        deck
    }
}

export function addCard(title, card) {
    return {
        type: 'ADD_CARD',
        title,
        card
    }
}

// Quiz

export const SHOW_QUIZ_ANSWER = 'SHOW_QUIZ_ANSWER'
export const HIDE_QUIZ_ANSWER = 'HIDE_QUIZ_ANSWER'
export const UPDATE_QUIZ_SCORE = 'UPDATE_QUIZ_SCORE'
export const UPDATE_QUESTIONS_COMPLETED = 'UPDATE_QUESTIONS_COMPLETED'
export const RESET_QUIZ = 'RESET_QUIZ'
export const COMPLETE_QUIZ = 'COMPLETE_QUIZ'

export function showQuizAnswer() {
    return {
        type: 'SHOW_QUIZ_ANSWER'
    }
}

export function hideQuizAnswer() {
    return {
        type: 'HIDE_QUIZ_ANSWER'
    }
}

export function updateQuizScore(score) {
    return {
        type: 'UPDATE_QUIZ_SCORE',
        score
    }
}

export function updateQuestionsCompleted(numQuestionsCompleted) {
    return {
        type: 'UPDATE_QUESTIONS_COMPLETED',
        numQuestionsCompleted
    }
}

export function completeQuiz() {
    return {
        type: 'COMPLETE_QUIZ'
    }
}

export function resetQuiz() {
    return {
        type: 'RESET_QUIZ'
    }
}