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
  SectionList,
  ScrollView
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
      searchText: '',
      letters: this.getAlphabetList(),
      countries: [
        { name: 'Albani', phoneCode: 1112 },
        { name: 'Australia', phoneCode: 213 },
        { name: 'Austria', phoneCode: 315 },
        { name: 'Vietnam', phoneCode: 84 },
        { name: 'Vietnam', phoneCode: 84 },
        { name: 'Vietnam', phoneCode: 84 },
        { name: 'Philipine', phoneCode: 10 },
        { name: 'Malaysia', phoneCode: 21 },
        { name: 'Russia', phoneCode: 34 },
        { name: 'Laos', phoneCode: 56 },
        { name: 'Singapore', phoneCode: 90 },
        { name: 'Indonesia', phoneCode: 76 },
        { name: 'Thailand', phoneCode: 53 },
        { name: 'Cambodia', phoneCode: 18 },
        { name: 'Myanma', phoneCode: 33 }
      ]
    }
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <AppHeader text='Country' />
          <TextInput
            style={styles.searchCountry}
            underlineColorAndroid='transparent'
            placeholder='Enter name to search'
            placeholderTextColor={ColorsConfig.secondaryTextColor}
            value={this.state.searchText}
            onChangeText={(value) => this.onChangeSearchText(value)} />
          <View style={styles.countriesList}>
            <SectionList
              keyExtractor={(item, index) => index}
              renderItem={({item, index}) => (
                <TouchableOpacity key={index} style={styles.countryContent} onPress={this.onBackToLogin.bind(this, item)}>
                  <Text style={styles.countryName}>{item.name}</Text>
                  <Text style={styles.phoneCode}>{`+${item.phoneCode}`}</Text>
                </TouchableOpacity>
              )}
              renderSectionHeader={({section, index}) => (
                section.data.length > 0 && (
                  <View style={styles.alphabetTitle}>
                    <Text style={styles.alphabetText}>{section.title}</Text>
                  </View>
                )
              )}
              sections={
                this.state.letters.map((letter) => {
                  return {
                    title: letter,
                    data: this.state.countries.filter(country => country.name.charAt(0).toUpperCase() === letter)
                  }
                })
              }
              ref='countryListRef'
              keyboardDismissMode='on-drag'
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  onChangeSearchText (value) {
    this.setState({
      searchText: value
    })
  }
  onBackToLogin (country) {
    this.props.navigation.goBack()
  }
  getAlphabetList () {
    const alphabets = []
    alphabets.push('#')
    for (let i = 65; i <= 90; i++) {
      alphabets.push(String.fromCharCode(i))
    }
    return alphabets
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: ColorsConfig.primaryBackgroundColor
  },
  searchCountry: {
    borderBottomWidth: 1,
    borderBottomColor: ColorsConfig.borderColor,
    paddingBottom: 10,
    paddingLeft: 10
  },
  countriesList: {
    marginLeft: 10,
    flex: 1
  },
  alphabetTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: ColorsConfig.primaryColor,
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 0
  },
  alphabetText: {
    fontSize: 20,
    color: ColorsConfig.primaryColor
  },
  countryContent: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: ColorsConfig.borderColor,
    paddingRight: 15
  },
  countryName: {
    color: '#000'
  }
})
