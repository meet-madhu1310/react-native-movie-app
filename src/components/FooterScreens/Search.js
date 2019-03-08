import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Container, Tab, Tabs, TabHeading, Icon, StyleProvider } from 'native-base'
import getTheme from '../../../native-base-theme/components'
import platform from '../../../native-base-theme/variables/platform'

import MovieTab from './SearchTabs/MovieTab'
import PeopleTab from './SearchTabs/PeopleTab'
import TvShowsTab from './SearchTabs/TvShowsTab'

class Search extends Component {

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Container>
                    <Tabs>
                        <Tab heading={<TabHeading><Icon name="play" style={{color: '#000'}} /><Text style={{marginLeft: 10}}>Movie</Text></TabHeading>}>
                            <MovieTab />
                        </Tab>

                        <Tab heading={<TabHeading><Icon name="ios-contact" style={{color: '#000'}} /><Text style={{marginLeft: 10}}>Poeple</Text></TabHeading>}>
                            <PeopleTab />
                        </Tab>

                        <Tab heading={<TabHeading><Icon name="tv" style={{color: '#000'}} /><Text style={{marginLeft: 10}}>TV Shows</Text></TabHeading>}>
                            <TvShowsTab />
                        </Tab>
                    </Tabs>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    
})

export default Search