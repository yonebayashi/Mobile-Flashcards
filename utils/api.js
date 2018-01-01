import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY='udacicards:deck'

export function getDecks() {
    // return all decks along with their titles, questions, and answers
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => {
            console.log(JSON.parse(res))
            return JSON.parse(res)
        })
}

export function getDeck(id) {
    // take in a single id argument and return the deck associated with that id.
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => {
            const decks = JSON.parse(res)
            return decks[id]
        })
}

export function saveDeckTitle(title) {
    // take in a single title argument and add it to the decks.
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            cards: []
        }
    }))
}

export function addCardToDeck(title,card) {
    // take in two arguments, title and card
    // add the card to the list of questions for the deck with the associated title.
    AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((res) => {
            const decks = JSON.parse(res)
            decks[title].cards.push(card)

            // Update DB
            const cards = decks[title].cards
            return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
                [title]: {
                    title: title,
                    cards: cards
                }
            }))
        })
}