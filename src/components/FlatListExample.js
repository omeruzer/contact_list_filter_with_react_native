import { Text, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import data from '../../data.js'


export default class FlatListExample extends Component {
    state = {
        text: '',
        contacts:data
    }
    renderContactsItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={[styles.itemContainer]}>
                <Image style={styles.avatar} source={{ uri: item.picture }} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text>{item.company}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    searchFilter = (text)=>{
        const newData = data.filter(item=>{
            const listItem = `${item.name.toLowerCase()} ${item.company.toLowerCase()} `

            return listItem.indexOf(text.toLowerCase()) > -1;
        })

        this.setState({
            contacts:newData
        })
    }

    ListHeader = () => {
        const { text } = this.state;
        return (
            <View style={styles.searchContainer}>
                <TextInput
                    onChangeText={text=>{
                        this.setState({
                            text:text
                        });

                        this.searchFilter(text)
                    }}
                    value={text}
                    placeholder='Search...'
                    style={styles.searchInput}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList ListHeaderComponent={this.ListHeader} data={this.state.contacts} renderItem={this.renderContactsItem} keyExtractor={item => item._id} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 3,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    textContainer: {
        justifyContent: 'space-around'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    },
    searchContainer: {
        padding: 10,
    },
    searchInput: {
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        padding: 10
    }
})