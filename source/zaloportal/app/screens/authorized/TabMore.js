import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import StylesConfig from '../../config/styles-config'
import ColorsConfig from '../../config/colors-config'
import { Icon } from 'react-native-elements'

export default class TabMore extends Component {
  render () {
    return (
      <View style={StylesConfig.container}>
        <View style={StylesConfig.content}>
          <Text style={styles.title}>
            TAB MORE
          </Text>
        </View>
        <View style={StylesConfig.bottom}>
          <TouchableOpacity>
            <Icon
              name='lock'
              type='feather'
              color={ColorsConfig.bottomIconColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name='settings'
              type='feather'
              color={ColorsConfig.bottomIconColor} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#000',
    color: '#000'
  }
})
