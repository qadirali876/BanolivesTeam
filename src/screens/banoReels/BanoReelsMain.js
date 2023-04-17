import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import CameraIcons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from 'react-native-vector-icons/AntDesign';







const BanoReelsMain = () => {
    return (
        <ImageBackground
            style={{ flex: 1, backgroundColor: 'green' }}
            source={require('../../assets/images/banoReels/backGround.jpeg')}
        >

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%' }}>
                    <View>
                        <Image source={require('../../assets/images/wealthClass/profile.jpg')} style={{ height: 45, width: 45, borderRadius: 100 }} />
                    </View>
                    <TouchableOpacity>
                        <View style={{ marginLeft: 10, paddingVertical: 2, flexDirection: 'row', backgroundColor: '#EB342A', alignItems: 'center', paddingHorizontal: 6, borderRadius: 25 }}>
                            <CameraIcons name="camera-outline" size={18} style={{ color: 'white' }} />
                            <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold', marginLeft: 4 }}>Create </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: '#2F241Daa', width: '30%', borderRadius: 25, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <CameraIcons name="search" size={18} style={{ color: 'white' }} />
                        <TextInput
                            placeholder='Search'
                            // value='search'
                            placeholderTextColor='#FFFFFF'
                            style={{ justifyContent: 'center', alignItems: 'center', width: '90%', height: 35, color: '#FFFFFF' }}
                        />
                    </View>
                </View>
            </View>

            <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: 1, marginRight: 8, marginBottom: 80 }}>
                <TouchableOpacity>
                    <View style={{ alignItems: 'center', width: '12%', marginBottom: 10 }}>
                        <View>
                            <CameraIcons name="md-add-circle-sharp" size={16} style={{ color: '#EB342A', position: 'absolute', zIndex: 1, right: 0, top: -5 }} />
                            <Image source={require('../../assets/images/wealthClass/profile.jpg')} style={{ height: 38, width: 38, borderRadius: 100 }} />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ alignItems: 'center', width: '12%', marginBottom: 10 }}>
                        <View style={{ backgroundColor: '#3E352Faa', width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <CameraIcons name="heart-outline" size={20} style={{ color: 'white' }} />
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 13 }}>12.5</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ alignItems: 'center', width: '12%', marginBottom: 10 }}>
                        <View style={{ backgroundColor: '#3E352Faa', width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Message name="message1" size={20} style={{ color: 'white' }} />
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 13 }}>1.5K</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{ alignItems: 'center', width: '12%', marginBottom: 10 }}>
                        <View style={{ backgroundColor: '#3E352Faa', width: 35, height: 35, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Share name="share-outline" size={20} style={{ color: 'white' }} />
                        </View>
                        <Text style={{ color: '#FFFFFF', fontSize: 13 }}>3.5K</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

export default BanoReelsMain

const styles = StyleSheet.create({})