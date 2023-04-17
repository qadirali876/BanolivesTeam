import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  TextInput,
  Alert,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  headings,
  primaryColor,
  secondaryColor,
  white,
} from '../../utils/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Themes from './Themes';
import { ApiCallToken } from '../../Services/Apis';

export default function Store() {

  const userData = useSelector(state => state.auth.userData);

  const [buttons, setButtons] = useState([]);

  const [thme, setthme] = useState([]);
  const [isLoading, setisLoading] = useState(false)

  const [getData, setGetData] = useState([]);

  const [show, setShow] = useState(true);

  useEffect(() => {
    getStoreList()
  }, []);

  const getStoreList = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'store-List',
        verb: 'GET',
      });
      // console.log("user80", res)
      setButtons(res.data);
      setCases(res?.data?.[0]?.store_child_categorie)
      setShow(false)
    } catch (error) {
      console.log('error in Store Fun', error);
    }

  };


  const purchaseTheme = async (item) => {

    setisLoading(true);

    try {

      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: {
          beans: item.beans,
          month: 1,
          parent_store_category: item?.parent_category_id,
          child_store_category: item.id,
        },
        route: 'purchased_themes',
        verb: 'POST',
      });
      setisLoading(true);
      console.log("check data ", res)
      ToastAndroid.showWithGravityAndOffset(
        ""+res?.message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      )

    } catch (error) {
      console.log('ERROR IS Store Purchase ====>>>', error);
    }
    setisLoading(false);
  }




  const [Gift, setGift] = useState('Gift to a friend');
  const refRBSheetG = useRef();
  const [selectedItem, isSelectedItem] = useState(true);
  const [cases, setCases] = useState([]);
  const [themeCases, setThemeCases] = useState('Theme');



  const cases1 = cases

  const RenderView = props => {

    return (
      <>
        <View style={styles.card}>
          <ImageBackground source={props.item.src} resizeMode="cover">
            <TouchableOpacity>
              <Ionicons
                name="md-play-circle-outline"
                size={25}
                color="white"
                style={{ marginLeft: '85%', marginTop: 5 }}
              />
            </TouchableOpacity>
            <View>
              <View
                style={{
                  width: '80%',
                  height: 142,
                  alignSelf: 'center',
                }}></View>
              <Text style={styles.ctext}>{props.item.title}</Text>
              <Text style={styles.ctext}>{props.item.beans}</Text>
              <Image
                source={{ uri: props.item?.image }}
                style={{ width: '80%', height: heightPercentageToDP(15), alignSelf: 'center', position: 'absolute' }}
                resizeMode="contain"
                defaultSource={{ uri: 'https://picsum.photos/200' }}
              />
              <View style={{ height: '1%' }}></View>
            </View>

            <TouchableOpacity
              onPress={() => {
                setGetData(props.item);
                refRBSheetG.current.open()
              }}

              style={styles.cardbottom}>
              <Text style={styles.ctext}>Purchase</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <RBSheet
          ref={refRBSheetG}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
              height: 0,
            },
            container: {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: '#31384A',
              height: "35%"
            },
          }}>

          <View style={{ flex: 1, backgroundColor: '#31384A' }}>
            {Gift == 'Gift to a friend' ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 0.2,
                  borderColor: 'white',
                }}>
                <View style={{ flexDirection: 'row', bottom: 5 }}>
                  <Text style={{ color: 'white', fontSize: 12, left: 5 }}>
                    Account ID:
                  </Text>
                  {Gift == 'Gift to a friend'}
                  <Text style={{ color: 'white', fontSize: 12, left: 5 }}>
                    12345678990
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setGift('Sure');
                  }}
                  style={{
                    backgroundColor: '#E93227',
                    right: 5,
                    padding: 4,
                    borderRadius: 20,
                    bottom: '2%',
                  }}>
                  <Text style={{ fontSize: 11, color: 'white' }}>{Gift}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottomWidth: 0.2,
                  borderColor: 'white',
                }}>
                <View style={{ flexDirection: 'row', bottom: 5 }}>
                  <Text style={{ color: 'white', fontSize: 12, left: 5 }}>
                    Account ID:
                  </Text>

                  <TextInput
                    placeholder="Enter Id"
                    keyboardType={'numeric'}
                    placeholderTextColor="#b3b3b3"
                    style={{
                      borderWidth: 0.5,
                      padding: 0,
                      marginLeft: 15,
                      width: '50%',
                      bottom: 2,
                      height: 22,
                      paddingLeft: 5,
                      borderColor: '#E93227',
                      color: 'white',
                    }}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setGift('Gift to a friend');
                    alert('Gift Successfully send');
                  }}
                  style={{
                    backgroundColor: '#E93227',
                    right: 5,
                    padding: 4,
                    borderRadius: 20,
                    bottom: '2%',
                    width: '15%',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: 11, color: 'white' }}>{Gift}</Text>
                </TouchableOpacity>
              </View>
            )}

            <View
              style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
              <Text style={{ color: 'white', marginTop: 8, marginLeft: 7 }}>Confirmation</Text>
              <AntDesign
                name="questioncircleo"
                color={'white'}
                style={{ marginLeft: 7 }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',

                width: '100%',
                flexWrap: 'wrap',
              }}>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', margin: "2%" }}>
              <Text style={{ color: 'white', padding: 6, textAlign: 'center', fontSize: 15, fontWeight: "500" }}>You can obtain this item (valid for 30 day) by participating in the Sweet Love activity.</Text>
            </View>

            <View style={{ flexDirection: 'row', marginLeft: 15, marginTop: 5 }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Price:{' '}
              </Text>
              <Text style={{ color: '#E93227', fontWeight: 'bold' }}>
                {props.item.beans} beans
              </Text>

            </View>
            { }

            <TouchableOpacity
              style={{
                backgroundColor: '#E93227',
                padding: 10,
                marginHorizontal: 70,
                borderRadius: 20,
                alignItems: 'center',
                marginTop: 20,
              }}
              onPress={() =>
                purchaseTheme(getData)}
              disabled={isLoading}
            >
              {isLoading ? <ActivityIndicator size="small" color="white" /> :
                <Text style={{ color: 'white' }}>Active</Text>}
            </TouchableOpacity>
          </View>
        </RBSheet>
      </>
    );
  };


  const CheckDta = () => {
    const cases1 = cases.slice(0, 1)
    console.log('check cases ab0ut', cases1.length)
  }

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{ height: '100%', width: '100%' }}>
        <LinearGradient colors={['#4568DC', '#B06AB3']} style={styles.topview}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={30} color={white}></Ionicons>
          </TouchableOpacity>
          <Text style={{ ...headings.h3, color: 'white' }}>Store</Text>
        </LinearGradient>
        <View style={{ marginTop: '2%' }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item.id}
            data={buttons}
            renderItem={(item, index) => (
              <View>
                <TouchableOpacity
                  activeOpacity={0.3}
                  onPress={() => {
                    setCases(item?.item?.store_child_categorie);
                    setThemeCases(item?.item?.title)
                    setShow(false);
                  }}
                  style={{
                    backgroundColor: '#303749',
                    backgroundColor:
                      cases === item.item.title ? '#EA3126' : '#303749',
                    borderRadius: 5,
                    height: 35,
                    marginHorizontal: 6,
                    width: 90,
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: selectedItem === false ? '#fff' : '#AEAECE',
                      ...styles.text,
                    }}>
                    {item.item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View
          style={cases1.length === 1 ?
            { flex: 1, marginTop: 10, marginHorizontal: 10, justifyContent: 'center' } :
            { flex: 1, marginTop: 10, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}
        >



          {show ? (
            <ActivityIndicator />
          ) : cases === null ? <ActivityIndicator /> :
            cases.length === 0 ? <Text style={{ color: 'white' }}>No data</Text> : themeCases == 'Themes' ?
              <Themes themeData={cases} thme={thme} /> :
              <FlatList
                showsVerticalScrollIndicator={false}
                data={cases1}
                numColumns={2}
                renderItem={RenderView}
              />
          }
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColor,
  },
  topview: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#303749',
    paddingBottom: 10,
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
  },
  ctext: {
    fontSize: 14,
    alignSelf: 'center',
    color: 'white',
  },

  card: {
    width: '48%',
    height: 250,
    backgroundColor: '#323d54',
    margin: 4,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  luckycard: {
    width: widthPercentageToDP(45),
    height: heightPercentageToDP(20),
    justifyContent: 'space-around',
    borderColor: 'red',
    margin: 2,
  },
  framescard: {
    width: widthPercentageToDP(44),
    height: heightPercentageToDP(25),
    backgroundColor: '#323d54',
    marginLeft: '2%',
    marginBottom: '2%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardbottom: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#E93227',
    height: '15%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  verticleLine: {
    height: '60%',
    width: 1,
    backgroundColor: '#D9D9D9',
  },
  bottomview: {
    paddingVertical: '3%',
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthbtn: {
    color: 'white',
    color: 'white',
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: '#31384A',
    marginHorizontal: 12,
    marginVertical: 10,
    borderWidth: 1,
    alignSelf: 'center',
    borderColor: 'white',
  },
});
