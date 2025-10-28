import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
    Animated,
    Easing,
} from 'react-native';

import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import Ionicons from '@react-native-vector-icons/ionicons';
import AboutScreen from '../screens/About/AboutScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'lightblue',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#363636',
                    borderTopWidth: 1,
                    borderTopColor: 'rgba(0, 0, 0, 0.1)',
                },
                tabBarLabelStyle: {
                    fontFamily: 'Poppins-Regular',
                    fontSize: 11,
                    marginBottom: Platform.OS === 'ios' ? 5 : 0, // Adjust marginBottom for iOS and Android
                },
                tabBarIconStyle: {
                    marginBottom: Platform.OS === 'ios' ? 1 : 0, // Adjust marginBottom for iOS and Android
                },
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            color={color}
                            size={18}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="About"
                component={AboutScreen}
                options={({ route }) => ({
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons
                            name={focused ? 'information-circle' : 'information-circle-outline'}
                            color={color}
                            size={18}
                        />
                    ),
                })}
            />


        </Tab.Navigator>
    );
}

const TabRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    );
};

export default TabRoutes;

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        top: -4,
        right: -8,
        backgroundColor: 'green',
        borderRadius: 8,
        paddingHorizontal: 4,
        paddingVertical: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeText: {
        color: '#ffffff',
        fontSize: 8,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});