import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState, useCallback, useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Awesome from 'react-native-vector-icons/FontAwesome';
import ComingSoon from '../reuseable_Component/ComingSoon';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Colors, headings, white} from '../../utils/Styles';
import homeReducer from '../../Redux/Reducers/WhiteListReds/homeRed';

import {useDispatch, useSelector} from 'react-redux';
import {StatusBar} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import {ApiCall, ApiCallToken, ApiUpdateUserData} from '../../Services/Apis';
import {updateUserData, updateUserLevel} from '../../Redux/Actions';
import {UserProfileContext} from '../../context/userProfile';
import AnimatedProfileDp from '../reuseable_Component/AnimatedProfileDP';

export default function NewProfile({navigation}) {
  const storyfunction = () => {
    if (story == 0) {
      setstory(3);
    } else {
      setstory(0);
    }
  };
  const userData = useSelector(state => state.auth.userData);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  

 // console.log('Gettinf user id type', userUpdatedData);

  const [story, setstory] = useState(0);
  const dispatch = useDispatch();
  const [updatedData, setUpdatedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const active_store = useSelector(state => state.homeRed.activeStoreData);
  const frameData = active_store?.filter((item) => item?.parent_title === 'Frames' )

  // console.log("active11", active_store)
  // console.log("Uer Level from redux   S ------>>>",userUpdatedLevel)

  const {setUserData} = useContext(UserProfileContext);

  const UpdateUserData = async () => {
    try {
      const res = await ApiUpdateUserData({
        params: userData.token,
        paramsBody: userData.user.id,
        route: 'user/updated-data',
        verb: 'POST',
      });
          //  console.log("dk BSDK", res)
          setUserData(res?.data);
          dispatch(updateUserData(res?.data));
      } catch (error) {
        console.log('error in user/updated-data ====>>>', error);
      }
   
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     // alert('hello favrt');
  //     UpdateUserData();
  //     // GetLevelForMatching();
  //   }, []),
  // );
  const [profileGrid, setProfileGrid] = useState([
    {
      id: require('../../assets/images/topup..png'),
      circle: require('../../assets/images/1.png'),
      name: 'Top UP',
    },
    {
      id: require('../../assets/images/myearning.png'),
      circle: require('../../assets/images/2.png'),
      name: 'Earnings',
    },
    {
      id: require('../../assets/images/taskIcon.png'),
      circle: require('../../assets/images/taskIcon.png'),

      name: 'My Tasks',
    },
    {
      id: require('../../assets/images/vip.png'),
      circle: require('../../assets/images/4.png'),
      name: 'VIP',
    },
    {
      id: require('../../assets/images/mystore.png'),
      circle: require('../../assets/images/5.png'),
      name: 'Store',
    },
    {
      id: require('../../assets/images/mybag.png'),
      circle: require('../../assets/images/6.png'),
      name: 'My Bag',
    },
    {
      id: require('../../assets/images/mylevel.png'),
      circle: require('../../assets/images/7.png'),
      name: 'My Level',
    },
    {
      id: require('../../assets/images/mybadge.png'),
      circle: require('../../assets/images/1.png'),
      name: 'My Badge',
    },
    {
      id: require('../../assets/images/myhelp.png'),
      circle: require('../../assets/images/1.png'),
      name: 'Help',
    },
    {
      id: require('../../assets/images/myedit.png'),
      circle: require('../../assets/images/6.png'),
      name: 'Edit Profile',
    },
    {
      id: require('../../assets/images/myinvites.png'),
      circle: require('../../assets/images/7.png'),
      name: 'My Invites',
    },
    {
      id: require('../../assets/images/myticket.png'),
      circle: require('../../assets/images/1.png'),
      name: 'Ticket History',
    },
    {
      id: require('../../assets/images/mysetting.png'),
      circle: require('../../assets/images/1.png'),
      name: 'Settings',
    },
  ]);

  useEffect(() => {
    console.log('here is the data-----', userData?.user?.email);
    //console.log('----------------------------', userUpdatedData);
  }, [userData]);

  return (
    <SafeAreaView style={styles.maincontainer}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
          <View style={styles.container}>
            <View style={styles.imgcontainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UserProfile')}
                style={styles.personopacity}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  style={styles.icon}
                  color={white}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('EditProfile');
                }}>
                <View>
                  {userUpdatedData?.image == null ? (
                    <Image
                      source={require('../../assets/images/img3.png')}
                      style={styles.img}
                    />
                  ) : (
                    <View  style={[styles.img, {top: heightPercentageToDP(4)}]}>
                      <AnimatedProfileDp img={userUpdatedData?.image} imgSize={60} frameSize={20} frame={frameData?.[0]?.json_image} />
                    </View>
                    // <Image
                    //   source={{uri: userUpdatedData?.image}}
                    //   style={[styles.img]}
                    // />
                  )}
                </View>
              </TouchableOpacity>
              <View style={styles.txtcontainer}>
                {userUpdatedData?.nick_name == null ? (
                  <Text style={styles.Username}>
                    {userData?.user.full_name}
                  </Text>
                ) : (
                  <Text style={styles.Username}>
                    {userUpdatedData?.nick_name}
                  </Text>
                )}

                <View style={styles.itemboxcontainer}>
                <Image
                      source={{uri: userUpdatedData?.sender_level_image}}
                      style={{height: 20, width: 55}}
                    />

               
                    <Image
                    source={{uri: userUpdatedData?.reciever_level_image}}
                    style={{height: 20, width: 23, marginLeft: 3}}
                  />
                  
              

                  {userUpdatedData?.user_type_id == 3 ? (
                    <View style={[styles.badgebox, {marginLeft: 3}]}>
                      <Awesome name="microphone" color={white} />
                    </View>
                  ) : null}
                  <View>
                   
                  </View>
                </View>
                <View style={styles.idbox}>
                  <Text style={styles.idtxt}>ID:{userData?.user?.id}</Text>
         
                </View>
              </View>
            </View>
          </View>

          <View style={styles.countmaincontainer}>
            <TouchableOpacity>
              <View style={styles.countcontainer}>
                <Text style={styles.countnumbertxt}>
                  {userData?.user?.count_posts}
                </Text>
                <Text style={styles.counttxt}>Posts</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Followers')}>
              <View style={styles.countcontainer}>
                <Text style={styles.countnumbertxt}>
                  {/* {
                    loading ? <ActivityIndicator /> : updatedData.data.no_of_followers
                  } */}
                  {userUpdatedData?.no_of_followers}
                </Text>
                <Text style={styles.counttxt}>Followers</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Follow')}>
              <View style={styles.countcontainer}>
                <Text style={styles.countnumbertxt}>
                  {/* {
                    loading ? <ActivityIndicator /> : updatedData.data.no_of_followings
                  } */}
                  {userUpdatedData?.no_of_followings}
                </Text>
                <Text style={styles.counttxt}>Follows</Text>
              </View>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require('../../assets/images/rectangle.png')}
            imageStyle={{borderRadius: 5}}
            style={styles.rectangle}>
            <View style={styles.coinmainbox}>
              <TouchableOpacity>
                <View style={styles.beansmaincontainer}>
                  <Text style={styles.beanstxt}>Beans</Text>
                  <View style={[styles.beanscontainer, {width: '100%'}]}>
                    <Image
                      source={require('../../assets/images/Newprofilebean.png')}
                      resizeMode="contain"
                      style={{
                        height: 15,
                        width: 15,
                      }}
                    />

                    <Text
                      style={[styles.counttxt, {fontSize: 12, marginLeft: 5}]}>
                      {/* {
                        loading ? <ActivityIndicator /> : updatedData.data.beans
                      } */}
                      {userUpdatedData?.beans}
                    </Text>

                    {/* <Text style={[styles.counttxt, { right: 10, fontSize: 12 }]}>
                      {userData.user.}9800
                    </Text> */}
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.beansmaincontainer}>
                  <Text style={styles.beanstxt}>Coins</Text>
                  <View style={[styles.beanscontainer, {width: '100%'}]}>
                    <Image
                      source={require('../../assets/images/Newprofilecoin.png')}
                      resizeMode="contain"
                      style={{height: 15, width: 15}}
                    />

                    <Text
                      style={[styles.counttxt, {fontSize: 12, marginLeft: 5}]}>
                      {/* {
                        loading ? <ActivityIndicator /> : updatedData.data.coins == null ? 0 : updatedData.data.coins
                      } */}
                      {userUpdatedData?.coins == null
                        ? 0
                        : userUpdatedData?.coins}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              {userUpdatedData?.user_type_id == 3 ? (
                <TouchableOpacity
                  onPress={() => navigation.navigate('WithdrawMain')}>
                  <View style={[styles.beansmaincontainer, {width: '100%'}]}>
                    <Text style={styles.beanstxt}>WithDraw</Text>
                    <View style={styles.beanscontainer}>
                      <Image
                        source={require('../../assets/images/Newprofilecoin.png')}
                        resizeMode="contain"
                        style={{height: 20, width: 20}}
                      />
                      <Text
                        style={[
                          styles.counttxt,
                          {fontSize: 12, marginLeft: 5},
                        ]}>
                        0
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ) : null}
            </View>
          </ImageBackground>
          {/* <ScrollView style={{flex: 1}}> */}
          <FlatList
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
                onPress={() => {
                  if (index == 9) {
                    navigation.navigate('EditProfile');
                  } else if (index == 1 && userUpdatedData?.user_type_id == 3) {
                    navigation.navigate('Earnings');
                  } else if (index == 3) {
                    navigation.navigate('MainWealthClass');
                  } else if (index == 4) {
                    navigation.navigate('Store');
                  } else if (index == 12) {
                    navigation.navigate('Settings');
                  } else if (index == 0) {
                    navigation.navigate('Topup');
                  } else if (index == 2) {
                    navigation.navigate('MyTask');
                  } else if (index == 6) {
                    navigation.navigate('MyLevel');
                  } else if (index == 5) {
                    navigation.navigate('MyBagMain');
                  } else if (index == 10) {
                    navigation.navigate('MyInvites');
                  } else if (index == 7) {
                    navigation.navigate('MyBadgeMain');
                  } else if (index == 8) {
                    navigation.navigate('Help');
                  } else if (index == 11) {
                    navigation.navigate('ComingSoon');
                  } else if (
                    index == 1 &&
                    userUpdatedData?.user_type_id == 6 &&
                    userUpdatedData?.request_tobe_host == 1
                  ) {
                    navigation.navigate('Pending');
                  } else if (
                    index == 1 &&
                    userUpdatedData?.user_type_id == 6 &&
                    userUpdatedData?.request_tobe_host == 0
                  ) {
                    navigation.navigate('AgencyID');
                  }
                }}
                style={styles.gridItem}>
                <View>
                  <ImageBackground
                    source={item.circle}
                    style={styles.itembackgroungcircle}>
                    <Image
                      resizeMode="contain"
                      source={item.id}
                      style={{height: 18, width: 18}}
                    />
                  </ImageBackground>
                </View>
                <Text
                  style={{
                    ...headings.h7,
                    color: white,
                    alignSelf: 'center',
                    top: 8,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            horizontal={false}
            keyExtractor={(item, index) => index?.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            data={profileGrid}
            contentContainerStyle={{
              alignSelf: 'center',
              marginTop: widthPercentageToDP(3),
              height: heightPercentageToDP(94),
              marginVertical: 100,

            }}
          />
          {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#181A2D',
  },
  icon: {},
  imgcontainer: {
    flexDirection: 'row',
    marginLeft: widthPercentageToDP(2),
    padding: 15,
    marginLeft: widthPercentageToDP(4),
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 200,
    marginTop: heightPercentageToDP(1),
  },
  container: {},
  txtcontainer: {
    width: '45%',
    marginLeft: widthPercentageToDP(2),
  },
  crownbox: {
    backgroundColor: 'red',
    width: widthPercentageToDP(12),
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  LvBox: {
    backgroundColor: '#26B4FE',
    width: widthPercentageToDP(14),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgcrown: {
    height: 10,
    width: 10,
  },
  imgbadge: {
    height: 16,
    width: 10,
  },
  badgebox: {
    backgroundColor: '#1AB846',
    height: 16,
    width: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Lvtxt: {
    textAlign: 'center',
    ...headings.h9,
    color: white,
    fontWeight: 'bold',
  },
  itemboxcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
    marginTop: widthPercentageToDP(1.5), ////
    marginLeft: widthPercentageToDP(6),
    width: widthPercentageToDP(40),
  },
  Username: {
    ...headings.h5,
    fontWeight: 'bold',
    color: 'white',
    left: widthPercentageToDP(4.5),
    fontFamily: 'Roboto-Italic',
  },
  copybox: {
    backgroundColor: '#EA3126',
    width: widthPercentageToDP(12),
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  idbox: {
    flexDirection: 'row',
    marginTop: widthPercentageToDP(2),
    alignItems: 'center',

    width: widthPercentageToDP(35),
    marginLeft: widthPercentageToDP(7), ////
  },
  copytxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    ...headings.h9,
  },
  crownboxtxt: {
    ...headings.h9,
    color: 'white',
    fontWeight: 'bold',
  },
  idtxt: {
    fontWeight: 'bold',
    ...headings.h9,
    color: 'white',
  },
  personopacity: {
    position: 'absolute',
    right: widthPercentageToDP(4),
    top: widthPercentageToDP(3),
  },
  withdrawcontainer: {},
  withdrawtxt: {
    ...headings.h8,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  withrawopacity: {
    backgroundColor: '#EA3126',
    marginTop: heightPercentageToDP(1),
    width: widthPercentageToDP(18),
    borderRadius: 20,
    padding: 5,
  },
  countmaincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: heightPercentageToDP(1),

    bottom: 5,
  },
  countcontainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPercentageToDP(10),
  },
  countnumbertxt: {
    ...headings.h5,
    fontWeight: 'bold',
    color: 'white',
  },
  counttxt: {
    fontSize: 8,
    color: 'white',
  },
  coinmainbox: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    borderRadius: 5,
  },
  beanscontainer: {
    flexDirection: 'row',

    width: widthPercentageToDP(17),
    // height: widthPercentageToDP(5),
    // justifyContent: 'space-between',
    marginTop: heightPercentageToDP(0.5),
    alignItems: 'center',
  },
  beansmaincontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  beanstxt: {
    ...headings.h6,
    fontWeight: 'bold',
    color: 'white',
  },
  flatitemcontainer: {
    backgroundColor: 'red',
    padding: 20,
    marginHorizontal: widthPercentageToDP(2),
    width: '100%',
  },
  gridItem: {
    height: heightPercentageToDP(16),
    width: widthPercentageToDP(28),
    backgroundColor: '#242841',
    marginHorizontal: '2%',

    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatitemimg: {
    height: 40,
    width: 40,
  },
  flatitemimgview: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 40,
  },
  verticalDivider: {
    height: heightPercentageToDP(5),
    borderWidth: 1,
    width: widthPercentageToDP(0),
    borderColor: white,
  },
  rectangle: {
    height: heightPercentageToDP(10),
    marginTop: heightPercentageToDP(1),
    justifyContent: 'center',
    width: widthPercentageToDP(92),
    alignSelf: 'center',
  },
  itembackgroungcircle: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge1: {
    height: 15,
    width: 15,
    marginLeft: widthPercentageToDP(0.5),
  },
  withdrawbox: {
    backgroundColor: 'red',
  },
});
