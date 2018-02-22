import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Avatar from '../Avatar'
import MessageBox from './MessageBox'

const ChatMessage = props => {
  const {
    fullname,
    messages,
    isMyMessage
  } = props
  const numbersOfMesage = messages.length
  return (
    <View style={[styles.chatMessage, {
      justifyContent: isMyMessage === false ? 'flex-start' : 'flex-end'
    }]}>
      {
        isMyMessage === false && <Avatar fullname={fullname} />
      }
      <View style={[styles.messages, {
        marginLeft: !isMyMessage ? 10 : 0,
        marginRight: isMyMessage ? 10 : 0,
        alignItems: isMyMessage ? 'flex-end' : 'flex-start'
      }]}>
        {
          messages.map((item, index) => {
            return (
              <TouchableOpacity key={index}>
                <MessageBox
                  isMyMessage={isMyMessage}
                  isFirstMessage={index === 0 && true}
                  isLastMessage={index === (numbersOfMesage - 1)}
                  message={item.message}
                  messageTime={item.messageTime} />
              </TouchableOpacity>
            )
          })
        }
      </View>
      {
        isMyMessage === true && <Avatar fullname={fullname} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  chatMessage: {
    flex: 1,
    flexDirection: 'row'
  },
  messages: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  }
})

ChatMessage.propTypes = {
  fullname: PropTypes.string.isRequired,
  messages: PropTypes.array.isRequired,
  isMyMessage: PropTypes.bool.isRequired
}
ChatMessage.defaultProps = {
  fullname: '',
  messages: [],
  isMyMessage: false
}

export default ChatMessage
