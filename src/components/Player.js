/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Easing, StyleSheet, Animated, View, StatusBar} from 'react-native'
import SoundPlayer from 'react-native-sound-player'
import {connect} from 'react-redux'
import Sound from 'react-native-sound'

import Header from './Header'
import AlbumArt from './AlbumArt'
import Controls from './Controls'
import AlbumInformation from './AlbumInformation'
import {fetchData} from '../actions'
import ProgressBar from './ProgressBar'
import moment from 'moment'

StatusBar.setBackgroundColor('#2c2c2c')

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPosition: '',
      paused: false,
      totalLength: '',
      currentMilSecond: 1,
      totalMilSecond: 1
    }
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount() {
    //start animation
    this.spin()
    //fetch data album
    this.props.fetch()
    //loading and start sound
    this.playSound()
    //work space
    this.getCurrentTime()
    this.getDurationTime()
  }

  playSound = () => {
    try {
      SoundPlayer.playUrl('https://vnso-zn-15-tf-mp3-s1-zmp3.zadn.vn/0f4b922fcc6b25357c7a/2082068600738536235?authen=exp=1547636208~acl=/0f4b922fcc6b25357c7a/*~hmac=c44c61d9fbaf6cddbfe4cd65044688d6&filename=Den-Sau-Ung-Hoang-Phuc.mp3')
    } catch (e) {
      console.log(`cannot play the sound file`, e)
    }
  }

  getCurrentTime = () => {
    let myLoop = setInterval(() => {
      SoundPlayer.getInfo()
        .then(e => {
          this.setState({
            currentPosition: this.secondToMinutes(Math.floor(e.currentTime)),
            currentMilSecond: Math.floor(e.currentTime)
          })
        })
    }, 1000)
    SoundPlayer.onFinishedPlaying(success => {
      clearInterval(myLoop)
      alert("Done")
    })
  }

  getDurationTime = () => {
    SoundPlayer.getInfo()
      .then(e => {
        this.setState({
          totalLength: this.secondToMinutes(Math.floor(e.duration)),
          totalMilSecond: Math.floor(e.duration)
        })
      })
  }

  secondToMinutes = (sec) => {
    let min = Math.floor(sec / 60)
    sec = sec % 60
    if (sec < 10) {
      return min.toString() + ':0' + sec.toString()
    } else {
      return min.toString() + ':' + sec.toString()
    }
  }

  componentWillUnmount() {
    SoundPlayer.stop()
    SoundPlayer.unmount()
  }

  spin() {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Header message='test app music'/>
        <View style={{flex: 1}}>
          <Animated.View style={{
            marginVertical: 60,
            marginBottom: 40,
            transform: [{rotate: spin}]
          }}>
            <AlbumArt
              url={this.props.album.cover}/>
          </Animated.View>
          <AlbumInformation
            style={{height: 40, backgroundColor: 'red'}}
            musicName={this.props.album.title} musicArtist={this.props.album.artist}/>
        </View>
        <View style={styles.progressBar}>
          <ProgressBar
            process={this.state.currentMilSecond/this.state.totalMilSecond}
            currentTime={this.state.currentPosition}
            duration={this.state.totalLength}/>
        </View>
        <Controls
          paused={this.state.paused}
          onPressPlay={() => {
            SoundPlayer.play()
            this.setState({paused: !this.state.paused})
          }}
          onPressPause={() => {
            SoundPlayer.pause()
            this.setState({paused: !this.state.paused})
          }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#2c2c2c',
    justifyContent: 'space-between'
  },
  albumInfo: {
    backgroundColor: 'red'
  },
  audioElement: {
    height: 0,
    width: 0
  },
  progressBar: {
    marginBottom: 30
  }
})

function mapStateToProps(state) {
  return {
    album: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetch: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
