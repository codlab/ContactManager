/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import { Toolbar, ThemeProvider } from "react-native-material-ui";

import MainList from './MainList';
import styles from "./Styles";
import Theme from "./Theme";

type Props = {};
export default class MainScreen extends Component<Props> {

  state = {
    contact: null
  };

  empty = <View />;

  onContactClick(contact) {
    console.warn(contact);

    this.setState({
      contact: contact
    })
  }

  render() {
    const { contact } = this.state;
    const has_contact = contact != null;

    return (
      <ThemeProvider key="one" uiTheme={Theme} children={this.empty}>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
        <View style={{ backgroundColor: Theme.palette.primaryColor, height: 24 }} />
        <Toolbar
          leftElement={has_contact ? "arrow-back" : ""}
          onLeftElementPress={() => {}}
          centerElement="ContactManager"/>
        {
          has_contact && (
            <View style={styles.mainScreenContainer}>
              <MainList style={styles.mainScreenHalfScreen} onContactClick={(c) => this.onContactClick(c)}/>
              <Text style={styles.mainScreenHalfScreen}>{contact.jobTitle}</Text>
            </View>
          )
        }

        {
          (!has_contact) && (
            <MainList onContactClick={(c) => this.onContactClick(c)}/>
          )
        }
      </ThemeProvider>
    )
  }
}
