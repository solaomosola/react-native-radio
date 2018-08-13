
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import RadioGroup,{ Radio } from "./Components/main";
import Icon from "react-native-vector-icons/MaterialIcons"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});

export default class App extends Component {
  getChecked = (value) => {
    // value = our checked value

    console.log(value)
  }
  render() {
    return (
      <View style={styles.container}>

        <RadioGroup
          getChecked={this.getChecked}
          RadioGroupStyle={{
          flexDirection: "row"
        }}>
          <Radio iconName={"lens"} label={"A"} value={"A"}/>
          <Radio iconName={"lens"} label={"B"} value={"B"}/>
          <Radio iconName={"lens"} label={"C"} value={1}/>
          <Radio label={"D"} value={"Yes"}/>
          <Radio label={"E"} value={"This is a Sentence"}/>
        </RadioGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
