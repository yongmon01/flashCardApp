import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import Deck from './../../data/Deck'
//import Button
//import LabeledInput
//import NormalText
//import Colors

export default function NewCard(){

    const [front, setFront] = useState('')
    const [back, setBack] = useState('')

    _handleFront = text => {
        setFront(text)
    }
    _handleBack = text => {
        setBack(text)
    }
    _createCard = () => {
        console.warn('Not implemented')
    }
    _reviewDeck = () => {
        console.warn('Not implemented')
    }
    _doneCreating = () => {
        console.warn('Not implemented')
    }

    return (
        <View>
            <LabeledInput
                label='Front'
                clearOnSubmit ={false}
                onEntry={_handleFront}
                onChange={_handleFront}
            />
            <LabeledInput
                label='Back'
                clearOnSubmit ={false}
                onEntry={_handleBack}
                onChange={_handleBack}
            />
            <Button style={styles.createButton} onPress={_createCard}>
                <NormalText>Create Card</NormalText>
            </Button>

            <View style={styles.buttonRow}>
                <Button style={styles.secondaryButton} onPress={_doneCreating}>
                    <NormalText>Done</NormalText>
                </Button>

                <Button style={styles.secondaryButton} onPress={_reviewDeck}>
                    <NormalText>Review Deck</NormalText>
                </Button>
            </View>
        </View>
    )

    const styles = StyleSheet.create({
        createButton : {
            backgroundColor: colors.green
        },
        secondaryButton : {
            backgroundColor: colors.blue
        },
        buttonRow: {
            flexDirection: 'row'
        }
    })
}