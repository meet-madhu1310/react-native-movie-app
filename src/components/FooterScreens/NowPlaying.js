import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class NowPlaying extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.imageStyle} resizeMode={'contain'} source={{uri: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'}} />
                        
                <Text style={styles.titleText}><Text style={{fontWeight: '600'}}>Title:</Text> Title goes here </Text>

                    <View style={styles.section}>
                        <Text style={{fontSize: 18}}><Text style={{fontWeight: '600'}}>Popularity:</Text> Popularity goes here </Text>
                        <Text style={{fontSize: 18}}><Text style={{fontWeight: '600'}}>Release Date:</Text> Release date goes here </Text>
                </View>
                    
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    imageStyle: {
        width: 300,
        height: 350,
    },
    titleText: {
        fontSize: 25,
        marginTop: 20,
    },
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
})

export default NowPlaying