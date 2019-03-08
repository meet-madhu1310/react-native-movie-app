import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const Form = (props) => (
    <View style={styles.container}>
        <TextInput 
            style={styles.searchBox}
            placeholder = 'search'
            placeholderTextColor = '#000'
            onEndEditing={props.onSubmit}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        idth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBox: {
        width: 300,
        height: 40,
        backgroundColor: '#eee',
        marginTop: 10,
        borderRadius: 25,
        paddingLeft: 20,
    }
})

export default Form