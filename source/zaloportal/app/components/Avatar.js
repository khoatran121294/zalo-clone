import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import ColorsConfig from '../config/colors-config'
import UltilFunctions from '../helpers/ultil-functions'

const Avatar = props => {
  const {
    fullname
  } = props

  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{UltilFunctions.getShortName(fullname)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorsConfig.primaryColor,
    borderRadius: 20
  },
  avatarText: {
    color: '#FFF',
    fontSize: 16
  }
})

Avatar.propTypes = {
  fullname: PropTypes.string.isRequired
}

export default Avatar
