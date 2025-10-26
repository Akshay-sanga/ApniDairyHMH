import { View, StyleSheet, Image, TextInput, Text, Touchable, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'


const coreComponents = () => {
    const [name, setName] = useState('')
    return (
        <ScrollView>


            <View style={style.container}>
                <Text style={style.text}>Beautiful Girl</Text>
                <Image source={{
                    uri: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg'
                }}
                    style={style.image}
                    resizeMode='cover'
                />
                {/* <Image source={require('../image/unnamed.jpg')} style={style.image} /> */}
                <TextInput
                    value={name}
                    placeholder='Enter Email'
                    style={style.textInput}
                    onChangeText={txt => {
                        setName(txt);
                    }}
                    secureTextEntry={false}
                />
                <TouchableOpacity style={{
                    width: 150,
                    backgroundColor: 'blue',
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                    marginTop: 10

                }}
                    activeOpacity={0.5}
                    onPress={() => {

                        alert('Good Morning')
                    }
                    }
                >
                    <Text style={{
                        color: 'white'
                    }}>Login</Text>
                </TouchableOpacity>

                <FlatList
                    data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                    keyExtractor={({ item, index }) => 'id' + index}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{
                                backgroundColor: 'yellow', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text >Header Item</Text>
                            </View>
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ backgroundColor: 'blue', width: '100%', height: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>End Item</Text>
                            </View>
                        )
                    }
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    width: 300,
                                    height: 100,
                                    justifyContent: 'center',
                                    backgroundColor: 'skyblue',
                                    alignItems: 'center'
                                }}>
                                <Text >{'Item' + (index + 1)}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </ScrollView>
    )
}

export default coreComponents

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        width: '80%',
        height: 40,
        marginTop: 20,
        paddingLeft: 10,
        borderRadius: 5
    }
})