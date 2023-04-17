import { View, Text, TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { white, txtgrey } from '../../utils/Styles';
import LinearGradient from 'react-native-linear-gradient';
import CrossIcon from 'react-native-vector-icons/Entypo';

import UsersLevel from '../extraData/UsersLevel';
import { useNavigation } from '@react-navigation/native';
import AnimatedProfileDp from './AnimatedProfileDP';
import { ApiCallToken } from '../../Services/Apis';
import { useSelector } from 'react-redux';

const ProfileModalStyles = ({ data, onPressCros, onPresReport }) => {

  const navigation = useNavigation();
  const userData = useSelector(state => state.auth.userData);

  const FollowHost = async () => {
   
    const paramsBody = {
      id: data?.id,
    };
    try {
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: paramsBody,
        route: 'user/following-host',
        verb: 'POST',
      });
      console.log(data?.id, 'Following response =>>', res);
   
      alert('' + res?.[0]?.message)
    } catch (error) {
      console.log('Error in follow host, profilemodalstyle scren', error);
    }
  };

  // console.log("data11", data)
  return (
    <View
      style={{
        height: heightPercentageToDP(55),
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 7,
          paddingHorizontal: widthPercentageToDP(4),
        }}>
        <TouchableOpacity onPress={onPresReport}>
            <Text style={{ color: white, fontSize: 16 }}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressCros}>
          <CrossIcon name="cross" size={30} color={white} />
        </TouchableOpacity>
      </View>
      
<View style={{height: 50, marginTop: 50}}>
      <AnimatedProfileDp img={data?.image} imgSize={75} frameSize={22} frame={data?.json_image}/>
</View>


      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: white, alignSelf: 'center', marginVertical: 5 }}>
          {data?.full_name}
        </Text>
        <Text style={{ color: white, alignSelf: 'center', marginVertical: 5 }}>
          {data?.name2}
        </Text>
      </View>
      
      <UsersLevel data={data}/>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: heightPercentageToDP(2),
        }}>
        <Text style={{ color: txtgrey, fontSize: 16 }}>ID:{data?.id}</Text>
        <Text style={{ color: txtgrey, fontSize: 16 }}>{data?.count_followers} Fans</Text>
        <Text style={{ color: txtgrey, fontSize: 16 }}>{data?.Country} </Text>
      </View>

      <TouchableOpacity onPress={() => FollowHost()}>
        <LinearGradient
          style={{
            alignSelf: 'center',
            marginVertical: heightPercentageToDP(3),
            paddingVertical: 6.5,
            paddingHorizontal: 30,
            borderRadius: 25,
          }}
          colors={['#EA3126', '#EC3E33', '#F7584F']}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 15,
              color: white,
            }}>
            Follow
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: widthPercentageToDP(5),
          marginTop: heightPercentageToDP(1),
        }}>
        <View
          style={{
            alignItems: 'center',
            width: '25%',
          }}>
          <Image
            source={require('../../assets/images/profile/gift.png')}
            style={{ height: 20, width: 20 }}
          />
          <Text
            onPress={() => Gift.current.open()}
            style={{ color: white, paddingVertical: 2, fontSize: 12 }}>
            Send Gifts
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatTest', {id: data?.id, image: data?.image, name: data?.full_name}) }
          style={{
            alignItems: 'center',
            width: '25%',
          }}>
          <Image
            source={require('../../assets/images/profile/msg.png')}
            style={{ height: 20, width: 20 }}
            resizeMode="contain"
          />
          <Text style={{ color: white, paddingVertical: 2, fontSize: 12 }}>
            PM
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            width: '25%',
          }}>
          <Image
            source={require('../../assets/images/profile/@.png')}
            style={{ height: 20, width: 20 }}
            resizeMode="contain"
          />
          <Text style={{ color: white, paddingVertical: 2, fontSize: 12 }}>
            @UserID
          </Text>
        </View>
      </View>
    </View>
  );
};

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
  Ktxt: {
    color: 'white',
    fontSize: 11,
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
});

export default ProfileModalStyles;
