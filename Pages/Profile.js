import React, { useState, useEffect, Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, TouchableNativeFeedback } from 'react-native'
import AppLoading from 'expo-app-loading';
// Icons
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';




export default function Profile() {

        const [currentDate, setCurrentDate] = useState('');

        useEffect(() => {
            var year = new Date().getFullYear();
            setCurrentDate(year);
        }, [])

        return (
            <View style={styles.container}>
                <View style={styles.containerInner}>
                    <ScrollView>
                        <View style={styles.profileCard}>
                            <Image
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                source={require('../assets/images/Profile-Image.jpg')}
                            />
                            <View style={{ paddingTop: 20 }}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, fontFamily: 'Avenir-Bold' }}>Eyad Farah</Text>
                                <Text style={{ color: 'white', textAlign: 'center', paddingTop: 10, fontFamily: 'Avenir-Light', }}>eyadkhfarah@gmail.com</Text>
                                <TouchableNativeFeedback>
                                    <Text style={{ color: 'white', textAlign: 'center', paddingTop: 20, fontFamily: 'Avenir-Bold', }}>Edit the Profile</Text>
                                </TouchableNativeFeedback>
                            </View>
                        </View>




                        <View style={{ paddingHorizontal: 5, justifyContent: 'center', alignItems: 'center', }}>

                            {/* Activty List */}


                            <View style={styles.ActivtyLisT}>
                                <View style={{ paddingHorizontal: 15, }}>
                                    <Text style={{ color: 'white', fontFamily: 'Avenir-Bold', fontSize: 20, }}>My Activties</Text>
                                    <Text style={{
                                        color: 'white', fontFamily: 'Avenir-Light',
                                        marginTop: 5,
                                    }}>See Your all Activties as a client</Text>
                                </View>
                                <View style={{ marginTop: 10 }}>
                                    <TouchableNativeFeedback>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                                                {/* <MaterialCommunityIcons name="image-frame" size={24} color="white" /> */}
                                                <Text style={styles.MenuLinks}>My Orders</Text>
                                            </View>

                                            {/* <Entypo name="chevron-right" size={24} color="white" style={styles.arrowAction} /> */}
                                        </View>
                                    </TouchableNativeFeedback>


                                    <TouchableNativeFeedback>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                {/* <Entypo name="calendar" size={24} color="white" /> */}
                                                <Text style={styles.MenuLinks}>My Booking</Text>
                                            </View>
                                            {/* <Entypo name="chevron-right" size={24} color="white" style={styles.arrowAction} /> */}
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>

                            {/* Menu List */}


                            <View style={styles.MenuList}>
                                <View style={{ justifyContent: 'space-evenly', }}>
                                    <TouchableNativeFeedback>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                                            <Text style={styles.MenuLinks}>Notification Settings</Text>
                                            {/* <Entypo name="chevron-right" size={24} color="white" style={styles.arrowAction} /> */}
                                        </View>
                                    </TouchableNativeFeedback>

                                    <TouchableNativeFeedback>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                                            <Text style={styles.MenuLinks}>Saved Credit Cards</Text>
                                            {/* <Entypo name="chevron-right" size={24} color="white" style={styles.arrowAction} /> */}
                                        </View>
                                    </TouchableNativeFeedback>

                                    <TouchableNativeFeedback>
                                        <View>
                                            <Text style={styles.MenuLinks}>Follow As</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                    <TouchableNativeFeedback>
                                        <View>
                                            <Text style={styles.MenuLinks}>Rate Us 5 Stars</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{
                                color: 'white', fontFamily: 'Avenir-Light',
                                padding: 35,
                            }}>Copyright {currentDate} by <Text style={{ fontFamily: 'Avenir-Bold', }}>EK Art</Text></Text>
                        </View>
                    </ScrollView>
                </View>
            </View >
        )
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
        zIndex: 1
    },
    profileCard: {
        backgroundColor: '#000',
        padding: 15,
        width: '100%',
        borderBottomEndRadius: 33,
        paddingBottom: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ActivtyLisT: {
        backgroundColor: '#363636',
        padding: 35,
        paddingHorizontal: 15,
        width: '100%',
        marginTop: 5,
        borderRadius: 33,
    },
    MenuList: {
        backgroundColor: '#363636',
        padding: 35,
        marginBottom: 0,
        width: '100%',
        marginTop: 5,
        borderRadius: 33,
        alignItems: 'center',
        paddingHorizontal: 15,
        zIndex: 0
    },
    MenuLinks: {
        color: '#fff',
        marginTop: 8,
        padding: 15,
        fontSize: 16,
        fontFamily: 'Avenir-Light',
        width: '100%',
    },
    arrowAction: {
    }
})
