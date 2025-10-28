

import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { screenHeight, screenWidth } from '../../utils/context';
import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from '@react-native-vector-icons/ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import { get, remove } from '../../utils/storage';
import { useNavigation } from '@react-navigation/native';

export default function HomeHeader() {
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(null);
    const navigation = useNavigation();

    const getUserdata = async () => {
        try {
            const user = await get('user');
            const userToken = await get('token');
            setUserData(user);
            setToken(userToken);
            console.log("User Data from storage:", user);
            console.log("Token from storage:", userToken);
        } catch (error) {
            console.log("Error in getting user data:", error);
        }
    };

    useEffect(() => {
        getUserdata();
    }, []);

    // Handle login/profile button click
    const handlePress = () => {
        if (userData && token) {
            // User is logged in - show profile or account screen
            // navigation.navigate('ProfileScreen');
            console.log('User already logged in:', userData);
            Alert.alert('Profile', `Welcome, ${userData.name}!`);
        } else {
            // User not logged in - navigate to login/register screen
            navigation.navigate('LoginRegisterScreen');
        }
    };

    // Handle logout/clear token
    const handleClearToken = async () => {
        try {
            await remove('token');
            await remove('user');
            setToken(null);
            setUserData(null);
            console.log("Token and user data cleared");
            Alert.alert('Success', 'Logged out successfully');
            navigation.replace('NonAuthNavigation');
        } catch (error) {
            console.log("Error clearing data:", error);
        }
    };

    // Open Drawer
    const openDrawer = () => {
        navigation.openDrawer();
    };
    return (
        <>
            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle={'light-content'}
            />
            <SafeAreaView edges={['top']} style={{ backgroundColor: '#111C43' }}>
                <View style={styles.homeHeader}>
                    <View style={styles.homeHeaderItems}>

                        {/* Left Side */}
                        <View style={styles.HeaderItemsLeft}>

                            {/* Menu Button */}
                            <TouchableOpacity onPress={openDrawer} >

                                <AntDesign name="menu-unfold" size={24} color="white" />
                            </TouchableOpacity>
                            <View style={{ width: screenWidth * 8, height: screenHeight * 3.5 }}>
                                <Image
                                    style={{ width: '100%', height: '100%' }}
                                    source={require('../../image/Logo/DairyLogoWithBG.png')}
                                    resizeMode="contain"
                                />
                            </View>
                        </View>

                        {/* Right Side */}
                        <View style={styles.HeaderItemsRight}>
                            <Ionicons name="search" size={24} color="white" />

                            {/* Login/Register Button */}
                            <View style={{ width: screenWidth * 25, height: screenHeight * 4.5 }}>
                                <TouchableOpacity
                                    style={styles.loginButton}
                                    onPress={handlePress}
                                    activeOpacity={0.7}
                                >
                                    <Text style={styles.loginButtonText}>
                                        {userData ? `Hi, ${userData.name}` : 'Login/Register'}
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Clear Token Button (Only show if logged in) */}
                            {(userData && token) && (
                                <TouchableOpacity
                                    onPress={handleClearToken}
                                    style={styles.clearButton}
                                >
                                    <Ionicons name="log-out-outline" size={20} color="white" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: 'auto',
        padding: screenWidth * 4.5,
        backgroundColor: '#111C43',
    },
    homeHeaderItems: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    HeaderItemsLeft: {
        flexDirection: 'row',
        gap: screenWidth * 3,
        alignItems: 'center',
    },
    HeaderItemsRight: {
        flexDirection: 'row',
        gap: screenWidth * 3,
        alignItems: 'center',
    },
    loginButton: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    loginButtonText: {
        color: 'black',
        fontWeight: '700',
        fontSize: RFValue(10),
        textAlign: 'center',
    },
    clearButton: {
        backgroundColor: '#ff4444',
        padding: 8,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
