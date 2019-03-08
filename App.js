import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './src/components/Header'
import FooterNavigation from './src/components/FooterNavigation'
import NowPlaying from './src/components/FooterScreens/NowPlaying'

export default class App extends React.Component {

  render() {

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={{flex: 1}}>
            <Header />
            <FooterNavigation />
          </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  
});
