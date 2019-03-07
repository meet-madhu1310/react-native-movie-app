import React from 'react';
import { StyleProvider, StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './src/components/Header'
import FooterNavigation from './src/components/FooterNavigation'

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
