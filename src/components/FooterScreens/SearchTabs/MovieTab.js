import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

import Form from './Form'


const MovieTab = (props) => (
    <View style={styles.container}>
        <Form 
            onSubmit={props.fetchData}
        />
        <Text>{props.title}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default MovieTab