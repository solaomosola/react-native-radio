import React from 'react';
import {StyleSheet, Alert, View, Text} from 'react-native';
import RadioGroup from "./Components/RadioGroup";
import Radio from "./Components/Radio";

/**
 *This is the example for react-native-radio-input
 *
 * @export
 * @class App
 * @extends {React.Component}
 */
export default class App extends React.Component {

  /**
   *getChecked (value)
   *value is the checked calue
   *
   * @memberof App
   */
  getChecked = (value) => {
    // value = our checked value

    console.log(value)
  }
  render() {
    return (
      <View style={styles.container}>

        <RadioGroup getChecked={this.getChecked} RadioGroupStyle={{ flexDirection: "row" }}>
          <Radio iconName={"lens"} label={"A"} value={"A"} />
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
