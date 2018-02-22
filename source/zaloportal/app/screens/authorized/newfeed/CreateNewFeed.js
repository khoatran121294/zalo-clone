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
import { Icon, Header, CheckBox } from 'react-native-elements'
import ColorsConfig from '../../../config/colors-config'
import StylesConfig from '../../../config/styles-config'
const {width, height} = Dimensions.get('window')

const tabs = {
  EMOJI: 1,
  PICTURE: 2,
  KEYBOARD_VOICE: 3,
  TAG: 4,
  LOCATION: 5
}

export default class CreateNewFeed extends Component {
  constructor () {
    super()
    this.state = {
      connectFacebook: false,
      currentTab: tabs.PICTURE
    }
  }
  render () {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={StylesConfig.container}>
          <Header
            outerContainerStyles={{ backgroundColor: '#F4F5F7', height: 50 }}
            leftComponent={
              <Text style={{fontSize: 16, color: ColorsConfig.primaryTextColor}}>Share</Text>
            }
            rightComponent={
              <TouchableOpacity>
                <Icon
                  name='md-send'
                  type='ionicon'
                  size={26}
                  color={ColorsConfig.secondaryTextColor} />
              </TouchableOpacity>
            } />
          <View style={styles.container}>
            <View style={styles.upContainer}>
              <TextInput
                style={[styles.myThought, StylesConfig.primaryFontSize]}
                underlineColorAndroid='transparent'
                placeholder='Write down your thought ...'
                multiline={true && true}
                placeholderTextColor={ColorsConfig.secondaryTextColor}
                autoCorrect={false} />
              <View style={styles.upContainerBottom}>
                <View style={styles.permission}>
                  <View style={styles.limitViewing}>
                    <Text style={[StylesConfig.primaryFontSize, {color: ColorsConfig.secondaryTextColor}]}>Viewing permission: </Text>
                    <TouchableOpacity>
                      <Text style={[StylesConfig.primaryFontSize, {color: ColorsConfig.primaryTextColor}]}>Public</Text>
                    </TouchableOpacity>
                  </View>
                  <CheckBox
                    title='Facebook'
                    checked={this.state.connectFacebook}
                    containerStyle={{
                      backgroundColor: 'transparent',
                      borderWidth: 0,
                      alignItems: 'center',
                      flexDirection: 'row',
                      padding: 0,
                      marginLeft: 0,
                      marginTop: 0,
                      marginBottom: -1,
                      marginRight: -5
                    }}
                    textStyle={[StylesConfig.primaryFontSize, {
                      color: ColorsConfig.secondaryTextColor,
                      fontWeight: 'normal'
                    }]}
                    onPress={() => {
                      this.setState({
                        connectFacebook: !this.state.connectFacebook
                      })
                    }}
                    checkedColor={ColorsConfig.primaryColor}
                  />
                </View>
                <View style={styles.supportTabs}>
                  <TouchableOpacity onPress={() => this.onSelectTab(tabs.EMOJI)}>
                    <Icon
                      name='emoji-happy'
                      type='entypo'
                      size={22}
                      color={this.state.currentTab === tabs.EMOJI ? ColorsConfig.primaryColor : ColorsConfig.secondaryTextColor} />
                  </TouchableOpacity>
                  <View style={styles.supportRight}>
                    <TouchableOpacity onPress={() => this.onSelectTab(tabs.PICTURE)}>
                      <Icon
                        name='picture-o'
                        type='font-awesome'
                        size={22}
                        color={this.state.currentTab === tabs.PICTURE ? ColorsConfig.primaryColor : ColorsConfig.secondaryTextColor} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelectTab(tabs.KEYBOARD_VOICE)}>
                      <Icon
                        name='keyboard-voice'
                        type='material-icons'
                        size={22}
                        color={this.state.currentTab === tabs.KEYBOARD_VOICE ? ColorsConfig.primaryColor : ColorsConfig.secondaryTextColor}
                        iconStyle={{marginLeft: 20}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelectTab(tabs.TAG)}>
                      <Icon
                        name='tag'
                        type='simple-line-icon'
                        size={20}
                        color={this.state.currentTab === tabs.TAG ? ColorsConfig.primaryColor : ColorsConfig.secondaryTextColor}
                        iconStyle={{marginLeft: 20}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onSelectTab(tabs.LOCATION)}>
                      <Icon
                        name='location'
                        type='entypo'
                        size={20}
                        color={this.state.currentTab === tabs.LOCATION ? ColorsConfig.primaryColor : ColorsConfig.secondaryTextColor}
                        iconStyle={{marginLeft: 20}} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.downContainer} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
  onSelectTab (_currentTab) {
    this.setState({
      currentTab: _currentTab
    })
    // Alert.alert('TODO', 'support emoji, select pictures, keyboard by voice, tag friends or checkin your location.')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  upContainer: {
    height: height / 2 - 50,
    borderBottomWidth: 0.5,
    borderBottomColor: ColorsConfig.borderColor
  },
  downContainer: {
    flex: 1,
    height: height / 2
  },
  myThought: {
    padding: 5
  },
  upContainerBottom: {
    position: 'absolute',
    width: '100%',
    height: 70,
    flexDirection: 'column',
    bottom: 0,
    flex: 1
  },
  permission: {
    flex: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: ColorsConfig.borderColor,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  supportTabs: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  limitViewing: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  supportRight: {
    flexDirection: 'row'
  }
})
