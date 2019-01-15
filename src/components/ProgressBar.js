import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import * as Progress from 'react-native-progress'
import {metrics} from '../vars/metrics'
import {colors} from '../vars/colors'


class ProgressBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', marginRight: 10, fontSize: 13}}>{this.props.currentTime}</Text>
        <Progress.Bar progress={this.props.process} width={progressWidth} height={2} color={colors.primary}/>
        <Text style={{color: 'white', marginLeft: 10, fontSize: 13}}>{this.props.duration}</Text>
      </View>
    )
  }
}

const progressWidth = (metrics.screen_width * 70) / 100

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row'
  }
})

export default ProgressBar