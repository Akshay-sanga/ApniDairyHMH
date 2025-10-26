import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { screenHeight, screenWidth } from '../../utils/context';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';

import adminStore from '../../Zustand/stores/adminStore';

export default function RegisterScreen() {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [accountNo, setAccountNo] = useState('');

    const {
        adminList,
        selectedAdminId,
        loading: adminLoading,
        error: adminError,
        fetchAdmins,
        setSelectedAdmin,
        registerUser,
    } = adminStore();

    useEffect(() => {
        console.log('Component mounted, fetching admins...');
        fetchAdmins();
    }, []);

    useEffect(() => {
        console.log('Admin List Updated:', adminList);
    }, [adminList]);

    const handleAdminSelect = (item) => {
        setSelectedAdmin(item.value);
        console.log('Selected Admin:', item);
    };

    const handleSubmit = async () => {
        // Validation
        if (!name || !email || !password || !mobile || !accountNo || !selectedAdminId) {
            Alert.alert('Error', 'All fields are required');
            return;
        }

        const userData = {
            name,
            email,
            password,
            mobile,
            accountNo,
            selectedAdminId
        };

        try {
            const response = await registerUser(userData);
            console.log('User registered successfully:', response);

            if (response.status) {
                Alert.alert('Success', response.message, [
                    {
                        text: 'OK',
                        onPress: () => navigation.navigate('HomeScreen')
                    }
                ]);
            } else {
                Alert.alert('Error', response.message);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            Alert.alert('Error', 'Failed to register user. Please try again.');
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['bottom', 'right', 'left']}>
            <StatusBar
                translucent
                backgroundColor={'transparent'}
                barStyle={'light-content'}
            />

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.content}>
                    <Text style={styles.contentText}>Welcome to our Dairy</Text>
                    <Text style={styles.contentText2}>
                        Experience the pure taste of locally sourced, farm-fresh milk delivered daily to your home
                    </Text>
                </View>

                <View style={styles.formBG}>
                    <View style={styles.form}>
                        <View style={styles.signUpBox}>
                            <Text style={styles.signUpTitle}>Sign Up</Text>
                            <View style={styles.decorativeBox} />
                        </View>

                        <View style={styles.inputBoxContainer}>
                            <Text style={styles.label}>Select Admin</Text>
                            <CustomDropdown
                                data={adminList || []}
                                placeholder="Choose your admin..."
                                onSelect={handleAdminSelect}
                                value={selectedAdminId}
                            />

                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={setName}
                                value={name}
                                placeholder="Enter your name"
                            />

                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={setEmail}
                                value={email}
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={setPassword}
                                value={password}
                                placeholder="Enter your password"
                                secureTextEntry
                                autoCapitalize="none"
                            />

                            <Text style={styles.label}>Mobile No.</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={setMobile}
                                value={mobile}
                                placeholder="Enter your mobile number"
                                keyboardType="phone-pad"
                                maxLength={10}
                            />

                            <Text style={styles.label}>Account No.</Text>
                            <TextInput
                                style={styles.inputBox}
                                onChangeText={setAccountNo}
                                value={accountNo}
                                placeholder="Enter your account number"
                                keyboardType="numeric"
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.loginBtn}
                            onPress={handleSubmit}
                            disabled={adminLoading}
                        >
                            <Text style={styles.loginBtnText}>
                                {adminLoading ? 'REGISTERING...' : 'REGISTER NOW'}
                            </Text>
                        </TouchableOpacity>

                        {adminError && (
                            <Text style={styles.errorText}>{adminError}</Text>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111C43',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    content: {
        width: screenWidth * 85,
        gap: screenHeight * 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: screenHeight * 10,
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
        minHeight: screenHeight * 70,
        backgroundColor: 'white',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        marginTop: screenHeight * 5,
        paddingBottom: 30,
    },
    form: {
        width: '100%',
        paddingTop: 20,
    },
    signUpBox: {
        position: 'relative',
    },
    signUpTitle: {
        fontSize: RFValue(19),
        fontWeight: '500',
        marginLeft: '5%',
        marginBottom: screenHeight * 1,
    },
    decorativeBox: {
        width: screenWidth * 15,
        height: screenHeight * 0.3,
        backgroundColor: '#111C43',
        position: 'absolute',
        top: screenHeight * 4,
        left: '10%',
    },
    inputBoxContainer: {
        width: screenWidth * 90,
        alignSelf: 'center',
        paddingTop: screenHeight * 0.5,
    },
    label: {
        fontSize: RFValue(12),
        marginTop: screenHeight * 1,
        marginBottom: screenHeight * 0.2,
    },
    inputBox: {
        fontSize: RFValue(9),
        width: '100%',
        paddingVertical: screenHeight * 1,
        marginBottom: screenHeight * 1,
        borderBottomColor: '#111C43',
        borderBottomWidth: 1,
    },
    loginBtn: {
        width: '90%',
        height: screenHeight * 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
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
        backgroundColor: '#111C43',
        marginTop: screenHeight * 2,
    },
    loginBtnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1.5,
    },
    errorText: {
        color: 'red',
        fontSize: RFValue(10),
        textAlign: 'center',
        marginTop: 10,
    },
});
