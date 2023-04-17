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

const seatsFour = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

const TwelveSeats = () => {

    const renderView = ({ item, index }) => {
        return (

            index == 0 ?
                <View style={{marginHorizontal:2}}>
                    <View style={{ marginVertical: 4, borderRadius: 5, height: 110, width: 82, }} >
                        <View style={{ backgroundColor: '#000000aa', width: 17, height: 17, borderRadius: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1, margin: 5 }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{item}</Text>
                        </View>
                        <Image source={require('../../assets/images/audioLiveImgs/fourseatImage.png')} style={{ height: 110, width: 82, borderRadius: 5 }} />
                        <TouchableOpacity style={{ backgroundColor: '#E92F24', width: 50, alignItems: 'center', paddingVertical: 5, borderRadius: 25, position: 'absolute', bottom: 5, left: 6 }}>
                            <Text style={{ fontSize: 8, color: 'white', fontWeight: 'bold' }}>
                                Room Master...
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#E92F24', alignItems: 'center', padding: 4, width: 20, height: 20, borderRadius: 100, position: 'absolute', bottom: 5, right: 2 }}>
                            <Image source={require('../../assets/images/audioLiveImgs/mic.png')} style={{ height: 12, width: 12 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={{marginHorizontal:2}}>
                    <View style={{ backgroundColor: '#000000aa', width: 20, height: 20, borderRadius: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute', zIndex: 1, margin: 8 }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 10 }}>{item}</Text>
                    </View>
                    <View style={{marginVertical:4, borderRadius: 5, height: 110, width: 82 ,justifyContent:'center',alignItems:'center',backgroundColor:'#242A38'}} >
                        <Image source={require('../../assets/images/audioLiveImgs/chair.png')} style={{ height: 40, width: 40, }} />
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
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <FlatList
                    data={seatsFour}
                    renderItem={renderView}
                    numColumns={4}
                    key={"-"}
                    style={{}}
                />
            </View>




            <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                <View style={{}}>

                    <View style={{ marginVertical: 20, alignItems: 'center' }}>
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

export default TwelveSeats;

const styles = StyleSheet.create({
});
