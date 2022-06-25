import { Text, StyleSheet, View,TextInput, FlatList,Image ,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import data from './data.js'
import FlatListExample from './src/components/FlatListExample'

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <FlatListExample></FlatListExample>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})