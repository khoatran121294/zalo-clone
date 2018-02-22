import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import Modal from 'react-native-modal'
import ColorsConfig from '../config/colors-config'

export default class OptionPopup extends React.Component {
  render () {
    return (
      <Modal
        isVisible={this.props.isModalVisible}
        animationIn='fadeIn'
        animationOut='fadeOut'
        onBackdropPress={this.onBackdropPress.bind(this)}>
        <View style={styles.modalWrapper}>
          <View style={styles.options}>
            {
              this.props.options && this.props.options.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => item.event()}>
                    <Text style={styles.optionText}>{item.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
      </Modal>
    )
  }
  onBackdropPress () {
    this.props.close()
  }
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  options: {
    backgroundColor: ColorsConfig.primaryBackgroundColor,
    padding: 10,
    width: '100%',
    borderRadius: 5
  },
  optionText: {
    color: ColorsConfig.primaryTextColor,
    paddingTop: 10,
    paddingBottom: 10
  }
})

OptionPopup.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  close: PropTypes.func.isRequired
}

OptionPopup.defaultProps = {
  isModalVisible: false,
  options: []
}
