import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import LuckyDrawBox from '../reuseable_Component/LuckyDrawBox';
import {primaryColor, white, txtgrey} from '../../utils/Styles';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const LuckyDraw = ({navigation}) => {
  const Data = [
    {
      box: <LuckyDrawBox />,
    },
    {
      box: <LuckyDrawBox />,
    },
    {
      box: <LuckyDrawBox />,
    },
    {
      box: <LuckyDrawBox />,
    },
    {
      box: <LuckyDrawBox />,
    },
    {
      box: <LuckyDrawBox />,
    },
  ];
  const ItemStyle = props => (
    <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
      {props.item.box}
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/image36.png')}>
        <View style={styles.settingbox}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <BackIcon name="left" size={20} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.settingtxt}>Lucky Draw</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/LuckyDraw/shotTxt.png')}
            style={styles.imgstyle}
          />
          <Image
            source={require('../../assets/images/LuckyDraw/luckyTxt.png')}
            style={[styles.imgstyle, {width: wp(80), height: hp(6)}]}
          />
          <Image
            source={require('../../assets/images/LuckyDraw/dailyTxt.png')}
            style={[styles.imgstyle, {width: wp(90), height: hp(6)}]}
          />
          <FlatList
            data={Data}
            renderItem={ItemStyle}
            numColumns={3}
            key={'3'}
            style={{marginTop: 2}}
            columnWrapperStyle={{
              justifyContent: 'center',
            }}
          />
          <TouchableOpacity>
            <ImageBackground
              source={require('../../assets/images/LuckyDraw/frame.png')}
              style={[
                styles.imgstyle,
                {
                  width: wp(51),
                  height: hp(6),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: hp(1),
                },
              ]}>
              <Image
                source={require('../../assets/images/LuckyDraw/check.png')}
                style={{
                  width: wp(35),
                  height: hp(4),
                  marginTop: 7,
                }}
              />
            </ImageBackground>
          </TouchableOpacity>
          <View
            style={{
              width: wp(70),
              alignSelf: 'center',
            }}>
            <Text style={styles.para}>
              lx daily if you top-up a single transaction of 1000+ beans to win
              a lucky draw
            </Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={['#E00303', '#F34F45']}
              style={styles.Linbox}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                Prize Instructions
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{width: wp(85), alignSelf: 'center'}}>
            <Text style={{color: white, paddingVertical: 5}}>
              1. Any prize gifts received will be immediately delivered to your
              "Backpack."
            </Text>
            <Text style={{color: white, paddingVertical: 5}}>
              2. Any gifts received can be counted towards user wealth level,
              talent star level, talent income.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingbox: {
    flexDirection: 'row',
    paddingVertical: hp(2),
    alignItems: 'center',
    backgroundColor: '#242841',
  },
  settingtxt: {
    fontSize: 19,
    color: 'white',
    fontWeight: '400',
  },
  icon: {
    color: 'white',
    paddingHorizontal: 5,
  },
  imgstyle: {
    width: wp(50),
    height: hp(5),
    alignSelf: 'center',
    marginTop: hp(0.5),
  },
  para: {
    color: white,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: txtgrey,
    borderStyle: 'dashed',
    paddingTop: 10,
    paddingBottom: 15,
    fontSize: 14,
  },
  Linbox: {
    alignSelf: 'center',
    marginVertical: hp(2),
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 25,
  },
});

export default LuckyDraw;
