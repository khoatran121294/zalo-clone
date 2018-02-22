import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

export default class Introduction extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Clone Zalo App with React Native
        </Text>
        <View>
          <Text style={styles.instructions}>
            First, I'll design layout based on the latest version.
          </Text>
          <Text style={styles.instructions}>
            Next, I integrate current technologies in Zalo app such as chating, scanning nearby, ...
          </Text>
          <Text style={styles.instructions}>
            Finally, I use this portal to apply any apps have same features like Zalo.
          </Text>
        </View>
        <TouchableOpacity onPress={this.goToMainApp.bind(this)}>
          <Text style={styles.conclusion}>
            {'Let\'s go!'.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
  goToMainApp () {
    this.props.navigation.navigate('Unauthorized')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    color: '#000'
  },
  instructions: {
    color: '#000',
    marginLeft: 10,
    marginRight: 10,
    fontSize: 12,
    textAlign: 'left'
  },
  conclusion: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
