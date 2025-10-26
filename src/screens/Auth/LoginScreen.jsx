import { ImageBackground, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenHeight, screenWidth } from '../../utils/context'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'



export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('Type here your email');
    const [password, onChangePassword] = useState('Type here your password');
    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
            <StatusBar translucent
                backgroundColor={'transparent'}
                barStyle={'light-content'}
            />

            <View style={styles.content}>
                <Text style={styles.contentText}>Welcome to our Dairy</Text>
                <Text style={styles.contentText2}>Experience the pure taste of locally sourced, farm-fresh milk delivered daily to your home</Text>
            </View>


            <View style={styles.formBG}>
            </View>

            {/* Form Start */}
            <View style={styles.form}>

                <Text style={{ fontSize: RFValue(13), position: 'absolute', top: '40', left: '5%', fontWeight: '500', fontSize: RFValue(19), }}>Sign In</Text>
                <View style={{ width: screenWidth * 15, height: screenHeight * 0.3, backgroundColor: '#111C43', position: 'absolute', top: screenHeight * 8, left: '8%' }}></View>
                <View style={styles.inputBoxContainer}>
                    <Text style={{ fontSize: RFValue(13) }}>Email</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChange={onChangeEmail}
                        value={email} />
                    <Text style={{ fontSize: RFValue(13), }}>Password</Text>
                    <TextInput
                        style={styles.inputBox}
                        onChange={onChangePassword}
                        value={password} />
                    <Text style={{ fontSize: RFValue(10), color: 'rgba(206, 42, 42, 1)', alignSelf: 'flex-end' }}>Forget Password</Text>
                </View>

                <TouchableOpacity activeOpacity={0.8} style={styles.loginBtn} onPress={() => {
                    navigation.navigate('HomeScreen')
                }} >
                    <Text style={styles.loginBtnText}>LOG IN NOW</Text>
                </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', top: screenHeight * 90, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ fontSize: RFValue(10), color: '#333', fontWeight: '700' }}>Guest Login</Text>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111C43',


    },
    loginBtn: {
        width: '90%',  // Adjust width as needed (70% of screen)
        height: screenHeight * 6,  // Adjust height
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: screenHeight * 33, // Position from bottom
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
        backgroundColor: '#111C43'
    },

    loginBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',  // Semi-bold to match screenshot
        letterSpacing: 1.5,  // Spacing between letters
    },
    content: {
        width: screenWidth * 85,
        gap: screenHeight * 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: screenHeight * 15,
        alignSelf: 'center',
    },
    contentText: {
        fontSize: RFValue(23),
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        letterSpacing: 1.2,
    },
    contentText2: {
        fontSize: RFValue(14),
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',

    },
    formBG: {
        width: '100%',
        height: screenHeight * 50,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopRightRadius: 600,
        transform: [{ scaleX: 2 }], // Stretch horizontally
        // overflow: 'hidden',
        position: 'absolute',
        bottom: '0',
    },
    form: {
        width: '100%',
        height: screenHeight * 50,
        // justifyContent: 'center',
        // alignSelf: 'center',
        // alignItems: 'center',
        position: 'absolute',
        bottom: '0',
    },
    inputBoxContainer: {
        width: '100%',
        position: 'absolute',
        top: screenHeight * 10,
        left: '5%',
        width: screenWidth * 90,
        height: screenHeight * 25,
        alignItems: 'flex-start',
    },
    inputBox: {
        fontSize: RFValue(10),
        width: '100%',
        marginBottom: screenHeight * 2,
        borderBottomColor: '#111C43',
        borderBottomWidth: 1,
    }

})