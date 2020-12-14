import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Message extends Component {

    render() {
        if (!fontsLoaded) {
            return <AppLoading />;
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.containerInner}>
                        <Text style={{ color: 'white' }}> textInComponent </Text>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInner: {
        width: '100%',
        height: "100%",
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
