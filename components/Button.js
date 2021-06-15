import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

//import colors from './../styles/colors' 

export default function Button(props){

    const {disabled, onPress, style, children} = props

    const displayName = 'Button' // static
    let opacity = disabled? 1 : 0.5

    return (
        <TouchableOpacity
            activeOpacity = {opacity}
            onPress = {onPress}
            style = {[styles.wideButton, style]}
        >
            {children}
        </TouchableOpacity>
    )

    Button.defaultProps = { disabled: false } // defaultProps?

    const styles = StyleSheet.create({
        wideButton : {
            justifyContent: 'center',
            alignItems: 'center',
            padding : 10,
            margin: 10,
            backgroundColor: colors.pink,
        },
    })
}