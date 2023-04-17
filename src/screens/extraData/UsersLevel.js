import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import { white } from '../../utils/Styles';

const UsersLevel = ({ data }) => {
    console.log("image", data)
    return (
        <View
            style={[styles.Likebox, { alignSelf: 'center', alignItems: 'center' }]}>
                    <Image
                        // source={require('../../assets/images/crown.png')}
                        source={{ uri: data?.sender_level_image }}
                        style={{ height: 30, width: 65, marginRight: 2, marginBottom: 1 }}
                    />
            
                    <View
                        style={[
                            
                            
                        ]}>
                        <Image
                            // source={require('../../assets/images/crown.png')}
                            source={{ uri: data?.reciever_level_image }}
                            style={{ height: 40, width: 55, marginRight: 2, marginBottom: 1 }}
                        />
                     
                    </View>
          

            {
                data?.receiverLevel == null ?null:  <View style={{ backgroundColor: 'green', borderRadius: 25 }}>
                    <SpeakerIcon
                        name="settings-voice"
                        size={15}
                        style={{ padding: 2, color: white }}
                    />
                </View> 
            }


        </View>
    )
}

export default UsersLevel

const styles = StyleSheet.create({
    Likebox: {
        flexDirection: 'row',
        marginLeft: 5,
    },
    Kbox: {
        backgroundColor: 'red',
        paddingHorizontal: 5,
        borderRadius: 15,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Starbox: {
        backgroundColor: 'green',
        paddingHorizontal: 5,
        borderRadius: 15,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Startxt: {
        color: 'white',
        fontSize: 11,
    },
})