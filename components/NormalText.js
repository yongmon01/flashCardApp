import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

//import {fonts, scalingFactors} from './../styles/fonts'
//import Dimensions from 'Dimensions'
//let {width} = Dimensions.get('window')

export default function NormalText(props){

    const {style, children} = props

    const displayName = 'NormalText'

    return (
        <Text style={[style, fonts.normal, scaled.normal]}>
            {children}
        </Text> 
    )

    const scaled = StyleSheet.create({
        normal: {
            fontSize:  width * 1.0 / scalingFactors.normal 
        }
    })
}