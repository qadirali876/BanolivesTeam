import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,

} from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import {
  headings,
  primaryColor,
  white,
} from '../../utils/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import { ApiCallToken, ApiUpdateUserData } from '../../Services/Apis';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { color } from 'react-native-reanimated';
import { activeStoreData } from '../../Redux/Actions';
export default function MyBagMain() {
  const userData = useSelector(state => state.auth.userData);
  const [bagData, setBagData] = useState([]);
  const [activeId, setIsActiveId] = useState(true);
  const [postData, setPostData] = useState([])

  useEffect(() => {
    getMyBagStoreData()
    // postCountries()
  }, [activeId]);


  const UpdateUserData = async () => {
    try {
      const res = await ApiUpdateUserData({
        params: userData.token,
        paramsBody: userData.user.id,
        route: 'user/updated-data',
        verb: 'POST',
      });

      // console.log('updaetd data', res?.active_store)
      dispatch(activeStoreData(res?.active_store))
    } catch (e) {
      console.log('error updateUserData func, home screen ', e.toString());
    }
  };

  const getMyBagStoreData = async () => {

    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'my-bag-store',
        verb: 'GET',
      });
      //  console.log('here is the respone for my bag', res);
      setBagData(res?.data)
    } catch (e) {
      console.log('saga my-bag-store error -- ', e.toString());
    }
  };


  const makeStatusActive = async (id, parentId) => {
    console.log("id, parentId", id, parentId)
    const paramsBody = {
      child_id: id,
      parent_id: parentId,
    }

    try {
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: paramsBody,
        route: 'my-bag-store-status',
        verb: 'POST',
      });
      setPostData(res)
      setIsActiveId(id)

      console.log('Response my-bag-store-status ', res)
    } catch (error) {
      console.log('Error in makeStatusActive, mybagmain screen', error);
    }
  };

  const RenderView = ({ item }) => {
    return (

      <View
        style={{
          backgroundColor: '#303749',
          width: '40%',
          alignItems: 'center',
          borderRadius: 10,
          marginLeft: "5%",
          marginVertical: "3%"
        }}>
        <View
          style={{
            backgroundColor: '#303749',
            height: '35%',
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            position: 'absolute',
            zIndex: 2,
            width: '100%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}></View>

        {item?.parent_title === 'Theme' ?
        <View>
          <Image
            source={{ uri: item?.json_image }}
            resizeMode="contain"
            style={{height: 110, width: 110, zIndex: 2, marginTop: 10, marginBottom: 10}}
          />

        </View>
          :
          <AnimatedLottieView
            autoPlay
            style={{ height: 110, width: 110, zIndex: 2, marginTop: 10, marginBottom: 10 }}
            source={{ uri: item?.json_image }}
            onLoad={() => {console.log("loading")}}
          />
        }

        <TouchableOpacity onPress={() => console.log("item", item)}>

          <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' }}>
            {item?.child_title}
          </Text>
        </TouchableOpacity>


        <LinearGradient
          colors={['#EB3328', '#EC3A2F', '#F7564D']}
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            borderRadius: 15,
            marginTop: 10,
            marginBottom: 10
          }}>
          <TouchableOpacity
            onPress={() => makeStatusActive(item?.child_id, item?.parent_id)}>
            <Text style={{ color: "white", fontSize: 14, fontWeight: "600" }}>{item?.status}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  };
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
          <Text style={{ ...headings.h3, color: 'white' }}>My Bag</Text>
        </LinearGradient>
        <ScrollView>
          <View
            style={{
              marginTop: 15,

              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 30,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}>
            <Image
              source={require('../../assets/images/myBag/bag.png')}
              resizeMode="contain"
              style={{ height: 120, width: 120 }}
            />
          </View>
          <View style={styles.cardview}>
            <FlatList
              showsVerticalScrollIndicator={false}

              data={bagData}
              numColumns={2}
              renderItem={RenderView}
              style={{ marginBottom: 30 }}
            />
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={bagData}
            
              renderItem={({item}) => {
                return(
                  <View>
                    <Text
                      style={{
                        color: '#ffff',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                        {item?.store_title}
                        </Text>
                    
                  {  item?.store_child_categories?.[0] && 
               
                    }
                  </View>
                )
              }}
            /> */}


          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <View style={{ width: '45%' }}>
              <Image
                source={require('../../assets/images/myBag/vip.png')}
                resizeMode="contain"
                style={{ height: 120, width: 120 }}
              />
            </View>

            <View
              style={{
                width: '45%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>
                VIP
              </Text>
              <Text style={{ fontSize: 13, color: '#AEAECE' }}>
                Expiry:3 day(s)
              </Text>
              <View
                style={{
                  backgroundColor: '#303749',
                  paddingHorizontal: 15,
                  paddingVertical: 5,
                  borderRadius: 25,
                  marginTop: 10,
                }}>
                <TouchableOpacity>
                  <Text style={{ color: '#FFFFFF' }}>Renew</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 25, alignItems: 'center', marginBottom: "5%" }} >
            <TouchableOpacity

              style={{
                backgroundColor: '#E92F24',
                width: '35%',
                alignItems: 'center',
                paddingVertical: 8,
                borderRadius: 25,
              }} onPress={() => navigation.navigate('Store')}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                VISIT STORE
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* <TouchableOpacity onPress={() => postCountries()>
              <Text style={{ color: "white" }}>jijd</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
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
  cardview: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
});
