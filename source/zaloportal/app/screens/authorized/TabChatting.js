import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions
} from 'react-native'
import StylesConfig from '../../config/styles-config'
import ColorsConfig from '../../config/colors-config'
import Avatar from '../../components/Avatar'
import { Icon } from 'react-native-elements'

const {width} = Dimensions.get('window')
const mockData = [
  { avatarImage: '', name: 'Minh Hằng', lastMessage: 'hello world hello world hello world hello world hello world', lastTime: 'Just now' },
  { avatarImage: '', name: 'Ngọc Trinh', lastMessage: 'abc 123', lastTime: '1 min' },
  { avatarImage: '', name: 'Chi Pu', lastMessage: 'abc xyz', lastTime: '1 day' },
  { avatarImage: '', name: 'Maria Orawa', lastMessage: 'xyz abc', lastTime: '10/12/2017' },
  { avatarImage: '', name: 'Đặng Thu Thảo', lastMessage: 'abc 123 xyz', lastTime: '30/11/2017' },
  { avatarImage: '', name: 'Hùng', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' },
  { avatarImage: '', name: 'nko nko', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' },
  { avatarImage: '', name: 'nko nko', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' },
  { avatarImage: '', name: 'nko nko', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' },
  { avatarImage: '', name: 'nko nko', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' },
  { avatarImage: '', name: 'nko nko', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' },
  { avatarImage: '', name: 'nko nko', lastMessage: 'abc 123 xyz', lastTime: '29/11/2017' }
]
export default class TabChatting extends Component {
  render () {
    return (
      <View style={StylesConfig.container}>
        <View style={StylesConfig.content}>
          <FlatList
            data={mockData}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => (
              <TouchableOpacity key={index} style={styles.chatRow} onPress={this.redirectToChatRoom.bind(this)}>
                <Avatar fullname={item.name} />
                <View style={styles.chatInfo}>
                  <View style={styles.chatInfoContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={[styles.lastMessage, StylesConfig.primaryFontSize, StylesConfig.messageFont]} numberOfLines={1}>{item.lastMessage}</Text>
                  </View>
                  <Text style={[styles.lastTime, StylesConfig.primaryFontSize]}>{item.lastTime}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={StylesConfig.bottom}>
          <TouchableOpacity>
            <Icon
              name='search'
              type='feather'
              color={ColorsConfig.bottomIconColor} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name='add-to-list'
              type='entypo'
              color={ColorsConfig.bottomIconColor} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  redirectToChatRoom () {
    this.props.navigation.navigate('ChatRoom')
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 5,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#000',
    color: '#000'
  },
  chatRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10
  },
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
  },
  chatInfo: {
    borderBottomWidth: 0.5,
    borderBottomColor: ColorsConfig.borderColor,
    height: 40,
    width: width - 60,
    marginLeft: 10
  },
  chatInfoContent: {
    marginRight: 40
  },
  name: {
    color: ColorsConfig.primaryTextColor
  },
  lastMessage: {
    color: ColorsConfig.secondaryTextColor
  },
  lastTime: {
    position: 'absolute',
    top: 0,
    right: 10,
    color: ColorsConfig.secondaryTextColor
  }
})
