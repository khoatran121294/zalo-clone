import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import RoutesConfig from './config/routes-config'
const AppNavigator = StackNavigator(RoutesConfig)

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
