
import { View, Text } from 'react-native'
import React from 'react'

import LoginScreen from '../screens/Auth/LoginScreen'
import SplashScreen from '../splash/SplashScreen'
import FirstScreen from '../screens/Auth/LoginRegisterScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'
import AboutScreen from '../screens/About/AboutScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/Home/HomeScreen'

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
            <Stack.Screen name={'AboutScreen'} component={AboutScreen} />
        </Stack.Navigator>
    )
}

const NonAuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'LoginRegisterScreen'} component={FirstScreen} />
            <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} />
            <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
            <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
        </Stack.Navigator>
    )
}

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={'Splash'} component={SplashScreen} />
            <Stack.Screen name={'NonAuthNavigation'} component={NonAuthNavigation} />
            <Stack.Screen name={'AuthNavigation'} component={AuthNavigation} />
        </Stack.Navigator>
    )
}
const AllRoutes = () => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default AllRoutes