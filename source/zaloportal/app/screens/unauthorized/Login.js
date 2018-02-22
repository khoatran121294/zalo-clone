import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import AppHeader from '../../components/AppHeader'
import { Icon } from 'react-native-elements'
import ColorsConfig from '../../config/colors-config'
import StylesConfig from '../../config/styles-config'
const {width} = Dimensions.get('window')

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      hidePass: true,
      data: {
        country: '',
        phoneNumber: '',
        password: ''
      }
    }
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <AppHeader text='Login' />
          <View style={styles.loginForm}>
            <TouchableOpacity style={styles.country} onPress={() => this.props.navigation.navigate('Countries')}>
              <Text style={{ color: '#000' }}>Vietnam (+84)</Text>
              <Icon
                name='ios-arrow-forward'
                type='ionicon'
                color='#CCC' />
            </TouchableOpacity>
            <View>
              <TextInput
                style={styles.phoneNumber}
                underlineColorAndroid='transparent'
                placeholder='Enter phone number'
                placeholderTextColor={ColorsConfig.secondaryTextColor}
                keyboardType='phone-pad'
                value={this.state.data.phoneNumber}
                onChangeText={(value) => this.onChangePhoneNumber(value)} />
              {
                !!this.state.data.phoneNumber && (
                  <TouchableOpacity style={styles.resetPhone} onPress={this.resetPhoneNumer.bind(this)}>
                    <Icon
                      name='close'
                      type='evilicon'
                      color={ColorsConfig.secondaryTextColor} />
                  </TouchableOpacity>
                )
              }
            </View>
            <View>
              <TextInput
                style={styles.password}
                underlineColorAndroid='transparent'
                placeholder='Enter password'
                placeholderTextColor={ColorsConfig.secondaryTextColor}
                secureTextEntry={this.state.hidePass} />
              <TouchableOpacity style={styles.hidePass} onPress={this.togglehidePass.bind(this)}>
                <Text style={{ color: ColorsConfig.secondaryTextColor }}>
                  {this.state.hidePass ? 'SHOW' : 'HIDE'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.loginActions}>
            <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('HomeTabNav')}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.forgetPassText, StylesConfig.primaryFontSize]}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.bottom}>
              <Text style={[styles.faq, StylesConfig.primaryFontSize]}>Frequently Asked Questions</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  togglehidePass () {
    this.setState({
      hidePass: !this.state.hidePass
    })
  }
  onChangePhoneNumber (value) {
    this.setState({
      data: Object.assign({}, this.state.data, {
        phoneNumber: value
      })
    })
  }
  resetPhoneNumer () {
    this.setState({
      data: Object.assign({}, this.state.data, {
        phoneNumber: ''
      })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  loginForm: {
    padding: 10,
    backgroundColor: ColorsConfig.primaryBackgroundColor
  },
  country: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: ColorsConfig.borderColor,
    paddingBottom: 5,
    paddingLeft: 2
  },
  phoneNumber: {
    borderBottomWidth: 0.5,
    borderBottomColor: ColorsConfig.borderColor,
    paddingBottom: 5
  },
  resetPhone: {
    position: 'absolute',
    right: -5,
    top: 14
  },
  password: {
    paddingBottom: 0,
    width: width - 70
  },
  hidePass: {
    position: 'absolute',
    right: 0,
    top: 14
  },
  loginActions: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  loginButton: {
    width: width - 150,
    backgroundColor: ColorsConfig.primaryColor,
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  loginText: {
    textAlign: 'center',
    color: '#FFF'
  },
  forgetPassText: {
    color: ColorsConfig.primaryTextColor,
    textDecorationLine: 'underline',
    marginTop: 10
  },
  bottom: {
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  faq: {
    color: ColorsConfig.primaryTextColor,
    textDecorationLine: 'underline',
    marginTop: 10
  }
})
