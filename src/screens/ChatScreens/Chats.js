import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,

  View,
  ImageBackground,
  StatusBar,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from 'react-redux';
import AllChatComponent from '../reuseable_Component/AllChatComponent';
import firestore from '@react-native-firebase/firestore'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search_Bar from '../reuseable_Component/Search_Bar';
import { ApiCallToken } from '../../Services/Apis';
// import moment from 'moment';
import {
  headings,
  primaryColor,
  secondaryColor,
  white,
} from '../../utils/Styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import PrimaryButton from '../reuseable_Component/PrimaryButton';
import PTRView from 'react-native-pull-to-refresh';
const Chats = ({ user, navigation }) => {
  console.log('check user data ', user)
  const [chaterList, setChaterList] = useState([]);
  const userData = useSelector(state => state.auth.userData);
  const [friendRequest,setFriendRequest] = useState([])

  const refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        friendRequestCome();
        resolve();
      }, 2000);
    });
  };


  const friendRequestCome = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'list/chat/friends',
        verb: 'GET',
      });
      setChaterList(res?.data);
      console.log("list/caht friends api response ", res)
    } catch (error) {
      console.log('ERROR IS list/caht friends api response', error);
    }
  }

  useEffect(() => {
    friendRequestCome()
  }, [])



  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{ height: '100%', width: '100%' }}>
      <PTRView
      onRefresh={refresh}
      style={{flex: 1, marginBottom: '15%', marginTop: '1%'}}>
        <Search_Bar />
        <View style={styles.nameContainer}>
          <View
            style={{
              ...styles.nameImg,
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            <Text numberOfLines={1} style={{ ...headings.h3, color: white }}>
              Chats
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons
                name="people-outline"
                size={22}
                color={'#c471ed'}
              //   style={{marginHorizontal: '5%'}}
              />
              <Ionicons
                name="settings-outline"
                size={22}
                color={'#c471ed'}
                style={{ left: 9 }}
              />
            </View>
          </View>
        </View>

        <FlatList
          style={{
            width: widthPercentageToDP(100),
            paddingTop: heightPercentageToDP(1),
          }}
          data={chaterList}
          keyExtractor={(item) => item?.id}
          renderItem={({ item, index }) => {
            return (
              <AllChatComponent
               data = {item}
              />
            );
          }}
        />
    
        {/* <TouchableOpacity
          style={styles.contactsBtn}
        // onPress={() => navigation.navigate('ContactsScreen')}
        >
          <MaterialCommunityIcons
            name="message-text-outline"
            size={30}
            color="#c471ed"
          />
        </TouchableOpacity> */}
  </PTRView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#c471ed',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  nameImg: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  myImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
  },
  myName: {
    fontWeight: 'bold',
    marginLeft: 10,
    color: white,
  },
  search: {
    width: '90%',
    height: heightPercentageToDP(5),
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: 'rgba(234, 234, 234, 0.5);',
    marginVertical: 10,
    alignSelf: 'center',
  },
  searchInput: {
    height: 39,
    marginLeft: 10,
  },
  storiesContainer: { height: 100, width: '90%' },
  headings: {
    fontWeight: 'bold',
  },
  swipeRight: {
    backgroundColor: '#DF4B38',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginRight: 20,
  },
  contactsBtn: {
    backgroundColor: primaryColor,
    borderRadius: 50,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: heightPercentageToDP(10),
    right: 30,
    borderWidth: 1,
    borderColor: white,
  },
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    marginTop: 300,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    // top: 0,
  },
  modalImg: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: 'white',
    position: 'absolute',
    top: -70,
    zIndex: 1000,
    alignSelf: 'center',
  },
  dp: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  dpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 80,
  },
  nameTxt: {
    fontSize: 20,
    fontWeight: '600',
  },
  name: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 80,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginVertical: 10,
    height: 50,
    borderColor: 'grey',
  },
});

export default Chats;
