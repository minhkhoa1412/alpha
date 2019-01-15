import React, {Component} from 'react'
import {Easing, StyleSheet, Animated, View, StatusBar} from 'react-native'
import Player from './src/components/Player'
import {Provider} from 'react-redux'
import {store} from './src/store'
import configureStore from './src/store'

export default class App extends Component {
  render() {
    const TRACK = {
      title: 'Stressed Out',
      artist: 'Twenty One Pilots',
      albumArtUrl: 'http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg',
      audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3'
    }
    return (
      <Provider store={configureStore()}>
        <Player/>
      </Provider>
    )
  }
}