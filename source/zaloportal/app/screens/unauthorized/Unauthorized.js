import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native'
import {Icon} from 'react-native-elements'
import ColorsConfig from '../../config/colors-config'
import StylesConfig from '../../config/styles-config'
const {width} = Dimensions.get('window')

export default class Unauthorized extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.halfContainer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeTabNav')}>
            <Text style={[styles.logo, StylesConfig.defaultFont]}>
              ZALO
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.halfContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.register}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={[styles.registerText, StylesConfig.primaryFontSize]}>Create a new account</Text>
            </TouchableOpacity>
            <Icon
              name='ios-arrow-dropright-circle'
              type='ionicon'
              color={ColorsConfig.primaryColor} />
          </View>
        </View>
        <View style={styles.languageSetting}>
          <Text style={[styles.currentLanguage, StylesConfig.primaryFontSize]}>English</Text>
          <TouchableOpacity>
            <Text style={[styles.change, StylesConfig.primaryFontSize]}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsConfig.primaryBackgroundColor
  },
  halfContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontSize: 70,
    color: ColorsConfig.primaryColor,
    fontWeight: 'bold'
  },
  loginButton: {
    width: width - 150,
    backgroundColor: ColorsConfig.primaryColor,
    padding: 10,
    borderRadius: 20
  },
  loginText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF'
  },
  register: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerText: {
    color: ColorsConfig.primaryTextColor,
    textDecorationLine: 'underline',
    marginRight: 10
  },
  languageSetting: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row'
  },
  currentLanguage: {
    color: ColorsConfig.primaryColor,
    marginRight: 5
  },
  change: {
    color: ColorsConfig.primaryColor,
    textDecorationLine: 'underline'
  }
})
