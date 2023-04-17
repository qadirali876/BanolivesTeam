import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import ForwardIcon from 'react-native-vector-icons/AntDesign';
import FbIcon from 'react-native-vector-icons/Fontisto';
// import GoogleIcon from 'react-native-vector-icons/AntDesign';
// import TwitterIcon from 'react-native-vector-icons/AntDesign';
import AppleIcon from 'react-native-vector-icons/AntDesign';
// import VkIcon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import MobileIcon from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Security = () => {
  const navigation = useNavigation();
  const Data = [
    {
      id: 1,
      head: 'Safety Tips',
      para1:
        'Here we focus mainly on paragraph structure, but feel free to read our ultimate guide to paragraphs for more of the basics.',
      para2:
        'Here we focus mainly on paragraph structure, but feel free to read our ultimate guide to paragraphs for more of the basics.',
    },
    {
      id: 2,
      head: 'Account OwnerShip',
      para1:
        'Here we focus mainly on paragraph structure, but feel free to read our ultimate guide to paragraphs for more of the basics.',
    },
  ];
  const ItemStyle = props => (
    <View style={styles.FlatView}>
      <Text style={styles.headStyle}>{props.item.head}</Text>
      <Text style={{color: '#9293B0', paddingHorizontal: '1%'}}>
        {props.item.para1}
      </Text>
      <Text style={{color: '#9293B0', paddingHorizontal: '1%'}}>
        {props.item.para2}
      </Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={styles.settingbox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon name="left" size={20} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.settingtxt}>Security</Text>
        </LinearGradient>
        <ScrollView>
          <View style={styles.bindBox}>
            <Text style={styles.bindTxt}>Bind Account</Text>
          </View>

          <View style={styles.phoneContainer}>
            <TouchableOpacity>
              <View style={styles.PhoneBox}>
                <View style={styles.MobBox}>
                  <MobileIcon name="mobile1" size={25} color={'#B06AB3'} />
                  <Text style={styles.phoneTxt}>Phone</Text>
                </View>
                <View style={styles.NoBox}>
                  <Text style={{color: 'white'}}>+123 456 7890</Text>
                  <ForwardIcon name="right" size={20} color={'white'} />
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                paddingHorizontal: widthPercentageToDP('2.2%'),
                paddingVertical: heightPercentageToDP('1%'),
              }}>
              <Text style={styles.phonePara}>
                You have bound your mobile phone number,and the account security
                factor is better
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity>
              <View style={styles.ListBox}>
                <View style={styles.IconsBox}>
                  <FbIcon
                    name="facebook"
                    size={28}
                    color={'dodgerblue'}
                    style={{marginLeft: '4%'}}
                  />
                  <Text style={[styles.AppsName, {left: 25}]}>Facebook</Text>
                </View>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ListBox}>
                <View style={styles.IconsBox}>
                  <Image
                    source={require('../../assets/images/twitter.png')}
                    style={{height: 30, width: 30}}
                  />
                  <Text style={[styles.AppsName, {left: 15}]}>Twitter</Text>
                </View>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ListBox}>
                <View style={styles.IconsBox}>
                  <Image
                    source={require('../../assets/images/google.png')}
                    style={{height: 25, width: 25}}
                  />
                  {/* <GoogleIcon
                  name="google"
                  size={20}
                  style={{paddingRight: widthPercentageToDP('3%')}}
                  color={'red'}
                /> */}
                  <Text style={[styles.AppsName, {left: 20}]}>Google</Text>
                </View>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ListBox}>
                <View style={styles.IconsBox}>
                  <Image
                    source={require('../../assets/images/vk.png')}
                    style={{height: 30, width: 30}}
                  />
                  {/* <VkIcon
                  name="vk"
                  size={20}
                  style={{paddingRight: widthPercentageToDP('3%')}}
                  color={'white'}
                /> */}
                  <Text style={[styles.AppsName, {left: 16}]}>VK</Text>
                </View>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.ListBox}>
                <View style={styles.IconsBox}>
                  <AppleIcon name="apple1" size={30} color={'white'} />
                  <Text style={[styles.AppsName, {left: 15}]}>Apple</Text>
                </View>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList data={Data} renderItem={ItemStyle} />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Security;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
  },
  settingbox: {
    flexDirection: 'row',
    paddingVertical: heightPercentageToDP('2%'),
    alignItems: 'center',
    backgroundColor: '#303749',
  },
  settingtxt: {
    fontSize: 19,
    color: 'white',
    fontWeight: '500',
  },
  icon: {
    color: 'white',
    paddingHorizontal: 5,
  },
  bindBox: {
    paddingVertical: heightPercentageToDP('2%'),
    paddingHorizontal: widthPercentageToDP('3%'),
  },
  bindTxt: {
    fontSize: 17,
    color: 'white',
  },
  PhoneBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP('2%'),
  },
  MobBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  NoBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneTxt: {
    fontSize: 15,
    color: 'white',
    paddingLeft: widthPercentageToDP('2%'),
  },
  ItemBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP('2%'),
  },
  ListBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.4,
    borderColor: '#B06AB3',
    paddingVertical: heightPercentageToDP('2.25%'),
    paddingHorizontal: widthPercentageToDP('3%'),
  },
  IconsBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phonePara: {
    color: 'white',
    fontSize: 12,
  },
  phoneContainer: {
    borderBottomWidth: 1,
    borderColor: '#303749',
  },
  headStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
  },
  FlatView: {
    marginTop: '2%',

    width: '95%',
    left: 8,
  },
  AppsName: {
    color: 'white',

    fontSize: 13,
  },
});
