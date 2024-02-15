import React from 'react';
import { Text, View, Switch, StyleSheet, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    switchValue: false,
    backgroundColor: '#000000',
    color: 'textWhite',
    bulbImage: require('./assets/off.png')
  };

  handleSwitchToggle = (switchValue) => {
    const backgroundColor = switchValue ? '#ffffff' : '#000000';
    const color = switchValue ? 'textBlack' : 'textWhite';
    const bulbImage = switchValue ? require('./assets/on.png') : require('./assets/off.png');
    this.setState({ switchValue, backgroundColor, color, bulbImage });
  };

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.text, styles[this.state.color]]}>AMC MP1</Text>
        <Image source={this.state.bulbImage} style={styles.bulbImage} />
        <Switch value={this.state.switchValue} onValueChange={this.handleSwitchToggle}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bulbImage: {
    width: 32,
    height: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textWhite: {
    color: '#ffffff',
  },
  textBlack: {
    color: '#000000',
  },
});
