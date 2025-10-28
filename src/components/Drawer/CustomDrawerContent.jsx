import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CommonActions } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from '@react-native-vector-icons/ionicons';

import { RFValue } from 'react-native-responsive-fontsize';
import { screenHeight, screenWidth } from '../../utils/context';

const CustomDrawerContent = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const user = await get('user');
        setUserData(user);
    }
    const handleLogout = async () => {
        await remove('token');
        await remove('user');

        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Splash' }],
            })
        );
    };

    return (
        <DrawerContentScrollView {...props} style={StyleSheet.container}>
            {/* {User Profile Section} */}
            <View style={StyleSheet.profileSection}>
                <Image
                    source={require('../../image/Logo/DairyLogoWithBG.png')}
                    style={styles.logo}
                />
                <Text style={styles.userName}>
                    {userData ? userData.name : 'Guest User'}
                </Text>
                <Text style={styles.userEmail}>
                    {userData ? userData.email : 'guest@example.com'}
                </Text>
            </View>

            {/* Drawer Items */}
            <DrawerItemList {...props} />

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Ionicons name="log-out-outline" size={24} color="#fff" />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111C43',
    },
    profileSection: {
        padding: screenWidth * 2,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
        alignItems: 'center',
        marginBottom: screenWidth * 2,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    userName: {
        fontSize: RFValue(10),
        fontWeight: 'bold',
        color: '#fff',
        marginTop: screenHeight * 10,
    },
    userEmail: {
        fontSize: RFValue(8),
        color: '#ccc',
        marginTop: 5,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: screenWidth * 10,
        marginTop: screenWidth * 10,
        marginHorizontal: screenWidth * 10,
        backgroundColor: '#ff4444',
        borderRadius: 8,
    },
    logoutText: {
        color: '#fff',
        fontSize: RFValue(8),
        fontWeight: '600',
        marginLeft: 10,
    },

})

export default CustomDrawerContent