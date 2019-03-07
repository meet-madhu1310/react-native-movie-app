import React, { Component } from 'react'
import { StyleProvider, Content, Container, Footer, FooterTab, Button, Text, Icon } from 'native-base'

import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

import List from './FooterScreens/List'
import Search from './FooterScreens/Search'
import NowPlaying from './FooterScreens/NowPlaying'

class FooterNavigation extends Component {
    constructor(props) {
        super(props)
        this.state= {
            index: 0
        }
    }
    switchScreen(index) {
        this.setState({
            index: index 
        })
    }

    render() {
        let AppComponent = null
        if (this.state.index == 0) {
            AppComponent = NowPlaying
        } else if (this.state.index == 1){
            AppComponent = Search
        } else {
            AppComponent = List
        }

        return(
            <StyleProvider style={getTheme(platform)}>
            <Container>
            <Content>
                <AppComponent />
            </Content>
                <Footer style={{height: 25}}>
                    <FooterTab style={{backgroundColor: '#D82B03'}}>
                        <Button vertical active={this.state.index === 0} onPress={() => this.switchScreen(0)}>
                            <Icon name="play" style={{color: '#f2f2f2'}} />
                            <Text style={{color: '#f2f2f2'}}>Now Playing</Text>
                        </Button>

                        <Button vertical active={this.state.index === 1} onPress={() => this.switchScreen(1)}>
                            <Icon name="search" style={{color: '#f2f2f2'}} />
                            <Text style={{color: '#f2f2f2'}}>Search</Text>
                        </Button>

                        <Button vertical active={this.state.index === 2} onPress={() => this.switchScreen(2)}>
                            <Icon name="list" style={{color: '#f2f2f2'}} />
                            <Text style={{color: '#f2f2f2'}}>List</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
            </StyleProvider>
        )
    }
}


export default FooterNavigation