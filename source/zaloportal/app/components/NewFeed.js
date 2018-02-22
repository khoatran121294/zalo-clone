import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList
} from 'react-native'
import PropTypes from 'prop-types'
import StylesConfig from '../config/styles-config'
import ColorsConfig from '../config/colors-config'
import Avatar from './Avatar'
import { Icon } from 'react-native-elements'
import OptionPopup from './OptionPopup'

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
  newFeed: {
    padding: 10,
    borderBottomWidth: 10,
    borderBottomColor: ColorsConfig.borderColor,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  feedInfo: {
    marginLeft: 10
  },
  name: {
    color: ColorsConfig.primaryTextColor
  },
  createdDate: {
    color: ColorsConfig.secondaryTextColor
  },
  feedContent: {
    marginTop: 5,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'column'
  },
  feedText: {
    color: ColorsConfig.primaryTextColor,
    textAlign: 'justify'
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderTopColor: ColorsConfig.borderColor,
    paddingTop: 10
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  interactionLeft: {
    flexDirection: 'row'
  },
  interactionText: {
    marginLeft: 2,
    color: ColorsConfig.secondaryTextColor
  },
  images: {
    marginTop: 5,
    flex: 1
  },
  singleImage: {
    width: width,
    height: width
  },
  multipleImages: {
    width: width - 100,
    height: width - 100,
    marginRight: 10
  }
})

export default class NewFeed extends Component {
  constructor () {
    super()
    this.state = {
      isEditingModalVisible: false
    }
  }
  render () {
    const { newfeed } = this.props
    let ImageList = null
    if (newfeed.images && newfeed.images.length > 1) {
      ImageList = (
        <FlatList
          data={newfeed.images}
          keyExtractor={(item, index) => index}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={index}>
                <Image
                  source={item}
                  resizeMode={'cover'}
                  style={styles.multipleImages} />
              </TouchableOpacity>
            )
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
        />
      )
    }
    if (newfeed.images && newfeed.images.length === 1) {
      ImageList = (
        <TouchableOpacity>
          <Image
            source={newfeed.images[0]}
            resizeMode={'cover'}
            style={styles.singleImage} />
        </TouchableOpacity>
      )
    }
    return (
      <View style={styles.newFeed}>
        <TouchableOpacity style={styles.userInfo}>
          <Avatar fullname={newfeed.fullname} />
          <View style={styles.feedInfo}>
            <Text style={styles.name}>{newfeed.fullname}</Text>
            <Text style={[styles.createdDate, StylesConfig.primaryFontSize]}>{newfeed.createdDate}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.feedContent}>
          {
            newfeed.text ? (
              <Text style={[styles.feedText, StylesConfig.primaryFontSize, StylesConfig.messageFont]}>{newfeed.text}</Text>
            ) : <View />
          }
          <View style={styles.images}>
            {
              ImageList && ImageList
            }
          </View>
        </View>
        <View style={styles.interaction}>
          <View style={styles.interactionLeft}>
            <TouchableOpacity style={styles.interactionButton}>
              <Icon
                name='heart'
                type='feather'
                size={18}
                color={ColorsConfig.secondaryTextColor} />
              <Text style={[styles.interactionText, StylesConfig.primaryFontSize]}>{newfeed.like} likes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              <Icon
                name='message-circle'
                type='feather'
                size={18}
                color={ColorsConfig.secondaryTextColor} />
              <Text style={[styles.interactionText, StylesConfig.primaryFontSize]}>{newfeed.comment} comments</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.more} onPress={this.openEditModal.bind(this)}>
            <Icon
              name='more-horizontal'
              type='feather'
              size={22}
              color={ColorsConfig.secondaryTextColor}
            />
          </TouchableOpacity>
        </View>
        <OptionPopup
          options={this.options()}
          isModalVisible={this.state.isEditingModalVisible}
          close={this.closeEditModal.bind(this)} />
      </View>
    )
  }
  openEditModal () {
    this.setState({
      isEditingModalVisible: true
    })
  }
  closeEditModal () {
    this.setState({
      isEditingModalVisible: false
    })
  }
  options () {
    return [
      {
        name: 'Copy text',
        event: () => {
          // TODO
          console.log('copy text')
        }
      },
      {
        name: 'Unsubcribe form this person',
        event: () => {
          // TODO
          console.log('Unsubcribe form this person')
        }
      },
      {
        name: 'Report abuse',
        event: () => {
          // TODO
          console.log('Report abuse')
        }
      },
      {
        name: 'Delete this post',
        event: () => {
          // TODO
          console.log('Delete this post')
        }
      }
    ]
  }
}

NewFeed.propTypes = {
  newfeed: PropTypes.object.isRequired
}

NewFeed.defaultProps = {
  newfeed: {
    id: 0,
    fullname: '',
    createdDate: '',
    text: '',
    images: [],
    like: 0,
    comment: 0
  }
}
