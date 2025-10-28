import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigation } from '@react-navigation/drawer'
import HomeScreen from '../src/screens/Home/HomeScreen'
import AboutScreen from '../src/screens/About/AboutScreen'

const Drawer = createDrawerNavigation();

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='About' component={AboutScreen} />
        </Drawer.Navigator>
    )
}


export default DrawerNavigation

