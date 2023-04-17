import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {primaryColor, txtgrey, white} from '../../utils/Styles';
import AudioPerson from '../reuseable_Component/AudioPerson';
import CrossIcon from 'react-native-vector-icons/Entypo';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import MessageIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SpeakerIcon from 'react-native-vector-icons/MaterialIcons';
import GameIcon from 'react-native-vector-icons/Ionicons';
import StarIcon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/FontAwesome';
import RbSheetComponent from '../reuseable_Component/RbSheetComponent';
import StarModal from '../reuseable_Component/StarModal';
import BackIcon from 'react-native-vector-icons/AntDesign';
import GiftIcon from 'react-native-vector-icons/Feather';
import React, {useRef, useState, useEffect} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ProfileModalStyle from '../reuseable_Component/ProfileModalStyle';
import {useNavigation} from '@react-navigation/native';
const AudioCall = () => {
  const [ViewClr, setViewClr] = useState('white');
  const [bg, setbg] = useState('grey');
  const [btnClr, setbtnClr] = useState('grey');
  const [selectButton, setselectButton] = useState(0);
  const [selectGiftBtn, setselectGiftBtn] = useState(0);
  const [iconName0, seticonName0] = useState('seat');
  const [iconName1, seticonName1] = useState('seat');
  const [iconName2, seticonName2] = useState('seat');
  const [iconName3, seticonName3] = useState('seat');
  const [iconName4, seticonName4] = useState('seat');
  const [iconName5, seticonName5] = useState('seat');
  const [iconName6, seticonName6] = useState('seat');
  const [iconName7, seticonName7] = useState('seat');
  const [iconName, seticonName] = useState('seat');
  const navigation = useNavigation();
  const Game = useRef();
  const Share = useRef();
  const Viewer = useRef();
  const Gift = useRef();
  const modalRef = React.createRef();
  const modal2Ref = React.createRef();
  const ProfileRef = React.createRef();

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
  const Data = [
    {
      component: <AudioPerson name={iconName0} />,
      val: `02`,
      // icon: iconName0,
    },
    {
      component: <AudioPerson name={iconName1} />,
      val: `03`,
      // icon: iconName1,
    },
    {
      component: <AudioPerson name={iconName2} />,
      val: `04`,
      // icon: iconName2,
    },
    {
      component: <AudioPerson name={iconName3} />,
      val: `05`,
      // icon: iconName3,
    },
    {
      component: <AudioPerson name={iconName4} />,
      val: `06`,
      // icon: iconName4,
    },
    {
      component: <AudioPerson name={iconName5} />,
      val: `07`,
      // icon: iconName5,
    },
    {
      component: <AudioPerson name={iconName6} />,
      val: `08`,
      // icon: iconName6,
    },
    {
      component: <AudioPerson name={iconName7} />,
      val: `09`,
      // icon: iconName7,
    },
  ];
  const ViewerArray = [
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
    <TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        {props.item.component}
        <Text style={{color: white, marginTop: 2}}>{props.item.val}</Text>
      </View>
    </TouchableOpacity>
  );
  const GameSheet = () => (
    <View style={{paddingBottom: 25}}>
      <Text style={styles.headingtxt2}>Play games</Text>
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
  );
  const ShareSheet = () => (
    <View>
      <Text style={styles.headingtxt1}>Share With</Text>
      <View style={styles.rbIconbox2}>
        <View style={styles.IconView}>
          <TouchableOpacity
            style={[styles.gameIconbox, {backgroundColor: '#04B7E2'}]}>
            <Image
              source={require('../../assets/images/friends.png')}
              style={{height: 35, width: 35}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Friends</Text>
        </View>
        <View style={styles.IconView}>
          <TouchableOpacity
          // style={[styles.gameIconbox, {backgroundColor: '#C7361E'}]}
          >
            <Image
              source={require('../../assets/images/whatsapp.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Whatsapp</Text>
        </View>
        <View style={styles.IconView}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/insta.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Instagram</Text>
        </View>
        <View style={styles.IconView}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/fb.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Facebook</Text>
        </View>
        <View style={styles.IconView}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/msg.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Messenger</Text>
        </View>
        <View style={styles.IconView}>
          <TouchableOpacity
            style={[styles.gameIconbox, {backgroundColor: '#32BD9D'}]}>
            <Image
              source={require('../../assets/images/link.png')}
              style={{height: 25, width: 25}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.gametxt}>Copy Links</Text>
        </View>
      </View>
    </View>
  );
  const ViewerSheet = () => (
    <View style={{flex: 1}}>
      <View style={styles.ViewerHeader}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity>
            <Text style={{color: ViewClr, fontSize: 20}}>Viewers(60)</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Viewer.current.close()}>
          <CrossIcon name="cross" size={28} style={{color: 'white'}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <View>
          <FlatList data={ViewerArray} renderItem={ViewerStyle} />
        </View>
      </View>
    </View>
  );
  const GiftSheet = () => (
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
  );
  const ViewerStyle = props => (
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
  const ProfileView = () => {
    return (
      <ProfileModalStyle onPress={() => ProfileRef.current.toggleModal()} />
    );
  };
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
      carname: 'Roya Carriage',
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
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/image36.png')}
        style={styles.Bg}>
        <View style={styles.profilecontainer}>
          <View style={styles.profilebox}>
            <TouchableOpacity onPress={() => ProfileRef.current.toggleModal()}>
              <Image
                source={require('../../assets/images/party.jpg')}
                style={styles.profile}
              />
            </TouchableOpacity>
            <View style={styles.txtbox}>
              <Text style={styles.name}>Jame Olivia</Text>
              <Text style={styles.id}>ID:123456789</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.flowbox}>
                <PlusIcon
                  name="plus"
                  size={20}
                  style={styles.heartIcon}
                  color={'white'}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rightbox}>
            <TouchableOpacity onPress={() => ProfileRef.current.toggleModal()}>
              <Image
                source={require('../../assets/images/img1.png')}
                style={styles.img}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Viewer.current.open()}>
              <Text style={styles.noTxt}>256</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
        <View style={styles.hostBox}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/img3.png')}
              style={{height: 60, width: 60, borderRadius: 30}}
            />
            <Text style={{marginTop: 2, color: white}}>Host</Text>
          </View>
          <TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <AudioPerson name={iconName} />
              <Text style={{marginTop: 2, color: white}}>01</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.FlatListView}>
          <FlatList
            data={Data}
            renderItem={ItemStyle}
            numColumns={4}
            key={'_'}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginVertical: 14,
            }}
          />
        </View>
        <View style={styles.commentcontainer}>
          <View style={styles.commentbox}>
            <TouchableOpacity onPress={() => ProfileRef.current.toggleModal()}>
              <Text style={styles.LvIcon}>Lv.09</Text>
            </TouchableOpacity>
            <Text style={styles.commenttxt}>arsslan gujjar: hi</Text>
          </View>
          <View style={styles.commentbox}>
            <TouchableOpacity onPress={() => ProfileRef.current.toggleModal()}>
              <Text style={styles.LvIcon}>Lv.09</Text>
            </TouchableOpacity>
            <Text style={styles.commenttxt}>arsslan gujjar: kya hal hy</Text>
          </View>
          <View style={styles.commentbox}>
            <TouchableOpacity onPress={() => ProfileRef.current.toggleModal()}>
              <Text style={styles.LvIcon}>Lv.09</Text>
            </TouchableOpacity>
            <Text style={styles.commenttxt}>
              john Smith: @Imran Khan welcome to my room
            </Text>
          </View>
        </View>
        {/* Join CAll View */}
        <View
          style={{
            alignItems: 'flex-end',
            paddingHorizontal: 12,
            bottom: heightPercentageToDP(5),
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#191D26',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 5,
                paddingVertical: 10,
                borderRadius: 5,
              }}>
              <Image
                source={require('../../assets/images/join.png')}
                style={{height: 20, width: 20}}
              />
              <Text style={{fontSize: 10, color: 'white'}}>Join Call</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottombox}>
          <View style={styles.lefticonsbox}>
            <TextInput
              placeholder="Typing..."
              placeholderTextColor={txtgrey}
              style={styles.input}
            />
          </View>
          <View style={styles.righticonsbox}>
            <TouchableOpacity
              style={[styles.icon2box, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
              <ShareIcon
                name="share"
                size={23}
                style={styles.giftIcon}
                onPress={() => Share.current.open()}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon1box}>
              <SpeakerIcon
                name="settings-voice"
                size={25}
                style={{color: white}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Game.current.open()}
              style={[styles.icon2box, {backgroundColor: 'rgba(0,0,0,0.2)'}]}>
              <GameIcon
                name="md-game-controller-outline"
                size={23}
                style={styles.giftIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon1box}>
              <MessageIcon
                name="message-text-outline"
                size={25}
                style={{color: white}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Gift.current.open()}
              style={[styles.icon2box, {backgroundColor: 'purple'}]}>
              <GiftIcon
                name="gift"
                size={25}
                style={[styles.giftIcon, {color: 'yellow'}]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <RbSheetComponent view={<GameSheet />} refUse={Game} close={true} />
        <RbSheetComponent view={<ShareSheet />} refUse={Share} close={true} />
        <RbSheetComponent
          view={<GiftSheet />}
          refUse={Gift}
          close={true}
          height={'40%'}
        />
        <RbSheetComponent
          view={<ViewerSheet />}
          refUse={Viewer}
          close={false}
          height={300}
        />
        <StarModal view={<ModalView />} ref={modalRef} />
        <StarModal view={<ModalView2 />} ref={modal2Ref} />
        <StarModal view={<ProfileView />} ref={ProfileRef} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
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
  profilebox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 30,
    marginHorizontal: 5,
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 2,
  },
  profile: {
    height: 35,
    width: 35,
    borderRadius: 25,
  },
  crossIcon: {
    color: 'white',
    right: 2,
  },
  flowbox: {
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
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
  img: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  Bg: {
    height: '100%',
    width: '100%',
  },
  Likebox: {
    flexDirection: 'row',
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
  commentcontainer: {
    marginTop: heightPercentageToDP(5),
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
    top: 1,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '45%',
    borderRadius: 25,
    marginLeft: 10,
    paddingHorizontal: 13,
    height: 40,
    color: 'white',
  },
  bottombox: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: primaryColor,
    paddingVertical: 15,
  },
  lefticonsbox: {
    flexDirection: 'row',
    width: '83%',
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
  icon1box: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  FlatListView: {
    paddingHorizontal: 15,
  },
  FlatListView1: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  rbIconbox1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rbIconbox2: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '95%',
    paddingBottom: 10,
    alignSelf: 'center',
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
  headingtxt1: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 15,
    borderRadius: 3,
  },
  headingtxt2: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    paddingHorizontal: 15,
    borderRadius: 3,
    marginBottom: 15,
  },
  IconView: {
    alignItems: 'center',
    paddingVertical: heightPercentageToDP(2),
    marginHorizontal: 3,
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
  hostBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: heightPercentageToDP(5),
    marginVertical: 14,
  },
  iconBg: {
    backgroundColor: '#303749',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DrawListStyleView: {
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'space-around',
    marginHorizontal: widthPercentageToDP(1),
  },
});
export default AudioCall;
