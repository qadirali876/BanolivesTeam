import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Button, Searchbar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeModal from '../reuseable_Component/HomeModal';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from 'react-native-vector-icons/Feather';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
  VideoEncoderConfiguration,
  VideoDimensions,
} from 'react-native-agora';

import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import { useRef } from 'react';
import { appConfig } from '../../assets/js/config';

const Search_Bar = () => {
  const [soon, setsoon] = useState('CREATE A STORY');
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const modalRef = React.createRef();
  const onChangeSearch = query => setSearchQuery(query);
  const userUpdatedLevel = useSelector(state => state.homeRed.userUpdatedLevel);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  const userData = useSelector(state => state.auth.userData);

  const hostName = userData?.user?.full_name
  // console.log('Full name ',hostName)
  const hostLiveID = JSON.stringify(userData?.user?.id)
  const hostUUID = JSON.stringify(userData?.user?.uuid)
 // console.log('UUID ===========>>>>>>>', userData)


  const insets = useSafeAreaInsets();
  const [userID, setUserID] = useState('476');
  const [userName, setUserName] = useState('Bano Live');
  const [liveID, setLiveID] = useState('476');
  useEffect(() => {
    setUserID(String(Math.floor(Math.random() * 100000)));
    setLiveID(String(Math.floor(Math.random() * 10000)));
  }, []);

  // const {route} = props;
  // const {params} = route;
  // const {userID, userName, liveID} = params;
  // console.log('Getting user type id = >', userUpdatedData.user_type_id)

  checkUserTypeForAudioCall = () => {
    if (userUpdatedData?.user_type_id == 3 || userUpdatedLevel >= 2) {
      MakeHostAudioLive();
      navigation.navigate('AudioCallHost', {
        userID: hostUUID,
        userName: hostName,
        liveID: hostLiveID,
        channelName: channelName,
        uid: uid,
        isHost: isHost,
        agoraEngineRe: agoraEngineRef.current
      });
  } else {
      ToastAndroid.showWithGravityAndOffset(
        'You must be a host or minimum level 2',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    }
    
    // if (userUpdatedData?.user_type_id == 3) {
    //   MakeHostAudioLive();
    //   navigation.navigate('AudioCallHost');
    // } else if (userUpdatedLevel >= 2) {
    //   MakeHostAudioLive();
    //   navigation.navigate('AudioCallHost');
    // } else {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'You must be a host or minimum level 2',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.TOP,
    //     0,
    //     0,
    //   );
    // }
  };


  //my code

  const [uid, setUid] = useState(parseInt(userData?.user?.id))
  const [channelName, setChannelName] = useState(userData?.user?.id ? userData?.user?.id.toString() : null);

  const agoraEngineRef = useRef(IRtcEngine); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [isHost, setIsHost] = useState(true); // Client role

   const [data, setData] = useState({})

    const getPermission = async () => {
        if (Platform.OS === 'android') {
            await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                PermissionsAndroid.PERMISSIONS.CAMERA,
            ]);
        }
    };





    useEffect(() => {
        // Initialize Agora engine when the app starts
        setupVideoSDKEngine();
     }, []);

    const setupVideoSDKEngine = async () => {
        try {
        // use the helper function to get permissions
        if (Platform.OS === 'android') { await getPermission()};
        agoraEngineRef.current = createAgoraRtcEngine();
        const agoraEngine = agoraEngineRef.current;
        agoraEngine.initialize({
            appId: userData?.app_id,
            channelProfile: ChannelProfileType.ChannelProfileLiveBroadcasting,
        });
        
        } catch (e) {
            console.log("error searchbar screen setupVideoSDKEngine func", e);
        }
       
     };

  const onJoinPress = isHost => {
    if (userUpdatedData?.user_type_id == 3 || userUpdatedLevel >= 5) {
      navigation.navigate('HostPage', {
        userID: hostUUID,
        userName: hostName,
        liveID: hostLiveID,
        channelName: "channelName",
        channelName: channelName,
         uid: uid,
        isHost: isHost,
        agoraEngineRe: agoraEngineRef.current
      });
    } else {
        ToastAndroid.showWithGravityAndOffset(
          'You must be a host or minimum level 5',
          ToastAndroid.SHORT,
          ToastAndroid.TOP,
          0,
          0,
        );
        // alert('You must be a host or minimum level 5')
        }

    // navigation.navigate('HostPage', {
    //   userID: hostUUID,
    //   userName: hostName,
    //   liveID: hostLiveID,
    //   channelName: "channelName",
    //   channelName: channelName,
    //    uid: uid,
    //   isHost: isHost,
    //   agoraEngineRe: agoraEngineRef.current
    // });





//  console.log("go live button ==> ")
  
  // navigation.navigate('HostPage', {channelName: channelName, uid: uid, isHost: isHost, agoraEngineRe: agoraEngineRef.current})
  // navigation.navigate('HomeLive')


    // if (userUpdatedData?.user_type_id == 3) {
    //   MakeHostVideoLive()
    //   turnOnMicrophoneWhenJoining = true;
    //   useSpeakerWhenJoining = true;
    //   navigation.navigate(isHost ? 'HostPage' : 'AudiencePage', {
    //     userID: hostUUID,
    //     userName: hostName,
    //     liveID: hostLiveID,
    //   });
    // } else if (userUpdatedLevel >= 5) {
    //   MakeHostVideoLive()
    //   turnOnMicrophoneWhenJoining = true;
    //   useSpeakerWhenJoining = true;
    //   navigation.navigate(isHost ? 'HostPage' : 'AudiencePage', {
    //     userID: hostUUID,
    //     userName: hostName,
    //     liveID: hostLiveID,
    //   });
    // } else {
    //   ToastAndroid.showWithGravityAndOffset(
    //     'You must be a host or minimum level 5',
    //     ToastAndroid.SHORT,
    //     ToastAndroid.TOP,
    //     0,
    //     0,
    //   );
    //   // alert('You must be a host or minimum level 5')
    // }

  };



  const MakeHostAudioLive = async () => {
    try {
      await fetch('https://www.banolive.com/api/status-audio-active', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },

        body: JSON.stringify({ id: userData.user.id }),
      })
        .then(res => res.json())
        .then(json => {
          // dispatch(updateUserData(json.data));
          console.log(json.message);
          // alert(json.message)


        });
    } catch (e) {
      console.log('error searchbarscreen makehostaudiolive func', e.toString());
    }
  };
  return (
    <View>
      {/* Searchbar */}
      <View
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
          marginHorizontal: '5%',
        }}>
        <ImageBackground
          source={require('../../assets/images/searchrectangle.png')}
          imageStyle={{
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <Searchbar
              placeholder="Search"
              fontSize={13}
              placeholderTextColor={'#ffff'}
              iconColor={'#fff'}
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={{
                borderRadius: 30,
                width: wp(75),
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                height: 40,
              }}
            /> */}
          <TouchableOpacity onPress={() => navigation.navigate('SearchUser')}>
            <View
              style={{
                backgroundColor: 'transparent',
                width: wp(75),
                height: 40,
                borderRadius: 30,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 15,
              }}>
              <Search name="search" size={25} color="#fff" style={{}} />
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginLeft: 15,
                }}></Text>
            </View>
          </TouchableOpacity>
          {/* <Text>{userUpdatedLevel}</Text> */}
        </ImageBackground>
        {/* morre button */}
        <TouchableOpacity
          onPress={() => {
            modalRef.current.toggleModal();
          }}
          activeOpacity={0.8}>
          <View
            style={{
              backgroundColor: '#c471ed',
              padding: 5,
              alignItems: 'center',

              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Entypo name="plus" size={25} color="#fff" style={{}} />
          </View>
        </TouchableOpacity>

        {/* morre button */}
      </View>
      {/* Searchbar */}
      <View>
        <HomeModal
          view={
            <LinearGradient
              colors={['#493240', '#1565C0']}
              style={styles.modalmaincontainer}>
              <TouchableOpacity
                onPress={() => {
                  modalRef.current.toggleModal();
                }}
                style={{
                  width: '100%',
                  alignItems: 'flex-end',
                  marginRight: 5,
                  marginTop: 2,
                }}>
                <Entypo name={'circle-with-cross'} size={30} color={'white'} />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={styles.createoptiontxt}>Create Options</Text>
                <Button title='hello' onPress={() => navigation.navigate('UserListScreen')} />
              </View>

              <View style={{ marginTop: hp(2) }}>
                <TouchableOpacity
                  // onPress={() => navigation.navigate('Apply_Form')}
                  onPress={() => ToastAndroid.showWithGravityAndOffset(
                    'Coming soon',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    0,
                    0,
                  )}>
                  <View style={styles.modalbox1}>
                    <View style={styles.modalchildbox1}>
                      <Entypo
                        name="circle-with-plus"
                        size={25}
                        color={'white'}
                      />
                      <Text style={{ color: 'white', left: 5 }}>{soon}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <View style={styles.modalbox2}>
                      <View style={styles.modalchildbox2}>
                        <Ionicons
                          name="images-outline"
                          size={25}
                          color={'white'}
                        />
                        <Text style={{color: 'white'}}>CREATE A POST</Text>
                      </View>
                    </View>
                  </TouchableOpacity> */}
                <TouchableOpacity
                  // onPress={() => {
                  //   navigation.navigate('Homepage');
                  // }}
                  onPress={() => {
                    onJoinPress(true);
                  }}>
                  <View style={styles.modalbox3}>
                    <View style={styles.modalchildbox3}>
                      <Ionicons name="videocam" size={25} color={'white'} />
                      <Text
                        style={{
                          color: 'white',
                          marginRight: wp(6.5),

                          left: 10,
                        }}>
                        GO LIVE
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() => navigation.navigate('AudioCall')}>

                  onPress={() => {
                    checkUserTypeForAudioCall();
                  }}>
                  <View style={styles.modalbox4}>
                    <View style={styles.modalchildbox4}>
                      <Foundation name="microphone" size={25} color={'white'} />
                      <Text
                        style={{ color: 'white', textAlign: 'center', left: 8 }}>
                        AUDIO LIVE
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          }
          ref={modalRef}
        />
      </View>
  
    </View>
  );
};

export default Search_Bar;

const styles = StyleSheet.create({
  modalbox1: {
    flexDirection: 'row',
    backgroundColor: 'red',
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
    height: hp(40),
    borderRadius: 10,
    alignItems: 'center',
  },
  modalbox2: {
    flexDirection: 'row',
    backgroundColor: '#303749',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalbox3: {
    flexDirection: 'row',
    backgroundColor: '#1AB846',
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
