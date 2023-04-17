import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Modal,
  FlatList,
  ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import StarModal from '../reuseable_Component/StarModal';
import ProfileModalStyles from '../../screens/reuseable_Component/ProfileModalStyle'
import { ApiCallToken } from '../../Services/Apis';

const tasks = [
  {
    image: require('../../assets/images/records/profile.jpg'),
    level: '10',
    name: 'MalikBarood3Patti',
  },
  {
    image: require('../../assets/images/records/profile.jpg'),
    level: '10',
    name: 'jamesOlivia326',
  },
  {
    image: require('../../assets/images/records/profile.jpg'),
    level: '05',
    name: 'MalikBarood3Patti',
  },
  {
    image: require('../../assets/images/records/profile.jpg'),
    level: '18',
    name: 'MalikBarood3Patti',
  },
  {
    image: require('../../assets/images/records/profile.jpg'),
    level: '11',
    name: 'jamesOlivia326',
  },
];



const TopUsersView = (props) => {
  // console.log("porpssss", props.route.params.topUsers)
  const [topUsersData, setTopUsersData] = useState([]);
  const [daily, setDaily] = useState(true);
  const [sevenDays, setSevenDays] = useState(false);
  const [thirtyDays, setThirtyDaily] = useState(false);
  const [total, setTotal] = useState(false);
  const userData = useSelector(state => state.auth.userData);
  const modalRef2 = React.createRef();
  const modalRef = React.createRef();
  const modalRef3 = React.createRef();
  const modalRef4 = React.createRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);





  useEffect(() => {
    getTopUsersList()
  }, [])

  const getTopUsersList = async () => {
    setIsLoading(true);

    try {
       const res = await ApiCallToken({
        params: userData.token,
        route: 'list/top-up/user',
        verb: 'GET',
      });
    //  console.log("user11", res)
      setTopUsersData(res.data)
    } catch (error) {
      console.log('ERROR IS ====>>>', error);
    }
    setIsLoading(false);
 
  };

  const renderView = ({ item }) => {
    const modalRef4 = React.createRef();
    return (
      <View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
            <View
              style={{
                width: '30%',
                height: 70,
                paddingVertical: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity onPress={() => modalRef4.current.toggleModal()} >

                {
                  item.image == null ? <Image
                    source={require('../../assets/images/img3.png')}
                    resizeMode="contain"
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#E92F24',
                    }}
                  /> : <Image
                    source={{ uri: item?.image }}
                    resizeMode="contain"
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 100,
                      borderWidth: 1,
                      borderColor: '#E92F24',
                    }}
                  />
                }
              </TouchableOpacity>
            </View>
            <View style={{ width: '70%' }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  marginLeft: 10,
                  width: '100%',
                  fontSize: 16,
                }}>
                {item.nick_name ?? item.full_name}
              </Text>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 6,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  backgroundColor: '#E92F24',
                  width: '30%',
                  textAlign: 'center',
                  borderRadius: 20,
                  marginTop: 5,
                  paddingVertical: 3,
                }}>
                LEVEL {item?.sender_level}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ justifyContent: 'center', width: '15%' }}>
            <View
              style={{
                paddingVertical: 2,
                borderRadius: 15,
                backgroundColor: '#136936',
                alignItems: 'center',
              }}>
              <LeftArrow
                name="add"
                size={20}
                style={{ color: 'white', alignSelf: 'center' }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#303749',
            marginVertical: 10,
          }}
        />
        <StarModal view={<ProfileModalStyles data={item} onPressCros={() => modalRef4?.current?.toggleModal()}
        />} ref={modalRef4}
        />
      </View>
    );
  };

  const dailyBtn = () => {
    // setDaily(true);
    // setSevenDays(false);
    // setThirtyDaily(false);
    // setTotal(false);
  };

  const sevenBtn = () => {
    // setDaily(false);
    // setSevenDays(true);
    // setThirtyDaily(false);
    // setTotal(false);
  };

  const thirtyBtn = () => {
    // setDaily(false);
    // setSevenDays(false);
    // setThirtyDaily(true);
    // setTotal(false);
  };

  const totalBtn = () => {
    // setDaily(false);
    // setSevenDays(false);
    // setThirtyDaily(false);
    // setTotal(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#242A38' }}>
      <View style={{ backgroundColor: '#9C0000', height: 390, width: '100%' }}>
        <ImageBackground
          style={{ backgroundColor: '#9C0000', height: 390, width: '100%' }}
          source={require('../../assets/images/records/numbersGroup.png')}
        >
          <View
            style={{
              backgroundColor: '#9C0000',
              height: 50,
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 15,
                backgroundColor: '#9C0000',
                height: '90%'
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <LeftArrow
                    name="arrow-back-ios"
                    size={22}
                    style={{ color: 'white', alignSelf: 'center' }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Top Users
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: '#BB15',
              flexDirection: 'row',
              alignSelf: 'center',
              borderRadius: 20,
              marginTop: 30,
              width: '90%',
              justifyContent: 'space-around'
            }}>
            <TouchableOpacity
              onPress={() => dailyBtn()}
              style={{
                backgroundColor: daily ? '#FFFFFF' : '#BB151D',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: daily ? '#BB151D' : '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Daily
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => sevenBtn()}
              style={{
                backgroundColor: sevenDays ? '#FFFFFF' : '#BB151D',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: sevenDays ? '#BB151D' : '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  7 Days
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => thirtyBtn()}
              style={{
                backgroundColor: thirtyDays ? '#FFFFFF' : '#BB151D',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: thirtyDays ? '#BB151D' : '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  30 Days
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => totalBtn()}
              style={{
                backgroundColor: total ? '#FFFFFF' : '#BB151D',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: total ? '#BB151D' : '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Total
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '39%',
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginTop: 10,

            }}>

            <TouchableOpacity style={{ padding: 10, top: 10, }} onPress={() => modalRef2.current.toggleModal()} >
              <Text
                style={{
                  color: '#FFFFFFaa',
                  position: 'absolute',
                  right: 0,
                  fontWeight: 'bold',
                }}>
                02
              </Text>
              <View style={{ alignSelf: 'center', }}>
                {
                  topUsersData?.[1]?.image == null ?
                    <Image

                      source={require('../../assets/images/img3.png')}
                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    /> :
                    <Image
                      source={{ uri: topUsersData?.[1]?.image }}
                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    />

                }

                <Image
                  source={require('../../assets/images/records/frame2.png')}
                  resizeMode="contain"
                  style={{
                    height: 76,
                    width: 76,
                    position: 'absolute',
                    bottom: 0,
                    right: -10,
                  }}
                />
              </View>
            </TouchableOpacity>
            <View style={{ bottom: 28, padding: 8 }}>
              <Text
                style={{
                  color: '#FFFFFFaa',
                  position: 'absolute',
                  right: 0,
                  fontWeight: 'bold',
                }}>
                01
              </Text>

              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => modalRef.current.toggleModal()} >

                {
                  topUsersData?.[0]?.image == null ?
                    <Image

                      source={require('../../assets/images/img3.png')}
                      resizeMode="contain"
                      style={{ height: 68, width: 68, borderRadius: 100 }}
                    /> : <Image
                      source={{ uri: topUsersData?.[0]?.image }}
                      resizeMode="contain"
                      style={{ height: 68, width: 68, borderRadius: 100 }}
                    />

                }

                <Image
                  source={require('../../assets/images/records/frame1.png')}
                  resizeMode="contain"
                  style={{
                    height: 87,
                    width: 87,
                    position: 'absolute',
                    bottom: 0,
                    right: -10,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10, top: 10 }}>
              <Text
                style={{
                  color: '#FFFFFFaa',
                  position: 'absolute',
                  right: 0,
                  fontWeight: 'bold',
                }}>
                03
              </Text>
              <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => modalRef3.current.toggleModal()}>
                {
                  topUsersData?.[2]?.image == null ?
                    <Image

                      source={require('../../assets/images/img3.png')}
                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    /> :
                    <Image
                      source={{ uri: topUsersData?.[2]?.image }}
                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    />

                }

                <Image
                  source={require('../../assets/images/records/frame3.png')}
                  resizeMode="contain"
                  style={{
                    height: 76,
                    width: 76,
                    position: 'absolute',
                    bottom: 0,
                    right: -10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: '30%',
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              marginTop: 10,

            }}>
            <View style={{
              height: '75%', width: '27%', justifyContent: 'center',
              alignItems: 'center', marginTop: 20, left: 10
            }}>
              <Text
                style={{ color: '#ffffff', fontSize: 17, fontWeight: 'bold', }}>

                {topUsersData?.[1]?.nick_name ?? topUsersData?.[1]?.full_name}
              </Text>
              <View
                style={{
                  backgroundColor: '#FE7816',
                  borderRadius: 20,
                  paddingVertical: 4,
                  bottom: 3,
                  width: '50%',
                  alignSelf: 'center',
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 9,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Level {topUsersData?.[1]?.sender_level}
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 60,
                    backgroundColor: 'white',
                    borderRadius: 10
                  }}>
                  <LeftArrow
                    name="add"
                    size={20}
                    style={{ color: '#ED2D21', alignSelf: 'center', }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
              height: '100%', width: '24%',
              justifyContent: 'center', alignItems: 'center', bottom: 10, right: 5
            }}>
              <Text
                style={{ color: '#ffffff', fontSize: 20, fontWeight: 'bold', }}>

                {topUsersData?.[0]?.full_name ?? topUsersData?.[0]?.nick_name}
              </Text>
              <View
                style={{
                  backgroundColor: '#FE7816',
                  borderRadius: 20,
                  paddingVertical: 4,
                  bottom: 3,
                  width: '60%',
                  alignSelf: 'center',
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Level {topUsersData?.[0]?.sender_level}
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#FFFFFF',
                    height: 20,
                    width: 60,
                    backgroundColor: 'white',
                    borderRadius: 10
                  }}>
                  <LeftArrow
                    name="add"
                    size={20}
                    style={{ color: '#ED2D21', alignSelf: 'center' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{
              height: '75%', width: '25%', justifyContent: 'center',
              alignItems: 'center', marginTop: 20, right: 17
            }}>
              <Text
                style={{ color: '#ffffff', fontSize: 17, fontWeight: 'bold', }}>

                {topUsersData?.[2]?.full_name ?? topUsersData?.[2]?.nick_name}
              </Text>
              <View
                style={{
                  backgroundColor: '#FE7816',
                  borderRadius: 20,
                  paddingVertical: 4,
                  bottom: 3,
                  width: '55%',
                  alignSelf: 'center',
                  marginVertical: 8,
                }}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Level {topUsersData?.[2]?.sender_level}
                </Text>
              </View>
              <TouchableOpacity>
                <View
                  style={{
                    height: 20,
                    width: 60,
                    backgroundColor: 'white',
                    borderRadius: 10
                  }}>
                  <LeftArrow
                    name="add"
                    size={20}
                    style={{ color: '#ED2D21', alignSelf: 'center' }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      ) :
        topUsersData &&
        <View style={{ flex: 1, marginTop: 25 }}>
          <FlatList data={topUsersData}
            renderItem={renderView}
          />

        </View>



      }
      <StarModal view={<ProfileModalStyles
        data={topUsersData?.[0]}
        onPressCros={() => modalRef?.current?.toggleModal()}

      />} ref={modalRef}

      />
      <StarModal view={<ProfileModalStyles
        data={topUsersData?.[1]}
        onPressCros={() => modalRef2?.current?.toggleModal()}

      />} ref={modalRef2}
      />
      <StarModal view={<ProfileModalStyles
        data={topUsersData?.[2]}
        onPressCros={() => modalRef3?.current?.toggleModal()}

      />} ref={modalRef3}
      />

    </View>
  );
};

export default TopUsersView;

const styles = StyleSheet.create({});
