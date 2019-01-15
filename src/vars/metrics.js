import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export const metrics = {
  screen_width: width,
  screen_height: height
}
