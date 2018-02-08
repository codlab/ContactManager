/**
 * Factorised version of styles
 * Can be used from everywhere in the app
 *
 * Best Practice
 */
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: "100%",
    width: "100%"
  },
  contacts: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
