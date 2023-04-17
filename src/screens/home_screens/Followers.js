import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import PTRView from 'react-native-pull-to-refresh';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const Followers = ({navigation}) => {
  const userData = useSelector(state => state.auth.userData);
  const [recommendations, setRecommendations] = useState([]);
  const [show, setShow] = useState(true);
  const [Follow, setFollow] = useState('Follow');

  const refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        GetRecommendations();
        resolve();
      }, 4000);
    });
  };

  const GetRecommendations = async () => {
    try {
      await fetch('https://www.banoLive.com/api/user/list-follower', {
        method: 'GET',
        headers: {
          // 'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },
        // body: JSON.stringify(
        //   { id: userData.user.id }
        // )
      })
        .then(res => res.json())
        .then(json => {
          // setUpdatedData(json);
          // setLoading(false);
          // dispatch(updateUserData({ json }));
          setRecommendations(json.data);
          setShow(false);
          // console.log("Recommendations ===>>>", json.data)
        });
      // console.log('Our response is ==>>',response.json())
    } catch (e) {
      console.log('Error-- ', e.toString());
    }
  };

  useFocusEffect(
    useCallback(() => {
      // alert('hello favrt');
      GetRecommendations();
    }, []),
  );

  const ItemStyle = ({item}) => {
    // console.log('Image', item.image)
    const FollowUser = async userId => {
      try {
        console.log('Id of user DDDDD', userId);
        await fetch('https://www.banoLive.com/api/user/following-host', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${userData.token}`,
          },
          body: JSON.stringify({id: userId}),
        })
          .then(res => res.json())
          .then(json => {
            console.log('Following response =>>', json);
          });
      } catch (e) {
        console.log('saga login error -- ', e.toString());
        console.log('Id of user', userId);
      }
    };

    const onJoinPress = (
      name,
      coins,
      uuid,
      image,
      gender,
      region,
      birthday,
      introduction,
    ) => {
      const hostID = JSON.stringify(item.id);
      const userName = JSON.stringify(
        userData.user.full_name || userData.user.nick_name,
      );

      const userUUID = JSON.stringify(userData.user.uuid);
      const Gender = JSON.stringify(userData.user.gender);
      console.log(userData.user.gender);
      turnOnMicrophoneWhenJoining = true;
      useSpeakerWhenJoining = true;
      navigation.navigate('OtherUserProfile', {
        userID: userUUID,
        userName: userName,
        liveID: hostID,
        hostName: name,
        hostCoins: coins,
        hostUuid: uuid,
        hostImage: image,
        Gender: gender,
        Region: region,
        Birthday: birthday,
        Intro: introduction,
      });
    };

    return (
      <View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            onJoinPress(
              item.full_name || item.nick_name,
              item.coins,
              item.id,
              item.image,
              item.gender,
              item.region,
              item.birthday,
              item.introduction,
            );
          }}>
          <View style={styles.profileViewerbox}>
            <View style={{flexDirection: 'row'}}>
              {/* <Image source={item.image} style={styles.imgStyle} /> */}
              <Image
                source={
                  item.image == null
                    ? require('../../assets/images/img3.png')
                    : {uri: item.image}
                }
                style={[styles.imgStyle, {backgroundColor: 'white'}]}
              />
              <View>
                <Text
                  style={{
                    color: 'white',
                    paddingVertical: 5,
                    marginHorizontal: 5,
                  }}>
                  {item.full_name}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.LvTxt}>{item.id}</Text>

                  <View style={styles.CrownView}>
                    {/* <Image source={props.item.CoinImg} style={{ height: 11, width: 11, marginHorizontal: 1, paddingVertical: 1, }} /> */}
                    <Text style={{color: 'white', fontSize: 10}}>
                      {/* {props.item.Coin} */}12
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.UnblockView}>
              <TouchableOpacity
                onPress={() => {
                  FollowUser(item.id);

                  GetRecommendations();
                  ToastAndroid.showWithGravityAndOffset(
                    'Successfully Follow',
                    ToastAndroid.SHORT,
                    ToastAndroid.TOP,
                    0,
                    0,
                  );
                }}>
                <Text style={styles.UnblockTxt}>{Follow}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <PTRView onRefresh={refresh}>
          <LinearGradient
            colors={['#4568DC', '#B06AB3']}
            style={styles.settingbox}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon name="left" size={20} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.settingtxt}>Followers</Text>
          </LinearGradient>
          {show ? (
            <View style={{flex: 1, alignSelf: 'flex-end'}}>
              <WaveIndicator color="#B06AB3" size={1100} />
            </View>
          ) : (
            <View style={{flex: 1}}>
              <FlatList data={recommendations} renderItem={ItemStyle} />
            </View>
          )}
        </PTRView>
      </ImageBackground>
    </View>
  );
};
export default Followers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingbox: {
    flexDirection: 'row',
    paddingVertical: heightPercentageToDP('2%'),
    alignItems: 'center',
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
  profileViewerbox: {
    flexDirection: 'row',
    paddingVertical: '2%',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: '2.5%',
    borderBottomWidth: 0.2,
    borderColor: '#B06AB3',
  },
  LvTxt: {
    color: 'white',
    marginLeft: 5,
    backgroundColor: 'dodgerblue',
    paddingHorizontal: 7,
    borderRadius: 10,
    fontSize: 10,
  },
  CrownView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  //   UnblockView: {
  //     marginRight: '5%',
  //   },
  UnblockTxt: {
    borderWidth: 1,
    paddingHorizontal: '2.5%',
    color: '#B06AB3',
    borderRadius: 25,
    borderColor: '#B06AB3',
    fontSize: 12,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 27.5,
  },
});
