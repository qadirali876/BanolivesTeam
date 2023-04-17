import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {headings} from '../../utils/Styles';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {FlatList} from 'react-native-gesture-handler';

const Data4 = [
  {
    img: require('../../assets/images/poster2.jpg'),
  },
  {
    img: require('../../assets/images/poster2.jpg'),
  },
  {
    img: require('../../assets/images/poster2.jpg'),
  },
];
const Data = [
  {
    txt: 'BanoLive Event 01',
    img: require('../../assets/images/coming01.png'),
  },
  {
    txt: 'BanoLive Event 01',
    img: require('../../assets/images/coming01.png'),
  },
  {
    txt: 'BanoLive Event 01',
    img: require('../../assets/images/coming01.png'),
  },
  {
    txt: 'BanoLive Event 01',
    img: require('../../assets/images/coming01.png'),
  },
];

const ItemStyle = props => (
  <View
    style={{
      backgroundColor: 'red',
      width: '90%',
      height: heightPercentageToDP(20),
    }}>
    <View style={{flexDirection: 'row'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={props.item.img}
          style={{
            height: 120,
            width: 160,
            borderRadius: 15,
            marginHorizontal: 5,
          }}
        />
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          {props.item.txt}
        </Text>
      </View>
    </View>
  </View>
);

export default function EventSchedule({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#9619A0'}}>
      <View style={styles.settingbox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon name="left" color={'white'} size={20} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.settingtxt}>Event Schedule</Text>
      </View>
      <ScrollView>
        <ImageBackground
          source={require('../../assets/images/Event1122.png')}
          style={styles.Mainimgbg}>
          <View style={{marginTop: heightPercentageToDP(40)}}>
            <ImageBackground
              resizeMode={'cover'}
              source={require('../../assets/images/banner1122.png')}
              style={styles.banner1bg}>
              <Image
                source={require('../../assets/images//ceventtxt.png')}
                resizeMode={'cover'}
                style={styles.CurrentEventsimg}
              />
            </ImageBackground>
          </View>
          <View style={styles.SwiperFlatListView}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              index={2}
              autoplayLoop
              showPagination
              data={Data4}
              renderItem={({item}) => (
                <View style={styles.child}>
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={styles.swiperimg}
                  />
                </View>
              )}
            />
          </View>
          <View style={{marginTop: heightPercentageToDP(1)}}>
            <ImageBackground
              resizeMode={'cover'}
              source={require('../../assets/images/banner1122.png')}
              style={styles.banner2bg}>
              <Image
                source={require('../../assets/images/uevent1122.png')}
                resizeMode={'cover'}
                style={styles.UpcomingEventimg}
              />
            </ImageBackground>
          </View>
          <View style={styles.item1container}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/coming01.png')}
                style={styles.coming01img}
              />
              <Text style={styles.Eventtxt}>BanoLive Event 01</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/images/coming02.png')}
                style={styles.coming02img}
              />
              <Text style={styles.Eventtxt}>BanoLive Event 02</Text>
            </View>
          </View>
          <View style={{marginTop: heightPercentageToDP(1)}}>
            <ImageBackground
              resizeMode={'cover'}
              source={require('../../assets/images/banner1122.png')}
              style={styles.banner3bg}>
              <Image
                source={require('../../assets/images/feventstxt.png')}
                resizeMode={'cover'}
                style={{height: 30, width: 210}}
              />
            </ImageBackground>
          </View>
          <View
            style={{
              width: '87%',
              backgroundColor: '#6B0A5D',
              alignItems: 'center',
              height: 320,
              borderRadius: 15,

              justifyContent: 'center',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/coming001.png')}
                  style={{height: 120, width: 160, borderRadius: 15}}
                />
                <Text style={styles.Eventtxt}>BanoLive Event 01</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/coming002.png')}
                  style={{
                    height: 120,
                    width: 160,
                    borderRadius: 15,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={styles.Eventtxt}>BanoLive Event 02</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: '2%'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/coming1122.png')}
                  style={{height: 120, width: 160, borderRadius: 15}}
                />
                <Text style={styles.Eventtxt}>BanoLive Event 03</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/coming02.png')}
                  style={{
                    height: 120,
                    width: 160,
                    borderRadius: 15,
                    marginHorizontal: 5,
                  }}
                />
                <Text style={styles.Eventtxt}>BanoLive Event 04</Text>
              </View>
            </View>
          </View>
          {/* <FlatList data={Data} renderItem={ItemStyle} numColumns={2} /> */}
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  settingbox: {
    flexDirection: 'row',
    paddingVertical: heightPercentageToDP('1.5%'),
    alignItems: 'center',
    backgroundColor: '#9619A0',
  },
  settingtxt: {
    fontSize: 19,
    color: 'white',
    fontWeight: '500',
    marginLeft: 10,
  },
  child: {},
  swiperimg: {
    height: 200,
    width: 330,
    marginHorizontal: 8,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
  },
  icon: {
    marginLeft: 3,
  },
  Mainimgbg: {
    alignSelf: 'center',
    height: heightPercentageToDP(175),
    width: 400,
    alignItems: 'center',
  },
  banner1bg: {
    height: 75,
    width: 340,
    alignSelf: 'center',
    top: 25,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CurrentEventsimg: {
    height: 30,
    width: 200,
  },
  SwiperFlatListView: {
    width: '87%',
    backgroundColor: '#6B0A5D',
    alignItems: 'center',
    height: 260,
    borderRadius: 15,
  },
  banner2bg: {
    height: 75,
    width: 340,
    alignSelf: 'center',
    top: 6,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  UpcomingEventimg: {
    height: 30,
    width: 210,
  },
  item1container: {
    width: '87%',
    backgroundColor: '#6B0A5D',
    alignItems: 'center',
    height: 160,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  coming01img: {
    height: 120,
    width: 160,
    borderRadius: 15,
  },
  Eventtxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  coming02img: {
    height: 120,
    width: 160,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  banner3bg: {
    height: 75,
    width: 340,
    alignSelf: 'center',
    top: 6,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
