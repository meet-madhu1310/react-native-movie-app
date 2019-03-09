import React from 'react'
import { Text } from 'react-native'

import { Container, Tab, Tabs, TabHeading, Icon, StyleProvider } from 'native-base'
import getTheme from '../../../native-base-theme/components'
import platform from '../../../native-base-theme/variables/platform'

import PopularMovies from './ListTabs/PopularMovies'
import TopRatedMovies from './ListTabs/TopRatedMovies'
import UpcomingMovies from './ListTabs/UpcomingMovies'

const List = () => (
    <StyleProvider style={getTheme(platform)}>
        <Container>
            <Tabs>
                <Tab heading={<TabHeading><Text>Popular</Text></TabHeading>}>
                    <PopularMovies />
                </Tab>

                <Tab heading={<TabHeading><Text>Top Rated</Text></TabHeading>}>
                    <TopRatedMovies />
                </Tab>

                <Tab heading={<TabHeading><Text>Upcoming</Text></TabHeading>}>
                    <UpcomingMovies />
                </Tab>
            </Tabs>
        </Container>
    </StyleProvider>
)

export default List