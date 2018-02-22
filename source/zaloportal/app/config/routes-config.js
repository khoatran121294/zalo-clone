import Introduction from '../screens/Introduction'
import Unauthorized from '../screens/unauthorized/Unauthorized'
import Login from '../screens/unauthorized/Login'
import Register from '../screens/unauthorized/Register'
import Countries from '../screens/unauthorized/Countries'
import HomeTabNav from '../screens/authorized/HomeTabNav'
import CreateNewFeed from '../screens/authorized/newfeed/CreateNewFeed'
import ChatRoom from '../screens/authorized/chatting/ChatRoom'

export default {
  // Introduction: {
  //   screen: Introduction,
  //   navigationOptions: {
  //     header: false
  //   }
  // },
  Unauthorized: {
    screen: Unauthorized,
    navigationOptions: {
      header: false
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: false
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: false
    }
  },
  HomeTabNav: {
    screen: HomeTabNav,
    navigationOptions: {
      header: false
    }
  },
  Countries: {
    screen: Countries,
    navigationOptions: {
      header: false
    }
  },
  CreateNewFeed: {
    screen: CreateNewFeed,
    navigationOptions: {
      header: false
    }
  },
  ChatRoom: {
    screen: ChatRoom,
    navigationOptions: {
      header: false
    }
  }
}
