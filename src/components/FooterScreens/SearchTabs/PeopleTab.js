import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'

import Form from './Form'

const { height } = Dimensions.get('window')

class PeopleTab extends Component {
    state = {
        text: null,
        results: [],
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    }

    fetchPersonData = async() => {
        const { text } = this.state

        const url = `https://api.themoviedb.org/3/search/person?api_key=8367b1854dccedcfc9001204de735470&language=en-US&query=${text}&page=1`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                style={{padding: 10, maxWidth: '100%', marginBottom: 210}}
            >
                <View style={styles.container}>
                    <Form 
                        onSubmit={this.fetchPersonData}
                        onChangeText={text => this.setState({ text })}
                    />
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (
                            <View key={i} style={styles.peopleContainer}>
                                <View> 
                                    <Image style={{width: 150, height: 150, resizeMode: 'cover'}} source={{uri: `https://image.tmdb.org/t/p/original/${result.profile_path}`}} />
                                </View>
                                <View style={{paddingLeft: 10, width: 0, flexGrow: 1}}>
                                    <Text style={styles.personTitle}>{result.name}</Text>
                                    <Text style={{fontSize: 15}} numberOfLines={4} ellipsizeMode='tail'>{result.known_for[0].overview}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    peopleContainer: {
        marginTop: 5,
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        maxWidth: '100%',
    },
    personTitle: {
        fontSize: 23,
        fontWeight: '700',
        marginBottom: 5,
    }
})

export default PeopleTab