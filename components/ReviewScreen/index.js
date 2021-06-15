import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

//import ViewCard from './ViewCard'
//import {MockReviews} from './../../data/Mocks'
//import {mkReviewSummary} from './ReviewSummary'
//import colors from './../../styles/colors' 

export default function ReviewScreen({MockReviews}){

    const displayName = 'ReviewScreen' // static

    const [numReviewed, setNumReviewed] = useState(0)
    const [numCorrect, setNumCorrect] = useState(0)
    const [currentReview, setCurrentReview] = useState(0)
    const [reviews, setReviews] = useState(MockReviews) // reviews: MockReviews

    onReview = correct => {
        if (correct) {
            setNumCorrect(numCorrect + 1)
        }
        setNumReviewed(numReviewed + 1)
    }

    _nextReview = () => {
        setCurrentReview(currentReview + 1)
    }

    _quitReviewing = () => {
        console.warn('Not implemented')
    }

    function _contents(){
        if (!reviews || reviews.length === 0) // !reviews || reviews.length === 0 case?
            return null
        if (currentReview < reviews.length){
            return (
                <ViewCard
                    onReview = {onReview}
                    continue = {_nextReview}
                    quit = {_quitReviewing}
                    {...reviews[currentReview]}
                />               
            )
        }
        else {
            let percent = numCorrect / numReviewed
            return mkReviewSummary(percent, _quitReviewing)
        }
    }

    return (
        <View style={styles.container}>
          {_contents()}
        </View>
    )

    const styles = StyleSheet.create({
        container : {
            backgroundColor: colors.blue,
            flex: 1,
            paddingTop: 24
        },
    })
}