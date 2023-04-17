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
import SeatesHeader from './components/SeatesHeader';

const seatsFour = ['01', '02', '03', '04'];

const FourSeats = () => {

    const renderView = ({ item, index }) => {
        return (
            index == 0 ?
                <View style={{}}>
                    <View style={{ height: 200, marginVertical: 10,borderRadius: 15, marginHorizontal: 5, height: 200, width: 155 }} >
                        <View style={{ backgroundColor: '#000000aa', width: 20, height: 20, borderRadius: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1, margin: 5 }}>
                            <Text style={{ color: '#FFFFFF',fontSize:10 }}>{item}</Text>
                        </View>
                        <Image source={require('../../assets/images/audioLiveImgs/fourseatImage.png')} style={{ height: 200, width: 155, borderRadius: 15 }} />
                        <TouchableOpacity style={{ backgroundColor: '#E92F24', width: 70, alignItems: 'center', paddingVertical: 5, borderRadius: 25, position: 'absolute', bottom: 5, left: 10 }}>
                            <Text style={{ fontSize: 11, color: 'white', fontWeight: 'bold' }}>
                                Room Master...
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#E92F24', alignItems: 'center', padding: 4, width: 25, height: 25, borderRadius: 100, position: 'absolute', bottom: 5, right: 10 }}>
                            <Image source={require('../../assets/images/audioLiveImgs/mic.png')} style={{ height: 15, width: 15 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                :

                <View style={{}}>
                    <View style={{ backgroundColor: '#000000aa', width: 20, height: 20, borderRadius: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1, margin: 15 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{item}</Text>
                    </View>
                    <View style={{ height: 200, marginVertical: 10, borderRadius: 15, marginHorizontal: 5, height: 200, width: 155, backgroundColor: '#242A38', justifyContent: 'center', alignItems: 'center' }} >
                        <Image source={require('../../assets/images/audioLiveImgs/chair.png')} style={{ height: 60, width: 60,  }} />
                    </View>
                </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#303749' }}

        >
            <View style={{}}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 5 }}>
                    <Cancel name="cross" size={30} style={{ color: 'white', alignSelf: 'center' }} />
                </TouchableOpacity>
            </View>

            <SeatesHeader />
            <View style={{ marginHorizontal: 15, marginTop: 15, }}>
                <FlatList
                    data={seatsFour}
                    renderItem={renderView}
                    numColumns={2}
                    key={"-"}
                />


            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                <View style={{ paddingVertical: 20 }}>

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
                                <View style={{ backgroundColor: '#242A38', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                    <Camera name="device-camera-video" size={20} style={{ color: 'white', alignSelf: 'center' }} />
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, lineHeight: 25 }}>
                                Live
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center', width: '28%' }}>
                            <TouchableOpacity>
                                <View style={{ backgroundColor: '#242A38', width: 40, height: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
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



        </View>
    );
};

export default FourSeats;

const styles = StyleSheet.create({
});


