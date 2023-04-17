import React, {useState, useCallback, useLayoutEffect,useEffect, useContext} from 'react';
import {
  Text,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import PTRView from 'react-native-pull-to-refresh';

import CountryPicker, {
  DARK_THEME,
  FlagButton,
} from 'react-native-country-picker-modal';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import AntDesign from 'react-native-vector-icons/AntDesign';
//---------------country Pickerr-------------

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {useSelector} from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import { ApiCallToken } from '../../Services/Apis';
import { ALERT_TYPE, Toast } from 'react-native-alert-notification';
import HomeModal from '../reuseable_Component/HomeModal';
import { UserProfileContext } from '../../context/userProfile';

const Data2 = [
  {
    img: require('../../assets/images/banner2.jpg'),
  },
  {
    img: require('../../assets/images/banner2.jpg'),
  },
  {
    img: require('../../assets/images/banner2.jpg'),
  },
  {
    img: require('../../assets/images/banner2.jpg'),
  },
  {
    img: require('../../assets/images/banner2.jpg'),
  },
];

const Stream_Fresher = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('PK');
  const [callingCode, setcallingCode] = useState('91');
  const [country, setCountry] = useState('Find Hosts By Country');
  const [liveUsers, setLiveUsers] = useState([]);
  const [liveUsersCopy, setLiveUsersCopy] = useState([]);
  const userData = useSelector(state => state.auth.userData);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  const userName = JSON.stringify(userData.user.full_name);
  const userUUID = JSON.stringify(userData.user.uuid);
  const [allHosts, setAllHosts] = useState([]);
  const [allHostsCopy, setAllHostsCopy] = useState([]);
  const [liveHostLoading, setLiveHostLoading] = useState(true);
  const [offlineHostLoading, setOfflineHostLoading] = useState(true);
  const ITEM_HEIGHT = 5
  const modal2Ref = React.createRef();
  
  const { userInfo, setUserData } = useContext(UserProfileContext);
  const [getId, setGetId] = useState(null);
  const [selectPkBtn, setselectPkBtn] = useState(userInfo.region);
  const [selectPkBtnA, setselectPkBtnA] = useState(0);
  const [getCountry, setGetCountry] = useState([]);
  const [count, setCounter] = useState(0)
  
  const countries = async() => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'countries',
        verb: 'GET',
      });
      setGetCountry(res)
    } catch (error) {
      console.log('Editprofile, countries func', error);
    }
  };


  const refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        GetLiveHosts();
        GetAllHosts()
        resolve();
      }, 2000);
    });
  };

  useEffect(() => {
    countries()
    GetLiveHosts()
    GetAllHosts();
  }, [])



  const GetLiveHosts = async () => {
    try {
      setLiveHostLoading(true)
      const res = await ApiCallToken({
       params: userData.token,
       route: 'list-live-host',
       verb: 'GET',
     });
    setLiveUsers(res.data)
    setLiveUsersCopy(res?.data)
    setLiveHostLoading(false)
   } catch (error) {
     console.log('error in streamfresher getlviehost func', error);
   }
  };  

  const GetAllHosts = async () => {
    try {
      setOfflineHostLoading(true)
      const res = await ApiCallToken({
       params: userData.token,
       route: 'list-ofline-host',
       verb: 'GET',
     });
    setAllHosts(res.data);
    setAllHostsCopy(res?.data);
    setOfflineHostLoading(false)
   } catch (error) {
     console.log('error in streamfresher getAllhosts func', error);
   }
  };


  // useFocusEffect(
  //   useCallback(() => {
  //     GetLiveHosts();
  //     console.log("testing")
  //   }, [allHosts]),
  // );

  useEffect(() => {    
    // console.log("lievUser")
    if(getId) {
     // console.log("check", getId, liveUsersCopy?.filter((item) => parseInt(item?.country_id) === parseInt(getId)))
      setLiveUsers(liveUsersCopy?.filter((item) => parseInt(item?.country_id) === parseInt(getId)) )
      setAllHosts(allHostsCopy?.filter((item) => parseInt(item?.country_id) === parseInt(getId)) )
      setGetId(null)
    }
  }, [count, liveUsersCopy, allHostsCopy])

  // my code
  const [uid, setUid] = useState(parseInt(userData?.user?.id))

  const renderViewForHosts = ({item}) => {
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

      //console.log("item id", item)
       const checkBlock = await checkBlockUser(item?.id)
      //  console.log("check", checkBlock)
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
            uid: uid, 
            userLive: true,
          });
        }
    };

    const checkBlockUser = async (id) => {
      // console.log("user data id to blcok", id)
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
          // console.log("check block user ", res)
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
          // console.log('Specific user data====>>>>', item);
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
          imageStyle={{borderRadius: 10,}}>
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
                            // ref={animation}
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

  const renderViewForAllHosts = ({item}) => {
    // console.log("online host id==>",item.id)
    const onJoinPress = (
      name,
      coins,
      uuid,
      image,
      receivedBeans,
      region,
      followers,
      receiver_level,
      sender_level,
      item
    ) => {
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
        uid: uid, 
        completeData: item,
        userLive: false,
      });
    };

    return (
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('StreamShow');
          //  alert(item.received_beans)
           //console.log('Specific user data====>>>>', item);
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
            {item.status_live == 0 ? null : (
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
                <Fontisto name="soundcloud" color="#fff" size={10} />
                <Text
                  style={{
                    marginHorizontal: 2,
                    color: '#fff',
                    fontSize: 10,
                  }}>
                  Live
                </Text>
              </View>
            )}
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
                {item?.nick_name}
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const [data, setData] = useState(allHostsCopy.slice(0, 6));
  const [isLoading, setIsLoading] = useState(false);

  const handleEndReached = () => {
    if (!isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setAllHosts([...allHosts, ...allHostsCopy.slice(data.length, data.length + 8)]);
        setIsLoading(false);
      }, 4000);
    }
  };

  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  };

  return (
    <PTRView
      onRefresh={refresh}
      style={{flex: 1, marginBottom: '15%', marginTop: '1%'}}>
      <ScrollView>
        <TouchableOpacity onPress={() => modal2Ref.current.toggleModal()} style={{padding: 10, borderRadius: 12}}>
            <Text style={styles.countrypickertxt}>{country}</Text>
        </TouchableOpacity>
        <View
          style={{
            width: widthPercentageToDP('100%'),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
        {liveHostLoading ?  
          <ActivityIndicator style={{ }} />
        :
        <FlatList
            data={[...liveUsers]?.splice(0, 4)}
            numColumns={2}
            contentContainerStyle={{alignItems: 'center'}}
            horizontal={false}
            keyExtractor={(item) => item?.id}
            listKey={'liveusers'}
            renderItem={renderViewForHosts}
          />
        }
        </View>
        <View style={{marginVertical: 5}}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            index={2}
            autoplayLoop
            showPagination={false}
            data={Data2}
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
        <FlatList
          data={[...liveUsers]?.splice(4, 16)}
          numColumns={2}
          contentContainerStyle={{alignItems: 'center'}}
          horizontal={false}
          keyExtractor={(item) => item?.id}
          listKey={'liveuserss'}
          renderItem={renderViewForHosts}
        />
          {offlineHostLoading ?  
            <ActivityIndicator />
        :
        <View
          style={{
            width: widthPercentageToDP('100%'),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
         <FlatList
            data={[...allHosts]?.splice(0, 25)}
            renderItem={renderViewForAllHosts}
            numColumns={2}
            contentContainerStyle={{alignItems: 'center'}}
            horizontal={false}
            listKey={'offlineUsers'}         
            keyExtractor={(item) => item.id}
            // onEndReachedThreshold={0.1}
            // onEndReached={handleEndReached}
            // ListFooterComponent={renderFooter}
          />
        </View>
}
      </ScrollView>
      
      <HomeModal
          ref={modal2Ref}
          view={
            <View
              style={{
                backgroundColor: 'white',
                height: 400,
                width: 300,
                alignSelf: 'center',
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <Text style={{ fontSize: 17 }}>Please Select</Text>
                <AntDesign name="caretdown" size={16} />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {getCountry?.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setselectPkBtn(item.name);
                      setselectPkBtnA(index);
                      setGetId(item?.id)
                      setCounter(count => count + 1)
                      modal2Ref.current.toggleModal();
                     
                    }}>
                    <Text
                      style={[
                        styles.RegionList,
                        selectPkBtnA == index && {
                          borderColor: '#B06AB3',
                          color: '#B06AB3',
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          }
          
        />
    </PTRView>
  );
};

export default Stream_Fresher;

const styles = StyleSheet.create({
  countrypickerview: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: 3,
    marginLeft: '3%',
    padding: 4,
    marginHorizontal: '65%',

    borderRadius: 5,
    justifyContent: 'space-evenly',
  },
  RegionList: {
    marginVertical: 8,
    fontSize: 17,
    borderBottomWidth: 0.3,
    color: 'black',
    paddingLeft: 10,
    marginLeft: '5%',
    width: '75%',
  },
  countrypickertxt: {
    color: 'white',
    marginHorizontal: '2%',
    marginLeft: 12,
    fontSize: 12,
    right: 4,
    width: '70%',
  },
  swiperimg: {
    height: 80,
    width: widthPercentageToDP('100%'),
    marginHorizontal: 6,
    borderRadius: 10,
  },
});
