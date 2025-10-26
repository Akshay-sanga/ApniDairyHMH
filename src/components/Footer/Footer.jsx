import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from '@react-native-vector-icons/ant-design'
import { screenHeight, screenWidth } from '../../utils/context'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6'


export default function Footer() {
    return (
        <View style={styles.footer}>
            <View style={styles.footerItems}>
                <View style={styles.fIcon}>
                    <AntDesign name='home' size={24} />
                    <Text >Home</Text>
                </View>
                <View style={styles.fIcon}>
                    <AntDesign name='product' size={24} />
                    <Text >Products</Text>
                </View>
                <View style={styles.fIcon}>
                    <AntDesign name='profile' size={24} />
                    <Text >Balance</Text>
                </View>
                <View style={styles.fIcon}>
                    <AntDesign name='user' size={24} />
                    <Text >Profile</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#fff',
        paddingRight: screenWidth * 5,
        paddingLeft: screenWidth * 5,
        paddingTop: screenHeight * 2,
        paddingBottom: screenHeight * 3,
    },
    footerItems: {
        paddingBottom: screenHeight * 1,
        borderBottomColor: '#EEEEEE',
        borderBottomWidth: 1,
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    fIcon: {
        alignItems: 'center'
    }
})