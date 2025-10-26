import { Button, Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenHeight, screenWidth } from '../../utils/context'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

const LoginRegisterScreen = () => {
    const navigation = useNavigation();
    return (
        <>

            <StatusBar
                translucent={true}
                backgroundColor='transparent'
                barStyle={'light-content'}

            />
            <SafeAreaView edges={['top']} style={{ backgroundColor: '#111C43', flex: 1 }}>
                <View style={styles.container} edeges={['bottom', 'right', 'left']}>
                    <Image style={{ width: screenWidth * 56, height: screenHeight * 25, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', position: 'absolute', top: screenHeight * 30, }} source={require('../../image/Logo/DairyLogoWithBG.png')} />


                    <View style={styles.content}>
                        <Text style={styles.contentText}>Your Daily Need at Your Doorstep</Text>
                    </View>

                    <TouchableOpacity activeOpacity={0.8} style={styles.registerBtn} onPress={() => {
                        navigation.navigate('RegisterScreen')
                    }} >
                        <Text style={styles.registerBtnText}>REGISTER NOW</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={() => {
                        navigation.navigate('LoginScreen')
                    }} >
                        <Text style={styles.loginBtnText}>LOG IN NOW</Text>
                    </TouchableOpacity>

                    <View style={{ position: 'absolute', bottom: screenHeight * 5, justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ fontSize: RFValue(10), color: 'white', fontWeight: '700' }}>Guest Login</Text>
                    </View>




                </View>
            </SafeAreaView >
        </>
    )
}

export default LoginRegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    registerBtn: {
        width: screenWidth * 50,  // Adjust width as needed (70% of screen)
        paddingVertical: screenHeight * 1.5,  // Adjust height
        backgroundColor: '#111C43',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: screenHeight * 15,  // Position from bottom
        alignSelf: 'center',
        borderRadius: 5,  // Rounded corners to match the screenshot
        borderWidth: 0.8,
        borderColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },
    loginBtn: {
        width: screenWidth * 50,  // Adjust width as needed (70% of screen)
        paddingVertical: screenHeight * 1.5,  // Adjust height
        backgroundColor: '#111C43',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: screenHeight * 8,  // Position from bottom
        alignSelf: 'center',
        borderRadius: 5,  // Rounded corners to match the screenshot
        borderWidth: 0.8,
        borderColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 4,
    },

    registerBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',  // Semi-bold to match screenshot
        letterSpacing: 1.5,  // Spacing between letters
    },
    loginBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',  // Semi-bold to match screenshot
        letterSpacing: 1.5,  // Spacing between letters
    },
    content: {
        width: screenWidth * 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: screenHeight * 10,
        alignSelf: 'center',
    },
    contentText: {
        fontSize: RFValue(25),
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: 1.2,
    }


})