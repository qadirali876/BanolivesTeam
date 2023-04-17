import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeartIcon from 'react-native-vector-icons/Foundation';
import CrossIcon from 'react-native-vector-icons/Entypo';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OptionIcon from 'react-native-vector-icons/Octicons';
import CamerIcon from 'react-native-vector-icons/AntDesign';
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import GameIcon from 'react-native-vector-icons/Ionicons';
import EmptyHeart from 'react-native-vector-icons/AntDesign';
import GiftIcon from 'react-native-vector-icons/Feather';
import StarIcon from 'react-native-vector-icons/AntDesign';
import SettingIcon from 'react-native-vector-icons/Ionicons';
import AddFrndIcon from 'react-native-vector-icons/Ionicons';
import ShuffleIcon from 'react-native-vector-icons/Ionicons';
import SendIcon from 'react-native-vector-icons/Feather';
import PhoneIcon from 'react-native-vector-icons/Feather';
import MirrorIcon from 'react-native-vector-icons/Octicons';
import MusicIcon from 'react-native-vector-icons/Feather';
import StickerIcon from 'react-native-vector-icons/Entypo';
import RBSheet from 'react-native-raw-bottom-sheet';
import ShareIcon from 'react-native-vector-icons/FontAwesome';
import MailIcon from 'react-native-vector-icons/AntDesign';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import StarModal from '../reuseable_Component/StarModal';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';
import {TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';


export default function Reels2(props) {
  const videoBuffer = isBuffer => {
    console.log(isBuffer);
  };
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const refRBSheet1 = useRef();
  const refRBSheetViewers = useRef();
  const refRBSheetGuests = useRef();
  const refRBSheetOptions = useRef();
  const refRBSheetGifts = useRef();
  const [selection, setselection] = useState('View');
  const [ViewClr, setViewClr] = useState('white');
  const [GuestClr, setGuestClr] = useState('#242A38');
  const [selectGiftBtn, setselectGiftBtn] = useState(0);
  const [bg, setbg] = useState('grey');
  const [selectButton, setselectButton] = useState(0);
  const [btnClr, setbtnClr] = useState('grey');
  const funny = require('./vid.mp4');
  const Data = [
    {
      id: 1,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 2,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 3,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 4,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 5,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 6,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 7,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 8,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 9,
      name: 'James Ovilia',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
    {
      id: 10,
      name: 'Samina Pirzada',
      img: require('../../assets/images/img2.png'),
      Lv: 'Lv.09',
      Coin: '06',
      CoinImg: require('../../assets/images/crown.png'),
    },
  ];
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
          <Text style={{fontSize: 20, color: 'white', marginVertical: 5}}>
            Daily Star
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <StarIcon name="star" size={20} color={'white'} />
            <Text style={{color: 'white', marginHorizontal: 10, fontSize: 16}}>
              0 Star
            </Text>
          </View>
          <Text style={{color: 'red', fontWeight: '500'}}>0/100,000</Text>
          <Text style={{color: 'grey'}}>
            Sending gifts can help me collect stars
          </Text>
          <TouchableOpacity style={styles.CheckBtnbox}>
            <Text style={{color: 'white', fontSize: 15, fontWeight: '500'}}>
              Check Gifts Record
            </Text>
          </TouchableOpacity>
          <Text style={{color: 'grey', width: '85%', textAlign: 'center'}}>
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
          <Text style={styles.Eventtxt}>Event Info</Text>
        </View>
      </View>
    );
  };
  const ModalView2 = () => {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 15,
          height: heightPercentageToDP(90),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <BackIcon name="left" size={22} color={'white'} />
            <Text style={{color: 'white', fontSize: 22, paddingHorizontal: 5}}>
              Fans Ranking
            </Text>
          </View>
          <TouchableOpacity onPress={() => modal2Ref.current.toggleModal()}>
            <CrossIcon
              name="cross"
              size={22}
              color={'white'}
              style={{marginRight: 5}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          {Buttons.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setselectButton(index);
                setbg('white');
              }}>
              <Text
                style={[
                  {color: 'grey'},
                  selectButton == index && {
                    color: 'red',
                    borderBottomWidth: 1,
                    borderColor: 'red',
                  },
                ]}>
                {item.BtnTxt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Text
            style={{
              color: 'grey',
              textAlign: 'center',
              paddingVertical: 10,
              fontSize: 17,
              fontWeight: '500',
            }}>
            Total 500,000
          </Text>
        </View>
        <View>{SelectCategory(selectButton)}</View>
      </View>
    );
  };
  const Buttons = [
    {id: 1, BtnTxt: 'Daily'},
    {id: 2, BtnTxt: 'Weekly'},
    {id: 3, BtnTxt: 'Monthly'},
  ];
  const GiftBtns = [
    {id: 1, BtnTxt: 'Draw'},
    {id: 2, BtnTxt: 'Popular'},
    {id: 3, BtnTxt: 'Multi'},
    {id: 4, BtnTxt: 'Activity'},
    {id: 5, BtnTxt: 'Family'},
  ];
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
  const RankStyle = props => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingVertical: 10,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'white'}}>{props.item.id}</Text>
        <Image
          source={props.item.img}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'white'}}>{props.item.name}</Text>
          <Text
            style={{
              color: 'white',
              backgroundColor: 'red',
              width: widthPercentageToDP(9),
              textAlign: 'center',
              borderRadius: 15,
              textAlignVertical: 'center',
              height: heightPercentageToDP(2),
              fontSize: 10,
            }}>
            {props.item.Lv}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{color: 'red'}}>{props.item.price}</Text>
      </View>
    </View>
  );

  const ButtonOne = () => (
    <View style={{height: heightPercentageToDP(73)}}>
      <FlatList data={RankingData} renderItem={RankStyle} />
    </View>
  );
  const ButtonTwo = () => (
    <View style={{height: heightPercentageToDP(73)}}>
      <FlatList data={RankingData1} renderItem={RankStyle} />
    </View>
  );
  const ButtonThree = () => (
    <View style={{height: heightPercentageToDP(73)}}>
      <FlatList data={RankingData2} renderItem={RankStyle} />
    </View>
  );

  const ItemStyle = props => (
    <View style={{flex: 1}}>
      <View style={styles.profileViewerbox}>
        <Image source={props.item.img} />
        <View>
          <Text style={{color: 'white'}}>{props.item.name}</Text>
          <View style={{flexDirection: 'row'}}>
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
                style={{height: 11, width: 11}}
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
  const DrawBtnView = () => (
    <View style={{alignItems: 'center'}}>
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
  const DrawListStyle = ({item}) => (
    <View style={styles.DrawListStyleView}>
      <Image
        source={item.img}
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../assets/images/coin.png')} />
        <Text style={{color: 'white'}}>{item.price}</Text>
      </View>
    </View>
  );
  const PopularBtnView = () => (
    <View style={{alignItems: 'center'}}>
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
  const PopularListStyle = ({item}) => (
    <View style={styles.DrawListStyleView}>
      <Image
        source={item.img}
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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../../assets/images/coin.png')} />
        <Text style={{color: 'white'}}>{item.price}</Text>
      </View>
    </View>
  );
  const RankingData = [
    {
      id: 1,
      img: require('../../assets/images/img2.png'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 2,
      img: require('../../assets/images/img2.png'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 3,
      img: require('../../assets/images/img2.png'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 4,
      img: require('../../assets/images/img2.png'),
      name: 'Mohsin Bhai',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 5,
      img: require('../../assets/images/img2.png'),
      name: 'Hanzala Muneer ',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 6,
      img: require('../../assets/images/img2.png'),
      name: 'Shehroz Khalid',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 7,
      img: require('../../assets/images/img2.png'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 8,
      img: require('../../assets/images/img2.png'),
      name: 'Mohsin Bhai',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 9,
      img: require('../../assets/images/img2.png'),
      name: 'Hanzala Muneer ',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 10,
      img: require('../../assets/images/img2.png'),
      name: 'Shehroz Khalid',
      Lv: 'Lv.09',
      price: '100,000',
    },
  ];
  const RankingData1 = [
    {
      id: 1,
      img: require('../../assets/images/img3.png'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 2,
      img: require('../../assets/images/img3.png'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 3,
      img: require('../../assets/images/img3.png'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 4,
      img: require('../../assets/images/img3.png'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 5,
      img: require('../../assets/images/img3.png'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 6,
      img: require('../../assets/images/img3.png'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 7,
      img: require('../../assets/images/img3.png'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 8,
      img: require('../../assets/images/img3.png'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 9,
      img: require('../../assets/images/img3.png'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 10,
      img: require('../../assets/images/img3.png'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
  ];
  const RankingData2 = [
    {
      id: 1,
      img: require('../../assets/images/story.jpg'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 2,
      img: require('../../assets/images/story.jpg'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 3,
      img: require('../../assets/images/story.jpg'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 4,
      img: require('../../assets/images/story.jpg'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 5,
      img: require('../../assets/images/story.jpg'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 6,
      img: require('../../assets/images/story.jpg'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 7,
      img: require('../../assets/images/story.jpg'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 8,
      img: require('../../assets/images/story.jpg'),
      name: 'Adeel Arif',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 9,
      img: require('../../assets/images/story.jpg'),
      name: 'Zunair Shabbir',
      Lv: 'Lv.09',
      price: '100,000',
    },
    {
      id: 10,
      img: require('../../assets/images/story.jpg'),
      name: 'Rizwan Siddique',
      Lv: 'Lv.09',
      price: '100,000',
    },
  ];
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
  const modalRef = React.createRef();
  const modal2Ref = React.createRef();

  // const {route} = props;
  // const {params} = route;
  // const {userID, userName, liveID} = params;
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={{flex: 1}} activeOpacity={1}>
          <Video
            source={funny}
            paused={false}
            repeat={true}
            playWhenInactive={true}
            playInBackground={true}
            onBuffer={videoBuffer}
            resizeMode="cover"
            style={{flex: 1}}
            controls={false}
            ref={ref => {
              ref;
            }}
          />
        </TouchableOpacity> */}

    {/* <ZegoUIKitPrebuiltLiveStreaming
      appID={1119269215}
      appSign={
        'eab328871ab7bd268a1cd8d4a82a6c7de77051081f2451eb5ca68058a58f184d'
      }
      userID={'591'}
      userName={'Bano Live'}
      liveID={'591'}
      config={{
        ...AUDIENCE_DEFAULT_CONFIG,
        // onLeaveLiveStreaming: () => {
        //   props.navigation.navigate('HomePage');
        // },
      }}
    /> */}
      
    </View>
  );
}


// <Image
//         source={require('../../assets/images/wallpaper.jpg')}
//         style={styles.mainImg}
//       />
//       <View style={styles.profilecontainer}>
//         <View style={styles.profilebox}>
//           <Image
//             source={require('../../assets/images/party.jpg')}
//             style={styles.profile}
//           />
//           <View style={styles.txtbox}>
//             <Text style={styles.name}>Jame Olivia</Text>
//             <Text style={styles.id}>ID:123456789</Text>
//           </View>
//           <TouchableOpacity>
//             <View style={styles.flowbox}>
//               <PlusIcon name="plus" size={20} style={styles.heartIcon} />
//               {/* <Text style={styles.flowtxt}>Follow</Text> */}
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.rightbox}>
//           <TouchableOpacity onPress={() => refRBSheetGuests.current.open()}>
//             <Image
//               source={require('../../assets/images/img1.png')}
//               style={styles.img}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => refRBSheetViewers.current.open()}>
//             <Text style={styles.noTxt}>256</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <CrossIcon name="cross" size={34} style={styles.crossIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.Likebox}>
//         <TouchableOpacity
//           onPress={() => {
//             modal2Ref.current.toggleModal();
//           }}>
//           <View style={styles.Kbox}>
//             <Image
//               source={require('../../assets/images/coin.png')}
//               style={{height: 16, width: 16, marginRight: 2}}
//             />
//             <Text style={styles.Ktxt}>10.5k</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             modalRef.current.toggleModal();
//           }}>
//           <View style={styles.Starbox}>
//             <StarIcon
//               name="star"
//               color={'yellow'}
//               size={15}
//               style={{marginRight: 2}}
//             />
//             <Text style={styles.Startxt}>06 Stars</Text>
//           </View>
//         </TouchableOpacity>
//         {/* <View style={styles.Lvbox}>
//             <Text style={styles.Lvtxt}>Lv.09</Text>
//           </View> */}
//       </View>
//       <View style={styles.commentcontainer}>
//         <View style={styles.commentbox}>
//           <Text style={styles.LvIcon}>Lv.09</Text>
//           <Text style={styles.commenttxt}>arsslan gujjar: hi</Text>
//         </View>
//         <View style={styles.commentbox}>
//           <Text style={styles.LvIcon}>Lv.09</Text>
//           <Text style={styles.commenttxt}>arsslan gujjar: kya hal hy</Text>
//         </View>
//         <View style={styles.commentbox}>
//           <Text style={styles.LvIcon}>Lv.09</Text>
//           <Text style={styles.commenttxt}>
//             john Smith: @Imran Khan welcome to my room
//           </Text>
//         </View>
//       </View>
//       {/* join Call */}
//       <TouchableOpacity onPress={() => navigation.navigate('CallScreen')}>
//         <View
//           style={{
//             position: 'absolute',
//             bottom: heightPercentageToDP(15),
//             right: widthPercentageToDP(3),
//             backgroundColor: '#191D26',
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingHorizontal: 5,
//             paddingVertical: 10,
//             borderRadius: 5,
//           }}>
//           <Image
//             source={require('../../assets/images/join.png')}
//             style={{height: 20, width: 20}}
//           />
//           <Text style={{fontSize: 11, color: 'white'}}>Join Call</Text>
//         </View>
//       </TouchableOpacity>
//       <View style={styles.bottombox}>
//         <View style={styles.lefticonsbox}>
//           <TextInput
//             placeholder="Typing comment"
//             placeholderTextColor={'#FFFFFF'}
//             style={{
//               backgroundColor: 'rgba(0,0,0,0.2)',
//               width: '55%',
//               borderRadius: 25,
//               marginLeft: 10,
//               paddingHorizontal: 13,
//               height: 40,
//               color: 'white',
//             }}
//           />
//         </View>
//         <View style={styles.righticonsbox}>
//           <TouchableOpacity
//             style={[styles.icon2box, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
//             <MailIcon name="mail" size={23} style={styles.giftIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => refRBSheetOptions.current.open()}
//             style={[styles.icon2box, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
//             <ShareIcon name="share" size={23} style={styles.giftIcon} />
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => refRBSheet.current.open()}
//             style={[styles.icon2box, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
//             <GameIcon
//               name="md-game-controller-outline"
//               size={23}
//               style={styles.giftIcon}
//             />
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={() => refRBSheetGifts.current.open()}
//             style={[styles.icon2box, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
//             <GiftIcon name="gift" size={23} style={styles.giftIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View>
//         <RBSheet
//           ref={refRBSheet}
//           closeOnDragDown={true}
//           closeOnPressMask={false}
//           customStyles={{
//             wrapper: {
//               backgroundColor: 'transparent',
//             },
//             draggableIcon: {
//               backgroundColor: '#000',
//               height: 0,
//             },
//             container: {
//               backgroundColor: '#191D26',
//               borderTopLeftRadius: 30,
//               borderTopRightRadius: 30,
//               height: heightPercentageToDP(25),
//             },
//           }}>
//           <View>
//             <Text style={styles.headingtxt1}>Play games</Text>
//             <View style={styles.rbIconbox1}>
//               <View style={{alignItems: 'center'}}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#F9A200'}]}>
//                   <Image
//                     source={require('../../assets/images/teen.png')}
//                     style={{height: 40, width: 40}}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Teen Patti</Text>
//               </View>
//               <View style={{alignItems: 'center'}}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#C7361E'}]}>
//                   <Image
//                     source={require('../../assets/images/ticket.png')}
//                     style={{height: 38, width: 38}}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>A Golden Ticket</Text>
//               </View>
//               <View style={{alignItems: 'center'}}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#EF4137'}]}>
//                   <Image
//                     source={require('../../assets/images/greedy.png')}
//                     style={{height: 40, width: 40}}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Greedy</Text>
//               </View>
//               <View style={{alignItems: 'center'}}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#FFCD00'}]}>
//                   <Image
//                     source={require('../../assets/images/fruit.png')}
//                     style={{height: 40, width: 40}}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Fruit Loops</Text>
//               </View>
//             </View>
//           </View>
//         </RBSheet>
//       </View>
//       <View>
//         <RBSheet
//           ref={refRBSheet1}
//           closeOnDragDown={true}
//           closeOnPressMask={false}
//           customStyles={{
//             wrapper: {
//               backgroundColor: 'transparent',
//             },
//             draggableIcon: {
//               backgroundColor: '#000',
//               height: 0,
//             },
//             container: {
//               backgroundColor: 'rgba(0,0,0,0.6)',
//               borderTopLeftRadius: 30,
//               borderTopRightRadius: 30,
//               height: 250,
//             },
//           }}>
//           <View>
//             <View style={styles.batleHeaderView}>
//               <TouchableOpacity>
//                 <SettingIcon
//                   name="md-settings-sharp"
//                   size={30}
//                   color={'#FFFFFF'}
//                 />
//               </TouchableOpacity>
//               <Text
//                 style={{color: '#FFFFFF', textAlign: 'center', fontSize: 18}}>
//                 Royal Battles
//               </Text>
//               <TouchableOpacity>
//                 <CrossIcon name="cross" size={30} color={'#FFFFFF'} />
//               </TouchableOpacity>
//             </View>
//             <View style={styles.batleIconsbox}>
//               <View style={styles.batleIconContainer}>
//                 <TouchableOpacity style={styles.batleIconbox}>
//                   <AddFrndIcon
//                     name="person-add-sharp"
//                     size={25}
//                     color={'#FFFFFF'}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.batletxt}>Friends PK</Text>
//               </View>
//               <View style={styles.batleIconContainer}>
//                 <TouchableOpacity style={styles.batleIconbox}>
//                   <ShuffleIcon name="shuffle" size={25} color={'#FFFFFF'} />
//                 </TouchableOpacity>
//                 <Text style={styles.batletxt}>Random PK</Text>
//               </View>
//             </View>
//           </View>
//         </RBSheet>
//       </View>
//       <View style={{flex: 1}}>
//         <RBSheet
//           ref={refRBSheetViewers}
//           closeOnDragDown={false}
//           closeOnPressMask={false}
//           customStyles={{
//             wrapper: {
//               backgroundColor: 'transparent',
//             },
//             draggableIcon: {
//               backgroundColor: '#000',
//               height: 0,
//             },
//             container: {
//               backgroundColor: 'rgba(0,0,0,0.6)',
//               borderTopLeftRadius: 30,
//               borderTopRightRadius: 30,
//               height: 300,
//             },
//           }}>
//           <View style={{flex: 1}}>
//             <View style={styles.ViewerHeader}>
//               <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setselection('View');
//                     setViewClr('white');
//                     setGuestClr('#242A38');
//                   }}>
//                   <Text style={{color: ViewClr, fontSize: 20}}>
//                     Viewers(60)
//                   </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => {
//                     setselection('Guest');
//                     setGuestClr('white');
//                     setViewClr('#242A38');
//                   }}>
//                   <Text
//                     style={{
//                       color: GuestClr,
//                       fontSize: 18,
//                       marginLeft: 18,
//                       fontWeight: '500',
//                     }}>
//                     Guests
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//               <TouchableOpacity
//                 activeOpacity={1}
//                 onPress={() => refRBSheetViewers.current.close()}>
//                 <CrossIcon name="cross" size={28} style={{color: 'white'}} />
//               </TouchableOpacity>
//             </View>
//             <View style={{flex: 1}}>
//               {selection === 'View' ? (
//                 <View>
//                   <FlatList data={Data} renderItem={ItemStyle} />
//                 </View>
//               ) : (
//                 <View>
//                   <Text style={{color: 'white', marginLeft: 10, fontSize: 15}}>
//                     Guests Live (0)
//                   </Text>
//                 </View>
//               )}
//             </View>
//           </View>
//         </RBSheet>
//       </View>
//       <View>
//         <RBSheet
//           ref={refRBSheetOptions}
//           closeOnDragDown={true}
//           closeOnPressMask={false}
//           customStyles={{
//             wrapper: {
//               backgroundColor: 'transparent',
//             },
//             draggableIcon: {
//               backgroundColor: '#000',
//               height: 0,
//             },
//             container: {
//               backgroundColor: '#191D26',
//               borderTopLeftRadius: 30,
//               borderTopRightRadius: 30,
//               height: 280,
//             },
//           }}>
//           <View style={{alignSelf: 'center', marginHorizontal: 10}}>
//             <Text style={styles.headingtxt}>Stream Duration 00:02:11</Text>
//             <Text
//               style={{
//                 borderBottomWidth: 1,
//                 borderColor: 'white',
//                 marginHorizontal: 20,
//               }}></Text>
//             <View style={styles.rbIconbox}>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: 'red'}]}>
//                   <StickerIcon name="emoji-happy" color={'white'} size={22} />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Steakers</Text>
//               </View>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: 'green'}]}>
//                   <MusicIcon name="music" size={22} color={'white'} />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Music</Text>
//               </View>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#FFBB2D'}]}>
//                   <Image
//                     source={require('../../assets/images/beans.png')}
//                     style={{height: 30, width: 30, resizeMode: 'contain'}}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Beans</Text>
//               </View>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#7893CA'}]}>
//                   <Image
//                     source={require('../../assets/images/room.png')}
//                     style={{height: 30, width: 30, resizeMode: 'contain'}}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Room Effects</Text>
//               </View>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#023188'}]}>
//                   <CamerIcon name="camera" size={22} color={'white'} />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Flip Camera</Text>
//               </View>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#039CDD'}]}>
//                   <MirrorIcon name="mirror" size={22} color={'white'} />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Mirror On</Text>
//               </View>
//               <View style={styles.gameIconView}>
//                 <TouchableOpacity
//                   style={[styles.gameIconbox, {backgroundColor: '#6B8EF2'}]}>
//                   <MessageIcon
//                     name="message-text-outline"
//                     size={22}
//                     color={'white'}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.gametxt}>Chat</Text>
//               </View>
//             </View>
//           </View>
//         </RBSheet>
//       </View>
//       <View style={{flex: 1}}>
//         <RBSheet
//           ref={refRBSheetGifts}
//           closeOnDragDown={true}
//           closeOnPressMask={false}
//           customStyles={{
//             wrapper: {
//               backgroundColor: 'transparent',
//             },
//             draggableIcon: {
//               backgroundColor: '#000',
//               height: 0,
//             },
//             container: {
//               backgroundColor: '#191D26',
//               borderTopLeftRadius: 30,
//               borderTopRightRadius: 30,
//               height: '40%',
//             },
//           }}>
//           <View style={{flex: 1}}>
//             <View
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'space-around',
//                 marginBottom: heightPercentageToDP(2),
//               }}>
//               {GiftBtns.map((item, index) => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     setselectGiftBtn(index);
//                     setbtnClr('white');
//                   }}>
//                   <Text
//                     style={[
//                       {
//                         color: 'grey',
//                         fontSize: 16,
//                         fontWeight: '500',
//                       },
//                       selectGiftBtn == index && {
//                         color: 'white',
//                       },
//                     ]}>
//                     {item.BtnTxt}
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//             <View>{SelectGiftList(selectGiftBtn)}</View>
//           </View>
//         </RBSheet>
//       </View>
//       <StarModal view={<ModalView />} ref={modalRef} />
//       <View>
//         <StarModal view={<ModalView2 />} ref={modal2Ref} />
//       </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    top: 11,
  },
  profilebox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 2,
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
    fontSize: 12,
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
    // paddingHorizontal: 5,
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
  bottombox: {
    position: 'absolute',
    bottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  lefticonsbox: {
    flexDirection: 'row',
    width: '83%',
  },
  icon1box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 40,
    width: 40,
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
    position: 'absolute',
    right: 5,
  },
  icon2box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  giftIcon: {
    color: 'white',
    marginHorizontal: 1,
  },
  PK: {
    color: 'white',
    fontWeight: '500',
  },
  Likebox: {
    position: 'absolute',
    flexDirection: 'row',
    top: 60,
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
  commentcontainer: {
    position: 'absolute',
    bottom: '17%',
    width: '65%',
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
    top: 2,
  },
  headingtxt: {
    color: 'white',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: '400',
  },
  rbIconbox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
  },
  gameIconbox: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
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
  profileViewerbox: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingVertical: 5,
  },
  ViewerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'space-between',
    paddingVertical: 10,
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
  },
  gametxt: {
    color: '#FFFFFF',
    width: 90,
    textAlign: 'center',
  },
  DrawListStyleView: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-around',
    marginHorizontal: widthPercentageToDP(1),
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
  CheckBtnbox: {
    backgroundColor: '#EC3E33',
    marginVertical: 10,
    height: 34,
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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
});
