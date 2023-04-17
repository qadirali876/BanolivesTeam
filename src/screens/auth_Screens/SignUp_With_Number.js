import { Image, FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const ScreenOTP = () => {
    const [mobileNo, setMobileNo] = useState()
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#2b303e' }}>
            <View style={{ width: "100%", marginTop: '27%', }}>
                <View >
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image style={{ height: 92, width: 102 }} source={require('../assests/pic.png')} /> */}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                        <Text style={{
                            fontSize: 35,
                            color: 'white',
                            fontWeight: '600'
                        }}>Bano</Text>
                        <Text style={{
                            fontSize: 35,
                            color: '#ED2D21',
                            fontWeight: '400'
                        }}>Live</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: 22, fontWeight: "400", color: 'white', marginTop: "3%" }}>Enter Your Phone Number</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: "3%" }}>
                <TextInput placeholder={'Enter OTP Code +92'} placeholderTextColor="grey"
                    onChangeText={(value) => setMobileNo(value)}
                    style={{
                        marginTop: "6%", borderWidth: 1, borderColor: '#7B8FA1',
                        backgroundColor: '#303749', borderRadius: 4, fontSize: 15, marginHorizontal: '7%', paddingLeft: '5%', color: "white"
                    }}>
                </TextInput >
            </View>
            <View style={{ alignItems: "center", margin: '2%' }}>
                <TouchableOpacity onPress={() => {
                    if (mobileNo) {
                        navigation.navigate('EnterOTP', { mobileNo: mobileNo });
                    } else {
                        alert('Please enter a valid mobile number');
                    }
                }}
                    style={{ marginTop: 20, backgroundColor: "#ED2D21", padding: 10, borderRadius: 4, width: "86%" }}>
                    <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 20, padding: 0, color: "white" }}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", width: "100%", marginVertical: "5%" }}>
                <Text style={{ color: "white", fontSize: 21 }}>--------------  OR  --------------</Text>
            </View>
            <View style={{ width: "100%", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                    onPress={() => CheckData()}
                    activeOpacity={0.8}>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            height: 45,
                            width: 45,
                            borderRadius: 70,
                            marginRight: 12,
                            backgroundColor: '#375B95',
                        }}>
                        <FontAwesome
                            name="facebook-f"
                            size={20}
                            color="#fff"
                            style={{
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: 12,
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}>
                    <View
                        style={{
                            backgroundColor: '#fff',
                            height: 45,
                            width: 45,
                            borderRadius: 70,
                            backgroundColor: '#ED2D21',

                        }}>
                        <FontAwesome
                            name="google"
                            size={20}
                            color="#fff"
                            style={{
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginTop: 12,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenOTP

const styles = StyleSheet.create({})