


import { View, Text } from 'react-native';
import React from 'react';
import LoginScreen from '../screens/Auth/LoginScreen';
import SplashScreen from '../splash/SplashScreen';
import LoginRegisterScreen from '../screens/Auth/LoginRegisterScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import AboutScreen from '../screens/About/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './TabRoutes';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import GuestHomeScreen from '../screens/Home/GuestHomeScreen';
import Settings from '../screens/Settings/Settings';
import CustomDrawerContent from '../components/Drawer/CustomDrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { screenWidth } from '../utils/context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// ✅ Add LoginRegisterScreen to AuthNavigation
const AuthNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#111C43',
                    width: screenWidth * 45
                },
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#ccc',

            }}
        >

            <Drawer.Screen name='TabRoutes' component={TabRoutes} />

            <Drawer.Screen name='Settings' component={Settings} />

        </Drawer.Navigator >
    );
};

const NonAuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='GuestHomeScreen' screenOptions={{ headerShown: false }}>

            <Stack.Screen name="LoginRegisterScreen" component={LoginRegisterScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="GuestHomeScreen" component={GuestHomeScreen} />
        </Stack.Navigator>
    );
};

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="NonAuthNavigation" component={NonAuthNavigation} />
            <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
        </Stack.Navigator>
    );
};

const AllRoutes = () => {
    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    );
};

export default AllRoutes;
