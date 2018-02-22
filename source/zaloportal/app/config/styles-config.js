import {Dimensions} from 'react-native'
import ColorsConfig from './colors-config'
const {width} = Dimensions.get('window')
export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  bottom: {
    position: 'absolute',
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: '#CCC',
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 0,
    backgroundColor: '#FFF'
  },
  content: {
    flex: 1,
    marginBottom: 40
  },
  scrollContent: {
    width: width,
    marginBottom: 40
  },
  primaryFontSize: {
    fontSize: 12
  },
  defaultFont: {
    fontFamily: 'Roboto'
  },
  messageFont: {
    fontFamily: 'Roboto'
  },
  chatRoomHeader: {backgroundColor: ColorsConfig.primaryColor, height: 50, paddingBottom: 0}
}
