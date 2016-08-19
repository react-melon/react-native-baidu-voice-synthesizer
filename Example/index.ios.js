/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {configure, speekSentence} from 'react-native-baidu-voice-synthesizer';

class Example extends Component {


    async componentDidMount() {

        try {

            await configure({
                appID: '8167864',
                apiKey: 'g8ylHecLtt4WyTuPFG7Fssu0',
                secretKey: '391b8964cb174efc85eac80b5fcf6be5'
            });

            await speekSentence('老狼老狼几点啦');

            await speekSentence('6点啦6点啦6点啦6点啦6点啦6点啦6点啦');

        }
        catch (e) {
            console.log(e);
        }

    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
