import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

//import {fonts, scalingFactors} from './../styles/fonts'
//import Dimensions from 'Dimensions'
//let {width} = Dimensions.get('window')

export default function HeadingText(props){

    const {style, children} = props

    const displayName = 'HeadingText'

    return (
        // fonts.normal?
        <Text style={[style, fonts.big, scaled.big]}>
            {children}
        </Text> 
    )
    
    // var?
    var scaled = StyleSheet.create({
        big: {
            fontSize:  width / scalingFactors.big 
        }
    })
}