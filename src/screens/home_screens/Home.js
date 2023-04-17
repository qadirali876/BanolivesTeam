import React, {useCallback, useRef, useState} from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import {
  
  widthPercentageToDP,
} from 'react-native-responsive-screen';
//---------Vector icons-----------//
import Entypo from 'react-native-vector-icons/Entypo';
import HomeModal from '../reuseable_Component/HomeModal';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import InstaStory from 'react-native-insta-story';

//---------Search bar -------------//
import Search_Bar from '../reuseable_Component/Search_Bar';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ApiCallToken, ApiUpdateUserData} from '../../Services/Apis';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  activeStoreData,
  updateHostLevel,
  updateUserData,
  updateUserLevel,
} from '../../Redux/Actions';
import { useEffect } from 'react';
import AnimatedLottieView from 'lottie-react-native';
import PTRView from 'react-native-pull-to-refresh';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseBlockUser } from '../../Services/Firebase';
import { Button } from 'react-native-paper';
import RbSheetComponent from '../reuseable_Component/RbSheetComponent';
import FruitLoop from '../FruitLoopGame/FruitLoop/FruitLoop';

const data5 = [
  {
    user_id: 1,
    user_image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQFX2KbB7Nb89w/company-logo_200_200/0/1662850690918?e=2147483647&v=beta&t=ntCnfgnbAc2ezyHX9p7QAqfgkImaXxEakMfMk0zr1Kw',
    user_name: 'BanoLive',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://images.unsplash.com/photo-1670416812116-5d7ecc31c5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        story_id: 2,
        story_image:
          'https://images.unsplash.com/photo-1670403243210-e85bf594bd2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQFX2KbB7Nb89w/company-logo_200_200/0/1662850690918?e=2147483647&v=beta&t=ntCnfgnbAc2ezyHX9p7QAqfgkImaXxEakMfMk0zr1Kw',
    user_name: 'BanoLive',

    stories: [
      {
        story_id: 1,
        story_image:
          'https://images.unsplash.com/photo-1670389135500-051327c99f13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=443&q=80',
      },
      {
        story_id: 2,
        story_image:
          'https://images.unsplash.com/photo-1670387123483-f64189de053d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQFX2KbB7Nb89w/company-logo_200_200/0/1662850690918?e=2147483647&v=beta&t=ntCnfgnbAc2ezyHX9p7QAqfgkImaXxEakMfMk0zr1Kw',
    user_name: 'BanoLive',

    stories: [
      {
        story_id: 3,
        story_image:
          'https://images.unsplash.com/photo-1670354580465-dc138fe3dd92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      },
      {
        story_id: 4,
        story_image:
          'https://images.unsplash.com/photo-1670304000102-d01e99a8dfa3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
    ],
  },
  {
    user_id: 1,
    user_image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQFX2KbB7Nb89w/company-logo_200_200/0/1662850690918?e=2147483647&v=beta&t=ntCnfgnbAc2ezyHX9p7QAqfgkImaXxEakMfMk0zr1Kw',
    user_name: 'BanoLive',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://images.unsplash.com/photo-1670258880155-2c9fc80b1fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      },
      {
        story_id: 2,
        story_image:
          'https://images.unsplash.com/photo-1670272501077-c72d2d42f362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQFX2KbB7Nb89w/company-logo_200_200/0/1662850690918?e=2147483647&v=beta&t=ntCnfgnbAc2ezyHX9p7QAqfgkImaXxEakMfMk0zr1Kw',
    user_name: 'BanoLive',

    stories: [
      {
        story_id: 1,
        story_image:
          'https://images.unsplash.com/photo-1657299156000-2cccaea36b2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        story_id: 2,
        story_image:
          'https://images.unsplash.com/photo-1669993427076-3d9acc119413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://media-exp1.licdn.com/dms/image/C4E0BAQFX2KbB7Nb89w/company-logo_200_200/0/1662850690918?e=2147483647&v=beta&t=ntCnfgnbAc2ezyHX9p7QAqfgkImaXxEakMfMk0zr1Kw',
    user_name: 'BanoLive',

    stories: [
      {
        story_id: 3,
        story_image:
          'https://images.unsplash.com/photo-1670171336566-6f08f1fbf648?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
        story_id: 4,
        story_image:
          'https://images.unsplash.com/photo-1670171882498-d04b80f562bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
    ],
  },
];

const modalRef = React.createRef();


const DATa = [
  {
    id: '1',
    image: require('../../assets/images/Home_posters/mybag.jpeg'),
    // name: 'LIVE-On the Radio',
    // name2: '10:30 | Freedom Trail',
  },
  {
    id: '2',
    image: require('../../assets/images/Home_posters/bages.jpeg'),
    // name: 'LIVE-On the Radio',
    // name2: '10:30 | Freedom Trail',
  },
  {
    id: '3',
    image: require('../../assets/images/Home_posters/battles.jpeg'),
    // name: 'LIVE-On the Radio',
    // name2: '10:30 | Freedom Trail',
  },
  {
    id: '4',
    image: require('../../assets/images/Home_posters/lucky.jpeg'),
    // name: 'LIVE-On the Radio',
    // name2: '10:30 | Freedom Trail',
  },
  {
    id: '5',
    image: require('../../assets/images/Home_posters/event.jpeg'),
    // name: 'LIVE-On the Radio',
    // name2: '10:30 | Freedom Trail',
  },
  {
    id: '6',
    image: require('../../assets/images/Home_posters/records.jpeg'),
    // name: 'LIVE-On the Radio',
    // name2: '10:30 | Freedom Trail',
  },
  {
    id: '7',
    image: require('../../assets/images/Home_posters/store.jpeg'),
    // name: 'John Doe',
  },
];

const Home = ({navigation}) => {
  const userData = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();
  const [banners, setBanners] = useState(null)
  const [bannersLoading, setBannersLoading] = useState(true)
  const fruitLoopGameRef = useRef();
  const [tokenGene, setTokenGene] = useState([])
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
      getFcmToken()
    }
  }
  const getFcmToken = async () => {
    const fcmToken = await AsyncStorage.getItem('fcmToken')
    if (!fcmToken) {
      const fcmToken = await messaging().getToken()
      try {
        if (fcmToken) {
          console.log('generated token=====', fcmToken)
          sendDeviceToken(fcmToken)
          setTokenGene(fcmToken)
          await AsyncStorage.setItem('fcmToken', fcmToken)
        }
      } catch (error) {
        console.log('error arise ', error)
      }
    }
  }
  const myVariable = "myVariableValue";
  const notificationServices=()=>{
    
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
        myVariable 
      );

    })
    
     messaging().onMessage(async remoteMessage => {
      console.log("notification in foreground",remoteMessage)
    });

    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );        
      }     
    });
  }

  const sendDeviceToken =  async (fcmToken) => {
    console.log("token in api", fcmToken)
        try {
          const res = await ApiCallToken({
            params: userData.token,
            paramsBody: {
              token: fcmToken,
            },
            route: `save/token`,
            verb: 'POST',
          });
         // setBlocked(blocked);
          console.log("save/token api ", res)
          
        } catch (error) {
          console.log('ERROR save/token api', error);
        }
  }
  
  useEffect(() => {
    requestUserPermission()
    notificationServices()
  }, [])

  const getBanenrs = async () => {

    try {
      setBannersLoading(true)
      const res = await ApiCallToken({
       params: userData.token,
       route: 'banners',
       verb: 'GET',
     });
    // console.log("user11", res)
    setBanners(res?.data?.Banners?.filter((item) => item?.banner_status === "Active"))
     setBannersLoading(false)
  } catch (error) {
    console.log('error home screen getBanners func', error?.toString());
  }
  };



  useEffect(() => {
    firebaseBlockUser(userData?.user?.id, dispatch)
    getBanenrs()
  }, [])
  
  const UpdateUserData = async () => {
    try {
      const res = await ApiUpdateUserData({
        params: userData.token,
        paramsBody: userData.user.id,
        route: 'user/updated-data',
        verb: 'POST',
      });

      //  console.log('updaetd data', res?.active_store)
      dispatch(activeStoreData(res?.active_store))
      dispatch(updateUserData(res?.data));
    } catch (e) {
      console.log('error updateUserData func, home screen ', e.toString());
    }
  };

  const GetLevelForMatching = async () => {
    try {
      // const beans = await getUpdatedUserData();
      const updatedData = await getUpdatedUserData();
      // dispatch(updateUserData(updatedData))
      const beans = updatedData.send_beans;
      // beans = 150000
      // const beans = 500000
      const res = await ApiCallToken({
        params: userData.token,
        route: 'user/levelsList',
        verb: 'GET',
      });

      const settingUserLevel = res.data.map(item => item);
      const beansForMatching = res.data.map(item => item.coins);
      const reversed = settingUserLevel.reverse();
      const result = reversed.find(obj => obj.coins <= beans);

      if (result == null) {
        // setUserLevels(res.data);
        // setSaveUserBeans(0)
        dispatch(updateUserLevel(1));
      } else {
        // setUserLevels(res.data);
        // setSaveUserBeans(result.slug)
        console.log('Sending Level to redux', result.slug);
        dispatch(updateUserLevel(result.slug));
      }
    } catch (e) {
      console.log('error saga GetLevelForMatching func, home screen ', e.toString());
    }
  };

  const GetHostLevelForMatching = async () => {
    try {
      const updatedData = await getUpdatedUserData();
      const beans = updatedData.received_beans;
      const res = await ApiCallToken({
        params: userData.token,
        route: 'host/levelsList',
        verb: 'GET',
      });

      const settingUserLevel = res.data.map(item => item);
      const beansForMatching = res.data.map(item => item.beans);
      const reversed = settingUserLevel.reverse();
      const result = reversed.find(obj => obj.beans <= beans);

      if (result == null) {
        // setUserLevels(res.data);
        // setSaveUserBeans(0)
        dispatch(updateHostLevel(0));
      } else {
        // setUserLevels(res.data);
        // setSaveUserBeans(result.slug)
        console.log('SLUGG', result.slug);
        dispatch(updateHostLevel(result.slug));
      }
    } catch (e) {
      console.log('error GetHostLevelForMatching api, host screen ', e.toString());
    }
  };
  const getUpdatedUserData = async () => {
    try {
      const res = await ApiUpdateUserData({
        params: userData.token,
        paramsBody: userData.user.id,
        route: 'user/updated-data',
        verb: 'POST',
      });
      return res.data;
    } catch (e) {
      console.log('error getUpdatedUserData is -- ', e.toString());
    }
  };

  useFocusEffect(
    useCallback(() => {
     // console.log("fetchinggggggggggggggggggggggggggg")
      GetLevelForMatching();
      getUpdatedUserData();
      UpdateUserData();
      GetHostLevelForMatching();
    }, []),
  );


  const [hitEffect, setHitEffect] = useState(0)
  const [liveHost, setLiveHost] = useState([]);
  const [liveHostLoading, setLiveHostLoading] = useState(true)
  
  useEffect(() => {
    getLiveHosts();
  }, [hitEffect])

  const getLiveHosts = async () => {
      try {
        setLiveHostLoading(true)
        const res = await ApiCallToken({
         params: userData.token,
         route: 'list-live-host',
         verb: 'GET',
       });
      // console.log("user13", res)
      setLiveHost(res.data);
      setLiveHostLoading(false)
     } catch (error) {
       console.log('error in streamfresher getlviehost func', error);
     }
  };
 
  const userName = JSON.stringify(userData.user.full_name);
  const userUUID = JSON.stringify(userData.user.uuid);
  const renderViewForliveHost = ({item}) => {
    // console.log("online host id==>",item.id)
    const onJoinPress = async (
      name,
      coins,
      uuid,
      image,
      receivedBeans,
      region,
      followers,
      receiver_level,
      sender_level,
      item,
    ) => {

      const checkBlock = await checkBlockUser(item?.id)
      console.log("check", checkBlock)
      if(checkBlock === 0){
      const hostID = JSON.stringify(item.id);
      turnOnMicrophoneWhenJoining = true;
      useSpeakerWhenJoining = true;
      navigation.navigate('AudiencePage', {
        userID: userUUID,
        userName: userName,
        liveID: hostID,
        hostName: name,
        hostCoins: coins,
        hostUuid: uuid,
        hostImage: image,
        hostReceivedBeans: receivedBeans,
        Region: region,
        Followers: followers,
        isHost: false,
        channelName: hostID.toString(), 
        hostReceiverLevel: receiver_level,
        hostSenderLevel: sender_level,
        hostReceiverLevel: receiver_level,
        hostSenderLevel: sender_level,
        completeData: item,
        uid: parseInt(userData?.user?.id), 
        userLive: true,
      
      });
    }
    };
    const checkBlockUser = async (id) => {
      console.log("user data id to blcok", id)
        try {
          const res = await ApiCallToken({
            params: userData.token,
            paramsBody: {
              host_id: id,
            },
            route: `check-block-user`,
            verb: 'POST',
          });
         // setBlocked(blocked);
          console.log("check block user ", res)
          if(res?.data == 0){
            return res?.data
          }
          else if(res?.data == 1){
            console.log("check2")
            alert(" " + res?.message)
          }
        } catch (error) {
          console.log('ERROR block user api', error);
        }
    }

    return (
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('StreamShow');
          //  alert(item.received_beans)
          onJoinPress(
            item?.nick_name ?? item?.full_name,
            item?.coins,
            item?.uuid,
            item?.image,
            item?.received_beans,
            item?.region,
            item?.no_of_followers,
            item?.reciever_level,
            item?.sender_level,
            item,
          );
        }}>
        <ImageBackground
          style={{
            height: heightPercentageToDP('22%'),
            width: widthPercentageToDP('48%'),
            marginHorizontal: 1,
            marginTop: 5,
          }}
          source={
            item.image == null
              ? require('../../assets/images/img3.png')
              : {uri: item?.image}
          }
          imageStyle={{borderRadius: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '5%',
              marginTop: 5,

            }}>
            {item.status_live == 1 ? (
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'rgba(50, 52, 52, 0.4)',
                  width: 45,
                  height: 17,
                  borderRadius: 30,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}> 
                <AnimatedLottieView
                            autoPlay
                
                            style={{
                                width: 14,
                                height: 14,
                            }}
                            source={require('../../assets/json/14467-music.json')}
                        />
                <Text
                  style={{
                    marginHorizontal: 2,
                    color: '#fff',
                    fontSize: 10,
                  }}>
                  Live
                </Text>
              </View>
            ) : null}
          </View>

          <TouchableOpacity
            activeOpacity={1}
            // onPress={() => this.props.navigation.navigate(item.item.navi)}
            style={{
              paddingVertical: 10,
              flexDirection: 'row',
              paddingHorizontal: 5,
              position: 'absolute',
              bottom: 5,
              alignItems: 'center',
            }}>
            <Image
              source={
                item.image == null
                  ? require('../../assets/images/img3.png')
                  : {uri: item?.image}
              }
              style={{
                height: 30,
                width: 30,
                borderRadius: 90,
                borderWidth: 1,
                borderColor: '#c471ed',
              }}
            />
            <View style={{flexDirection: 'column', marginHorizontal: '5%'}}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                {item?.nick_name ?? item?.full_name}
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        getLiveHosts()
        resolve();
      }, 2000);
    });
  };

  return (
   
    <View style={{flex: 1, }}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
             <PTRView
                onRefresh={refresh}
                style={{flex: 1, marginBottom: '15%', marginTop: '1%'}}>
        <StatusBar backgroundColor="#c471ed" />
        <ScrollView>
          <Search_Bar />

          {/* Stories */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '5%',
            }}>
            <Text
              style={{
                color: '#ffff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Stories
            </Text>
            {/* <TouchableOpacity style={{top: 10, left: 10}}>
              <Text
                style={{
                  color: '#c471ed',
                  fontSize: 15,
                }}>
                View All
              </Text>
            </TouchableOpacity> */}
          </View>
          {/* FlatList */}
          {/* <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={item => item.id}
            renderItem={(item, index) => (
              <TouchableOpacity
                onPress={() => {
                  modalRef.current.toggleModal();
                }}
                activeOpacity={0.7}
                // onPress={() => this.props.navigation.navigate(item.item.navi)}
                style={{
                  marginTop: 10,
                  paddingVertical: 10,
                  flexDirection: 'column',
                  paddingHorizontal: 8,
                  marginHorizontal: 5,
                }}>
                <Image
                  resizeMode={'center'}
                  source={item.item.image}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 90,
                    borderWidth: 1,
                    borderColor: '#c471ed',
                  }}
                />
                <Text
                  style={{
                    color: '#fff',
                    top: 10,
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  {item.item.name}
                </Text>
              </TouchableOpacity>
            )}
          /> */}
          <InstaStory
            avatarTextStyle={{color: 'white'}}
            data={data5}
            duration={10}
            onStart={item => console.log("item", item)}
            onClose={item => console.log('close: ', item)}
          />
          {/* Stories */}

          {/* New Stories */}

          {/* FlatList */}

          {/* Post */}

          {/* post header */}

          {/* post content */}

          {/* <View style={styles.container}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            showPagination
            data={DAtA}
            renderItem={({item}) => (
              <View style={[styles.child, {backgroundColor: item}]}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{
                    height: 150,
                  }}
                />
              </View>
            )}
          />
        </View> */}
          {/* post footer */}

          {/* post */}

          {/* Discover */}
          {/* <Image
          source={require('../../assets/images/wallpaper.jpg')}
          style={{
            width: '100%',
            height: 180,
            top: 10,
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}
        /> */}
      {bannersLoading ? 
          <ActivityIndicator style={{ marginTop: 25 }} /> 
            : 
          <View style={{marginTop: '2%'}}>
            <SwiperFlatList
              autoplay
              autoplayDelay={2}
              autoplayLoop
              showPagination={false}
              data={banners}
              renderItem={({item}) => (
                <View style={styles.child}>
                  <Image
                    source={{uri: item?.banner_image}}
                    resizeMode="cover"
                    style={styles.swiperimg}
                  />
                  
                </View>
              )}
            />
          </View>
          }

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '5%',
              marginTop: '5%',
            }}>
            <Text
              style={{
                color: '#ffff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Discover
            </Text>

            {/* <Button onPress={() => fruitLoopGameRef.current?.open()} >Click me</Button> */}
            {/* <TouchableOpacity style={{top: 10, left: 2}}>
              <Text
                style={{
                  color: '#c471ed',
                  fontSize: 15,
                }}>
                View All
              </Text>
            </TouchableOpacity> */}
          </View>

          {/* FlatList */}
          
        {liveHostLoading ? 
          <ActivityIndicator style={{ marginTop: 25 }} />
          :
          <View
          style={{
            width: widthPercentageToDP('100%'),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={liveHost}
            contentContainerStyle={{alignItems: 'center'}}
            horizontal={true}
            renderItem={renderViewForliveHost}
          />
        </View>
       }

          {/*Discover */}

          {/* Post */}

          {/* post header */}

          {/* post content */}

          {/* post footer */}

          {/* post */}
          <View style={{marginTop: '2%'}}>
            <Text
              style={{
                color: '#ffff',
                fontSize: 20,
                fontWeight: 'bold',
                left: 25,
                bottom: 5,
              }}>
              Bano Reels
            </Text>

            {/* FlatList */}
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={DATa}
              contentContainerStyle={{
                bottom: 7,
              }}
              keyExtractor={item => item.id}
              renderItem={(item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    modalRef.current.toggleModal();
                  }}
                  activeOpacity={0.7}
                  // onPress={() => this.props.navigation.navigate(item.item.navi)}
                  style={{
                    marginTop: 10,
                    paddingVertical: 10,
                    flexDirection: 'column',
                    paddingHorizontal: 8,
                    bottom: 10,
                  }}>
                  <Image
                    source={item.item.image}
                    style={{
                      height: 170,
                      width: 170,
                      borderRadius: 10,
                    }}
                  />

                  <View style={{flexDirection: 'column'}}>
                    <Text
                      style={{
                        color: '#fff',
                        top: 10,
                        left: 10,
                        fontSize: 15,
                      }}>
                      {item.item.name}
                    </Text>
                    <Text
                      style={{
                        color: '#4A5469',
                        top: 10,
                        left: 10,
                        fontSize: 12,
                      }}>
                      {item.item.name2}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <RbSheetComponent
            view={<FruitLoop onCrossPress={() => fruitLoopGameRef.current.close()}  />}
            refUse={fruitLoopGameRef}
            close={false}
            height={heightPercentageToDP(50)}
          />

          {/* Post */}
        </ScrollView>


      </PTRView>
      </ImageBackground>
      <View>
        <HomeModal
          view={
            <TouchableOpacity
              onPress={() => {
                modalRef.current.toggleModal();
              }}>
              <ImageBackground
                source={require('../../assets/images/comingsoon.jpeg')}
                resizeMode={'center'}
                style={{height: '100%', width: '100%'}}></ImageBackground>
            </TouchableOpacity>
          }
          ref={modalRef}
        />
      </View>
    </View>
  );
};
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '5%',
    borderRadius: 20,
    marginHorizontal: '5%',
  },
  child: {width, justifyContent: 'center'},
  swiperimg: {
    height: 180,
    width: 390,
    marginHorizontal: 6,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalbox1: {
    flexDirection: 'row',
    backgroundColor: '#27B0FF',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modaltxt: {
    fontSize: 18,

    color: 'white',
  },
  createoptiontxt: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  modalmaincontainer: {
    backgroundColor: '#303749',
    height: hp(45),
    borderRadius: 10,
    alignItems: 'center',
  },
  modalbox2: {
    flexDirection: 'row',
    backgroundColor: '#1AB846',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalbox3: {
    flexDirection: 'row',
    backgroundColor: '#EB352A',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalbox4: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalchildbox1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '67%',
    justifyContent: 'space-between',
  },
  modalchildbox2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    justifyContent: 'space-between',
  },
  modalchildbox3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',

    marginRight: wp(9),
  },
  modalchildbox4: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    justifyContent: 'space-between',
    marginRight: wp(8),
  },
});
export default Home;