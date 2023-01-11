import { ActivityIndicator, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { colors } from '../../pages/styles'

export function Loading({text}){
    return (
        <View style={styles.container}>
            <ActivityIndicator size={50} color={colors.BLUE_SECONDARY}/>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}