import React from 'react'
import { Header } from 'react-native-elements'
import PropTypes from 'prop-types'
import {
  Text
} from 'react-native'
import ColorsConfig from '../config/colors-config'

const AppHeader = props => {
  const {
    text
  } = props

  return (
    <Header
      outerContainerStyles={{ backgroundColor: ColorsConfig.primaryColor, height: 50 }}
      leftComponent={
        <Text style={{fontSize: 16, color: '#FFF'}}>{text}</Text>
      } />
  )
}

AppHeader.propTypes = {
  text: PropTypes.string.isRequired
}

export default AppHeader
