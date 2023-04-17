import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    ScrollView,
    Modal,
    FlatList,
} from 'react-native';
import React, { useState, useRef } from 'react';
import Cancel from 'react-native-vector-icons/Entypo';
import DropDown from 'react-native-vector-icons/MaterialIcons';
import Camera from 'react-native-vector-icons/Octicons';
import Users from 'react-native-vector-icons/FontAwesome5';
import Mic from 'react-native-vector-icons/Feather';

const AudioLiveMain = () => {


    return (
        <ImageBackground style={{ flex: 1, backgroundColor: '#242A38' }}
            source={require('../../assets/images/audioLiveImgs/background.png')}
        >
            <View style={{}}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 5 }}>
                    <Cancel name="cross" size={30} style={{ color: 'white', alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: '#000000aa', width: '90%', alignSelf: 'center', marginTop: 10, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 100 }}>
                        <Image source={require('../../assets/images/wealthClass/profile.jpg')} style={{ height: 60, width: 60, borderRadius: 100 }} />
                        <View style={{ backgroundColor: '#000000aa', position: 'absolute', right: 0, bottom: 0, padding: 1, borderRadius: 100, padding: 4 }}>
                            <DropDown name="camera-alt" size={15} style={{ color: 'white' }} />
                        </View>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 23 }}>Add a tittle a chat</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Users name="users" size={22} style={{ color: 'white', alignSelf: 'center' }} />
                            <View style={{ marginLeft: 8, padding: 3, borderRadius: 5 }}>
                                <Text style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 }}>Public</Text>
                            </View>
                            <DropDown name="arrow-drop-down" size={30} style={{ color: 'white', alignSelf: 'center' }} />
                        </View>
                    </View>
                </View>

                <View style={{ height: 1, backgroundColor: '#FFFFFFaa', width: '90%', marginTop: 10, alignSelf: 'center' }} />
                <Text style={{ fontSize: 16, color: '#FFFFFF', marginLeft: 15, marginVertical: 10 }}>Select Tag</Text>

                <View style={{ marginHorizontal: 8, flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 15 }}>
                    <TouchableOpacity style={{ backgroundColor: '#000000aa', width: '30%', borderRadius: 10, paddingVertical: 3 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 6 }}>
                            <View>
                                <Image source={require('../../assets/images/audioLiveImgs/heart.png')} style={{ height: 18, width: 18, borderRadius: 100 }} />
                            </View>
                            <View>
                                <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>Sentiment</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#000000aa', width: '25%', borderRadius: 10, paddingVertical: 3 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 6 }}>
                            <View>
                                <Image source={require('../../assets/images/audioLiveImgs/music.png')} style={{ height: 18, width: 18, borderRadius: 100 }} />
                            </View>
                            <View>
                                <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>Music</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#000000aa', width: '28%', borderRadius: 10, paddingVertical: 3 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 6 }}>
                            <View>
                                <Image source={require('../../assets/images/audioLiveImgs/gaming.png')} style={{ height: 18, width: 18, borderRadius: 100 }} />
                            </View>
                            <View>
                                <Text style={{ color: '#FFFFFF', fontSize: 10, fontWeight: 'bold' }}>Gaming</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#000000aa', width: '8%', borderRadius: 100, justifyContent: 'center' }}>
                        <DropDown name="keyboard-arrow-right" size={18} style={{ color: 'white', alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                <View style={{ paddingVertical: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/audioLiveImgs/seats4.png')} style={{ height: 22, width: 22 }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, lineHeight: 26 }}>4 Seats</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/audioLiveImgs/seats6.png')} style={{ height: 22, width: 22 }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, lineHeight: 26 }}>6 Seats</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/audioLiveImgs/seats9.png')} style={{ height: 22, width: 22 }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, lineHeight: 26 }}>9 Seats</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image source={require('../../assets/images/audioLiveImgs/seats12.png')} style={{ height: 22, width: 28 }} />
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 15, lineHeight: 26, }}>12 Seats</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 25, alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#E92F24', width: '60%', alignItems: 'center', paddingVertical: 8, borderRadius: 25, }}>
                            <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                                GO LIVE
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ alignItems: 'center', width: '28%' }} >
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#000000aa', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Camera name="device-camera-video" size={20} style={{ color: 'white', alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, lineHeight: 25 }}>
                                Live
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', width: '28%' }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#000000aa', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Mic name="mic" size={18} style={{ color: 'white' }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, lineHeight: 25 }}>
                                Audio LIVE
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', width: '28%' }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#1AB846', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Users name="users" size={18} style={{ color: 'white' }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, lineHeight: 25 }}>
                                Multiple LIVE
                            </Text>
                        </View>
                    </View>

                </View>
            </View>



        </ImageBackground>
    );
};

export default AudioLiveMain;

const styles = StyleSheet.create({
});
