import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {primaryColor, white, txtgrey} from '../../utils/Styles';
import LinearGradient from 'react-native-linear-gradient';
import CrossIcon from 'react-native-vector-icons/Entypo';
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import BackIcon from 'react-native-vector-icons/AntDesign';
const ProfileModalStyles = props => {
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
        <Text style={{color: white, fontSize: 16}}>Report</Text>
        <TouchableOpacity onPress={props.onPress}>
          <CrossIcon name="cross" size={30} color={white} />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/images/img3.png')}
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          alignSelf: 'center',
          borderWidth: 2,
          borderColor: 'red',
        }}
      />
      <Text style={{color: white, alignSelf: 'center', marginVertical: 5}}>
        Huba Rana
      </Text>
      <View
        style={[styles.Likebox, {alignSelf: 'center', alignItems: 'center'}]}>
        <TouchableOpacity>
          <View
            style={[
              styles.Kbox,
              {backgroundColor: '#27B0FF', paddingHorizontal: 10},
            ]}>
            <Text style={styles.Ktxt}>Lv.09</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={[
              styles.Starbox,
              {backgroundColor: '#CC1E0D', paddingHorizontal: 10},
            ]}>
            <Image
              source={require('../../assets/images/crown.png')}
              style={{height: 14, width: 14, marginRight: 2, marginBottom: 1}}
            />
            <Text style={styles.Startxt}>06</Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: 'green', borderRadius: 25}}>
          <SpeakerIcon
            name="settings-voice"
            size={15}
            style={{padding: 2, color: white}}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: heightPercentageToDP(2),
        }}>
        <Text style={{color: txtgrey, fontSize: 16}}>ID:123456789</Text>
        <Text style={{color: txtgrey, fontSize: 16}}>5000 Fans</Text>
        <Text style={{color: txtgrey, fontSize: 16}}>Pakistan</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: '#303749',
          width: '82%',
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: heightPercentageToDP(1),
          borderRadius: 25,
        }}>
        <Text style={{color: white}}>Badges (4)</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../assets/images/wealthClass/badge.png')}
            style={{height: 30, width: 30, marginHorizontal: 2}}
          />
          <Image
            source={require('../../assets/images/wealthClass/bronzeBadge.png')}
            style={{height: 30, width: 30, marginHorizontal: 2}}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/wealthClass/crystalBadge.png')}
            style={{height: 30, width: 30, marginHorizontal: 2}}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/wealthClass/gemBadge.png')}
            style={{height: 30, width: 30, marginHorizontal: 2}}
            resizeMode="contain"
          />
        </View>
        <BackIcon name="right" color={white} size={20} />
      </View>
      <TouchableOpacity>
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
            style={{height: 20, width: 20}}
          />
          <Text
            onPress={() => Gift.current.open()}
            style={{color: white, paddingVertical: 2, fontSize: 12}}>
            Send Gifts
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: '25%',
          }}>
          <Image
            source={require('../../assets/images/profile/msg.png')}
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
          <Text style={{color: white, paddingVertical: 2, fontSize: 12}}>
            PM
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: '25%',
          }}>
          <Image
            source={require('../../assets/images/profile/@.png')}
            style={{height: 20, width: 20}}
            resizeMode="contain"
          />
          <Text style={{color: white, paddingVertical: 2, fontSize: 12}}>
            @User
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
