import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const SplashScreen = ({ navigation }) => {
    const [isAuth, setIsAuth] = useState(true);
    useEffect(() => {
        if (isAuth) {
            navigation.navigate("NonAuthNavigation");
        } else {
            navigation.navigate("AuthNavigation");
        }
    })
    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})