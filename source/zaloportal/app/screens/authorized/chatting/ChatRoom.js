import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native'
import { Icon, Header } from 'react-native-elements'
import ChatMessage from '../../../components/chatting/ChatMessage'
import ColorsConfig from '../../../config/colors-config'
import StylesConfig from '../../../config/styles-config'
import { chatHistory } from '../../../helpers/mock-data'
const {width} = Dimensions.get('window')

export default class ChatRoom extends Component {
  render () {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={StylesConfig.container}>
          <Header
            outerContainerStyles={StylesConfig.chatRoomHeader}
            leftComponent={
              <View style={styles.leftHeader}>
                <TouchableOpacity style={styles.friendInfo}>
                  <Text style={styles.friendName}>Minh Hang</Text>
                  <Icon
                    name='sort-down'
                    type='font-awesome'
                    size={15}
                    color='#FFF' />
                </TouchableOpacity>
                <Text style={[styles.lastAccess, StylesConfig.primaryFontSize]}>Online 1 hour ago</Text>
              </View>
            }
            rightComponent={
              <View style={styles.rightHeader}>
                <TouchableOpacity style={styles.phoneCall}>
                  <Icon
                    name='phone-call'
                    type='feather'
                    size={26}
                    color='#FFF' />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name='indent-more'
                    type='foundation'
                    size={26}
                    color='#FFF' />
                </TouchableOpacity>
              </View>
            } />
          <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.chatContent}>
              {
                chatHistory.map((item, index) => {
                  return (
                    <ChatMessage key={index}
                      fullname={item.fullname}
                      messages={item.messages}
                      isMyMessage={item.isMyMessage} />
                  )
                })
              }
            </ScrollView>
            <View style={StylesConfig.bottom}>
              <View style={styles.leftBottom}>
                <TouchableOpacity style={styles.leftBottomIcons}>
                  <Icon
                    name='emoji-happy'
                    type='entypo'
                    size={22}
                    color={ColorsConfig.secondaryTextColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.leftBottomIcons}>
                  <Icon
                    name='keyboard-voice'
                    type='material-icons'
                    size={22}
                    color={ColorsConfig.secondaryTextColor} />
                </TouchableOpacity>
                <TextInput
                  style={[styles.messageInput, StylesConfig.primaryFontSize]}
                  underlineColorAndroid='transparent'
                  placeholder='Write message'
                  autoCorrect={false}
                  placeholderTextColor={ColorsConfig.secondaryTextColor} />
              </View>
              <TouchableOpacity>
                <Icon
                  name='md-add'
                  type='ionicon'
                  size={26}
                  color={ColorsConfig.secondaryTextColor} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: ColorsConfig.backgroundChatRoomColor
  },
  leftHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: 50
  },
  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  friendName: {color: '#FFF', marginRight: 5, fontWeight: 'bold'},
  lastAccess: {
    color: '#FFF'
  },
  phoneCall: {
    marginRight: 20
  },
  leftBottom: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftBottomIcons: {
    marginRight: 5
  },
  messageInput: {
    width: width - 100
  },
  chatContent: {
    padding: 10,
    paddingBottom: 60
  }
})

ChatRoom.propTypes = {

}

ChatRoom.defaultProps = {

}
