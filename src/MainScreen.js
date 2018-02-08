/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import MainList from './MainList';
import styles from "./Styles";

type Props = {};
export default class MainScreen extends Component<Props> {

  state = {
    contact: null
  }

  onContactClick(contact) {
    console.warn(contact);

    this.setState({
      contact: contact
    })
  }

  render() {
    const { contact } = this.state;

    if (contact) {
      return (
        <View style={styles.mainScreenContainer}>
          <MainList style={styles.mainScreenHalfScreen} onContactClick={(c) => this.onContactClick(c)}/>
          <Text style={styles.mainScreenHalfScreen}>{contact.jobTitle}</Text>
        </View>
      );
    } else {
      return (
        <MainList onContactClick={(c) => this.onContactClick(c)}/>
      );
    }
  }
}
