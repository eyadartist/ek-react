import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text> textInComponent </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
