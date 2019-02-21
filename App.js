import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import * as analytics from './analytics'

analytics.initialize()

export default class App extends React.Component {
  state = {
    userId: 'tc@expo.io',
    event: 'FooAction',
    screen: 'Main'
  }

  onIdentify = () => {
    analytics.identify(this.state.userId)
  }

  onTrack = () => {
    analytics.track(this.state.event)
  }

  onTrackWithProperties = () => {
    analytics.track(this.state.event, { fooProp: 'A', barProp: 1 })
  }

  onTrackScreen = () => {
    analytics.trackScreen(this.state.screen)
  }

  render() {
    const { userId, event, screen } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.inlineContainer}>
          <TextInput autoFocus style={styles.input} value={userId} />
          <Button onPress={this.onIdentify} title='Identify' />
        </View>

        <View style={styles.inlineContainer}>
          <TextInput style={styles.input} value={event} />
          <Button onPress={this.onTrack} title='Track' />
        </View>

        <View style={styles.inlineContainer}>
          <TextInput style={styles.input} value={event} />
          <Button onPress={this.onTrackWithProperties} title='Track with properties' />
        </View>

        <View style={styles.inlineContainer}>
          <TextInput style={styles.input} value={screen} />
          <Button onPress={this.onTrackScreen} title='Track screen' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  inlineContainer: {
    borderColor: 'black',
    justifyContent: 'space-between',
    borderWidth: 1,
    flexDirection: 'row'
  },
  input: {
    flex: 1
  }
});
