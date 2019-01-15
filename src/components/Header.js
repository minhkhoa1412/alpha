import React, {Component} from 'react'
import {
  View, Text, StyleSheet,
  Image, TouchableOpacity
} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

const Header = ({message, onDownPress, onQueuePress, onMessagePress}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Icon name='ios-arrow-back' color="#ccc" size={25} />
    </TouchableOpacity>
    <Text onPress={onMessagePress}
          style={styles.message}>{message.toUpperCase()}</Text>
    <TouchableOpacity onPress={onQueuePress}>
      <Icon name="ios-heart-empty" color="#ccc" size={25} />
    </TouchableOpacity>
  </View>
)

export default Header

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingHorizontal: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 15
  },
  button: {
    opacity: 0.72
  }
})
