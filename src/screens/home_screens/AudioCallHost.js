import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  ToastAndroid,
  Dimensions,
  PermissionsAndroid,
  findNodeHandle,
  TextInput,
  Button,
} from 'react-native';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import RbSheetComponent from '../reuseable_Component/RbSheetComponent';
import HeartIcon from 'react-native-vector-icons/Foundation';
import CrossIcon from 'react-native-vector-icons/Entypo';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import OptionIcon from 'react-native-vector-icons/Octicons';
import CamerIcon from 'react-native-vector-icons/AntDesign';
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import { primaryColor, white, txtgrey, transparent } from '../../utils/Styles';
import GameIcon from 'react-native-vector-icons/Ionicons';
import EmptyHeart from 'react-native-vector-icons/AntDesign';
import GiftIcon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/AntDesign';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import AddFrndIcon from 'react-native-vector-icons/Ionicons';
import ShuffleIcon from 'react-native-vector-icons/Ionicons';
import PhoneIcon from 'react-native-vector-icons/Feather';
import RBSheet from 'react-native-raw-bottom-sheet';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MusicIcon from 'react-native-vector-icons/Feather';
import StickerIcon from 'react-native-vector-icons/Entypo';
import RoomIcon from 'react-native-vector-icons/Fontisto';
import MirrorIcon from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import BackIcon from 'react-native-vector-icons/AntDesign';
import StarModal from '../reuseable_Component/StarModal';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import { Switch } from 'react-native-paper';

import { ApiCallToken } from '../../Services/Apis';

import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from 'react-native-agora';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';
import { ScrollView } from 'react-native-gesture-handler';
import AnimatedLottieView from 'lottie-react-native';
import AudioPerson from '../reuseable_Component/AudioPerson';
import { useKeepAwake } from '@sayem314/react-native-keep-awake';
import ProfileModalStyles from '../reuseable_Component/ProfileModalStyle';
import FansRanking from '../reuseable_Component/FansRanking';
import UserList from '../Agora/components/UserList';
import { Keyboard } from 'react-native';
import { shareToWhatsApp } from '../reuseable_Component/SocialShare';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import AnimatedProfileDp from '../reuseable_Component/AnimatedProfileDP';
import SeatsLogic from '../reuseable_Component/SeatsLogic';
import { Alert } from 'react-native';
import { BackHandler } from 'react-native';
import MessageSheet from '../Agora/components/MessageSheet';


export default AudioCallHost = (props) => {

  
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit Streaming!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => navigation.goBack('Streams') },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => BackHandler.remove();
  }, []);

  useKeepAwake();
  const navigation = useNavigation();
  const videoBuffer = isBuffer => {
    console.log(isBuffer);
  };
  const refRBSheet = useRef();
  const msgRef = useRef();
  const AllowCall = useRef();
  const refRBSheet1 = useRef();
  const refRBSheetOptions = useRef();
  const refRBSheetGifts = useRef();
  const refRBSheetPK = useRef();

  const [selectGiftBtn, setselectGiftBtn] = useState(0);
  const [selectPkBtn, setselectPkBtn] = useState(0);
  const [selectTimeBtn, setselectTimeBtn] = useState(0);
  const [btnClr, setbtnClr] = useState('grey');
  const [switch1, setswitch1] = useState(false);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  const userData = useSelector(state => state.auth.userData);
  const active_store = useSelector(state => state.homeRed.activeStoreData);
  const frameData = active_store?.filter((item) => item?.parent_title === 'Frames' )
  //console.log("user data11", userUpdatedData)
  const { route } = props;
  const { params } = route;
  const { userID, userName, liveID } = params;
  const [updatedCoins, setupdatedCoins] = useState();
  const [giftReceived, setGiftReceived] = useState(null);

  const UpdateHostBeans = async () => {
    const paramsBody = {
      id: liveID,
    };
    try {
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: paramsBody,
        route: 'user/host-updated-data',
        verb: 'POST',
      });
      setupdatedCoins(res.data.coins);
    } catch (error) {
      console.log('ERROR IS ====>>>', error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      UpdateHostBeans();
    }, []),
  );

  //my code


  //console.log("Routes", route.params)
  const [token, setToken] = useState(null)
  const [uid, setUid] = useState(route?.params?.uid)
  const [channelName, setChannelName] = useState(route?.params?.channelName);
  const [userUid, setUserUid] = useState(null)

  const agoraEngineRef = useRef(route?.params?.agoraEngineRe); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [isHost, setIsHost] = useState(route?.params?.isHost); // Client role
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user

  const [messages, setMessages] = useState([
    {
      "status": "20", "uid": "-NMh31232k",
      "message": "Sexual or violent content is strictly Probibited.All violators will be banned.Do not expose your peronal info such as Phone or location.",
    },


  ]);
  const [message, setMessage] = useState(''); // Message to the user
  const [coHost1Id, setCoHost1ID] = useState(null);
  const [tempData, setTempData] = useState(false);
  const [callRequests, setCallRequests] = useState([])
  const checkDate = new Date()

  useEffect(() => {
    const onChildAdd = database()
      .ref(`/channelsaudio/${channelName}`)
      .on('child_added', snapshot => {
        { snapshot.val() && firebaseFunc(snapshot.val()) }
      });
    // Stop listening for updates when no longer required
    return () => {
      database().ref(`/channelsaudio/${channelName}`).remove();
      database().ref(`/giftsaudio/${channelName}`).remove();
    }
  }, [])

  const setGiftsDBToFirebase = async (data) => {

    await database().ref(`/giftsaudio/${channelName}`)
      .set({
        sendGifts: "true"
      });
  }

  useEffect(() => {
    const onChildAdd = database()
      .ref(`/commentsaudio/${channelName}`)
      .on('child_added', snapshot => {
        // console.log('new message node:  ', snapshot.val());
        checkfun(snapshot.val())
      });

    // Stop listening for updates when no longer required
    return () => {
      database().ref(`/commentsaudio/${channelName}`).off('child_added', onChildAdd)
      deleteMessageNode()
      //setMessages([])
    };
  }, [])


  useEffect(() => {
    // console.log("===========================================================<")
    database()
      .ref(`/cohostaudio/${channelName}`)
      .set({
        JoinCalls: "false",
      })
      .then(() => {
        setCallRequests([])
      });
  }, [])

  const [cohostlist, setcohostlist] = useState([])
  const [cohsotData, setCohostData] = useState([
    {id: 1, value: null, isLocked: false, isMicOn: true},
    {id: 2, value: null, isLocked: false},
    {id: 3, value: null, isLocked: false}, 
    {id: 4, value: null, isLocked: false}, 
    {id: 5, value: null, isLocked: false}, 
    {id: 6, value: null, isLocked: false}, 
    {id: 7, value: null, isLocked: false}, 
    {id: 8, value: null, isLocked: false},  
    {id: 9, value: null, isLocked: false, isMicOn: true}, 
    {id: 10, value: null, isLocked: false},])

  const [numbers, setNumbers] = useState([
    {id: 1, value: null, isLocked: false, isMicOn: true},
    {id: 2, value: null, isLocked: false},
    {id: 3, value: null, isLocked: false}, 
    {id: 4, value: null, isLocked: false}, 
    {id: 5, value: null, isLocked: false}, 
    {id: 6, value: null, isLocked: false}, 
    {id: 7, value: null, isLocked: false}, 
    {id: 8, value: null, isLocked: false},  
    {id: 9, value: null, isLocked: false, isMicOn: true}, 
    {id: 10, value: null, isLocked: false},
]);

const [selectedItems, setSelectedItems] = useState([]);

const handlePress = (index) => {
    setSelectedItems((prev) => {
        if (prev.includes(index)) {
            return prev.filter((item) => item !== index);
        } else {
            //console.log("check ...prev", ...prev)
            return [...prev, index];
        }
    });
};

const handleLongPress = (value) => {
    setCohostData(cohsotData.map((item, index) => {
        if (value === index) {
          return {...item, isLocked: item?.isLocked ? false : true};
        }
        return item;
      }));

    //   console.log("item", cohostlist)
};


const bookSeat = (data) => {
  console.log("booksera", data?.image, cohostlist )
  if(data?.id)
  {
  let counter = 0

    setCohostData(cohsotData.map(item => {
          if ((item?.value === null && !item?.isLocked) && counter === 0) {
            counter = counter + 1
            return {...item, value: 'book', name: data?.nick_name, image: data?.image};
          }
          return item;
        }));
  }


      
};

const deleteFromArrary = () => {
    //console.log("testing", cohostlist)
    setcohostlist(cohostlist.map(item => {
          if (item?.id === 4) {
            return {...item, value: null};
          }
          return item;
        }));
      
};

  useEffect(() => {
    // console.log("cohost92")
    const onChildAdd = database()
      .ref(`/cohostaudio/${channelName}`)
      .on('child_added', snapshot => {
      //{  snapshot.val() && bookSeat(snapshot.val())}
        //setCohostData(prev => [...prev, snapshot.val()])
        //console.log('cohost92', snapshot.val());
        handleCohost(snapshot.val())
      });
    // Stop listening for updates when no longer required
    return () => {
      database().ref(`/cohostaudio/${channelName}`).off('child_added', onChildAdd)
      database().ref(`/cohostaudio/${channelName}`).remove()
      deleteCoHostNode()
    };
  }, [])

  const handleCohost = (txt) => {
    // console.log("cohost91", txt)
    txt && setCoHost1ID(txt)
    //{!coHost1Id ? setCoHost1ID(txt) : !coHost2Id ? setCoHost2ID(txt) : setCoHost3ID(txt)}
  }

  useEffect(() => {
    // console.log("=================================>>>", coHost1Id, " ", cohsotData)

    if(coHost1Id?.id)
    {
      console.log("cohsotdata", cohsotData, coHost1Id)
      let counter = 0
      setCohostData(cohsotData.map(item => {
            if ((item?.value === null && !item?.isLocked) && counter === 0) {
              counter = counter + 1
              return {...item, value: 'book', name: coHost1Id?.nick_name, image: coHost1Id?.image, cohostID: coHost1Id?.id};
            }
            return item;
          }));
    }

    if (cohostlist.indexOf({ coHost1Id }) !== -1) {
      console.log(`${coHost1Id} is available in the array`);
    } else {
     
     
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
    // console.log('removeItem', itemRemove, cohostlist, cohsotData.filter((item) => item?.id !== itemRemove))
    // console.log("=================================>>>", cohsotData, " ", cohsotData.some((item) => item.id === itemRemove))
    // console.log('removeItem', itemRemove, cohostlist, index, cohostlist?.filter((item) => item === itemRemove))
    if (index !== -1) {
      //console.log('removeItem2')
      let newCohostList = [...cohostlist];
      newCohostList.splice(index, 1);
      setcohostlist(newCohostList);
    
    }

    if(itemRemove)
    {
      console.log("cohsotdata", cohsotData, coHost1Id)
      let counter = 0
      setCohostData(cohsotData.map(item => {
            if (parseInt(item?.cohostID) === parseInt(itemRemove)) {
              counter = counter + 1
              return {...item, value: null};
            }
            return item;
          }));
    }
  }, [itemRemove])


  const deleteCoHostNode = async () => {
    await database().ref(`/cohostaudio`).remove();
  }

  const deleteMessageNode = async () => {
    await database().ref(`/commentsaudio/${channelName}`).remove();
  }

  const checkfun = (val) => {
    let messageDate = new Date(val?.date)

    if (messageDate?.getTime() >= checkDate.getTime()) {
      setMessages(prev => [...prev, val])
      handleEndReached()
      //console.log("testing ===> ")
    }
    //console.log("testing ===> ", messageDate, checkDate, messageDate?.getTime() >= checkDate.getTime())
  }

  const firebaseFunc = (val) => {
    handleCohostList(val)
    //console.log("val101", val)
    setCallRequests(prev => [...prev, val])
    // console.log("Firebase", val)

    handleCohostList()
  }

  const addJoinCallToFirebase = () => {
    database()
      .ref(`/channelsaudio/${channelName}`)
      .set({
        JoinCalls: "false",
      })
      .then(() => {

        setCallRequests([])
      });
  }

  const handleCohostList = () => {
    let check = callRequests.filter((item, index) => callRequests.indexOf(parseInt(item)) === parseInt(index))
    // console.log("filtering", check)
  }

  const changeCohostStatus = (id) => {

    database()
      .ref(`/channelsaudio/${channelName}/${id}`)
      .update({
        coHostID: parseInt(id),
        status: parseInt(1),
      })
      .then(() => {
      });

  }


  const handleFireData = (val) => {
    let go = Object.keys(val)?.[0]
    //console.log("val12", Object.keys(val))
  }

  const firebaseWrite = () => {
    database()
      .ref(`/channelsaudio/${channelName}/${tempData}`)
      .set({
        cohostID: tempData,
        status: "0",
      })
      .then(() => {
      });

  }

  function showMessage(msg) {
    setMessage(msg);
  }


  const [data, setData] = useState([])


  const generateToken = async () => {
    const paramsBody = {
      channelName: channelName,
      uid: parseInt(uid),
      role: "RolePublisher",
    };
    try {
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: paramsBody,
        route: 'get-token',
        verb: 'POST',
      });
      if (res?.token) {
        join(res?.token)
      }
    } catch (error) {
      console.log('Audiocallhost screen, generatetoken func', error);
    }
  }

  const join = async (tok) => {
    //  console.log("token from funct", tok )
    // console.log("tok", t, "data", JSON.stringify(data))
    if (tok) {
      if (isJoined) {
        return;
      }
      try {
        agoraEngineRef.current?.setChannelProfile(
          ChannelProfileType.ChannelProfileLiveBroadcasting,
        );

        if (isHost) {
          agoraEngineRef.current?.startPreview();
          // console.log("inhost", tok)
          agoraEngineRef.current?.joinChannel(tok, channelName, parseInt(uid), {
            clientRoleType: ClientRoleType.ClientRoleBroadcaster
          });
        } else {
          //  console.log("hereeeeeeee")
          agoraEngineRef.current?.joinChannel(tok, channelName, parseInt(uid), {
            clientRoleType: ClientRoleType.ClientRoleAudience
          });
        }
      } catch (e) {
        console.log(e);
      }
    } else { console.log("no token", token) }
  };
  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');
    } catch (e) {
      console.log(e);
    }

  };


  const agoraEvents = {
    onJoinChannelSuccess: () => {
      showMessage('Successfully joined the channel ' + channelName);
      setIsJoined(true);
      console.log("joined channel")
    },
    onUserJoined: (_connection, Uid) => {
      setRemoteUid(Uid);
    },
    onUserOffline: (_connection, Uid) => {
      setRemoteUid(0);
      console.log("user offline", Uid)
    },
    onLocalVideoStateChanged: (remoteUid, state) => {
      console.log("remoteuid", remoteUid, "state", state)

    },
  }
  const callBackMethod = () => {
    const agoraEngine = agoraEngineRef.current;
    agoraEngine.registerEventHandler(agoraEvents);
  }

  const [heart, setHeart] = useState(0)
  const heartBeatInterval = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'heart-beat',
        verb: 'GET',
      });
     // console.log("HeartBeatInterval", res)
      setHeart(heart => heart + 1)
    } catch (error) {
      console.log('ERROR HeartBeatInterval ====>>>', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      heartBeatInterval()
      makeHostLiveStatusActive()
    }, 3000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    setGiftsDBToFirebase()
    entryMessage()
    addJoinCallToFirebase()
    addToUserList()
    firebaseFunc()
    callBackMethod();
    generateToken();
    makeHostLiveStatusActive()
    checkupdate()
    onUserRemove()
    coHostChildRemove()
    checkGiftStatus()

    // getUserData()
    // getUserListyByChannel()
    return () => {
      console.log("cleaned up");
      agoraEngineRef.current.unregisterEventHandler(agoraEvents)
      deleteUserListNode();
      database().ref().off();
      makeHostLiveStatusInactive()
      leave();
    };
  }, []);

  const checkGiftStatus = () => {
    database()
      .ref(`/giftsaudio/${channelName}`)
      .on('child_added', snapshot => {
        // console.log('gift95', snapshot.val());
        receiveGiftFromFirebase(snapshot.val())
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
    }, 7000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [giftReceived])

  const makeHostLiveStatusActive = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: {id: userUpdatedData?.id},
        route: 'status-audio-active',
        verb: 'POST',
      });
      // console.log('makeHostLiveStatusActive ', res)
    } catch (error) {
      console.log('Audiocallhost screen, makeHostLiveStatusActive func', error);
    }
  };

  const makeHostLiveStatusInactive = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'status-audio-disable',
        verb: 'POST',
        paramsBody: { id: userData?.user?.id }
      });
      //console.log('Updated makeHostLiveStatusInactive', res)
    } catch (error) {
      console.log('Audiocallhost screen, makeHostLiveStatusInactive func', error);
    }
  };

  const addToUserList = async () => {
    // console.log("userdata", userData?.user)
    await database()
      .ref(`/userlistaudio/${channelName}/${uid}`)
      .set({
        id: uid,
        full_name: userUpdatedData?.nick_name,
        image: userUpdatedData?.image,
        sender_level: userUpdatedData?.sender_level,
        reciever_level: userUpdatedData?.reciever_level,
        reciever_level_image: userUpdatedData?.reciever_level_image,
        sender_level_image: userUpdatedData?.sender_level_image,
        status: "0",
        json_image: frameData?.[0]?.json_image
      })
      
  }

  const checkupdate = () => {
    // console.log("node3")
    const onChildAdd = database()
      .ref(`/userlistaudio/${channelName}`)
      .on('child_added', snapshot => {
        // console.log('addnode4 ', snapshot.val());
        const newUser = snapshot.val();
        // console.log("data", data)
        if (!data.some(user => user.id === newUser.id)) {
          setData(prev => [...prev, newUser])
        }
      });
  }

  const [tes, setTes] = useState(null)

  const onUserRemove = () => {
    // console.log("node6")
    database()
      .ref(`/userlistaudio/${channelName}`)
      .on('child_removed', snapshot => {
        // console.log('child_removed from userlist', snapshot.val());
        setTes(snapshot.val()?.id)
      });
  }

  // filtering data from user list when any user left the channel checking real time through database (tes) is the id that user left the channel we are getting real time user remove in tes
  useEffect(() => {
    // console.log("==============================00", callRequests, " ", callRequests?.filter((item) => parseInt(item?.coHostID) !== parseInt(tes)))
    { (callRequests?.[0] && tes) && setCallRequests(callRequests?.filter((item) => parseInt(item?.coHostID) !== parseInt(tes))) }
    { (tes != uid && data?.[0] && tes) && setData(data?.filter((item) => item?.id !== tes)) }
    setTes(null)
  }, [tes])


  const deleteUserListNode = async () => {
    await database()
      .ref(`/userlistaudio/${channelName}`)
      .remove()
      
  }

  const GiftBtns = [
    { id: 1, BtnTxt: 'Draw' },
    { id: 2, BtnTxt: 'Popular' },
    { id: 3, BtnTxt: 'Multi' },
    { id: 4, BtnTxt: 'Activity' },
    { id: 5, BtnTxt: 'Family' },
  ];
  const PkBtns = [
    { id: 1, name: 'Single Round PK' },
    { id: 2, name: 'Best of Three PK' },
  ];
  const TimeBtns = [
    { name: '5min' },
    { name: '10min' },
    { name: '12min' },
    { name: '15min' },
  ];


  const onToggleSwitch1 = () => {
    setswitch1(!switch1)
    database()
      .ref(`/channelsaudio/${channelName}`)
      .update({
        JoinCalls: !switch1 ? "true" : "false",
      })
      .then(() => {

        setCallRequests([])
      });

  };



  const SelectGiftList = param => {
    switch (param) {
      case 0:
        return DrawBtnView();
      case 1:
        return PopularBtnView();
      default: {
        break;
      }
    }
  };


  const DrawBtnView = () => (
    <View style={{ alignItems: 'center' }}>
      <FlatList
        data={DrawBtnList}
        renderItem={DrawListStyle}
        numColumns={4}
        key={'-'}
        contentContainerStyle={{
          justifyContent: 'space-around',
        }}
      // horizontal={true}
      // showsHorizontalScrollIndicator={true}
      />
    </View>
  );
  const DrawListStyle = ({ item }) => (
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
        {item.carname}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../assets/images/coin.png')} />
        <Text style={{ color: 'white' }}>{item.price}</Text>
      </View>
    </View>
  );
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
        {item.carname}
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../../assets/images/coin.png')} />
        <Text style={{ color: 'white' }}>{item.price}</Text>
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
      <View style={{ flexDirection: 'row' }}>
        {callRequests &&
          <FlatList
            data={callRequests}
            renderItem={({ item }) => {
              return (
                <View style={styles.profileViewerbox}>

                  <View style={{ width: "20%" }}>
                    <Image source={{ uri: item.img }} style={styles.imgStyle}></Image>
                  </View>

                  <View style={{ width: "40%" }}>
                    <Text style={styles.txt}>{item?.full_name}</Text>
                  </View>

                  <View style={styles.textAndButtonsContainer}>
                    <TouchableOpacity style={[styles.submitButton, {color: 'green'}]} onPress={() => { changeCohostStatus(item?.coHostID) }}>
                      <AntDesign name="checkcircle" size={20} color={'green'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.submitButton,  {color: 'red'}]} >
                      <Text style={[styles.submitButtonText, {color: 'red'}]}>Exit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            }}
          >
          </FlatList>
        }
      
      </View>
    </View>
  );

  const modalRef = React.createRef();
  const modal2Ref = React.createRef();

  const ProfileRef = React.createRef();

  const Data = [
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
  const ItemStyle = props => (
    <View style={{ flex: 1 }}>
      <View style={styles.profileViewerbox}>
        <Image source={props.item.img} />
        <View>
          <Text style={{ color: 'white' }}>{props.item.name}</Text>
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
              {props.item.Lv}
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
                source={props.item.CoinImg}
                style={{ height: 11, width: 11 }}
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 10,
                }}>
                {props.item.Coin}
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
    );
  };


  const [FollowingHost, setFollowingHost] = useState([]);
  const [singleUserData, setSingleUserData] = useState()
  const index = FollowingHost.findIndex(item => item.id == liveID);

  const handleSingleUserData = (singleuser) => {
    //console.log("singleuser", singleuser)
    setSingleUserData(singleuser)
    list && setList(!list);
    { (singleuser?.sender_level || singleuser?.reciever_level) && ProfileRef.current.toggleModal(); }
  }




  useEffect(() => {
    function getAlerts() {
      // console.log('HHHHHHHHEEEELLLOOOOO');
      UpdateHostBeans();
    }
    getAlerts();
    const interval = setInterval(() => getAlerts(), 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [isMicOn, setIsMicOn] = useState(true)
  const handleMicButton = () => {
    setIsMicOn(!isMicOn)
    { isMicOn ? agoraEngineRef.current.muteLocalAudioStream(true) : agoraEngineRef.current.muteLocalAudioStream(false) }
    //console.log('mic', isMicOn)
  }
  const [list, setList] = useState(false);

  const FlatListController = () => {
    setList(!list);
    //console.log('flatlist')
  };

  const [messsageR, setMessageR] = useState(null)
  const listRef = useRef(null);

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
        name: userData?.user?.nick_name,
        message: "has entered the room",
        uid: newNodeKey,
        date: currentDate.toString(),
      });
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
    //console.log("right")
    Keyboard.dismiss();
    textInputRef.current.focus();
  }


  return (
    <AlertNotificationRoot>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/image36.png')}
          style={styles.Bg}>
          <View style={{ position: 'absolute', zIndex: 1 }}>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <View style={styles.profilecontainer}>
                <View style={styles.profilebox}>
                <View  style={[styles.profile, {position: 'relative', top: 17}]}>
                    <AnimatedProfileDp img={userUpdatedData?.image} imgSize={30} frameSize={9} frame={frameData?.[0]?.json_image}/>
                
                  </View>
                  <View style={[styles.txtbox, { marginLeft: 5 }]}>
                    <Text style={[styles.name, { wordWrap: 'break-word', width: 90 }]}>
                      {userUpdatedData?.nick_name.substring(0, 7)} {userUpdatedData.length > 7 && "..."}
                      {/* {joiningUser} */}
                    </Text>
                    <Text style={styles.id}>BL {userData?.user?.id}</Text>
                  </View>
                </View>
              </View>
              <View style={{}}>
                <ImageBackground
                  style={styles.container}
                >
                  <View style={styles.header}>
                    <View style={styles.headerImageContainer}>
                      {data?.[0]?.image &&
                        <TouchableOpacity onPress={FlatListController}   style={[styles.headerImage, {marginTop: 20}]}>
                          <AnimatedProfileDp img={data?.[0]?.image} imgSize={30} frameSize={10} frame={data?.[0]?.json_image} />
                        </TouchableOpacity>
                      }
                      {data?.[1]?.image &&
                        <TouchableOpacity onPress={FlatListController}   style={[styles.headerImage, {marginTop: 20}]}>
                          <AnimatedProfileDp img={data?.[1]?.image} imgSize={30} frameSize={10} frame={data?.[1]?.json_image} />
                        </TouchableOpacity>
                      }
                      {data?.[2]?.image &&
                        <TouchableOpacity onPress={FlatListController}   style={[styles.headerImage, {marginTop: 20}]}>
                          <AnimatedProfileDp img={data?.[2]?.image} imgSize={30} frameSize={10} frame={data?.[0]?.json_image} />
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
                  UpdateHostBeans();
                }}>
                <View style={styles.Kbox}>
                  <Image
                    source={require('../../assets/images/coin.png')}
                    style={{ height: 16, width: 16, marginRight: 2 }}
                  />
                  <Text style={styles.Ktxt}>
                    {updatedCoins == null ? '0' : updatedCoins}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  modalRef.current.toggleModal();
                }}>
                {/* <View style={styles.Starbox}>
                  <StarIcon
                    name="star"
                    color={'yellow'}
                    size={15}
                    style={{ marginRight: 2 }}
                  />
                </View> */}
              </TouchableOpacity>
            </View>

          </View>
{/* 
          <View style={{ position: 'absolute', zIndex: 4, top: heightPercentageToDP(13), width: widthPercentageToDP(100) }} >
              <FlatList 
                data={cohostlist}
                keyExtractor={({item}) => item?.id}
                renderItem={({item, index}) => {
                  return(
                    <View>
                      <AudioPerson img={cohsotData?.[1]?.image} />
                    </View>
                  )
                }}
                numColumns={4}
                key={'-'}
              />
          </View> */}

          <View style={{ position: 'absolute', zIndex: 4, top: heightPercentageToDP(13), width: widthPercentageToDP(100) }}>
            <SeatsLogic cohostData={cohsotData} handleLongPress={handleLongPress} handlePress={handlePress}  />
          </View>

          <View style={{ height: '100%', width: '100%' }}>

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
                    keyExtractor={item => item.uid}
                  />
                </View>
                {/* <View style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                          <TextInput
                              style={[styles.input, {color: 'white'}]}
                              onChangeText={text => setMessageR(text)}
                              value={messsageR}
                              placeholder="Leave a comment..."
                              placeholderTextColor="grey"

                              //returnKeyType="send"
                              // onSubmitEditing={() => rldbSendMessage()}
                              />
                                <TouchableOpacity
                                  onPress={() => rldbSendMessage( )}
                                  style={styles.icon1box}>
                                  <Feather name="send" size={16} color="white" />
                                </TouchableOpacity>
                        </View> */}
              </View>
            </View>

            {list && (<UserList data={data} onPressCross={FlatListController} onPressSingleUser={handleSingleUserData} />)}

            {
              <View style={{ position: 'absolute', bottom: 0, backgroundColor: keyboardHeight == 0 ? 'transparent' : 'white', zIndex: 21, justifyContent: 'space-evenly' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: keyboardHeight == 0 ? "0%" : "100%" }}>
                  <TextInput
                    ref={textInputRef}
                    style={[keyboardHeight != 0 && styles.input, { color: 'black', width: '86%' }]}
                    onChangeText={text => setMessageR(text)}
                    value={messsageR}
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
            }

            <View
              style={[
                styles.bottombox,
                {
                  width: '100%',
                  alignSelf: 'flex-start',
                  backgroundColor: transparent,
                },
              ]}>

              {/* <Text>{JSON.stringify(messages)}</Text> */}
              <View style={styles.lefticonsbox}>

                {/* <TouchableOpacity style={styles.icon1box}>
                  <MessageIcon
                    name="animation-play"
                    size={22}
                    color="#E4E5E6"
                  />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.icon1box} 
                  // onPress={() => handleButtonPress()} 
                  onPress={() => msgRef.current.open()}
                  >
                  <MessageIcon
                    name="facebook-messenger"
                    size={22}
                    color="#c471ed"
                  />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.icon1box}>
                <SpeakerIcon name="settings-voice" size={22} style={styles.icon1} />
                  </TouchableOpacity> */}

                <TouchableOpacity
                  onPress={() => {
                    handleMicButton();
                  }}
                  style={styles.icon1box}>
                  <Feather name={isMicOn ? "mic" : "mic-off"} size={22} color="orange" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    AllowCall.current.open();
                  }}
                  style={styles.icon1box}>
                  <Feather name="phone-call" size={22} color="#12c2e9" />
                </TouchableOpacity>
                
                {/* <TouchableOpacity
                  onPress={() => refRBSheet1.current.open()}
                  style={[styles.icon1box, {backgroundColor: 'red'}]}>
                  <Text style={styles.PK}>PK</Text>
                </TouchableOpacity> */}

                <TouchableOpacity
                  style={styles.icon1box}
                  onPress={() => refRBSheet.current.open()}>
                  <Entypo name="game-controller" color="#FFE000" size={22} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.icon1box}
                  onPress={() => refRBSheetOptions.current.open()}>
                  <OptionIcon name="three-bars" size={20} color="#fbc7d4" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <RbSheetComponent
            view={<AllowSheet />}
            refUse={AllowCall}
            close={true}
            height={300}
          />

          <View>
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  height: 0,
                },
                container: {
                  backgroundColor: '#191D26',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  height: heightPercentageToDP(25),
                },
              }}>
              <View>
                <Text style={styles.headingtxt1}>Play games</Text>
                <View style={styles.rbIconbox1}>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#F9A200' },
                      ]}>
                      <Image
                        source={require('../../assets/images/teen.png')}
                        style={{ height: 40, width: 40 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Teen Patti</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#C7361E' },
                      ]}>
                      <Image
                        source={require('../../assets/images/ticket.png')}
                        style={{ height: 38, width: 38 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>A Golden Ticket</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#EF4137' },
                      ]}>
                      <Image
                        source={require('../../assets/images/greedy.png')}
                        style={{ height: 40, width: 40 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Greedy</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#FFCD00' },
                      ]}>
                      <Image
                        source={require('../../assets/images/fruit.png')}
                        style={{ height: 40, width: 40 }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Fruit Loops</Text>
                  </View>
                </View>
              </View>
            </RBSheet>
          </View>
          <View>
            <RBSheet
              ref={refRBSheet1}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  height: 0,
                },
                container: {
                  backgroundColor: '#191D26',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  height: 250,
                },
              }}>
              <View>
                <View style={styles.batleHeaderView}>
                  <TouchableOpacity>
                    <SettingIcon
                      name="md-settings-sharp"
                      size={30}
                      color={'#FFFFFF'}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    Royal Battles
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      refRBSheet1.current.close();
                    }}>
                    <CrossIcon name="cross" size={30} color={'#FFFFFF'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.batleIconsbox}>
                  <TouchableOpacity
                    onPress={() => {
                      refRBSheetPK.current.open();
                    }}>
                    <View style={styles.batleIconContainer}>
                      <TouchableOpacity
                        style={styles.batleIconbox}
                        activeOpacity={1}>
                        <AddFrndIcon
                          name="person-add-sharp"
                          size={25}
                          color={'#FFFFFF'}
                        />
                      </TouchableOpacity>
                      <Text style={styles.batletxt}>Friends PK</Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.batleIconContainer}>
                    <TouchableOpacity style={styles.batleIconbox}>
                      <ShuffleIcon name="shuffle" size={25} color={'#FFFFFF'} />
                    </TouchableOpacity>
                    <Text style={styles.batletxt}>Random PK</Text>
                  </View>
                </View>
              </View>
            </RBSheet>
          </View>
       
          <View>
            <RBSheet
              ref={refRBSheetOptions}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  height: 0,
                },
                container: {
                  backgroundColor: '#191D26',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  height: 280,
                },
              }}>
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
                      style={[styles.gameIconbox, { backgroundColor: 'red' }]}>
                      <StickerIcon
                        name="emoji-happy"
                        color={'white'}
                        size={22}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Steakers</Text>
                  </View>
                  <View style={styles.gameIconView}>
                    <TouchableOpacity
                      style={[styles.gameIconbox, { backgroundColor: 'green' }]}>
                      <MusicIcon name="music" size={22} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Music</Text>
                  </View>
                  <View style={styles.gameIconView}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#FFBB2D' },
                      ]}>
                      <Image
                        source={require('../../assets/images/beans.png')}
                        style={{ height: 30, width: 30, resizeMode: 'contain' }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Beans</Text>
                  </View>
                  <View style={styles.gameIconView}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#7893CA' },
                      ]}>
                      <Image
                        source={require('../../assets/images/room.png')}
                        style={{ height: 30, width: 30, resizeMode: 'contain' }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Room Effects</Text>
                  </View>
                  {/* <View style={styles.gameIconView}>
                    <TouchableOpacity
                      onPress={() => FlipCamera()}
                      style={[
                        styles.gameIconbox,
                        {backgroundColor: '#023188'},
                      ]}>
                      <Image
                        source={require('../../assets/images/flipcam.png')}
                        style={{height: 30, width: 30, resizeMode: 'contain'}}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Flip Camera</Text>
                  </View> */}
                  <View style={styles.gameIconView}>
                    <TouchableOpacity
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#039CDD' },
                      ]}>
                      <MirrorIcon name="mirror" size={22} color={'white'} />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Mirror On</Text>
                  </View>
                  <View style={styles.gameIconView}>
                    <TouchableOpacity

                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#6B8EF2' },
                      ]}>
                      <MessageIcon
                        name="message-text-outline"
                        size={22}
                        color={'white'}
                      />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Chat</Text>
                  </View>
                  <View style={styles.gameIconView}>
                    <TouchableOpacity
                      onPress={() => shareToWhatsApp(userUpdatedData?.nick_name?? userUpdatedData?.full_name, userUpdatedData?.id)}
                      style={[
                        styles.gameIconbox,
                        { backgroundColor: '#023188' },
                      ]}>
                     <Simple name="share-alt" size={30} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.gametxt}>Share</Text>
                  </View>
                </View>
              
              </View>
            </RBSheet>
          </View>

          <View>
          <RbSheetComponent
              view={<MessageSheet onCrossPress={() => msgRef.current.close()} />}
              refUse={msgRef}
              close={false}
              height={'40%'}
            />
          </View>
          <View style={{ flex: 1 }}>
            <RBSheet
              ref={refRBSheetGifts}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  height: 0,
                },
                container: {
                  backgroundColor: '#191D26',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  height: '40%',
                },
              }}>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: heightPercentageToDP(2),
                  }}>
                  {GiftBtns.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        setselectGiftBtn(index);
                        setbtnClr('white');
                      }}>
                      <Text
                        style={[
                          {
                            color: 'grey',
                            fontSize: 16,
                            fontWeight: '500',
                          },
                          selectGiftBtn == index && {
                            color: 'white',
                          },
                        ]}>
                        {item.BtnTxt}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View>{SelectGiftList(selectGiftBtn)}</View>
              </View>
            </RBSheet>
          </View>
          <View>
            <RBSheet
              ref={refRBSheetPK}
              closeOnDragDown={true}
              closeOnPressMask={false}
              customStyles={{
                wrapper: {
                  backgroundColor: 'transparent',
                },
                draggableIcon: {
                  backgroundColor: '#000',
                  height: 0,
                },
                container: {
                  backgroundColor: '#191D26',
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  height: 250,
                },
              }}>
              <View>
                <View style={styles.batleHeaderView}>
                  <TouchableOpacity>
                    <BackIcon name="left" size={30} color={'#FFFFFF'} />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      textAlign: 'center',
                      fontSize: 18,
                    }}>
                    PK Settings
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      refRBSheetPK.current.close();
                    }}>
                    <CrossIcon name="cross" size={30} color={'#FFFFFF'} />
                  </TouchableOpacity>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                      marginTop: heightPercentageToDP(3),
                    }}>
                    <Text style={{ color: 'white' }}>PK Mode ?</Text>
                    {PkBtns.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setselectPkBtn(index);
                        }}>
                        <Text
                          style={[
                            styles.pkBtn,
                            selectPkBtn == index && {
                              backgroundColor: '#E92F24',
                            },
                          ]}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: heightPercentageToDP(3),
                    }}>
                    <Text style={{ color: 'white' }}>Time</Text>
                    {TimeBtns.map((item, index) => (
                      <TouchableOpacity
                        onPress={() => {
                          setselectTimeBtn(index);
                        }}>
                        <Text
                          style={[
                            styles.pkBtn,
                            selectTimeBtn == index && {
                              backgroundColor: '#E92F24',
                            },
                          ]}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: heightPercentageToDP(3),
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        paddingHorizontal: widthPercentageToDP(3),
                      }}>
                      PK Requests
                    </Text>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('PeopleLive');
                        }}>
                        <Text
                          style={[
                            styles.pkBtn,
                            {
                              paddingHorizontal: 30,
                              marginRight: 15,
                              backgroundColor: '#E92F24',
                            },
                          ]}>
                          Match
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </RBSheet>
          </View>
          <StarModal view={<ModalView />} ref={modalRef} />
          <View>
            <StarModal view={<ModalView2 />} ref={modal2Ref} />
          </View>
          <View>

            <StarModal view={
              <ProfileModalStyles
                data={singleUserData}
                onPressCros={() => ProfileRef.current.toggleModal()}
                onPress={() => ProfileRef.current.toggleModal()} />}
                ref={ProfileRef}
              
            />
          </View>

        </ImageBackground>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  audioCohostNameStyle: {
    marginTop: 4,
    color: white,
    fontSize: 12
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
    zIndex: 10,
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
    top: 20,
  },
  cohostStyle: {
    width: 120,
    height: 160,
    borderWidth: 3,
  },
  border: {
    width: 120,
    height: 164,
    borderWidth: 2,
    borderColor: 'white'
  },
  container: {
    flex: 1,
  },
  Bg: {
    height: '100%',
    width: '100%',
  },
  mainImg: {
    height: '100%',
    width: '100%',
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 25,
  },
  profilecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
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
  crossIcon: {
    color: 'white',
    right: 2,
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
  flowbox: {
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
  flowtxt: {
    color: 'white',
    fontWeight: '500',
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  heartIcon: {
    color: 'white',
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 25,
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
  bottombox1: {
    position: 'absolute',
    bottom: 20,
    //top: heightPercentageToDP(70),
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',

    paddingVertical: 15,
  },
  bottombox: {
    position: 'absolute',
    top: heightPercentageToDP(93),
    // bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: primaryColor,
    paddingVertical: 15,
  },
  lefticonsbox: {
    flexDirection: 'row',
    width: '100%',
    marginLeft: 5,

    justifyContent: 'space-evenly',
  },
  icon1box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 35,
    width: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  icon1: {
    color: '#FFFFFF',
  },
  righticonsbox: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'flex-end',
    right: 5,
  },
  icon2box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  giftIcon: {
    color: 'yellow',
    marginHorizontal: 4,
  },
  PK: {
    color: 'white',
    fontWeight: '500',
  },
  Likebox: {
    position: 'absolute',
    flexDirection: 'row',
    top: 55,
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
  Lvbox: {
    backgroundColor: 'orange',
    paddingHorizontal: 7,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  Lvtxt: {
    color: 'white',
  },
  // commentcontainer: {
  //   position: 'absolute',
  //   bottom: '17%',
  //   width: '70%',
  // },
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
    top: 2,
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
  headingtxt1: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  rbIconbox: {
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rbIconbox1: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gameIconView: {
    alignItems: 'center',
    width: '25%',
  },
  gameIconbox: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    // backgroundColor: '#3A3A3A',
    // opacity: 0.7,
  },
  gametxt: {
    color: '#FFFFFF',
    width: 90,
    textAlign: 'center',
  },
  batleHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  batleIconsbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  batleIconbox: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED3B30',
  },
  batletxt: {
    color: '#FFFFFF',
    width: 90,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '400',
    fontSize: 15,
  },
  batleIconContainer: {
    backgroundColor: '#31384A',
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 10,
    height: 110,
    paddingTop: 20,
  },
  ViewerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },

  text: {
    color: 'white',
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileViewerbox: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: '2%',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  txt: {
    paddingLeft: "2%",
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,

  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textAndButtonsContainer: {
    flexDirection: 'row',
    marginLeft: '15%'
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
  CheckBtnbox: {
    backgroundColor: '#EC3E33',
    marginVertical: 10,
    height: 34,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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
  DrawListStyleView: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-around',
    marginHorizontal: widthPercentageToDP(1),
  },
  pkBtn: {
    // backgroundColor: '#ED3B30',
    color: 'white',
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: '#31384A',
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
    marginHorizontal: 10,
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
    height: 36,
    width: 36,
    borderRadius: 18,
    marginHorizontal: 5,
  },
  headerCounter: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: 30,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  headerCross: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
});
