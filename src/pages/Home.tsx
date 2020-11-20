import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';

class Home extends Component<Component> {
  constructor() {
    super();
    this.state = {name: ''};
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Nama"
          onChangeText={(text) => {
            this.setState({name: text});
          }}
        />
        <Text>ini halaman home {this.state.name} </Text>
        <Button title="as" onPress={() => {}} />
        <TextInput placeholder="Alamat" />
        <TextInput placeholder="No Hp" />
      </View>
    );
  }
}

export default Home;
