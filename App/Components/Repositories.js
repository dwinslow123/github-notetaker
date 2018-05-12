import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  StyleSheet } from 'react-native';

import Badge from './Badge';
import Seperator from '../helpers/Seperator';

  class Repositories extends Component {

    openPage = (url) => {
      console.log('The URL is: ', url);
    }

    render() {
      const repos = this.props.repos;
      const list = repos.map((repo, i) => {
        const desc = repos[i].description ? <Text style={ styles.description }>{ repos[i].description }</Text> : <View />;
        return (
          <View key={ i }>
            <View style={ styles.rowContainer }>
              <TouchableHighlight
                onPress={ this.openPage(repos[i].html_url) }
                underlayColor='transparent'
              >
                <Text style={ styles.name }>{ repos[i].name }</Text>
              </TouchableHighlight>
              <Text style={ styles.stars }>Stars: {repos[i].stargazers_count }</Text>
              { desc }
            </View>
            <Seperator />
          </View>
        )
      })
      return (
        <ScrollView style={ styles.container }>
          <Badge userInfo={ this.props.userInfo } />
          { list }
        </ScrollView>
      )
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    rowContainer: {
      flex: 1,
      flexDirection: 'column',
      padding: 10,
    },
    name: {
      color: '#48BBEC',
      fontSize: 18,
      paddingBottom: 5,
    },
    stars: {
      color: '#48BBEC',
      fontSize: 14,
      paddingBottom: 5,
    },
    description: {
      fontSize: 14,
      paddingBottom: 5
    }
  });

  export default Repositories;