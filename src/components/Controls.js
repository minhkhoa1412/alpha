import React, { Component } from 'react';
import {
  View, StyleSheet,
  Image, TouchableOpacity,
} from 'react-native';

import {images} from '../vars/images'
import AButton from './AButton'

const Controls = ({paused, repeatOn, onPressPlay, onPressPause}) => (
  <View style={styles.container}>
    <AButton src={images.shuffle} />
    <View style={{width: 40}} />
    <AButton src={images.skipPrev} />
    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Image source={images.pause}/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Image source={images.play}/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <AButton src={images.skipNext} />
    <View style={{width: 40}} />
    <AButton src={images.repeat} />
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
})