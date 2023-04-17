import React, { useState } from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
// import {Swipeable} from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {headings, timeDifference, white} from '../../utils/Styles';
import PersonImgInChat from './PersonImgInChat';

const AllChatComponent = ({data, onSelectChat,smallScreen}) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const navigation = useNavigation();

  const swipeRight = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View
        style={{
          transform: [{scale}],
        }}>
        <TouchableOpacity style={styles.swipeRight}>
          <FontAwesome5Icon name="trash-alt" color="white" size={30} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const [id,setId] = useState(data.id)
  const [name,setName] = useState(data.full_name)
  const [image,setImage] = useState(data.image)


  const CheckData=()=>{
    console.log("check dta come or not ",id,name,image)
  }

  return (
    <View style={{flex: 1}}>
      <AnimatedTouchable
        style={styles.itemContainer}
        onPress={() => smallScreen ? onSelectChat(data) : navigation.navigate("ChatTest",{id,name,image})}
      >
        <View style={styles.itemMsg}>
          <PersonImgInChat
            // onPressDp={props.onPressDp}
            ims
            image={{
              uri: data.image,
            }}
          />
          <View style={styles.nameMsg}>
            <Text
              numberOfLines={1}
              style={
                data.id < 0 ? styles.unReadNameTxt : styles.nameTxt
              }>
              {data.full_name}
            </Text>
            <Text
              style={
                data.id < 0
                  ? {fontWeight: 'bold', color: 'grey'}
                  : {fontWeight: 'normal', color: 'grey'}
              }>
              {/* {props?.message?.split(' ').slice(0, 5).join(' ')} */}
              Message Here
            </Text>
            <Text
              style={
                data.id < 0
                  ? {fontWeight: 'bold', color: 'grey'}
                  : {...headings.h8, fontWeight: 'normal', color: 'grey'}
              }>
              {/* {props?.message?.split(' ').slice(0, 5).join(' ')} */}
              Time
            </Text>
          </View>
        </View>
        <View style={styles.timCounter}>
          <Text style={styles.timTxt}>time</Text>
          {/* {props.unreadCounter > 0 && ( */}
          <View style={styles.counter}>
            <Text style={styles.counterTxt}>
              {/* 1{props.unreadCounter} */}
            </Text>
          </View>
          {/* )} */}
        </View>
      </AnimatedTouchable>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeRight: {
    backgroundColor: '#DF4B38',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
    marginRight: 40,
  },
  swipeLeft: {
    backgroundColor: '#DF4B38',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    marginLeft: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    height: heightPercentageToDP(10),
    width: '100%',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: widthPercentageToDP(1),
  },
  itemMsg: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    width: '65%',
  },
  nameMsg: {marginBottom: 10},
  nameTxt: {
    fontWeight: 'normal',
    color: white,
    width: '100%',
    // backgroundColor: 'blue',
  },
  unReadNameTxt: {
    fontWeight: 'bold',
    color: 'black',
    width: '42%',
  },
  timCounter: {
    height: '80%',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  timTxt: {color: 'black', fontWeight: 'bold'},
  counter: {
    backgroundColor: '#c471ed',
    borderRadius: 50,
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTxt: {color: 'white', fontWeight: 'bold'},
});

export default AllChatComponent;
