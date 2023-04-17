import {useIsFocused} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';

import AllChatComponent from '../reuseable_Component/AllChatComponent';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

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
import {StatusBar} from 'native-base';
import NotificationComponent from '../reuseable_Component/NotificationComponent';
import Search_Bar from '../reuseable_Component/Search_Bar';

const Notifications = ({navigation}) => {
  const isFocused = useIsFocused();
  const channelPaginator = useRef();

  const [cases, setCases] = useState(1);
  const buttons = [
    {
      name: 'All',
      value: 1,
    },
    {
      name: 'Live Video',
      value: 2,
    },
    {
      name: 'Posts',
      value: 3,
    },
  ];

  const StoriesData = [
    {
      name: 'BanoLive',
      image: {
        uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      },
      type: 'Was Live',
    },
    {
      name: 'BanoLive',
      image: {
        uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      },
      type: 'Created a Post',
    },
    {
      name: 'BanoLive',
      image: {
        uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      },
      type: 'Created a Post',
    },
    {
      name: 'BanoLive',
      image: {
        uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      },
      type: 'Created a Post',
    },
    {
      name: 'BanoLive',
      image: {
        uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
      },
      type: 'Was Live',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        {/* <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={white}
          />
       
        </View> */}
        <Search_Bar />

        <View style={styles.nameContainer}>
          <View
            style={{
              ...styles.nameImg,
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            <Text numberOfLines={1} style={{...headings.h3, color: white}}>
              Notifications
            </Text>
          </View>
        </View>
        <FlatList
          // showsVerticalScrollIndicator={false}
          style={{
            alignSelf: 'center',
            marginHorizontal: '5%',
            height: widthPercentageToDP(1),

            marginTop: '2%',
          }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={buttons}
          // style={{marginBottom: heightPercentageToDP(10)}}
          renderItem={(item, index) => (
            <View style={{}}>
              <TouchableOpacity
                activeOpacity={0.3}
                onPress={() => {
                  setCases(item.item.value);
                  console.log(item.item.value);
                }}
                //onPress={() => this.props.navigation.navigate(item.item.navi)}
                style={{
                  backgroundColor: '#303749',
                  backgroundColor:
                    cases === item.item.value ? '#c471ed' : '#303749',
                  borderRadius: 5,
                  height: heightPercentageToDP(4),
                  marginHorizontal: 3,
                  marginTop: 3,
                  width: widthPercentageToDP(25),
                  borderRadius: 20,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    ...headings.h7M,
                    color: cases == item.item.value ? white : '#AEAECE',
                    alignSelf: 'center',
                  }}>
                  {item.item.name}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        <FlatList
          style={{
            width: widthPercentageToDP(100),
            height: heightPercentageToDP(65),
            // paddingTop: heightPercentageToDP(2),
            //   marginTop: heightPercentageToDP(5),
            // backgroundColor: 'red',
          }}
          data={StoriesData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            if (cases == 1) {
              return (
                <NotificationComponent
                  profilePic={
                    'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
                  }
                  userName={item.name}
                  type={item.type}
                />
              );
            } else if (cases == 2) {
              if (item.type == 'Was Live') {
                return (
                  <NotificationComponent
                    profilePic={
                      'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
                    }
                    userName={item.name}
                    type={item.type}
                  />
                );
              }
            } else if (cases == 3) {
              if (item.type == 'Created a Post') {
                return (
                  <NotificationComponent
                    profilePic={
                      'https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg'
                    }
                    userName={item.name}
                    type={item.type}
                  />
                );
              }
            }
          }}
        />
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
    backgroundColor: 'rgba(234, 234, 234, 0.3);',
    marginVertical: 10,
    alignSelf: 'center',
  },
  searchInput: {
    height: 39,
    marginLeft: 10,
  },
  storiesContainer: {height: 100, width: '90%'},
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

export default Notifications;
