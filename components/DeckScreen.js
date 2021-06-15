import React, {useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Deck from './Deck'
import DeckCreation from './DeckCreation'

export default function DeckScreen({MockDecks}){

    const displayName = "DecksScreen"; // static?
    const [decks, setDecks] = useState(MockDecks)

    function _mkDeckViews(){
        if (!decks){
            return <Text>(fix it to null)</Text>
        }
        return decks.map(deck => {
            return <Deck count={deck.cards.length} key={deck.id}/> // deck={deck}
        })
    }

    return (
        <View>
            {_mkDeckViews()}
            <DeckCreation/>
        </View>
    )
}