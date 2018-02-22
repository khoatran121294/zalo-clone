import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from 'react-native'
import ColorsConfig from '../../config/colors-config'
import StylesConfig from '../../config/styles-config'
const {width} = Dimensions.get('window')

const MessageBox = props => {
  const {
    isFirstMessage,
    isLastMessage,
    message,
    messageTime,
    isMyMessage
  } = props
  return (
    <View style={{
      flexDirection: 'row'
    }}>
      {
        (!isMyMessage && isFirstMessage) && <View style={styles.arrowLeft} />
      }
      <View style={[styles.messageBox, {
        marginLeft: (!isFirstMessage && !isMyMessage) ? 5 : 0,
        marginRight: (!isFirstMessage && isMyMessage) ? 5 : 0,
        backgroundColor: isMyMessage ? ColorsConfig.sentMessageBoxColor : ColorsConfig.receivedMessageBoxColor
      }]}>
        <Text style={[styles.message, StylesConfig.messageFont]}>{message}</Text>
        {
          isLastMessage && <Text style={[styles.messageTime, StylesConfig.primaryFontSize]}>{messageTime}</Text>
        }
      </View>
      {
        (isMyMessage && isFirstMessage) && <View style={styles.arrowRight} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  messageBox: {
    marginBottom: 10,
    maxWidth: width - 100,
    backgroundColor: ColorsConfig.primaryBackgroundColor,
    borderRadius: 5,
    padding: 10
  },
  message: {
    color: ColorsConfig.primaryTextColor
  },
  messageTime: {
    color: ColorsConfig.secondaryTextColor
  },
  arrowLeft: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    borderRightWidth: 5,
    borderRightColor: '#FFF',
    marginTop: 10
  },
  arrowRight: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderTopColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: 'transparent',
    borderLeftWidth: 5,
    borderLeftColor: ColorsConfig.sentMessageBoxColor,
    marginTop: 10
  }
})

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  messageTime: PropTypes.string.isRequired,
  isMyMessage: PropTypes.bool.isRequired,
  isFirstMessage: PropTypes.bool.isRequired,
  isLastMessage: PropTypes.bool.isRequired
}
MessageBox.defaultProps = {
  message: '',
  messageTime: '',
  isMyMessage: false,
  isFirstMessage: false,
  isLastMessage: false
}

export default MessageBox
