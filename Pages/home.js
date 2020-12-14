import React, { Component, useState } from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, Button, FlatListt } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// Icons
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


const [order, setOrder] = useState([
    { OrderCode: 'EgAsTa#2', key: '1' },
    { OrderCode: 'EgAsAt#13', key: '2' },
    { OrderCode: 'EGCaMo#4', key: '3' },
    { OrderCode: 'EgAs3b#4', key: '4' },
    { OrderCode: 'EgAsM7#3', key: '5' },
    { OrderCode: 'EgAsRa#6', key: '6' },
    { OrderCode: 'EgAsM7#2', key: '7' },
    { OrderCode: 'EgAsTa1', key: '8' },
])



export default class Home extends Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>


                    <View style={styles.card}>
                        <Text style={{ color: 'white', fontFamily: 'Avenir-Bold' }} size={25}>Hello there,</Text>
                        <Text style={{ color: 'white', fontFamily: 'Avenir-Bold', marginTop: 25, textAlign: 'right', }}>Your Balance</Text>
                        <Text style={styles.balance} size={55}>400 L.E.</Text>
                        <TouchableNativeFeedback>
                            <View style={styles.charge}>
                                <Text style={{ padding: 5, fontFamily: 'Avenir-Bold', fontSize: 18 }}>Charge</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>

                    <View>
                        <View style={styles.header}>
                            <View style={{
                                width: '125%',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                flexDirection: 'row',
                            }}>
                                <Text style={{ color: 'white', fontFamily: 'Avenir-Bold', fontSize: 18, textAlign: 'left', }}>Your Orders</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <AntDesign name="search1" size={24} color="white" style={{ paddingRight: 15, paddingLeft: 15 }} />
                                    <MaterialCommunityIcons name="filter-variant" size={24} color="white" />
                                </View>
                            </View>
                        </View>
                        <FlatList
                            data={order}
                            renderItems={({ details }) => (

                                <View style={{ justifyContent: "center", }}>

                                    <View>
                                        <TouchableNativeFeedback>
                                            <View style={styles.messgaes}>
                                                <View style={{ borderRadius: 33 }}>

                                                    <View style={{ width: '90%' }}>
                                                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Avenir-Bold' }}>{details.OrderCode}</Text>
                                                    </View>
                                                </View>
                                                <View>
                                                    <Entypo name="chevron-right" size={24} color="white" />
                                                </View>
                                            </View>

                                        </TouchableNativeFeedback>
                                    </View>

                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#363636',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    containerInner: {
        width: '100%',
        height: "100%",
        flex: 1,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#363636',
        marginTop: 14,
        padding: 30,
        width: "100%",
        paddingBottom: 35,
        borderRadius: 33,
        justifyContent: 'space-around',
        marginHorizontal: 20
    },

    balance: {
        color: 'white',
        fontSize: 34,
        fontFamily: 'Avenir-Bold',
        textAlign: 'right',
    },
    charge: {
        backgroundColor: 'white',
        color: '#000',
        padding: 7,
        width: '100%',
        borderRadius: 33,
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'white',
        padding: 35,
        borderRadius: 50,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '100%',
        marginTop: 5,
        backgroundColor: 'black',
        padding: 7,
        paddingVertical: 15,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10
    },
    messgaes: {
        marginTop: 5,
        marginBottom: 10,
        padding: 15,
        marginHorizontal: 20,
        paddingHorizontal: 18,
        width: '100%',
        backgroundColor: '#363636',
        borderRadius: 22,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }
});