import React,{Component} from 'react';
import {TouchableOpacity,Image} from 'react-native'

export default class AButton extends Component {
  render() {
    const {src} = this.props

    return (
      <TouchableOpacity>
        <Image source={src} />
      </TouchableOpacity>
    )
  }
}