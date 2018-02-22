import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native'
import { Icon } from 'react-native-elements'
import StylesConfig from '../../config/styles-config'
import ColorsConfig from '../../config/colors-config'
import Avatar from '../../components/Avatar'
import NewFeed from '../../components/NewFeed'
import { newfeeds, recentPhotos } from '../../helpers/mock-data'

const {width} = Dimensions.get('window')

export default class TabNewFeed extends Component {
  constructor () {
    super()
    this.state = {
      hideRecentPhotos: true
    }
  }
  render () {
    const NewFeedsList = (newfeeds) && newfeeds.map((item, index) => <NewFeed key={index} newfeed={item} />)
    return (
      <View style={StylesConfig.container}>
        <ScrollView style={StylesConfig.scrollContent}>
          <View style={styles.statusPost}>
            <View style={styles.postContent}>
              <Avatar fullname='Khoa Tran' />
              <TouchableOpacity onPress={this.redirectToCreateNewFeed.bind(this)}>
                <Text style={[styles.topText, StylesConfig.primaryFontSize]}>How are you today?</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.imagesPost, {display: this.state.hideRecentPhotos ? 'none' : 'flex'}]}>
              <View style={styles.postNote}>
                <Text style={[{color: ColorsConfig.secondaryTextColor}, StylesConfig.primaryFontSize]}>Tap to post your recently photos</Text>
                <TouchableOpacity onPress={() => this.setState({hideRecentPhotos: true})}>
                  <Icon
                    name='close'
                    type='evilicon'
                    size={20}
                    color={ColorsConfig.secondaryTextColor} />
                </TouchableOpacity>
              </View>
              <View style={styles.recentImages}>
                {
                  recentPhotos.map((item, index) => {
                    return (
                      <TouchableOpacity key={index}>
                        <Image source={item} style={styles.recentImage} />
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
            </View>
          </View>
          { NewFeedsList }
        </ScrollView>
        <View style={StylesConfig.bottom}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={this.redirectToCreateNewFeed.bind(this)}>
            <Icon
              name='image'
              type='entypo'
              color={ColorsConfig.bottomIconColor} />
            <Text style={[styles.bottomText, StylesConfig.primaryFontSize]}>What's in your mind?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderLeftWidth: 0.5, paddingLeft: 5, borderLeftColor: '#CCC'}}>
            <Icon
              name='notifications-none'
              type='material'
              color={ColorsConfig.bottomIconColor} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  redirectToCreateNewFeed () {
    this.props.navigation.navigate('CreateNewFeed')
  }
}

const styles = StyleSheet.create({
  topText: {
    color: ColorsConfig.secondaryTextColor,
    marginLeft: 10
  },
  bottomText: {
    color: ColorsConfig.secondaryTextColor,
    marginLeft: 10
  },
  statusPost: {
    // padding: 10,
    flexDirection: 'column',
    borderBottomWidth: 10,
    borderBottomColor: ColorsConfig.borderColor
  },
  newFeed: {
    padding: 10,
    borderBottomWidth: 10,
    borderBottomColor: ColorsConfig.borderColor
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
    marginBottom: 10
  },
  feedText: {
    color: ColorsConfig.primaryTextColor
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
  postContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  imagesPost: {
    borderColor: ColorsConfig.borderColor,
    borderWidth: 0.5,
    padding: 5
  },
  postNote: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  recentImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  recentImage: {
    width: width / 4 - 10,
    height: width / 4 - 10
  }
})
