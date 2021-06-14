import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Heading from './Header'
import NewCardScreen from './NewCardScreen'
import DeckScreen from './DeckScreen'
import ReviewScreen from './ReviewScreen'

export default function FlashCards(){

    function _renderScene(){
        //return <ReviewScreen/>
        // return <NewCardScene/>
        return <DeckScreen/>
    }

    return (
        <View style={styles.container}>
            <Heading/>
            {_renderScene()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    }
})