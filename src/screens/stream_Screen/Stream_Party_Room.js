import React, { useState } from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
//-----------Styles---------
import { headings } from '../../utils/Styles';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollView } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AnimatedLottieView from 'lottie-react-native';
import { ApiCallToken } from '../../Services/Apis';

const Data2 = [
  {
    img: require('../../assets/images/bgspot.png'),
  },
  {
    img: require('../../assets/images/bgspot.png'),
  },
  {
    img: require('../../assets/images/bgspot.png'),
  },
];
const Stream_Party_Room = () => {
  const navigation = useNavigation();
  const userData = useSelector(state => state.auth.userData);
  const userUUID = JSON.stringify(userData.user.uuid);
  const userName = JSON.stringify(userData.user.full_name);
  const [liveUsers, setLiveUsers] = useState([])
  const [uid, setUid] = useState(parseInt(userData?.user?.id))
  const [allHosts, setAllHosts] = useState([]);
  const [allHostsCopy, setAllHostsCopy] = useState([]);
  const [offlineHostLoading, setOfflineHostLoading] = useState(true);

  const [liveHostLoading, setLiveHostLoading] = useState(true);
  const [liveUsersCopy, setLiveUsersCopy] = useState([]);

  const GetLiveHosts = async () => {

    try {
      setLiveHostLoading(true)
      const res = await ApiCallToken({
       params: userData.token,
       route: 'list-audio-host',
       verb: 'GET',
     });
     console.log("audio", res)
    setLiveUsers(res);
    setLiveUsersCopy(res)
    setLiveHostLoading(false)
   } catch (error) {
     console.log('error in streamfresher getAllhosts func', error);
   }

  };

  const GetOfflineHosts = async () => {
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

  useFocusEffect(
    useCallback(() => {
      GetLiveHosts();
      GetOfflineHosts()
      // alert('a')
    }, []),
  );

  const liveAudioHostView = ({ item }) => {
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
      navigation.navigate('AudioCallUsers', {
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
        completeData: item,
        uid: uid, 
      });
    };

    return (
      <TouchableOpacity
        onPress={() => {
        
           console.log('Specific user data====>>>>', item);
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
            item
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
          imageStyle={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '5%',
              marginTop: 5,
            }}>
         
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
                {item?.full_name}
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242A38',
        marginBottom: '17%',
        marginTop: '1%',
      }}>
      <StatusBar backgroundColor="#242A38" />
      {/* //////////////////////////Heading */}
      <ScrollView>
        {/*//////////////////////// FlatList */}

        <View style={{ alignItems: 'center' }}>
        {liveHostLoading ?  
          <ActivityIndicator style={{ }} />
        :
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
            data={liveUsers}
            keyExtractor={item => item.id}
            renderItem={liveAudioHostView} />
        }
        </View>
        <View style={{ marginTop: '1%' }}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            index={2}
            autoplayLoop
            showPagination={false}
            data={Data2}
            renderItem={({ item }) => (
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
        {/* /////////////////// */}
        <View style={{ alignItems: 'center' }}>
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
            numColumns={2}
            contentContainerStyle={{alignItems: 'center'}}
            horizontal={false}
            listKey={'offlineUsers'}         
            keyExtractor={(item) => item.id}
            renderItem={(item, index) => (
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() =>  navigation.navigate('AudioCallUsers', {
                    userID: 112,
                    userName: "ali",
                    liveID: "100000199",
                    hostName: "name",
                    hostCoins: 112,
                    hostUuid: 100000199,
                   
                    hostReceivedBeans: 1123,
                    Region: "region",
                    Followers: 1,
                    isHost: false,
                    channelName: "100000199", 
                    hostReceiverLevel: 11212,
                    hostSenderLevel: 3232,
                    uid: 123, 
                  })}
                  activeOpacity={0.7}
                  // onPress={() => this.props.navigation.navigate(item.item.navi)}
                  style={{
                    marginTop: '1%',
                    flexDirection: 'column',

                    justifyContent: 'center',
                    marginHorizontal: 1,
                  }}>
                  <ImageBackground
                    source={{uri : item.item.image}}
                    style={{
                      height: 170,
                      width: 178,
                      marginTop: 2,
                    }}
                    imageStyle={{ borderRadius: 6 }}>
                  
                    <TouchableOpacity
                      activeOpacity={0.7}
                      // onPress={() => this.props.navigation.navigate(item.item.navi)}
                      style={{
                        paddingVertical: 10,
                        flexDirection: 'row',
                        paddingHorizontal: 5,
                        marginTop: '55%',
                      }}>
                      <View style={{ marginHorizontal: '5%', top: 5 }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 15,
                          }}>
                          {item.item.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
}
        </View>
      </ScrollView>
    </View>
  );
};

export default Stream_Party_Room;
const styles = StyleSheet.create({
  swiperimg: {
    height: 80,
    width: widthPercentageToDP(95),
    marginHorizontal: 3,
    borderRadius: 10,
  },
});
