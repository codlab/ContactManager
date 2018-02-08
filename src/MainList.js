/**
 * Manage the list of contacts
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
import PropTypes from "prop-types";

import {
    LazyloadScrollView,
    LazyloadView,
    LazyloadImage
} from 'react-native-lazyload';
//when using list view library
//import NativeListview from 'react-native-native-listview';

import Contacts from "./contacts/Contacts";
import styles from "./Styles";

type Props = {};
export default class MainList extends Component<Props> {

  static propTypes = {
    onContactClick: PropTypes.func.isRequired
  }

  state = {
    contacts: null
  };

  constructor(props) {
    super(props);

    this.contacts = new Contacts();
  }
  
  componentDidMount() {
    this.contacts.list()
    .then(contacts => {
      this.setState({
        contacts: contacts
      });
    })
    .catch(err => {
      console.warn(err);
    });
  }

  componentWillUnmount() {

  }

  //when using scrollview
  /*
  const ROWS_IN_DATA_SOURCE = 3000;
  const dataSource = [];
  for (let i = 0; i < ROWS_IN_DATA_SOURCE; i++) dataSource.push(`This is row # ${i + 1}`);
  */
  /*render() {
    const { contacts } = this.state;

    return (
      <View style={styles.container}>
      <NativeListview
        renderRow={this.renderRow}
        numRows={dataSource.length}
        rowHeight={50}
      />
      </View>
    );
  }


  renderRow(rowID) {
    return (
      <Text style={{
        width: Dimensions.get('window').width,
        height: 50,
        backgroundColor: '#ffffff'
      }}>{dataSource[rowID]}</Text>
    );
  }*/

  render() {
    const { contacts } = this.state;

    return (
      <View style={styles.container}>
        <LazyloadScrollView
                style={styles.contacts}
                contentContainerStyle={styles.content}
                name="lazyload-list">
          { contacts && contacts.map((contact,i) =>
              <TouchableHighlight key={i} style={styles.view} onPress={() => this.props.onContactClick(contact)}>
                <LazyloadView
                  host="lazyload-list"
                  style={styles.contactCell}>
                  <Text style={styles.contactText}>{contact.givenName} {contact.familyName}</Text>
                  <Text style={styles.contactSubText}>{contact.jobTitle}</Text>
                </LazyloadView>
              </TouchableHighlight>
            )
          }
        </LazyloadScrollView>
      </View>
    );
  }
}
