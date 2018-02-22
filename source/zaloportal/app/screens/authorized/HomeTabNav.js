import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import React from 'react'
import TabChatting from '../authorized/TabChatting'
import TabFriends from '../authorized/TabFriends'
import TabNewFeed from '../authorized/TabNewFeed'
import TabMore from '../authorized/TabMore'
import ColorsConfig from '../../config/colors-config'

const HomeTabNav = TabNavigator({
  TabChatting: {
    screen: TabChatting,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          reverse
          name='chat'
          type='entypo'
          color='transparent'
        />)
    }
  },
  TabFriends: {
    screen: TabFriends,
    navigationOptions: {
      tabBarLabel: 'Friends',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          reverse
          name='users'
          type='entypo'
          color='transparent'
        />)
    }
  },
  TabNewFeed: {
    screen: TabNewFeed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          reverse
          name='news'
          type='entypo'
          color='transparent'
        />)
    }
  },
  TabMore: {
    screen: TabMore,
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          reverse
          name='more-horizontal'
          type='feather'
          color='transparent'
        />)
    }
  }
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#FFF',
    indicatorStyle: {
      backgroundColor: '#FFF'
    },
    labelStyle: {
      fontSize: 11
    },
    tabStyle: {
      height: 50,
      backgroundColor: ColorsConfig.primaryColor
    },
    upperCaseLabel: false,
    showIcon: true,
    showLabel: false
  }
})

export default HomeTabNav
