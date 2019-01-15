import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'

const AlbumInformation = ({musicName, musicArtist}) => (
    <View style={styles.container}>
      <Text style={styles.musicName}>{musicName}</Text>
      <Text style={styles.musicArtist}>{musicArtist}</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  musicName: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  musicArtist: {
    fontSize: 15,
    color: 'white',
    marginTop: 10
  }
})

export default AlbumInformation