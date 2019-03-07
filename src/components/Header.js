import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Header = () => (

    <View style={styles.header}>
        <Text style={styles.titleText}>React Native Moview App</Text>
        <Text style={styles.baseText}>Now Playing</Text>
    </View>

)

export default Header

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        height: '8%',
        backgroundColor: '#D82B03',
        paddingTop: 10
    },
    titleText: {
        fontSize: 25,
        color: '#f2f2f2',
        fontWeight: 'bold'
    },
    baseText: {
        fontSize: 15,
        color: '#f2f2f2',
        fontWeight: '600'
    }
})