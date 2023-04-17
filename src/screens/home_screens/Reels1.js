import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import HeartIcon from 'react-native-vector-icons/Foundation';
import CrossIcon from 'react-native-vector-icons/Entypo';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OptionIcon from 'react-native-vector-icons/Octicons';
import CamerIcon from 'react-native-vector-icons/AntDesign';
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import {primaryColor, white, txtgrey} from '../../utils/Styles';
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
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
export default function Reels1() {
  const navigation = useNavigation();
  // const MOdalView =()=>{
  //   return(

  //   )
  // }
  const videoBuffer = isBuffer => {
    console.log(isBuffer);
  };
  const refRBSheet = useRef();
  const refRBSheet1 = useRef();
  const refRBSheetViewers = useRef();
  const refRBSheetGuests = useRef();
  const refRBSheetOptions = useRef();
  const refRBSheetGifts = useRef();
  const refRBSheetPK = useRef();
  // const [selection, setselection] = useState('View');
  const [ViewClr, setViewClr] = useState('white');
  // const [GuestClr, setGuestClr] = useState('#242A38');
  const [selectButton, setselectButton] = useState(0);
  const [selectGiftBtn, setselectGiftBtn] = useState(0);
  const [selectPkBtn, setselectPkBtn] = useState(0);
  const [selectTimeBtn, setselectTimeBtn] = useState(0);
  const [btnClr, setbtnClr] = useState('grey');
  const [bg, setbg] = useState('grey');
  const userData = useSelector(state => state.auth.userData);

  

  const MakeHostDead = async () => {
    try {

      await fetch('https://www.banolive.com/api/status-live-disable', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${userData.token}`,
        },

        body: JSON.stringify({id: userData.user.id}),
      })
        .then(res => res.json())
        .then(json => {
          // dispatch(updateUserData(json.data));
          console.log(json.message)
          navigation.goBack()
        });
   
    } catch (e) {
      console.log('saga login error -- ', e.toString());
    }
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
  const PkBtns = [
    {id: 1, name: 'Single Round PK'},
    {id: 2, name: 'Best of Three PK'},
  ];
  const TimeBtns = [
    {name: '5min'},
    {name: '10min'},
    {name: '12min'},
    {name: '15min'},
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
  const modal3Ref = React.createRef();
  const modal4Ref = React.createRef();
  const funny = require('./vid.mp4');
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
          <TouchableOpacity>
            <Text style={styles.Eventtxt}>Event Info</Text>
          </TouchableOpacity>
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
  const ModalView3 = props => {
    return (
      <View
        style={{
          height: heightPercentageToDP(55),
          backgroundColor: 'rgba(0,0,0,0.7)',
          borderRadius: 15,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 7,
            paddingHorizontal: widthPercentageToDP(4),
          }}>
          <Text style={{color: white, fontSize: 16}}>Report</Text>
          <TouchableOpacity onPress={props.onPress}>
            <CrossIcon name="cross" size={30} color={white} />
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../assets/images/img3.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
            alignSelf: 'center',
            borderWidth: 2,
            borderColor: 'red',
          }}
        />
        <Text style={{color: white, alignSelf: 'center', marginVertical: 5}}>
          Huba Rana
        </Text>
        {/* <View
          style={[styles.Likebox, {alignSelf: 'center', alignItems: 'center'}]}>
          <TouchableOpacity>
            <View
              style={[
                styles.Kbox,
                {backgroundColor: '#27B0FF', paddingHorizontal: 10},
              ]}>
              <Text style={styles.Ktxt}>Lv.09</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                styles.Starbox,
                {backgroundColor: '#CC1E0D', paddingHorizontal: 10},
              ]}>
              <Image
                source={require('../../assets/images/crown.png')}
                style={{height: 14, width: 14, marginRight: 2, marginBottom: 1}}
              />
              <Text style={styles.Startxt}>06</Text>
            </View>
          </TouchableOpacity>
          <View style={{backgroundColor: 'green', borderRadius: 25}}>
            <SpeakerIcon
              name="settings-voice"
              size={15}
              style={{padding: 2, color: white}}
            />
          </View>
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingVertical: heightPercentageToDP(2),
          }}>
          <Text style={{color: txtgrey, fontSize: 16}}>ID:123456789</Text>
          <Text style={{color: txtgrey, fontSize: 16}}>5000 Fans</Text>
          <Text style={{color: txtgrey, fontSize: 16}}>Pakistan</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            backgroundColor: '#303749',
            width: '82%',
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: heightPercentageToDP(1),
            borderRadius: 25,
          }}>
          <Text style={{color: white}}>Badges (4)</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/wealthClass/badge.png')}
              style={{height: 30, width: 30, marginHorizontal: 2}}
            />
            <Image
              source={require('../../assets/images/wealthClass/bronzeBadge.png')}
              style={{height: 30, width: 30, marginHorizontal: 2}}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/images/wealthClass/crystalBadge.png')}
              style={{height: 30, width: 30, marginHorizontal: 2}}
              resizeMode="contain"
            />
            <Image
              source={require('../../assets/images/wealthClass/gemBadge.png')}
              style={{height: 30, width: 30, marginHorizontal: 2}}
              resizeMode="contain"
            />
          </View>
          <BackIcon name="right" color={white} size={20} />
        </View>
        <TouchableOpacity>
          <LinearGradient
            style={{
              alignSelf: 'center',
              marginVertical: heightPercentageToDP(3),
              paddingVertical: 6.5,
              paddingHorizontal: 30,
              borderRadius: 25,
            }}
            colors={['#EA3126', '#EC3E33', '#F7584F']}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: white,
              }}>
              Follow
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: widthPercentageToDP(5),
            marginTop: heightPercentageToDP(1),
          }}>
          <View
            style={{
              alignItems: 'center',
              width: '25%',
            }}>
            <Image
              source={require('../../assets/images/profile/gift.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={{color: white, paddingVertical: 2, fontSize: 12}}>
              Send Gifts
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: '25%',
            }}>
            <Image
              source={require('../../assets/images/profile/msg.png')}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
            <Text style={{color: white, paddingVertical: 2, fontSize: 12}}>
              PM
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: '25%',
            }}>
            <Image
              source={require('../../assets/images/profile/@.png')}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
            <Text style={{color: white, paddingVertical: 2, fontSize: 12}}>
              @User
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
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
      <Image
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.mainImg}
      />
      <View style={styles.profilecontainer}>
        <View style={styles.profilebox}>
          <Image
            source={require('../../assets/images/party.jpg')}
            style={styles.profile}
          />
          <View style={styles.txtbox}>
            <Text style={styles.name}>Jame Olivia</Text>
            <Text style={styles.id}>ID:123456789</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.flowbox}>
              <PlusIcon name="plus" size={20} style={styles.heartIcon} />
              {/* <Text style={styles.flowtxt}>Follow</Text> */}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rightbox}>
          <TouchableOpacity
            onPress={() => {
              modal3Ref.current.toggleModal();
            }}>
            <Image
              source={require('../../assets/images/img1.png')}
              style={styles.img}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => refRBSheetViewers.current.open()}>
            <Text style={styles.noTxt}>256</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> MakeHostDead()}>
            <CrossIcon name="cross" size={34} style={styles.crossIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.Likebox}>
        <TouchableOpacity
          onPress={() => {
            modal2Ref.current.toggleModal();
          }}>
          <View style={styles.Kbox}>
            <Image
              source={require('../../assets/images/coin.png')}
              style={{height: 16, width: 16, marginRight: 2}}
            />
            <Text style={styles.Ktxt}>10.5k</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            modalRef.current.toggleModal();
          }}>
          <View style={styles.Starbox}>
            <StarIcon
              name="star"
              color={'yellow'}
              size={15}
              style={{marginRight: 2}}
            />
            {/* <Text style={styles.Startxt}>06 Stars</Text> */}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.commentcontainer}>
        <View style={styles.commentbox}>
          <Text style={styles.commenttxt}>
            Sexual or violent content is strictly prohibited. All violators will
            be banned. Do not expose your personal info such as phone or
            location.
          </Text>
        </View>
        <View style={styles.commentbox}>
          <Text style={styles.LvIcon}>Lv.09</Text>
          <Text style={styles.commenttxt}>arsslan gujjar: hi</Text>
        </View>
        <View style={styles.commentbox}>
          <Text style={styles.LvIcon}>Lv.09</Text>
          <Text style={styles.commenttxt}>arsslan gujjar: kya hal hy</Text>
        </View>
        <View style={styles.commentbox}>
          <Text style={styles.LvIcon}>Lv.09</Text>
          <Text style={styles.commenttxt}>
            john Smith: @Imran Khan welcome to my room
          </Text>
        </View>
      </View>

      <View style={styles.bottombox}>
        <View style={styles.lefticonsbox}>
          <TouchableOpacity style={styles.icon1box}>
            <MessageIcon
              name="message-text-outline"
              size={25}
              style={styles.icon1}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon1box}
            onPress={() => refRBSheetOptions.current.open()}>
            <OptionIcon name="three-bars" size={22} style={styles.icon1} />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.icon1box}>
            <CamerIcon name="camerao" size={25} style={styles.icon1} />
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.icon1box}>
            <SpeakerIcon name="settings-voice" size={25} style={styles.icon1} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon1box}
            onPress={() => refRBSheet.current.open()}>
            <GameIcon
              name="md-game-controller-outline"
              size={25}
              style={styles.icon1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon1box}>
            <PhoneIcon name="phone" size={25} style={styles.icon1} />
          </TouchableOpacity>
        </View>
        <View style={styles.righticonsbox}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => refRBSheetGifts.current.open()}
              style={[styles.icon2box, {backgroundColor: 'purple'}]}>
              <GiftIcon name="gift" size={25} style={styles.giftIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheet1.current.open()}
              style={[styles.icon2box, {backgroundColor: 'red'}]}>
              <Text style={styles.PK}>PK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#F9A200'}]}>
                  <Image
                    source={require('../../assets/images/teen.png')}
                    style={{height: 40, width: 40}}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Teen Patti</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#C7361E'}]}>
                  <Image
                    source={require('../../assets/images/ticket.png')}
                    style={{height: 38, width: 38}}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>A Golden Ticket</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#EF4137'}]}>
                  <Image
                    source={require('../../assets/images/greedy.png')}
                    style={{height: 40, width: 40}}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Greedy</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#FFCD00'}]}>
                  <Image
                    source={require('../../assets/images/fruit.png')}
                    style={{height: 40, width: 40}}
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
                style={{color: '#FFFFFF', textAlign: 'center', fontSize: 18}}>
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
      <View style={{flex: 1}}>
        <RBSheet
          ref={refRBSheetViewers}
          closeOnDragDown={false}
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
              height: 300,
            },
          }}>
          <View style={{flex: 1}}>
            <View style={styles.ViewerHeader}>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                // onPress={() => {
                //   setselection('View');
                //   setViewClr('white');
                //   setGuestClr('#242A38');
                // }}
                >
                  <Text style={{color: ViewClr, fontSize: 20}}>
                    Viewers(60)
                  </Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                  onPress={() => {
                    setselection('Guest');
                    setGuestClr('white');
                    setViewClr('#242A38');
                  }}>
                  <Text
                    style={{
                      color: GuestClr,
                      fontSize: 18,
                      marginLeft: 18,
                      fontWeight: '500',
                    }}>
                    Guests
                  </Text>
                </TouchableOpacity> */}
              </View>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => refRBSheetViewers.current.close()}>
                <CrossIcon name="cross" size={28} style={{color: 'white'}} />
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <View>
                <FlatList data={Data} renderItem={ItemStyle} />
              </View>
              {/* {selection === 'View' ? (
                <View>
                  <FlatList data={Data} renderItem={ItemStyle} />
                </View>
              ) : (
                <View>
                  <Text style={{color: 'white', marginLeft: 10, fontSize: 15}}>
                    Guests Live (0)
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'yellow',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image source={require('../../assets/images/img2.png')} />
                      <Image source={require('../../assets/images/img2.png')} />
                    </View>
                    <Text style={{backgroundColor: 'red', width: '60%'}}>
                      Meet up with new friends via Match!
                    </Text>
                    <TouchableOpacity
                      style={{backgroundColor: 'white', flexDirection: 'row'}}>
                      <Image
                        source={require('../../assets/images/match.png')}
                        style={{height: 20, width: 20}}
                      />
                      <Text>Match</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )} */}
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
          <View style={{alignSelf: 'center', marginHorizontal: 10}}>
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
                  style={[styles.gameIconbox, {backgroundColor: 'red'}]}>
                  <StickerIcon name="emoji-happy" color={'white'} size={22} />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Steakers</Text>
              </View>
              <View style={styles.gameIconView}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: 'green'}]}>
                  <MusicIcon name="music" size={22} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Music</Text>
              </View>
              <View style={styles.gameIconView}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#FFBB2D'}]}>
                  <Image
                    source={require('../../assets/images/beans.png')}
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Beans</Text>
              </View>
              <View style={styles.gameIconView}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#7893CA'}]}>
                  <Image
                    source={require('../../assets/images/room.png')}
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Room Effects</Text>
              </View>
              <View style={styles.gameIconView}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#023188'}]}>
                  <Image
                    source={require('../../assets/images/flipcam.png')}
                    style={{height: 30, width: 30, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Flip Camera</Text>
              </View>
              <View style={styles.gameIconView}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#039CDD'}]}>
                  <MirrorIcon name="mirror" size={22} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Mirror On</Text>
              </View>
              <View style={styles.gameIconView}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: '#6B8EF2'}]}>
                  <MessageIcon
                    name="message-text-outline"
                    size={22}
                    color={'white'}
                  />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Chat</Text>
              </View>
            </View>
            {/* <View style={styles.rbIconbox2}>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={[styles.gameIconbox, {backgroundColor: 'green'}]}>
                  <StickerIcon name="emoji-happy" color={'white'} size={22} />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Steakers</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={[
                    styles.gameIconbox,
                    {backgroundColor: 'red', marginLeft: 25},
                  ]}>
                  <MusicIcon name="music" size={22} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.gametxt}>Music</Text>
              </View>
            </View> */}
          </View>
        </RBSheet>
      </View>
      <View style={{flex: 1}}>
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
          <View style={{flex: 1}}>
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
                style={{color: '#FFFFFF', textAlign: 'center', fontSize: 18}}>
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
                <Text style={{color: 'white'}}>PK Mode ?</Text>
                {PkBtns.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setselectPkBtn(index);
                    }}>
                    <Text
                      style={[
                        styles.pkBtn,
                        selectPkBtn == index && {backgroundColor: '#E92F24'},
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
                <Text style={{color: 'white'}}>Time</Text>
                {TimeBtns.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setselectTimeBtn(index);
                    }}>
                    <Text
                      style={[
                        styles.pkBtn,
                        selectTimeBtn == index && {backgroundColor: '#E92F24'},
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
        <StarModal view={<ModalView3 />} ref={modal3Ref} />
      </View>
      {/* <View>
        <StarModal view={<ModalView4 />} ref={modal4Ref} />
      </View> */}
    </SafeAreaView>
  );
}

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
    top: 10,
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
    width: '70%',
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
  commentcontainer: {
    position: 'absolute',
    bottom: '17%',
    width: '70%',
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
  profileViewerbox: {
    flexDirection: 'row',
    marginLeft: 10,
    paddingVertical: 5,
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
});
