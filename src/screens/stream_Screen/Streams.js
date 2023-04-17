import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
//----------Search bar----------//
import Search_Bar from '../reuseable_Component/Search_Bar';
import Stream_Popular from '../stream_Screen/Stream_Popular';
import Stream_Fresher from '../stream_Screen/Stream_Fresher';
import Stream_Event from '../stream_Screen/Stream_Events';
import Stream_Events from '../stream_Screen/Stream_Events';
import Streamitem from '../reuseable_Component/Streamitem';
import HomeModal from '../reuseable_Component/HomeModal';
import ComingSoon from '../reuseable_Component/ComingSoon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NewProfile from '../home_screens/NewProfile';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Stream_Party_Room from './Stream_Party_Room';
import Stream_Private_Room from './Stream_Private_Room';
import Stream_PK from './Stream_PK_Videos.js';
import Spotlight from './Spotlight';
import BanoReelsMain from '../banoReels/BanoReelsMain';
import {render} from 'react-dom';
import Stream_Reels from './Stream_Reels';
import {useSelector} from 'react-redux';
const CUSTOMERREVIEWS = [
  {
    id: '',
    name: 'Freshers',
    navi: 'Stream_Popular',
  },
  {
    id: '',
    name: 'Popular',
  },
  {
    id: '',
    name: 'Party Room',
  },
  {
    id: '',

    name: 'Spotlight',
  },
  {
    id: '',

    name: 'Bano Reels',
  },

  {
    id: '',
    name: 'Private Room',
  },
  {
    id: '',
    name: 'PK Videos',
  },
];

const data = [
  {
    name: 'Records',
    image: require('../../assets/images/crown.png'),
    navi: 'Record',
  },
  {
    name: 'PK',
    image: require('../../assets/images/crown.png'),
    navi: 'Record',
  },
  {
    name: 'Lucky Draw',
    image: require('../../assets/images/crown.png'),
    navi: 'Record',
  },
  {
    name: 'Bano Reels',
    image: require('../../assets/images/crown.png'),
    navi: 'Record',
  },
];
const Data2 = [
  {
    imgbg: require('../../assets/images/recordsbg.png'),
    img: require('../../assets/images/streammike.png'),
    title: 'Records',
  },
  {
    imgbg: require('../../assets/images/recordsbg.png'),
    img: require('../../assets/images/streammike.png'),
    title: 'Records',
  },
];
const Streams = ({navigation, props}) => {
  const [selectedItem, isSelectedItem] = useState('Freshers');
  const [focused, setFocused] = useState(true);
  const [sec, setSec] = useState('');
  const [cases, setCases] = useState('Freshers');
  const [isModalVisible, setModalVisible] = useState(false);
  const modalRef = React.createRef();
  const userData = useSelector(state => state.auth.userData);

  const buttons = [
    {
      value: 1,
      name: 'Freshers',
    },
    // {
    //   value: 2,
    //   name: 'Popular',
    // },
    {
      value: 3,
      name: 'PK Videos',
    },
    {
      value: 4,
      name: 'Spotlight',
    },
    {
      value: 5,
      name: 'Events',
    },
    {
      value: 6,
      name: 'Bano Reels',
    },
  ];

  const CasesFunction = props => {
    if (cases == 'Freshers') {
      return <Stream_Fresher />;
    } else if (cases == 'PK Videos') {
      return <Stream_PK />;
    } else if (cases == 'Spotlight') {
      return <Stream_Fresher />;
    } else if (cases == 'Party Room') {
      return <Stream_Party_Room />;
    } else if (cases == 'Private Room') {
      return <Stream_Private_Room />;
    } else if (cases == 'Popular') {
      return <Stream_Fresher />;
    } else if (cases == 'Bano Reels') {
      return <Stream_Reels />;
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <StatusBar backgroundColor="#242A38" />

        <Search_Bar />
        {/* <View>
        <ImageBackground
          source={require('../../assets/images/searchrectangle.png')}
          style={styles.imgbgitem}>
          <View style={styles.row}>
            <View>
              <Image
                source={require('../../assets/images/streammike.png')}
                style={styles.mike}
              />
            </View>
            <Text>Records</Text>
          </View>
        </ImageBackground>
      </View> */}
        <View
          style={{
            justifyContent: 'space-evenly',
            width: '100%',
            flexDirection: 'row',
            bottom: '1.5%',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RecordsMain');
            }}>
            <Streamitem
              title={'Records'}
              iconbgclr={'#D123FA'}
              img={require('../../assets/images/streammike.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Pk');
            }}>
            <Streamitem
              title={'PK'}
              iconbgclr={'#F5554B'}
              img={require('../../assets/images/streampk.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('LuckyDraw');
            }}>
            <Streamitem
              title={'Lucky Draw'}
              iconbgclr={'#1E9CCE'}
              img={require('../../assets/images/streamluckydraw.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('EventSchedule')}>
            <Streamitem
              title={'Event'}
              iconbgclr={'#F5554B'}
              img={require('../../assets/images/streamevent.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '600',
              left: 20,
              bottom: '20%',
            }}>
            Streams
          </Text>
        </View>

        <View>
          <FlatList
            data={CUSTOMERREVIEWS}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={({item, index, separators}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                {/* {buttons.map(item => ( */}
                <TouchableOpacity
                  onPress={() => {
                    isSelectedItem(item.name);
                    setCases(item.name);
                  }}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    backgroundColor:
                      selectedItem === item.name ? '#c471ed' : '#181A2D',
                    padding: 5,
                    borderRadius: 15,
                    paddingHorizontal: 15,
                    marginHorizontal: 5,
                  }}>
                  <Text style={{color: 'white', fontSize: 12}}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
                {/* ))} */}
              </View>
            )}
          />
        </View>

        <View style={{flex: 1}}>
          <CasesFunction />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Streams;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
  },
  row: {
    flexDirection: 'row',
  },
  mike: {
    height: 10,
    width: 10,
  },
  imgbgitem: {
    height: 30,
    alignItems: 'center',
    backgroundColor: 'red',
    marginHorizontal: '30%',
  },
  modalbox1: {
    flexDirection: 'row',
    backgroundColor: '#27B0FF',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modaltxt: {
    fontSize: 18,

    color: 'white',
  },
  createoptiontxt: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  modalmaincontainer: {
    backgroundColor: '#303749',
    height: hp(45),
    borderRadius: 10,
    alignItems: 'center',
  },
  modalbox2: {
    flexDirection: 'row',
    backgroundColor: '#1AB846',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalbox3: {
    flexDirection: 'row',
    backgroundColor: '#EB352A',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalbox4: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    width: wp(65),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    marginVertical: hp(1),
  },
  modalchildbox1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '67%',
    justifyContent: 'space-between',
  },
  modalchildbox2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
    justifyContent: 'space-between',
  },
  modalchildbox3: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
    justifyContent: 'space-between',

    marginRight: wp(9),
  },
  modalchildbox4: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '47%',
    justifyContent: 'space-between',
    marginRight: wp(8),
  },
});
