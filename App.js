import React, { Component } from 'react';
import { StyleSheet, Text, View, NavigatorIOS } from 'react-native';
import Main from './App/Components/Main';

export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
        style={ styles.container }
        initialRoute={{
          title: 'Github Notetaker',
          component: Main
        }}
      />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
};