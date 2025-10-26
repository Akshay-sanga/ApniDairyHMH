import { Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { screenHeight, screenWidth } from '../../utils/context'
import AntDesign from '@react-native-vector-icons/ant-design'
import Ionicons from '@react-native-vector-icons/ionicons'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'




export default function HomeHeader() {
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

                        <View style={styles.HeaderItemsLeft}>

                            <AntDesign name="menu-unfold" size={24} color="white" />
                            <View style={{ width: screenWidth * 8, height: screenHeight * 3.5 }}>
                                <Image style={{ width: '100%', height: '100%' }} source={require('../../image/Logo/DairyLogoWithBG.png')} />
                            </View>
                        </View>
                        <View style={styles.HeaderItemsRight}>

                            <Ionicons name="search" size={24} color="white" />
                            <View style={{ width: screenWidth * 18, height: screenHeight * 3.5 }}>
                                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                    <Text style={{ color: 'black', fontWeight: '700', fontSize: RFValue(12), textAlign: 'center' }}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    homeHeader: {
        width: '100%',
        height: 'auto',
        padding: screenWidth * 4.5,
        backgroundColor: '#111C43'
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
    }
})