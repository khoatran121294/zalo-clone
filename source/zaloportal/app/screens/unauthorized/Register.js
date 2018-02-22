import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native'
import AppHeader from '../../components/AppHeader'
import { Icon } from 'react-native-elements'
import ColorsConfig from '../../config/colors-config'
import StylesConfig from '../../config/styles-config'
const {width} = Dimensions.get('window')

export default class Register extends Component {
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
          <AppHeader text='Register' />
          <View style={styles.registerForm}>
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
          </View>
          <View style={styles.registerActions}>
            <TouchableOpacity style={styles.registerButton} onPress={() => this.props.navigation.navigate('HomeTabNav')}>
              <Text style={styles.registerText}>NEXT</Text>
            </TouchableOpacity>
            <View style={styles.termCondition}>
              <Text style={[styles.termConditionText, StylesConfig.primaryFontSize]}>
                Continuing means you agree to Zalo's <Text style={{textDecorationLine: 'underline'}} onPress={() => Alert.alert('TODO')}>Term of conditions</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
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
  registerForm: {
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
    paddingBottom: 0
  },
  resetPhone: {
    position: 'absolute',
    right: -5,
    top: 14
  },
  registerActions: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  registerButton: {
    width: width - 150,
    backgroundColor: ColorsConfig.primaryColor,
    padding: 10,
    borderRadius: 20,
    marginTop: 20
  },
  registerText: {
    textAlign: 'center',
    color: '#FFF'
  },
  termCondition: {
    width: width - 150
  },
  termConditionText: {
    color: ColorsConfig.primaryTextColor,
    marginTop: 10,
    textAlign: 'center'
  }
})
