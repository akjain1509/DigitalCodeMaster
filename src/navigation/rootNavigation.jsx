import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {selectUser} from '../Features/auth/authSlice';
import {useSelector} from 'react-redux';

import HomeScreen from '../screens/home';
import GameScreen from '../screens/game';
import NotificationScreen from '../screens/notification';
import ProfileScreen from '../screens/profile';
import AppLoader from '../components/appLoader';
import {Icons} from '../utilities/constant';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={AppLoader} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          height: 60,
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            return (
              <View>
                {
                  (iconName = focused ? (
                    <Image
                      source={Icons.active_home}
                      style={{width: 35, height: 35}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={Icons.inactive_home}
                      style={{width: 23, height: 23}}
                    />
                  ))
                }
              </View>
            );
          } else if (route.name === 'Game') {
            return (
              <View>
                {
                  (iconName = focused ? (
                    <Image
                      source={Icons.active_game}
                      style={{width: 30, height: 30}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={Icons.inactive_game}
                      style={{width: 23, height: 23}}
                      resizeMode="contain"
                    />
                  ))
                }
              </View>
            );
          } else if (route.name === 'Notification') {
            return (
              <View>
                {
                  (iconName = focused ? (
                    <Image
                      source={Icons.active_bell}
                      style={{width: 35, height: 35}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={Icons.inactive_bell}
                      style={{width: 23, height: 23}}
                    />
                  ))
                }
              </View>
            );
          } else if (route.name === 'Profile') {
            return (
              <View>
                {
                  (iconName = focused ? (
                    <Image
                      source={Icons.active_profile}
                      style={{width: 30, height: 30}}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={Icons.inactive_profile}
                      style={{width: 23, height: 23}}
                    />
                  ))
                }
              </View>
            );
          }
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{title: ''}} />
      <Tab.Screen name="Game" component={GameScreen} options={{title: ''}} />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{title: ''}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: ''}}
      />
    </Tab.Navigator>
  );
};
