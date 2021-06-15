import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import Input from './Input'
import NormalText from './NormalText'

export default function LabeledInput(props){

    const {label, onEntry, onChange, clearOnSubmit, inputStyle} = props

    return (
        <View style={styles.wrapper}>
            <NormalText style={styles.label}>
                {label}
            </NormalText>
            <Input
                onEntry = {onEntry}
                onChange = {onChange}
                clearOnSubmit = {clearOnSubmit}
                style = {inputStyle}
            />
        </View>
    )
    
    const styles = StyleSheet.create({
        wrapper : {
            padding : 5
        },
        label : {
            paddingLeft : 10
        }
    })
}