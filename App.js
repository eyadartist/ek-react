import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
// Fonts
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
// Pages
import Home from "./Pages/home";
import Message from "./Pages/message";
import Profile from "./Pages/Profile";
import Chat from "./Pages/Chat";
import Settings from './Pages/Settings'
// Icons
import { AntDesign, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {
            height: 120,
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Avenir-Bold',
          },
          headerRight: ({ navigation }) => (
            <View style={{ marginRight: 20, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <MaterialIcons name="notifications-none" size={28} color="white" style={{ marginRight: 10, }} />
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                }}
                onPress={() => navigation.navigate('Profile')}
                source={require('./assets/images/Profile-Image.jpg')}
              />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}


function MessageStackScreen() {

  return (
    <MessageStack.Navigator>
      <MessageStack.Screen
        name="Message"
        component={Message}
        options={{
          title: 'Messages',
          headerStyle: {
            height: 120,
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Avenir-Bold',
          },
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Entypo name="dots-three-vertical" size={24} color="white" />
            </View>
          )
        }}
      />
      {/* <MessageStack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerStyle: {
              height: 120,
              backgroundColor: '#000000',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Avenir-Bold',
            },
            headerRight: () => (
              <View style={{ marginRight: 20 }}>
                <Entypo name="dots-three-vertical" size={24} color="white" />
              </View>
            )
          }}
        /> */}
    </MessageStack.Navigator>
  );
}

function ProfileStackScreen() {


  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {
            height: 120,
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Avenir-Bold',
          },
          headerRight: () => (
            <View style={{ marginRight: 20 }}>
              <Feather name="settings" size={24} color="white" onPress={() => navigation.navigate('Settings')} />
            </View>
          )
        }}
      />
      {/* <ProfileStack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          headerStyle: {
            height: 120,
            backgroundColor: '#000000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontFamily: 'Avenir-Bold',
          },
        }}
      /> */}
    </ProfileStack.Navigator>
  );


}

const HomeTab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <HomeTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Message') {
              iconName = focused ? 'message-circle' : 'message-circle';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return (
              <View style={{ padding: 20 }}>
                <Feather name={iconName} size={27} color={color} />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#000',
          showLabel: false,
          tabStyle: {
            backgroundColor: '#363636',
            borderColor: '#000',
          },
          style: {
            height: 70,
            borderTopWidth: 0,
            shadowOffset: 0
          }
        }}
      >
        <HomeTab.Screen name="Home" component={HomeStackScreen} />
        <HomeTab.Screen name="Message" component={MessageStackScreen} />
        <HomeTab.Screen name="Profile" component={ProfileStackScreen} />
      </HomeTab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );

}

