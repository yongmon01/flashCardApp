import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

//import {fonts} from './../styles/fonts'
//import colors from './../styles/colors'

export default function Input(props){

    const {style, onEntry, clearOnSubmit, onChange} = props
    const [text, setText] = useState('')
    // const displayName = 'HeadingText'

    _create = () => {
        onEntry(text)
        setText('')
    }

    _onSubmit = ev => {
        onEntry(ev.nativeEvent.text) // nativeEvent?
        if (!!clearOnSubmit){
            setText('')
        }
    }

    _onChange = text => {
        setText(text)
        // onChange onChange ??
        if (onChange) {
            onChange(text)
        }
    }

    return (
        // fonts.normal?
        <TextInput
            style = {[
                styles.nameField,
                styles.wideButton,
                fonts.normal,
                style
            ]}
            ref='newDeckInput'
            multiline = {false}
            autoCorrect = {false}
            onChangeText = {_onChange}
            onSubmitEditing = {_onSubmit}
        />
    )
    
    const styles = StyleSheet.create({
        nameFiled: {
            fontSize:  width / scalingFactors.big 
        },
        wideButton : {
            justifyContent: 'center',
            padding: 10,
            margin: 10
        }
    })
}