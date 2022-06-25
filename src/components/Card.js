import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {text} = this.props
    return (
      <View>
        <Text>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})