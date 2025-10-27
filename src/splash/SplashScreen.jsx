import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { isAuth } from '../utils/isAuth';

import { screenHeight, screenWidth } from '../utils/context';
import { RFValue } from 'react-native-responsive-fontsize';
const SplashScreen = ({ navigation }) => {
    const checkAuth = async () => {
        const authenticated = await isAuth();
        console.log(authenticated)
        if (authenticated) {
            navigation.replace("AuthNavigation");
        } else {
            navigation.replace("NonAuthNavigation");
        }
    }
    useEffect(() => {
        setTimeout(() => {
            checkAuth();
        }, 2000);
    }, []);
    // useEffect(() => {
    //     // if (isAuth) {
    //     //     navigation.navigate("NonAuthNavigation");
    //     // } else {
    //     //     navigation.navigate("AuthNavigation");
    //     // }
    //     console.log('isAuth', isAuth());
    // })
    return (
        <View style={styles.container}>
            <Image source={require('../image/Logo/DairyLogoWithBG.png')} style={styles.logo} />
            <Text style={styles.welcomeText}>Welcome</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111C43',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: screenWidth * 56,
        height: screenHeight * 25,
        resizeMode: 'contain',
    },
    welcomeText: {
        fontSize: RFValue(24),
        fontWeight: '700',
        color: '#FFFFFF',
        marginTop: screenHeight * 2,
    },

})