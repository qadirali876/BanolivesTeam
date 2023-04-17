import React, {useState, useNavigation} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import { Fonts, Colors } from "../../../Theme";
import Video from 'react-native-video';
import {black, Colors, headings, white} from '../../utils/Styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useIsFocused} from '@react-navigation/native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {InputField} from '../reuseable_Component/InputField';

const Reels = props => {
  const [paused, setPaused] = useState(false);
  const onChangeIndex = ({index}) => {
    setIndex(index);
  };
  const [currIndex, setIndex] = useState(0);
  const screenIsFocused = useIsFocused();
  const config = {
    velocityThreshold: 0.6,
    directionalOffsetThreshold: 150,
  };
  const onPlayPausePress = () => {
    setPaused(!paused);
  };
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();

  const Videos = [
    {
      id: 1,
      video: require('../../assets/videos/3.mp4'),
      onpause: false,
      VideoTitle: 'BanoLive Reels', 
      VideoTags: '#Live',
      Username: '@User name',
      StarValue: '22',
      HeartIcon: <Ionicons name="heart" color={'red'} size={28} />,
      SendIcon: <Ionicons name="ios-send" color={white} size={28} />,
      LikeValue: '11',
    },
    {
      id: 2,
      video: require('../../assets/videos/3.mp4'),
      onpause: false,
      VideoTitle: 'BanoLive Reels',
      VideoTags: '#Live',
      Username: '@User name',
      StarValue: '22',
      HeartIcon: <Ionicons name="heart" color={'red'} size={28} />,
      LikeValue: '11',
    },
    {
      id: 3,
      video: require('../../assets/videos/3.mp4'),
      onpause: false,
      VideoTitle: 'BanoLive Reels',
      VideoTags: '#Live',
      Username: '@User name',
      StarValue: '22',
      HeartIcon: <Ionicons name="heart" color={white} size={28} />,
      LikeValue: '11',
    },
    {
      id: 4,
      video: require('../../assets/videos/3.mp4'),
      onpause: false,
      VideoTitle: 'BanoLive Reels',
      VideoTags: '#Live',
      Username: '@User name',
      StarValue: '22',
      HeartIcon: <Ionicons name="heart" color={white} size={28} />,
      LikeValue: '11',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <SwiperFlatList
        data={Videos}
        vertical={true}
        pagingEnabled
        onChangeIndex={onChangeIndex}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          // console.log("id is ", item.id)
          return (
            <View style={{flex: 1, height: heightPercentageToDP(97)}}>
              <TouchableWithoutFeedback onPress={onPlayPausePress}>
                <Video
                  source={item.video} // Can be a URL or a local file.
                  playInBackground={false}
                  playWhenInactive={false}
                  resizeMode={'cover'}
                  repeat={true}
                  // ref={}
                  key={index - 1}
                  //  onBuffer={videoBuffer}
                  controls={false}
                  //onplay
                  //paused = {paused}
                  paused={currIndex !== index || !screenIsFocused}
                  style={styles.backgroundVideo}></Video>
              </TouchableWithoutFeedback>
              <View style={styles.content}>
                <TouchableOpacity style={styles.HeaderIconStyling}>
                  <Ionicons name="close" color={white} size={25} />
                  <Text
                    style={{
                      ...headings.h8M,
                      color: white,
                      padding: 10,
                      alignSelf: 'center',
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      borderRadius: 100,
                    }}>
                    237
                  </Text>
                </TouchableOpacity>

                <View style={styles.VideoInformation}>
                  <View>
                    {/* <Text style={styles.VideoTitle}>{item.VideoTitle}</Text>
                                        <Text style={styles.VideoTags}>{item.VideoTags}</Text> */}
                    <Text style={styles.BrandName}>Something</Text>
                    <InputField
                      containerStyle={{
                        width: widthPercentageToDP(75),
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        height: widthPercentageToDP(10),
                        borderRadius: 20,
                        borderWidth: 0,
                      }}
                      isSecure={false}
                      lable="Type Comments Here"
                    />
                  </View>
                  <View style={styles.IconSection}>
                    <TouchableOpacity
                      style={{...styles.StarIconStyling, alignSelf: 'center'}}>
                      {item.SendIcon}
                      <Text style={styles.ShareAmountStyling}>
                        {/* {item.LikeValue} */}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.IconSection}>
                    <TouchableOpacity style={styles.StarIconStyling}>
                      {item.HeartIcon}
                      <Text style={styles.ShareAmountStyling}>
                        {item.LikeValue}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
export default Reels;

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  innerFlatList: {
    flex: 1,
  },
  Container: {
    flex: 1,
  },
  BackgroundImageStyling: {
    flex: 1,
    overflow: 'hidden',
  },
  VideoInformation: {
    position: 'relative',
    // bottom: '2%',
    flex: 2,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  VideoTitle: {
    color: white,
  },
  VideoTags: {
    color: white,
    fontWeight: '700',
    marginBottom: 10,
  },
  BrandName: {
    color: white,
    marginBottom: 5,
    fontWeight: '700',
  },
  IconSection: {
    alignItems: 'center',
    marginBottom: 5,
    // backgroundColor:'red'
  },
  ShareIconStyling: {
    // marginTop: -50,
    alignItems: 'center',
  },
  BasketIconStyling: {
    marginBottom: 10,
    alignItems: 'center',
  },
  ShareAmountStyling: {
    color: white,
    fontSize: 12,
  },
  StarIconStyling: {
    marginTop: 10,
    alignItems: 'center',
  },
  HeaderIconStyling: {
    // backgroundColor: Colors.WHITE,
    // width: 30,
    // borderRadius: 80,
    marginTop: 30,
    // marginLeft: 20,
    flexDirection: 'row-reverse',
    // width: widthPercentageToDP(100),
    // backgroundColor: 'red',
    paddingHorizontal: '3%',
    // justifyContent: 'space-between',
  },
  AddedProductsImagesSection: {
    flex: 1.2,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: '20%',
    alignItems: 'flex-end',
    marginBottom: '6%',
    // width: '100%',
  },
  AddedProductsImages: {
    height: 40,
    width: 40,
    borderColor: white,
    borderWidth: 1,
    borderRadius: 5,
    flex: 0.5,
  },
  AddedProductsDescriptionSection: {
    flexDirection: 'column',
    marginHorizontal: 5,
    alignContent: 'center',
    // position: 'relative',
    // left: '2%',
    flex: 4,
  },
  AddedProductsDescription: {
    color: white,
    fontSize: 14,
    // fontFamily: Fonts.OpenSans,
  },
  AddedProductsPrice: {
    color: white,
    fontSize: 18,
    marginBottom: '2%',
    fontWeight: '700',
    // fontFamily: Fonts.OpenSans,
    flex: 1,
    // marginLeft: 40,
    // position: 'relative',
    // left: '18%'
  },
  ArrowIconStyling: {
    marginTop: '4%',
    // position: 'relative',
    // left: '22%',
    // top: 4
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    // resizeMode: "contain"
    height: heightPercentageToDP(97),
    // height:500,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
