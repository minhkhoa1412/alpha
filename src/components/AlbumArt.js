import React, {Component} from 'react'

import {
  View, Text, StyleSheet, Image,
  ActivityIndicator, TouchableOpacity, Dimensions
} from 'react-native'

const AlbumArt = ({url}) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={{uri: url}}/>
    </TouchableOpacity>
  </View>
)

export default AlbumArt

const {width, height} = Dimensions.get('window')
const imageSize = width - 100

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: (imageSize / 2)
  }
})