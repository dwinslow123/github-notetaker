import React, { Component } from 'react';
import Badge from './Badge';
import {
  Text,
  View,
  StyleSheet,
  ScrollView } from 'react-native';
import Seperator from '../helpers/Seperator';

class Profile extends Component {

  getRowTitle = (user, item) => {
    item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item;
  }
  render() {
    const userInfo = this.props.userInfo;
    const topicArr = ['company', 'location', 'followers', 'following', 'email', 'bio', 'public_repos'];
    const list = topicArr.map((item, i) => {
      if (!userInfo[item]) {
        return <View key={ i } />
      } else {
        return (
          <View key={ i }>
            <View style={ styles.rowContainer }>
              <Text style={ styles.rowTitle }>{ this.getRowTitle(userInfo, item) }</Text>
              <Text style={ styles.rowContent }>{ userInfo[item] }</Text>
            </View>
            <Seperator />
          </View>
        )
      }
    })

    return (
      <ScrollView style={ styles.container} >
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
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    alignSelf: 'center',
  },
  rowContainer: {
    padding: 10,
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16,
  },
  rowContent: {
    fontSize: 19,
  },
});

export default Profile;