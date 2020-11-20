import React, {Component} from 'react';
import {Button, TextInput, Text, View} from 'react-native';
type ButtonPresetProps = {};

class Input extends Component<Component> {
  constructor(props) {
    super(props);
    this.state = {countq: ''};
  }
  render() {
    return (
      <View>
        <TextInput placeholder="Alamat" />
        <TextInput placeholder="No Hp" />

        <View>
          <Text>{this.state.countq}</Text>
          <TextInput />
          <Button
            title="as"
            onPress={() => {
              this.setState({count: this.state.countq++});
            }}
          />
        </View>
      </View>
    );
  }
}
export default Input;
