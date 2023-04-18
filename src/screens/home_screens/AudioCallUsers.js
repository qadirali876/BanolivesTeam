
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
  PermissionsAndroid,
  Dimensions,
  findNodeHandle,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from 'react-native';
import { primaryColor, white, txtgrey, transparent } from '../../utils/Styles';
import AudioPerson from '../reuseable_Component/AudioPerson';
import CrossIcon from 'react-native-vector-icons/Entypo';

import PlusIcon from 'react-native-vector-icons/AntDesign';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import GameIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import OptionIcon from 'react-native-vector-icons/Octicons';
import PhoneIcon from 'react-native-vector-icons/Feather';
import GiftIcon from 'react-native-vector-icons/Feather';
import MusicIcon from 'react-native-vector-icons/Feather';
import MirrorIcon from 'react-native-vector-icons/Octicons';
import RbSheetComponent from '../reuseable_Component/RbSheetComponent';
import StarModal from '../reuseable_Component/StarModal';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import BackIcon from 'react-native-vector-icons/AntDesign';
import { Switch, } from 'react-native-paper';
import React, { useRef, useState, useEffect } from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { ApiCallToken, ApiUpdateUserData } from '../../Services/Apis';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { updateUserData } from '../../Redux/Actions';
import LinearGradient from 'react-native-linear-gradient';
import TalentLevelExplaination from '../levelExplanation/TalentLevelExplanation';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import SocialLinks from '../myInvites/SocialLinks';
import RBSheet from 'react-native-raw-bottom-sheet';


import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import Feather from 'react-native-vector-icons/Feather';
import DeviceInfo from 'react-native-device-info';
import AnimatedLottieView from 'lottie-react-native';
import Call from '../home_screens/Call';
import ProfileModalStyles from '../reuseable_Component/ProfileModalStyle';
// import UserList from '../Agora/components/UserList';
import FansRanking from '../reuseable_Component/FansRanking';
import { shareToWhatsApp } from '../reuseable_Component/SocialShare';
const deviceName = DeviceInfo.getDeviceName();


const granted = (Platform.OS == 'android' ? PermissionsAndroid.check(
  PermissionsAndroid.PERMISSIONS.CAMERA,
  PermissionsAndroid.RECORD_AUDIO) : undefined);


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AudioCallUsers = props => {
  const refRBSheet = useRef();

  const { route } = props;
  const { params } = route;
  const {
    userHostID,
    userName,
    liveID,
    hostName,
    hostCoins,
    hostUuid,
    hostImage,
    hostReceivedBeans,
    Region,
    Followers,
    hostReceiverLevel,
    hostSenderLevel,
    completeData
  } = params;


  const [updatedCoins, setupdatedCoins] = useState();
  const [selectedGift, setselectedGift] = useState();
  const [selectedGiftData, setSelectedGiftData] = useState();
  const [sendedBeans, setsendedBeans] = useState();
  const navigation = useNavigation();
  const [ViewClr, setViewClr] = useState('white');
  const [bg, setbg] = useState('grey');
  const [btnClr, setbtnClr] = useState('grey');
  const [selectButton, setselectButton] = useState(0);
  const [selectGiftBtn, setselectGiftBtn] = useState(0);
  const [Iconplus, setIconplus] = useState('plus');
  const [switch1, setswitch1] = useState(false);
  const [iconName0, seticonName0] = useState('plus');
  const [iconName1, seticonName1] = useState('plus');
  const [iconName2, seticonName2] = useState('plus');
  const [iconName3, seticonName3] = useState('plus');
  const [iconName4, seticonName4] = useState('plus');
  const [iconName5, seticonName5] = useState('plus');
  const [iconName6, seticonName6] = useState('plus');
  const [hostGiftArray, sethostGiftArray] = useState([]);
  const [iconName7, seticonName7] = useState('plus');
  const [iconName, seticonName] = useState('plus');
  const [Follow, setFollow] = useState('Follow');
  const Game = useRef();
  const Option = useRef();
  const Viewer = useRef();
  const AllowCall = useRef();
  const Gift = useRef();
  const Msg = useRef();
  const modalRef = React.createRef();
  const modal2Ref = React.createRef();
  const ProfileRef = React.createRef();
  const joinCallModalRef = React.createRef();
  const [ImgPath, setImgPath] = useState(
    require('../../assets/images/audioLiveImgs/seat1.png'),
  );
  const userData = useSelector(state => state.auth.userData);
  const active_store = useSelector(state => state.homeRed.activeStoreData);
  const frameData = active_store?.filter((item) => item?.parent_title === 'Frames' )
  // console.log("----------------------------------", " ", params)
  const [gettingGiftsArray, setGettingGiftsArray] = useState([]);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  //console.log("user11", userUpdatedData)
  const dispatch = useDispatch();
  const [hostLevel, setHostLevel] = useState();
  // console.log('Updated data for beans', userData?.user);
  const [FollowingHost, setFollowingHost] = useState([]);
  useKeepAwake();
  const [joiningUser, setJoiningUser] = useState('');


  // const seatItemStyle = props => (
  //   <TouchableOpacity
  //     onLongPress={() => {
  //       if (props.index == 0) {
  //         if (iconName0 == 'lock') {
  //           seticonName0('seat');
  //         } else {
  //           seticonName0('lock');
  //         }
  //       }
  //       if (props.index == 1) {
  //         if (iconName0 == 'lock') {
  //           seticonName1('seat');
  //         } else {
  //           seticonName1('lock');
  //         }
  //       }
  //       if (props.index == 2) {
  //         if (iconName2 == 'lock') {
  //           seticonName2('seat');
  //         } else {
  //           seticonName2('lock');
  //         }
  //       }
  //       if (props.index == 3) {
  //         if (iconName3 == 'lock') {
  //           seticonName3('seat');
  //         } else {
  //           seticonName3('lock');
  //         }
  //       }
  //       if (props.index == 4) {
  //         if (iconName4 == 'lock') {
  //           seticonName4('seat');
  //         } else {
  //           seticonName4('lock');
  //         }
  //       }
  //       if (props.index == 5) {
  //         if (iconName5 == 'lock') {
  //           seticonName5('seat');
  //         } else {
  //           seticonName5('lock');
  //         }
  //       }
  //       if (props.index == 6) {
  //         if (iconName6 == 'lock') {
  //           seticonName6('seat');
  //         } else {
  //           seticonName6('lock');
  //         }
  //       }
  //       if (props.index == 7) {
  //         if (iconName7 == 'lock') {
  //           seticonName7('seat');
  //         } else {
  //           seticonName7('lock');
  //         }
  //       }
  //     }}>
  //     <View style={{ alignItems: 'center' }}>
  //     <AudioPerson img = {props.item?.image}  />
  //       <Text style={{ color: white, marginTop: 2 }}>{props.item?.full_name}</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  //my code

  //console.log("Routes", route.params)
  const [token, setToken] = useState(null)
  const [uid, setUid] = useState(userData?.user?.id)
  const [channelName, setChannelName] = useState(route?.params?.liveID);
  const [userUid, setUserUid] = useState(null)
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [isHost, setIsHost] = useState(route?.params?.isHost); // Client role
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); // Message to the user
  const [isCoHost, setIsCoHost] = useState(false);
  const [coHostId, setCoHostID] = useState(null);
  const [showCohostBtn, setShowCoHostBtn] = useState(false)

  const [coHost1Id, setCoHost1ID] = useState(null);
  const [coHost2Id, setCoHost2ID] = useState(null);
  const [coHost3Id, setCoHost3ID] = useState(null);
  const [hostId, setHostID] = useState(null)
  const [checkFire, setCheckFire] = useState()
  const [joinCall, setJoinCall] = useState(false)
  const [giftReceived, setGiftReceived] = useState(null);
  const [applyForCall, setApplyForCall] = useState(false);

  const [isMicOn, setIsMicOn] = useState(true)
  const [flipCamera, setFlipCamera] = useState(true);
  const [camera, setCamera] = useState(true)

  const handleMicButton = () => {
    if (agoraEngineRef.current.muteLocalAudioStream) {
      setIsMicOn(!isMicOn)
      { isMicOn ? agoraEngineRef.current.muteLocalAudioStream(true) : agoraEngineRef.current.muteLocalAudioStream(false) }
    }
    //console.log('mic', isMicOn)
  }

  const flipCameraHandle = () => {
    setFlipCamera(!flipCamera)
    agoraEngineRef.current.switchCamera();

  }

  const handleCamera = () => {
    setCamera(!camera)
    { camera ? agoraEngineRef.current.muteLocalVideoStream(true) : agoraEngineRef.current.muteLocalVideoStream(false) }
  }

  const firebaseFunc = () => {
    database()
      .ref(`/channelsaudio/${channelName}`)
      .on('value', snapshot => {
        //console.log('User data: aud', snapshot.val());
        snapshot.val() && handleJoinCall(snapshot.val())
      })
  }

  const checkHostOffline = () => {
    database()
      .ref(`/commentsaudio/${channelName}`)
      .on('child_removed', snapshot => {
        //console.log('onHostRemove110', snapshot.val());
      })
  }

  const [stop, setStop] = useState(0)
  const handleJoinCall = (val) => {

    let filtered = Object.entries(val).filter(([key, value]) => value.status === 1);
    //console.log("filteredddddddddddddddddddd", val, " ", uid, " ", filtered);

    filtered?.map((item) => {
      //console.log('item==>', item?.[1]?.coHostID, " ", item?.[1]?.status)
      if (item?.[1]?.coHostID === uid && stop === 0) {
        //console.log("found22", deviceName, " ", item?.[1]?.coHostID)
        generateToken2()
        //setStop(1)
      }
    })

    //console.log("val22", val)
    { val?.JoinCalls === "true" ? setJoinCall(true) : setJoinCall(false) }

  }

  const firebaseWrite = () => {
    //console.log("user data", userData?.user)
    database()
      .ref(`/channelsaudio/${channelName}/${uid}`)
      .set({
        coHostID: uid,
        full_name: userUpdatedData?.nick_name ?? userUpdatedData?.full_name,
        img: userData?.user?.image,
        status: "0",

      })
      .then(() => {
        //console.log('Data set.')
        joinCallModalRef.current.toggleModal()
      });
  }



  function showMessage(msg) {
    setMessage(msg);
  }


  const generateToken = async () => {
    
  }


  const join = async (tok) => {
   
  };

  const leave = () => {
   
  };



  


  useFocusEffect(
    useCallback(() => {
      UpdateHostBeans();
    }, []),
  );

  const GetFollowingHost = async () => {
    try {
      await fetch('https://www.banoLive.com/api/user/list-followed-host', {
        method: 'GET',
        headers: {
          // 'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
      })
        .then(res => res.json())
        .then(json => {
          setFollowingHost(json.data);
        });
      // console.log('Our response is ==>>',response.json())
    } catch (e) {
      console.log('Error-- ', e.toString());
    }
  };
  const UnFollow = async userId => {
    try {
      setFollow('Follow');
      //console.log('Id of user DDDDD', userId);
      await fetch('https://www.banoLive.com/api/user/unfollow-host', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify({ id: liveID }),
      })
        .then(res => res.json())
        .then(json => {
          //console.log('Following response =>>', json);
        });
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        autoClose: 1000,
        textBody: 'Now you are unfollowing ' + hostName,
      });
    } catch (e) {
      //console.log('saga login error -- ', e.toString());
      //console.log('Id of user', userId);
      alert('error');
    }
  };

  const FollowHost = async (id) => {
    try {
      setFollow('Unfollow');
      await fetch('https://www.banoLive.com/api/user/following-host', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
        body: JSON.stringify({ id: id }),
      })
        .then(res => res.json())
        .then(json => {
          //console.log('Following response =>>', json);
        });
      Toast.show({
        type: ALERT_TYPE.SUCCESS,

        textBody: 'Now you are following ' + id,
        autoClose: 1000,
      });
    } catch (e) {
      //console.log('saga login error -- ', e.toString());
    }
  };
  useFocusEffect(
    useCallback(() => {
      // alert('hello favrt');
      GetFollowingHost();
    }, []),
  );



  const JoinCallModal = props => {
    return (
      <View
        style={{
          height: heightPercentageToDP(25),
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 15,
        }}>
        <Call onPressAPllyBtn={() => { firebaseWrite() }} flipCamera={() => flipCameraHandle()} handleCamera={() => handleCamera()} camera={camera} isMicOn={isMicOn} handleMicButton={() => handleMicButton()} />
      </View>
    );
  };

  const index = FollowingHost.findIndex(item => item?.id == liveID);

  const GetGifts = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'get-gift',
        verb: 'GET',
      });

      //console.log('here is the respone for gifts', res);
      setGettingGiftsArray(res);
      setselectGiftBtn({
        title: res?.[0]?.title,
        category: res?.[0]?.child_categorie,
      });
    } catch (e) {
      console.log('saga login error -- ', e.toString());
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
      dispatch(updateUserData(res?.data));

      // setGettingGiftsArray(res);
    } catch (e) {
      console.log('send gift error is -- ', e.toString());
    }
  };

  const SendGiftsToHost = async beans => {
    // console.log('Getting beans on press', beans)

    try {
      const paramsBody = {
        user_id: userData.user.id,
        host_id: liveID,
        beans: beans,
      };
      if (userUpdatedData.beans < beans) {
        Toast.show({
          type: ALERT_TYPE.WARNING,
          textBody: 'You Dont have enough beans',
          autoClose: 1000,
        });
      } else {
        const res = await ApiCallToken({
          params: userData.token,
          paramsBody: paramsBody,
          route: 'send-gift',
          verb: 'POST',
        });

        console.log('here is the respone for sending gifts', res);
        getUpdatedUserData();
        if (res.giftSent == "true") {
          await sendGiftToFirebase(selectedGiftData);
        }
        else {
          console.log("gift not sent", res.giftSent)
        }
        // dispatch(updateUserData(res.data));
        Toast.show({
          type: ALERT_TYPE.SUCCESS,

          textBody: '' + res.message,
          autoClose: 1000,
        });
      }

      // setGettingGiftsArray(res);
    } catch (e) {
      console.log('send gift error is -- ', e.toString());
    }
  };

  const GetHostLevelForMatching = async () => {
    try {
     
      const res = await ApiCallToken({
        params: userData.token,
        route: 'host/levelsList',
        verb: 'GET',
      });

      const settingUserLevel = res.data.map(item => item);
      const beansForMatching = res.data.map(item => item?.beans);
      const reversed = settingUserLevel.reverse();
      const result = reversed.find(obj => obj.beans <= hostReceivedBeans);

      if (result == null) {
        //console.log('result iss...', result, hostReceiverLevel, route.params);
        setHostLevel(0);
      } else {
        //console.log('SLUGG', result.slug, hostReceiverLevel, route.params);
        setHostLevel(result.slug);
      }
    } catch (e) {
      console.log('Errorrrr ==========?>>>>> -- ', e.toString());
    }
  };

  useFocusEffect(
    useCallback(() => {
      GetGifts();
      getUpdatedUserData();
      GetHostLevelForMatching();
    }, []),
  );

  useFocusEffect(() => {
    index == -1 ? setIconplus('plus') : setIconplus('minus');
    index == -1 ? setFollow('Follow') : setFollow('Unfollow');
  });

  const MsgData = [
    {
      img: require('../../assets/images/man.jpg'),
      name: 'Adeel Arif',
      msg: 'Hey! Adeel how are you?',
      time: '2m ago',
    },
    {
      img: require('../../assets/images/img3.png'),
      name: 'Zunair Pasha',
      msg: 'Hey! Zunair Pasha we are missing you bro',
      time: '10m ago',
    },
    {
      img: require('../../assets/images/events.jpg'),
      name: 'Mushaib Darling',
      msg: 'Hey! Mushaib everything is fine?',
      time: '2days ago',
    },
    {
      img: require('../../assets/images/story.jpg'),
      name: 'Malik Mohsin',
      msg: 'Hello!',
      time: '5h ago',
    },
    {
      img: require('../../assets/images/party.jpg'),
      name: 'Shehroz Khalid',
      msg: 'Hey! Shehroz Are you here',
      time: '2m ago',
    },
  ];
  const MsgStyle = props => (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderColor: '#3E465A',
        paddingVertical: 13,
        paddingHorizontal: widthPercentageToDP(3),
      }}>
      <Image
        source={props.item?.img}
        style={{ height: 60, width: 60, borderRadius: 30 }}
      />
      <View style={{ paddingHorizontal: widthPercentageToDP(2) }}>
        <Text style={{ color: white }}>{props.item?.name}</Text>
        <View style={{ width: widthPercentageToDP(75) }}>
          <Text numberOfLines={1} style={{ color: txtgrey }}>
            {props.item?.msg}
          </Text>
        </View>
        <Text style={{ color: '#4A5469' }}>{props.item?.time}</Text>
      </View>
    </View>
  );
  const ViewerArray = [
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      name: 'Samina Pirzada',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
  ];
  useEffect(() => {
    if (switch1 == true) {
      if (iconName == 'seat') {
        seticonName('plus');
      }
    } else if (switch1 == false) {
      if (iconName == 'plus') {
        seticonName('seat');
      }
    }
    if (switch1 == true) {
      if (iconName0 == 'seat') {
        seticonName0('plus');
      }
    } else if (switch1 == false) {
      if (iconName0 == 'plus') {
        seticonName0('seat');
      }
    }
    if (switch1 == true) {
      if (iconName1 == 'seat') {
        seticonName1('plus');
      }
    } else if (switch1 == false) {
      if (iconName1 == 'plus') {
        seticonName1('seat');
      }
    }
    if (switch1 == true) {
      if (iconName2 == 'seat') {
        seticonName2('plus');
      }
    } else if (switch1 == false) {
      if (iconName2 == 'plus') {
        seticonName2('seat');
      }
    }
    if (switch1 == true) {
      if (iconName3 == 'seat') {
        seticonName3('plus');
      }
    } else if (switch1 == false) {
      if (iconName3 == 'plus') {
        seticonName3('seat');
      }
    }
    if (switch1 == true) {
      if (iconName4 == 'seat') {
        seticonName4('plus');
      }
    } else if (switch1 == false) {
      if (iconName4 == 'plus') {
        seticonName4('seat');
      }
    }
    if (switch1 == true) {
      if (iconName5 == 'seat') {
        seticonName5('plus');
      }
    } else if (switch1 == false) {
      if (iconName5 == 'plus') {
        seticonName5('seat');
      }
    }
    if (switch1 == true) {
      if (iconName6 == 'seat') {
        seticonName6('plus');
      }
    } else if (switch1 == false) {
      if (iconName6 == 'plus') {
        seticonName6('seat');
      }
    }
    if (switch1 == true) {
      if (iconName7 == 'seat') {
        seticonName7('plus');
      }
    } else if (switch1 == false) {
      if (iconName7 == 'plus') {
        seticonName7('seat');
      }
    }
  });
  const ItemStyle = props => (
    <TouchableOpacity
      onLongPress={() => {
        if (props.index == 0) {
          if (iconName0 == 'lock') {
            seticonName0('seat');
          } else {
            seticonName0('lock');
          }
        }
        if (props.index == 1) {
          if (iconName0 == 'lock') {
            seticonName1('seat');
          } else {
            seticonName1('lock');
          }
        }
        if (props.index == 2) {
          if (iconName2 == 'lock') {
            seticonName2('seat');
          } else {
            seticonName2('lock');
          }
        }
        if (props.index == 3) {
          if (iconName3 == 'lock') {
            seticonName3('seat');
          } else {
            seticonName3('lock');
          }
        }
        if (props.index == 4) {
          if (iconName4 == 'lock') {
            seticonName4('seat');
          } else {
            seticonName4('lock');
          }
        }
        if (props.index == 5) {
          if (iconName5 == 'lock') {
            seticonName5('seat');
          } else {
            seticonName5('lock');
          }
        }
        if (props.index == 6) {
          if (iconName6 == 'lock') {
            seticonName6('seat');
          } else {
            seticonName6('lock');
          }
        }
        if (props.index == 7) {
          if (iconName7 == 'lock') {
            seticonName7('seat');
          } else {
            seticonName7('lock');
          }
        }
      }}>
      <View style={{ alignItems: 'center' }}>
        {props.item?.component}
        <Text style={{ color: white, marginTop: 2 }}>{props.item?.val}</Text>
      </View>
    </TouchableOpacity>
  );

  const GameSheet = () => (
    <View style={{ paddingBottom: 25 }}>
      <Text style={styles.headingtxt2}>Play games</Text>
      <View style={styles.rbIconbox1}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.gameIconbox, { backgroundColor: '#F9A200' }]}>
            <Image
              source={require('../../assets/images/teen.png')}
              style={{ height: 40, width: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Teen Patti</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.gameIconbox, { backgroundColor: '#C7361E' }]}>
            <Image
              source={require('../../assets/images/ticket.png')}
              style={{ height: 38, width: 38 }}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>A Golden Ticket</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.gameIconbox, { backgroundColor: '#EF4137' }]}>
            <Image
              source={require('../../assets/images/greedy.png')}
              style={{ height: 40, width: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Greedy</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={[styles.gameIconbox, { backgroundColor: '#FFCD00' }]}>
            <Image
              source={require('../../assets/images/fruit.png')}
              style={{ height: 40, width: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Fruit Loops</Text>
        </View>
      </View>
    </View>
  );
  const ViewerSheet = () => (
    <View style={{ flex: 1 }}>
      <View style={styles.ViewerHeader}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Text style={{ color: ViewClr, fontSize: 20 }}>Viewers(60)</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Viewer.current.close()}>
          <CrossIcon name="cross" size={28} style={{ color: 'white' }} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <View>
          <FlatList data={ViewerArray} renderItem={ViewerStyle} />
        </View>
      </View>
    </View>
  );
  const AllowSheet = () => (
    <View>
      <View style={{ alignItems: 'flex-end', paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => AllowCall.current.close()}>
          <CrossIcon name="cross" size={28} style={{ color: white }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <Text style={{ color: white, fontSize: 15, fontWeight: '500' }}>
          Allow Anyone to Join as Guest
        </Text>
        <Switch
          value={switch1}
          onValueChange={onToggleSwitch1}
          color="#E92F24"
        />
      </View>
    </View>
  );
  const showFlatList = categorie => {
    //console.log('description ===>', categorie);
    return <Text>asdf</Text>;
  };
  const GiftSheet = () => (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: heightPercentageToDP(2),
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {gettingGiftsArray?.map((item, index) => (
            <TouchableOpacity
              style={{ marginHorizontal: 10 }}
              onPress={() => {
                setselectGiftBtn({
                  title: item?.title,
                  category: item?.child_categorie,
                });
                showFlatList(item?.child_categorie);
                setbtnClr('white');
              }}>
              <Text
                style={[
                  {
                    color: 'grey',
                    fontSize: 16,
                    fontWeight: '500',
                  },
                  selectGiftBtn.title == item?.title && {
                    color: 'white',
                  },
                ]}>
                {item?.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View>{SelectGiftList(selectGiftBtn)}</View>
      <View style={{ position: 'absolute', right: 5, bottom: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#c471ed',
            marginRight: 8,
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 3,
          }}>
          <Text
            style={{
              color: 'white',

              fontWeight: '500',
              // marginVertical: 10,
            }}
            onPress={() => {
              SendGiftsToHost(sendedBeans);
              UpdateHostBeans();
              //sendGiftToFirebase(selectedGiftData);
            }}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          alignitems: 'flex-end',
          marginTop: 100,
          backgroundColor: 'red',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>0</Text>
          <PlusIcon name="caretright" color="white" />
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <Text style={{color: 'white'}}>to:</Text>
          <Text style={{color: 'white', left: 10}}>Host Name</Text>
        </View>
      </View> */}

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          bottom: 5,
          left: 10,
        }}>
        <Text style={{ color: 'white' }}>{userUpdatedData?.beans}</Text>
        <PlusIcon name="caretright" color="white" />
      </View>
    </View>
  );

  const sendGiftToFirebase = async (data) => {
    const currentDate = new Date();
    //console.log(currentDate, data);
    const newNodeKey = database().ref().child(`/giftsaudio/${channelName}`).push().key;
    await database().ref(`/giftsaudio/${channelName}/` + newNodeKey)
      .set({
        id: uid,
        giftId: data?.id,
        icon: data?.json,
        date: currentDate.toString(),
      });


    //console.log("in comment gift", data);
    const newNodeKey1 = database().ref().child(`/commentsaudio/${channelName}`).push().key;
    await database().ref(`/commentsaudio/${channelName}/` + newNodeKey1)
      .set({
        // id: uid,
        name: userData?.user?.nick_name,
        message: "has send " + data.title,
        uid: newNodeKey1,
        date: currentDate.toString(),
      });
  }


  const OptionSheet = () => (
    <View>
      <View style={{ alignSelf: 'center', marginHorizontal: 10 }}>
        <Text style={styles.headingtxt}>Stream Duration 00:02:11</Text>
        <Text
          style={{
            borderBottomWidth: 1,
            borderColor: 'white',
            marginHorizontal: 20,
          }}></Text>
        <View style={styles.rbIconbox}>
          <View style={styles.gameIconView}>
            <TouchableOpacity
              style={[styles.gameIconbox, { backgroundColor: 'green' }]}>
              <MusicIcon name="music" size={22} color={'white'} />
            </TouchableOpacity>
            <Text style={styles.gametxt}>Music</Text>
          </View>
          <View style={styles.gameIconView}>
            <TouchableOpacity
              style={[styles.gameIconbox, { backgroundColor: '#FFBB2D' }]}>
              <Image
                source={require('../../assets/images/beans.png')}
                style={{ height: 30, width: 30, resizeMode: 'contain' }}
              />
            </TouchableOpacity>
            <Text style={styles.gametxt}>Beans</Text>
          </View>
          <View style={styles.gameIconView}>
            <TouchableOpacity
              style={[styles.gameIconbox, { backgroundColor: '#039CDD' }]}>
              <MirrorIcon name="mirror" size={22} color={'white'} />
            </TouchableOpacity>
            <Text style={styles.gametxt}>Mirror On</Text>
          </View>
          <View style={styles.gameIconView}>
            <TouchableOpacity
              style={[styles.gameIconbox, { backgroundColor: '#6B8EF2' }]}>
              <MessageIcon
                name="message-text-outline"
                size={22}
                color={'white'}
              />
            </TouchableOpacity>
            <Text style={styles.gametxt}>Chat</Text>
          </View>
        </View>
      </View>
    </View>
  );
  const MsgSheet = () => (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: heightPercentageToDP(2),
          justifyContent: 'space-between',
          paddingHorizontal: widthPercentageToDP(2),
        }}>
        <Text style={{ color: white, fontSize: 17 }}>Inbox (New Message)</Text>
        <TouchableOpacity onPress={() => Msg.current.close()}>
          <CrossIcon name="cross" size={30} color={white} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList data={MsgData} renderItem={MsgStyle} />
      </View>
    </View>
  );
  const onToggleSwitch1 = () => {
    setswitch1(!switch1);
  };
  const ViewerStyle = props => (
    <View style={{ flex: 1 }}>
      <View style={styles.profileViewerbox}>
        <Image source={props.item?.img} />
        <View>
          <Text style={{ color: 'white' }}>{props.item?.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: 'white',
                marginLeft: 5,
                backgroundColor: 'dodgerblue',
                paddingHorizontal: 7,
                borderRadius: 10,
                fontSize: 10,
              }}>
              {props.item?.Lv}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginLeft: 10,
                backgroundColor: 'red',
                alignItems: 'center',
                borderRadius: 10,
                paddingHorizontal: 7,
              }}>
              <Image
                source={props.item?.CoinImg}
                style={{ height: 11, width: 11 }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                }}>
                {props.item?.Coin}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
  const ModalView = () => {
    return (
      <View style={styles.modalView}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
              marginRight: 5,
              top: heightPercentageToDP(1),
            }}>
            <TouchableOpacity onPress={() => modalRef.current.toggleModal()}>
              <CrossIcon name="cross" size={22} color={'white'} />
            </TouchableOpacity>
          </View>
          <Text style={{ fontSize: 20, color: 'white', marginVertical: 5 }}>
            Daily Star
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <StarIcon name="star" size={20} color={'white'} />
            <Text style={{ color: 'white', marginHorizontal: 10, fontSize: 16 }}>
              0 Star
            </Text>
          </View>
          <Text style={{ color: 'red', fontWeight: '500' }}>0/100,000</Text>
          <Text style={{ color: 'grey' }}>
            Sending gifts can help me collect stars
          </Text>
          <TouchableOpacity style={styles.CheckBtnbox}>
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>
              Check Gifts Record
            </Text>
          </TouchableOpacity>
          <Text style={{ color: 'grey', width: '85%', textAlign: 'center' }}>
            After reaching 5 star, receive a big beans bag on sending gifts of
            worth 200k beans every time
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/coinBag.png')}
            style={styles.coinbag}
            resizeMode="contain"
          />
          <TouchableOpacity>
            <Text style={styles.Eventtxt}>Event Info</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const ModalView2 = () => {
    return (
      <FansRanking liveID={liveID} userData={userData} onPressCross={() => modal2Ref.current.toggleModal()} />
    )
  };

  const SelectCategory = param => {
    switch (param) {
      case 0:
        return ButtonOne();
      case 1:
        return ButtonTwo();
      case 2:
        return ButtonThree();
      default: {
        break;
      }
    }
  };
  // const SelectGiftList = param => {
  //   switch (param) {
  //     case 0:
  //       return DrawBtnView();
  //     case 1:
  //       return PopularBtnView();
  //     default: {
  //       break;
  //     }
  //   }
  // };
  // const DrawBtnView = () => (
  //   <View style={{alignItems: 'center'}}>
  //     <FlatList
  //       data={DrawBtnList}
  //       renderItem={DrawListStyle}
  //       numColumns={4}
  //       key={'-'}
  //       contentContainerStyle={{
  //         justifyContent: 'space-around',
  //       }}
  //       // horizontal={true}
  //       // showsHorizontalScrollIndicator={true}
  //     />
  //   </View>
  // );

  const SelectGiftList = param => {
    //console.log('Getting in params', param.category);
    return (
      <View>
        <FlatList
          data={param.category}
          renderItem={DrawListStyle}
          numColumns={4}
          key={'-'}
        // contentContainerStyle={{
        //   justifyContent: 'space-around',
        // }}
        // horizontal={true}
        // showsHorizontalScrollIndicator={true}
        />
      </View>
    );
  };

  const DrawListStyle = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPressIn={() => {
          setsendedBeans(item?.beans);
          setselectedGift(index);
          setSelectedGiftData(item);
        }}
        onPress={() => {
          // SendGiftsToHost(item?.beans);

          getUpdatedUserData();
        }}>
        <View
          style={[
            styles.DrawListStyleView,
            {
              borderWidth: selectedGift == index ? 1 : 0,
              borderColor: '#c471ed',
            },
          ]}>


          {item?.image ?
            <Image
              source={{ uri: item?.image }}
              style={{
                height: 70,
                width: 70,
                resizeMode: 'stretch',
              }}
            />
            // <AnimatedLottieView
            //           autoPlay
            //           // ref={animation}
            //           style={{
            //               width: 70,
            //               height: 70,
            //           }}
            //           source={{ uri: item?.json }}
            //       /> 
            :
            <Text>Loading</Text>
          }
          {/* <Image
            source={{ uri: item?.icon }}
            style={{
              // height: heightPercentageToDP(8),
              // width: widthPercentageToDP(19),
              height: 60,
              width: 60,
              resizeMode: 'stretch',
            }}
          /> */}

          <View style={{}}>


            <Text
              style={{
                color: '#c471ed',
                textAlign: 'center',
                fontSize: 10,
              }}>
              {item?.title} ♡
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <Image
              source={require('../../assets/images/coinA.png')}
              style={{height: 20, width: 20}}
            /> */}
              <Text style={{ color: 'white', marginLeft: 2, fontSize: 10 }}>
                {item?.beans}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // const DrawListStyle = ({item}) => (
  //   <View style={styles.DrawListStyleView}>
  //     <Image
  //       source={item?.img}
  //       style={{
  //         height: heightPercentageToDP(8),
  //         width: widthPercentageToDP(19),
  //         resizeMode: 'contain',
  //       }}
  //     />
  //     <Text
  //       style={{
  //         color: 'white',
  //         textAlign: 'center',
  //         fontSize: 14,
  //       }}>
  //       {item?.carname}
  //     </Text>
  //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
  //       <Image source={require('../../assets/images/coin.png')} />
  //       <Text style={{color: 'white'}}>{item?.price}</Text>
  //     </View>
  //   </View>
  // );
  const PopularBtnView = () => (
    <View style={{ alignItems: 'center' }}>
      <FlatList
        data={PopularBtnList}
        renderItem={PopularListStyle}
        // horizontal={true}
        contentContainerStyle={{
          justifyContent: 'space-around',
        }}
        key={'_'}
        numColumns={4}
      />
    </View>
  );
  const PopularListStyle = ({ item }) => (
    <View style={styles.DrawListStyleView}>
      <Image
        source={item?.img}
        style={{
          height: heightPercentageToDP(8),
          width: widthPercentageToDP(19),
          resizeMode: 'contain',
        }}
      />
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 14,
        }}>
        {item?.carname}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../assets/images/coin.png')} />
        <Text style={{ color: 'white' }}>{item?.price}</Text>
      </View>
    </View>
  );
  const DrawBtnList = [
    {
      id: 1,
      img: require('../../assets/images/car.png'),
      price: '500',
      carname: 'Ferarri',
    },
    {
      id: 2,
      img: require('../../assets/images/carriage.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
    {
      id: 3,
      img: require('../../assets/images/bentley.png'),
      price: '500',
      carname: 'Bentely',
    },
    {
      id: 4,
      img: require('../../assets/images/carriage.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
    {
      id: 5,
      img: require('../../assets/images/bentley.png'),
      price: '500',
      carname: 'Bentely',
    },
    {
      id: 6,
      img: require('../../assets/images/carriage.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
  ];
  const PopularBtnList = [
    {
      id: 1,
      img: require('../../assets/images/car.png'),
      price: '500',
      carname: 'Ferarri',
    },
    {
      id: 2,
      img: require('../../assets/images/car.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
    {
      id: 3,
      img: require('../../assets/images/bentley.png'),
      price: '500',
      carname: 'Bentely',
    },
    {
      id: 4,
      img: require('../../assets/images/bentley.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
    {
      id: 5,
      img: require('../../assets/images/carriage.png'),
      price: '500',
      carname: 'Bentely',
    },
    {
      id: 6,
      img: require('../../assets/images/carriage.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
    {
      id: 7,
      img: require('../../assets/images/car.png'),
      price: '500',
      carname: 'Bentely',
    },
    {
      id: 8,
      img: require('../../assets/images/car.png'),
      price: '500',
      carname: 'Royal Carriage',
    },
  ];
 

  const [messsageR, setMessageR] = useState(null)
  const [messages, setMessages] = useState([
    {
      "status": "20",
      "uid": "-NMh31232k",
      "message": "Sexual or violent content is strictly Probibited.All violators will be banned.Do not expose your peronal info such as Phone or location."
    },
    {
      "name": userData?.user?.nick_name,
      "message": "has entered the room",
    }
  ]);
  const listRef = useRef(null);
  const checkDate = new Date()

  useEffect(() => {
    const onChildAdd = database()
      .ref(`/commentsaudio/${channelName}`)
      .on('child_added', snapshot => {
        // console.log('new message node: 2  ', snapshot.val());
        checkfun(snapshot.val())
      });

    const checkfun = (val) => {
      let messageDate = new Date(val?.date)

      if (messageDate?.getTime() > checkDate.getTime() + 3000) {
        setMessages(prev => [...prev, val])
        handleEndReached()
      }
      //console.log("testing ===> ", messageDate, checkDate, messageDate?.getTime() > checkDate.getTime())
    }



    // Stop listening for updates when no longer required
    return () => {
      database().ref(`/commentsaudio/${channelName}`).off('child_added', onChildAdd)
      //setMessages([])
    };
  }, [])


  const [cohostlist, setcohostlist] = useState([])
  const [cohsotData, setCohostData] = useState([])

  useEffect(() => {
    console.log("cohost93")
    const onChildAdd = database()
      .ref(`/cohostaudio/${channelName}`)
      .on('child_added', snapshot => {
        //console.log('cohost93', snapshot.val());
        setCohostData(prev => [...prev, snapshot.val()])
        handleCohost(snapshot.val()?.id)
      });
    // Stop listening for updates when no longer required
    return () => {
      database().ref(`/cohostaudio/${channelName}`).off('child_added', onChildAdd)
      deleteCoHostNode()
    };
  }, [])

  const checkGiftStatus = () => {
    database()
      .ref(`/giftsaudio/${channelName}`)
      .on('child_added', snapshot => {
        receiveGiftFromFirebase(snapshot.val())
        //setGiftReceived(snapshot.val().icon)
      });
  }

  const receiveGiftFromFirebase = (val) => {
    let messageDate = new Date(val?.date)
    if (messageDate?.getTime() > checkDate.getTime() + 500) {
      setGiftReceived(val?.icon)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setGiftReceived(null)
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [giftReceived])

  const handleCohost = (txt) => {
    // console.log("cohost91", txt)
    txt && setCoHost1ID(parseInt(txt))
    //{!coHost1Id ? setCoHost1ID(txt) : !coHost2Id ? setCoHost2ID(txt) : setCoHost3ID(txt)}
  }

  useEffect(() => {
    // console.log("=================================<<<<", cohostlist, " ")
    if (cohostlist.indexOf({ coHost1Id }) !== -1) {
      console.log(`${coHost1Id} is available in the array`);
    } else {
      setcohostlist(prev => [...prev, coHost1Id])
      console.log(`${coHost1Id} is not available in the array`);
    }
  }, [coHost1Id])


  const coHostChildRemove = () => {
    database()
      .ref(`/cohostaudio/${channelName}`)
      .on('child_removed', snapshot => {
        //console.log('cohost00', snapshot.val());
        removeCohost(snapshot.val()?.id)
      });
  }
  const [itemRemove, setItemRemvoe] = useState()
  function removeCohost(itemToRemove) {
    setItemRemvoe(itemToRemove)
  }

  useEffect(() => {
    let index = cohostlist.indexOf(itemRemove);
    //console.log('removeItem', itemRemove, cohostlist, index, cohostlist?.filter((item) => item === itemRemove))
    // //console.log('removeItem', itemRemove, cohostlist, index, cohostlist?.filter((item) => item === itemRemove))
    if (index !== -1) {
      //console.log('removeItem2')
      let newCohostList = [...cohostlist];
      newCohostList.splice(index, 1);
      setcohostlist(newCohostList);
      setCohostData(cohsotData.filter((item) => item?.id !== itemRemove))
    }
  }, [itemRemove])

  const deleteCoHostNode = async () => {
    await database().ref(`/cohostaudio/${channelName}/${uid}`).remove();
  }

  const handleEndReached = () => {
    listRef.current.scrollToEnd({ animated: true, duration: 500 });
  };

  const rldbSendMessage = async () => {
    const currentDate = new Date();
    //console.log(currentDate);
    const newNodeKey = database().ref().child(`/commentsaudio/${channelName}`).push().key;
    await database().ref(`/commentsaudio/${channelName}/` + newNodeKey)
      .set({
        id: uid,
        name: userUpdatedData?.nick_name,
        sender_level: userUpdatedData?.sender_level,
        reciever_level: userUpdatedData?.reciever_level,
        sender_level_image: userUpdatedData?.sender_level_image,
        reciever_level_image: userUpdatedData?.reciever_level_image,
        image: userUpdatedData?.image,
        message: messsageR,
        uid: newNodeKey,
        date: currentDate.toString(),
      });
    setMessageR('')
    Keyboard.dismiss()
  }

  const entryMessage = async () => {
    const currentDate = new Date();
    // console.log(currentDate);
    const newNodeKey = database().ref().child(`/commentsaudio/${channelName}`).push().key;
    await database().ref(`/commentsaudio/${channelName}/` + newNodeKey)
      .set({
        // id: uid,
        name: userUpdatedData?.nick_name,
        message: "has entered the room",
        uid: newNodeKey,
        date: currentDate.toString(),
      });
  }

  const handleSingleUserData = (singleuser) => {
    //console.log("singleuser", singleuser)
    setSingleUserData(singleuser)
    list && setList(!list);
    { (singleuser?.sender_level || singleuser?.reciever_level) && ProfileRef.current.toggleModal(); }
  }

  // keyboard functions to hide and show and set height of input
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [show, setShow] = useState(false)
  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', (event) => {
      setKeyboardHeight(event.endCoordinates.height);
      //console.log('Keyboard height:', keyboardHeight);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');

      setKeyboardHeight(0);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const textInputRef = useRef(null);

  const handleButtonPress = () => {
    Keyboard.dismiss();
    textInputRef.current.focus();
  }

  const namecheck = "what is going on";

  return (
    <AlertNotificationRoot>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/image36.png')}
          style={styles.Bg}>

          {/* <Text>{JSON.stringify(cohostlist)}</Text> */}
          <View style={{ position: 'absolute', zIndex: 1 }}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>

              <View style={[styles.profilecontainer]}>
                <View style={styles.profilebox}>
                  <TouchableOpacity
                    onPress={() => {
                      setSingleUserData({ full_name: hostName, id: liveID, image: hostImage, sender_level: hostSenderLevel, reciever_level: hostReceiverLevel, sender_level_image: completeData?.sender_level_image, reciever_level_image: completeData?.reciever_level_image })
                      ProfileRef.current.toggleModal();
                    }}>
                    <Image
                      source={
                        hostImage == null
                          ? require('../../assets/images/img3.png')
                          : { uri: hostImage }
                      }
                      style={styles.profile}
                    />
                  </TouchableOpacity>
                  <View style={styles.txtbox}>
                    <Text style={[styles.name, { wordWrap: 'break-word', width: 72 }]}>
                      {hostName?.substring(0, 7)} {hostName.length > 7 && "..."}
                    </Text>
                    <Text style={styles.id}>BL {liveID}</Text>
                  </View>
                  {index == -1 ? (
                    <TouchableOpacity
                      style={styles.flowbox}
                      // onPressIn={() => {
                      //   setIconplus('minus');
                      //   GetFollowingHost();
                      // }}
                      onPress={() => {
                        FollowHost();
                        GetFollowingHost();
                        setIconplus('minus');
                      }}>
                      <PlusIcon
                        name={Iconplus}
                        size={20}
                        style={styles.heartIcon}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  ) : null}



                  {index !== -1 ? (
                    <TouchableOpacity
                      style={styles.flowbox}
                      // onPressIn={() => {
                      //   setIconplus('plus');
                      //   GetFollowingHost();
                      // }}
                      onPress={() => {
                        UnFollow();
                        GetFollowingHost();
                        setIconplus('plus');
                      }}>
                      <PlusIcon
                        name={Iconplus}
                        size={20}
                        style={styles.heartIcon}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
              <View style={{}}>
                <ImageBackground
                  style={styles.container}
                >
                  <View style={styles.header}>
                    <View style={styles.headerImageContainer}>
                      {data?.[0]?.image &&
                        <TouchableOpacity onPress={FlatListController}>
                          <Image
                            style={styles.headerImage}
                            source={
                              data?.[0]?.image == null
                                ? require('../../assets/images/img3.png')
                                : { uri: data?.[0]?.image }
                            }
                          />
                        </TouchableOpacity>
                      }
                      {data?.[1]?.image &&
                        <TouchableOpacity onPress={FlatListController}>
                          <Image
                            style={styles.headerImage}
                            source={
                              data?.[1]?.image == null
                                ? require('../../assets/images/img3.png')
                                : { uri: data?.[1]?.image }
                            }
                          />
                        </TouchableOpacity>
                      }
                      {data?.[2]?.image &&
                        <TouchableOpacity onPress={FlatListController}>
                          <Image
                            style={styles.headerImage}
                            source={
                              data?.[2]?.image == null
                                ? require('../../assets/images/img3.png')
                                : { uri: data?.[2]?.image }
                            }
                          />
                        </TouchableOpacity>
                      }
                    </View>

                    <TouchableOpacity onPress={FlatListController} style={styles.headerCounter}>
                      <Text style={styles.text}>{data.length}</Text>
                    </TouchableOpacity>
                    <View style={styles.headerCross}>
                      <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={require('../../../src/assets/images/cross.png')} />
                      </TouchableOpacity>
                    </View>
                  </View>


                </ImageBackground>
              </View>

            </View>
            <View style={styles.Likebox}>
              <TouchableOpacity
                onPress={() => {
                  modal2Ref.current.toggleModal();
                  getUpdatedUserData();
                }}
              // onPress={() => getUpdatedUserData()}
              >
                <View style={styles.Kbox}>
                  <Image
                    source={require('../../assets/images/coin.png')}
                    style={{ height: 16, width: 16, marginRight: 2 }}
                  />
                  {/* <Text style={styles.Ktxt}>10.5k</Text> */}
                  {/* <Text style={styles.Ktxt}>{userUpdatedData?.received_beans}</Text> */}
                  <Text style={styles.Ktxt}>{updatedCoins}</Text>
                </View>
              </TouchableOpacity>

              {/* checking toggle mode */}
              {/* <View style={styles.rightbox}>
              <TouchableOpacity
                onPress={() => {
                  ProfileRef.current.toggleModal();
                }}>
                <Image
                  source={require('../../assets/images/img1.png')}
                  style={styles.img}
                />
              </TouchableOpacity>
             

            </View> */}
              {/* <Text style={{width: 100}}>{JSON.stringify(cohostlist)}</Text> */}
              <TouchableOpacity
                onPress={() => {
                  modalRef.current.toggleModal();
                }}>
                <View style={styles.Starbox}>
                  <StarIcon
                    name="star"
                    color={'yellow'}
                    size={15}
                    style={{ marginRight: 2 }}
                  />
                  {/* <Text style={styles.Startxt}>06 Stars</Text> */}

                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>

            <View style={{ flex: 1 }}>
              {/* <Text>Remote user uid: {remoteUid}</Text> */}


              <View style={{ height: screenHeight, width: '100%' }}>

                {giftReceived &&
                  <View style={styles.giftReceived}>
                    <AnimatedLottieView
                      autoPlay
                      style={{
                        width: 320,
                        height: 330,
                      }}
                      source={{ uri: giftReceived }}
                    />
                  </View>
                }

                <View style={{ position: 'absolute', bottom: keyboardHeight + 2, left: keyboardHeight != 0 ? 0 : 20, backgroundColor: keyboardHeight == 0 ? 'transparent' : 'white', zIndex: 11, justifyContent: 'space-evenly', height: 60 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', width: keyboardHeight == 0 ? "0%" : widthPercentageToDP(100) }}>
                    <TextInput
                      ref={textInputRef}
                      style={[keyboardHeight != 0 && styles.input, { color: 'white', width: '85%' }]}
                      onChangeText={text => setMessageR(text)}
                      value={messsageR}
                      maxLength={25}
                      // value={message}
                      placeholder="Leave a comment..."
                      placeholderTextColor="grey"
                    />
                    {keyboardHeight != 0 && <TouchableOpacity
                      onPress={() => rldbSendMessage()}
                      style={styles.icon1box}>
                      <Feather name="send" size={16} color="white" />
                    </TouchableOpacity>}
                  </View>
                </View>

                <View style={[styles.overlay, { bottom: 80, right: 15 }]}>
                  {
                    joinCall &&
                    //  firebaseWrite()
                    <TouchableOpacity style={{ width: 60 }} onPress={() => joinCallModalRef.current.toggleModal()} >
                      <View
                        style={{
                          backgroundColor: '#191D26',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 5,
                          paddingVertical: 10,
                          borderRadius: 5,
                        }}>
                        <Image
                          source={require('../../assets/images/join.png')}
                          style={{ height: 20, width: 20 }}
                        />
                        <Text style={{ fontSize: 10, color: 'white', }}>Join Call</Text>
                      </View>
                    </TouchableOpacity>
                  }
                </View>

                {list && 
      (<UserList data={data} onPressCross={FlatListController} onPressSingleUser={handleSingleUserData} />)
    }  

                <View style={styles.bottombox1}>
                  <View style={{ justifyContent: 'flex-end', height: '100%', bottom: 30, width: '60%' }}>
                    <View style={{ justifyContent: 'flex-end', maxHeight: 250 }}>
                      <FlatList
                        ref={listRef}
                        showsVerticalScrollIndicator={false}
                        data={messages}
                        renderItem={({ item, i }) => {
                          return (
                            <TouchableOpacity
                              key={i}
                              onPress={() => handleSingleUserData(item)}>
                              <View style={styles.commentContainer}>
                                <Text style={{ paddingRight: 5, wordWrap: 'break-word', width: item?.status === "20" ? "90%" : "100%" }}>
                                  {item?.sender_level &&
                                    <Image
                                      source={{ uri: item?.sender_level_image }}
                                      style={{ height: 25, width: 55, bottom: 10 }}
                                    />
                                  }
                                  {item?.name &&
                                    <Text style={[styles.commentText, { marginLeft: 10, fontWeight: 'bold', fontSize: heightPercentageToDP(1.55), color: 'orange' }]}> {item?.name} :</Text>
                                  }
                                  <Text style={[styles.commentText, { paddingRight: 5, wordWrap: 'break-word', width: item?.status === "20" ? "90%" : "20%", fontSize: heightPercentageToDP(1.5), color: item?.status === "20" ? "#41C2D2" : 'white' }]}> {item?.message}</Text>
                                </Text>
                              </View>
                            </TouchableOpacity>
                          )
                        }}
                        keyExtractor={item => item?.uid}
                      />
                    </View>
                  </View>
                </View>
              </View>

            </View>


            <View style={{ position: 'absolute', zIndex: 3, top: heightPercentageToDP(10), width: widthPercentageToDP(100) }}>
              <View style={[styles.hostBox, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={{ alignItems: 'center' }}>
                  <Image
                    source={
                      hostImage == null
                        ? require('../../assets/images/img3.png')
                        : { uri: hostImage }
                    }
                    style={{ height: 60, width: 60, borderRadius: 30 }}
                  />
                  <Text style={styles.audioCohostNameStyle}>{hostName.substring(0, 8) + "..."}</Text>
                </View>
                <TouchableOpacity onPress={() => cohsotData?.[1] && handleSingleUserData(cohsotData?.[1])}>
                  {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                  <View style={{ alignItems: 'center' }}>
                    <AudioPerson img={cohsotData?.[1]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[1]?.full_name ? cohsotData?.[1]?.full_name?.substring(0, 8) + "..." : "01"}</Text>
                  </View>
                </TouchableOpacity>
              </View>



              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 2, marginHorizontal: 10 }}>
                <TouchableOpacity onPress={() => cohsotData?.[2] && handleSingleUserData(cohsotData?.[2])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[2]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[2]?.full_name ? cohsotData?.[2]?.full_name?.substring(0, 8) + "..." : "02"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cohsotData?.[3] && handleSingleUserData(cohsotData?.[3])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[3]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[3]?.full_name ? cohsotData?.[3]?.full_name?.substring(0, 8) + "..." : "03"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cohsotData?.[4] && handleSingleUserData(cohsotData?.[4])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[4]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[4]?.full_name ? cohsotData?.[4]?.full_name?.substring(0, 8) + "..." : "04"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cohsotData?.[5] && handleSingleUserData(cohsotData?.[5])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[5]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[5]?.full_name ? cohsotData?.[5]?.full_name?.substring(0, 8) + "..." : "05"}</Text>
                  </View>
                </TouchableOpacity>
                {/* <FlatList
            data={seatsData}
            renderItem={seatItemStyle}
            numColumns={4}
            key={'_'}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginVertical: 14,
            }}
          /> */}
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                <TouchableOpacity onPress={() => cohsotData?.[6] && handleSingleUserData(cohsotData?.[6])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[6]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[6]?.full_name ? cohsotData?.[6]?.full_name?.substring(0, 8) + "..." : "06"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cohsotData?.[7] && handleSingleUserData(cohsotData?.[7])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[7]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[7]?.full_name ? cohsotData?.[7]?.full_name?.substring(0, 8) + "..." : "07"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cohsotData?.[8] && handleSingleUserData(cohsotData?.[8])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[8]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[8]?.full_name ? cohsotData?.[8]?.full_name?.substring(0, 8) + "..." : "08"}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => cohsotData?.[9] && handleSingleUserData(cohsotData?.[9])}>
                  <View style={{ alignItems: 'center' }}>
                    {/* <Text>{JSON.stringify(cohsotData)}</Text> */}
                    <AudioPerson img={cohsotData?.[9]?.image} />
                    <Text style={styles.audioCohostNameStyle}>{cohsotData?.[9]?.full_name ? cohsotData?.[9]?.full_name?.substring(0, 8) + "..." : "09"}</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

            <View style={[styles.bottombox]}>

              <TouchableOpacity
                style={{}}>
                <TouchableOpacity
                  onPress={() => handleButtonPress()}
                  style={styles.icon1box}>
                  <Feather name="message-circle" size={24} color="white" />
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleMicButton()}
                style={styles.icon1box}>
                <Feather name={isMicOn ? "mic" : "mic-off"} size={22} color="orange" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => shareToWhatsApp(hostName, channelName)}
                style={styles.icon1box}>
                <Simple name="share-alt" size={20} color="#FFE000" />
              </TouchableOpacity>

              <View style={styles.lefticonsbox}>
                <TouchableOpacity
                  onPress={() => {
                    Msg.current.open();
                  }}
                  style={styles.icon1box}>
                  <MessageIcon
                    name="facebook-messenger"
                    size={22}
                    color="#c471ed"
                  />
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={styles.icon1box}
                  onPress={() => Option.current.open()}>
                  <OptionIcon
                    name="three-bars"
                    size={20}
                    style={styles.icon1}
                  />
                </TouchableOpacity> */}

                {/* <TouchableOpacity style={styles.icon1box}>
                  <SpeakerIcon
                    name="settings-voice"
                    size={20}
                    style={styles.icon1}
                  />
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={styles.icon1box}
                  onPress={() => Game.current.open()}>
                  <Entypo name="game-controller" color="#12c2e9" size={22} />
                </TouchableOpacity>
                {/* <TouchableOpacity
                  style={styles.icon1box}
                  onPress={() => {
                    AllowCall.current.open();
                  }}>
                  <PhoneIcon name="phone" size={20} style={styles.icon1} />
                </TouchableOpacity> */}
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    Gift.current.open();
                  }}>
                  <LinearGradient
                    style={[styles.icon2box]}
                    name="gift"
                    colors={['#c471ed', '#f64f59']}>
                    <FontAwesome
                      name="gift"
                      size={20}
                      style={[
                        styles.giftIcon,
                        {
                          color: 'white',
                        },
                      ]}
                    />
                  </LinearGradient>
                </TouchableOpacity>

              </View>
            </View>
          </View>

          <RbSheetComponent view={<GameSheet />} refUse={Game} close={true} />
          <RbSheetComponent
            view={<OptionSheet />}
            refUse={Option}
            close={true}
          />
          <RbSheetComponent
            view={<MsgSheet />}
            refUse={Msg}
            close={false}
            height={'40%'}
          />
          <RbSheetComponent
            view={<GiftSheet />}
            refUse={Gift}
            close={true}
            height={'50%'}
          />
          <RbSheetComponent
            view={<ViewerSheet />}
            refUse={Viewer}
            close={false}
            height={300}
          />
          <RbSheetComponent
            view={<AllowSheet />}
            refUse={AllowCall}
            close={true}
            height={200}
          />
          <StarModal view={<ModalView />} ref={modalRef} />
          <StarModal view={<ModalView2 />} ref={modal2Ref} />
          <StarModal view={
            <ProfileModalStyles
              data={singleUserData}
              onPressCros={() => ProfileRef.current.toggleModal()}
              onPress={() => ProfileRef.current.toggleModal()} />}
              ref={ProfileRef}
          />

          <StarModal view={<JoinCallModal onPress={() => joinCallModalRef.current.toggleModal()} />}
            ref={joinCallModalRef}
          />
        </ImageBackground>
      </SafeAreaView>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        // height={350}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
            height: 0,
          },
          container: {
            backgroundColor: '#303749',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            height: heightPercentageToDP(30),
          },
        }}>
        <SocialLinks />
      </RBSheet>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  audioCohostNameStyle: {
    marginTop: 2,
    color: white,
  },
  commentContainer: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 12,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    fontSize: 10,
  },
  bottombox1: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    zIndex: 4,
    paddingVertical: 15,
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 4,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0055cc',
    margin: 5,
  },
  main: { height: "100%", alignItems: 'center' },
  scroll: { flex: 1, backgroundColor: '#ddeeff', width: '100%' },
  scrollContainer: { alignItems: 'center' },
  videoView: { width: '100%', height: "100%" },
  btnContainer: { flexDirection: 'row', justifyContent: 'center' },
  head: { fontSize: 20 },
  info: { backgroundColor: '#ffffe0', paddingHorizontal: 8, color: '#0000ff' },
  giftReceived: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    zIndex: 10,
    //backgroundColor: 'white',
    right: 5,
    bottom: 150,
  },
  overlayContainer: {
    position: 'absolute',
    zIndex: 1,
    //backgroundColor: 'white',
    left: 20,
    top: 20,
  },
  cohostStyle: {
    width: 120,
    height: 150,
    borderWidth: 3,

  },
  border: {
    width: 120,
    height: 154,
    borderWidth: 2,
    borderColor: 'white'
  },
  container: {
    flex: 1,
  },
  profilecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  txtbox: {
    marginLeft: 3,
  },
  id: {
    color: 'white',
    fontSize: 10,
  },
  name: {
    color: 'white',
    fontSize: 12,
  },
  profilebox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 2,
    width: 135,
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 25,
  },
  crossIcon: {
    color: 'white',
    right: 2,
  },
  flowbox: {
    marginLeft: 0,
    backgroundColor: 'red',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noTxt: {
    marginHorizontal: 5,
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 25,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  Bg: {
    height: '100%',
    width: '100%',
  },
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
  commentcontainer: {
    marginTop: heightPercentageToDP(5),
    width: '70%',
  },
  commentbox: {
    marginVertical: 5,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 25,
    alignItems: 'flex-start',
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  commenttxt: {
    color: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  LvIcon: {
    color: 'white',
    backgroundColor: 'orange',
    borderRadius: 25,
    marginHorizontal: 5,
    paddingHorizontal: 5,
    height: 17,
    justifyContent: 'center',
    fontSize: 11,
    top: 1,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '75%',
    borderRadius: 25,
    marginLeft: 10,
    paddingHorizontal: 13,
    height: 40,
    color: 'white',
  },
  bottombox: {
    top: heightPercentageToDP(94),
    flexDirection: 'row',
    width: widthPercentageToDP(100),
    justifyContent: 'flex-start'
  },
  lefticonsbox: {
    flexDirection: 'row',
    width: '83%',
  },
  righticonsbox: {
    flexDirection: 'row',
    position: 'absolute',
    right: 5,
  },
  icon2box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 30,
    width: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  giftIcon: {
    color: 'white',
    marginHorizontal: 1,
  },
  icon1box: {
    backgroundColor: '#19162A',
    height: 35,
    width: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: widthPercentageToDP(4),
  },
  FlatListView: {
    paddingHorizontal: 15,
  },
  FlatListView1: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  rbIconbox1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rbIconbox2: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    paddingBottom: 10,
    alignSelf: 'center',
  },
  gameIconView: {
    alignItems: 'center',
    width: '25%',
    marginBottom: heightPercentageToDP(3),
  },
  gameIconbox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  gametxt: {
    color: '#FFFFFF',
    width: 90,
    textAlign: 'center',
  },
  headingtxt1: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  headingtxt2: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 15,
    borderRadius: 3,
    marginBottom: 15,
  },
  IconView: {
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(2),
    marginHorizontal: 3,
  },
  ViewerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  profileViewerbox: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingVertical: 5,
  },
  modalView: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'space-between',
    height: heightPercentageToDP(50),
  },
  coinbag: {
    height: 70,
    width: 70,
    marginBottom: 5,
  },
  Eventtxt: {
    color: '#EC3E33',
    fontSize: 17,
    borderBottomWidth: 1,
    borderColor: '#EC3E33',
    fontWeight: '500',
    marginVertical: 15,
  },
  hostBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: heightPercentageToDP(5),
    marginVertical: 14,
  },
  iconBg: {
    backgroundColor: '#303749',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon1: {
    color: '#FFFFFF',
  },
  headingtxt: {
    color: 'white',
    marginLeft: 15,
    fontSize: 15,
    fontWeight: '400',
    backgroundColor: '#3A3A3A',
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  rbIconbox: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  DrawListStyleView: {
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'space-around',
    marginHorizontal: widthPercentageToDP(1.5),
    width: widthPercentageToDP(22),
    marginVertical: 2,
    paddingVertical: 2,
  },
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
  container: {
    flex: 1,
  },
  flatContainer: {
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    zIndex: 11,
    // padding: 20,
  },
  flatListHeaderText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  flatInnerContainer: {
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  listImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelTextContainer: {
    backgroundColor: '#27B0FF',
    height: 20,
    width: 50,
    borderRadius: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  listText: {
    flex: 7,
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 5,
  },
  flatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 20,
    alignItems: 'center',
  },
  headerImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerImage: {
    height: 32,
    width: 32,
    borderRadius: 18,
    marginHorizontal: 5,
  },
  headerCounter: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: 30,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 5,
  },
  headerCross: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
});
export default AudioCallUsers;

// Homescreen ( picture add ki hain or kuch data khatam kiya hai bano reel wali flatlist ka)

// Stream_Fresher ( params add kiye hain)

// EditProfile ( validation lagaii hai)

// Recomendations ( Indicator lagaya hai)

// profileModalstyle (is ka sara code AudiencePage par copy kiya hai or is modal ka static data khatm kiya hai huba rana wala)

// AudiencePage ( is me modal add kiya or data add kiya redux se host ka or plus pr toast or follow karwaya hai)

// stream.js ( is me component change kiye hain har jaga kuch jaga Stream_Fresher wala component add kiya)

// Stream_PK_Videos ( is me name change kiya hai)

// Stream_Reels ( is me pics lagai hain name change kiya hai or poster change kiya hai)

// Stream_Private_Room ( is me pics lagai hain name change kiya hai or poster change kiya hai)

// TalentLevelExplaination ( is me indicator lagaya hai)

// Follow and follower (is me indicator lagaya hai)

// bottomnavigator ( is ka color change kiya hai)

// 2 3 packages bhi kiye hain
// assests me images bhi add ki hain
