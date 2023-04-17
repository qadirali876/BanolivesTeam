import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ApiCallToken } from '../../Services/Apis';
const BlockedList = () => {

  const userData = useSelector(state => state.auth.userData);

  const [userList, setUserList] = useState([]);

  console.log("data of api", userList)
  // console.log("data of Unblock", Unblock)

  useEffect(() => {
    showUserList();
    // unblockUser();
  }, [])

  const showUserList = async () => {

    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: `list-block-user`,
        verb: 'GET',
      });

      setUserList(res?.data)
      console.log("list of block users", res)
    } catch (error) {
      console.log("BlockList, Function is showUserList", error);
    }
  }

  const unblockUser = async (id) => {
    console.log("id", id)
    const paramsBody = {
      id: id,
    };
    try {
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: paramsBody,
        route: `un-block-user`,
        verb: 'POST',
      });

      console.log("unblock user", res);
    } catch (error) {
      console.log('BlockList, Function is unblock user', error);
    }
  }

  const navigation = useNavigation();
  // const Data = [
  //   {
  //     name: 'Samina Pirzada',
  //     img: require('../../assets/images/man.jpg'),
  //     Lv: 'Lv.09',
  //     Coin: '06',
  //     CoinImg: require('../../assets/images/crown.png'),
  //   },
  //   {
  //     name: 'Usama',
  //     img: require('../../assets/images/man.jpg'),
  //     Lv: 'Lv.09',
  //     Coin: '06',
  //     CoinImg: require('../../assets/images/crown.png'),
  //   },
  // ];

  const ItemStyle = props => (
    <View>
      <View style={styles.profileViewerbox}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: props.item.image }} style={styles.imgStyle} />
          <View>
            <Text
              style={{
                color: 'white',
                paddingVertical: 5,
                marginHorizontal: 5,
              }}>
              {props.item.full_name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.LvTxt}>{props.item.level}</Text>
              <View style={styles.CrownView}>
                <Image
                  source={props.item.CoinImg}
                  style={{
                    height: 11,
                    width: 11,
                    marginHorizontal: 1,
                    paddingVertical: 1,
                  }}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 10,
                  }}>
                  {/* {props.item.Coin} */}
                  {props.item.id}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.UnblockView}>
          <TouchableOpacity
            onPress={() => {
              unblockUser(props?.item?.user_id)
            }}
          >
            {/* <Text style={styles.UnblockTxt}>Unblock</Text> */}
            <Text style={styles.UnblockTxt}>Unblock</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{ height: '100%', width: '100%' }}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={styles.settingbox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon name="left" size={20} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.settingtxt}>Blocked List</Text>
        </LinearGradient>
        <View style={{ flex: 1 }}>
          <FlatList data={userList} renderItem={ItemStyle} />
        </View>
      </ImageBackground>
    </View>
  );
};
export default BlockedList;

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
