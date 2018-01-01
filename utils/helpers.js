import { DECKS_STORAGE_KEY } from './api'
import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

export const dummyData = {
    React: {
        title: 'React',
        cards: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        cards: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
};

export function setDummyData() {
    AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => {
        if (!res) {
            AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
        }
    })
}

// Set up push notifications

const NOTIFICATION_KEY = 'UdaciCards:notifications';

export function clearLocalNotification () {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification () {
    return {
        title: 'Flashcard Review',
        body: "👋 You haven't reviewed your flashcards today",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    };
}

export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let notificationTime = new Date();
                            notificationTime.setDate(notificationTime.getDate() + 1)
                            notificationTime.setHours(20)
                            notificationTime.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: notificationTime,
                                    repeat: 'day'
                                }
                            )

                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}