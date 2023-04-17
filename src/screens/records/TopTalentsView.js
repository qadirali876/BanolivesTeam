import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import StarModal from '../reuseable_Component/StarModal';
import ProfileModalStyles from '../../screens/reuseable_Component/ProfileModalStyle'
import { ApiCallToken } from '../../Services/Apis';

const TopTalentsView = (props) => {
  const modalRef2 = React.createRef();
//console.log("top23", props?.route?.params?.topHost)
  const modalRef = React.createRef();
  const modalRef3 = React.createRef();
  const [topHostData, setTopHostData] = useState([]);
  const [daily, setDaily] = useState(true);
  const [sevenDays, setSevenDays] = useState(false);
  const [thirtyDays, setThirtyDaily] = useState(false);
  const [total, setTotal] = useState(false);
  const userData = useSelector(state => state.auth.userData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTopHostsList()
  }, [])

  const getTopHostsList = async () => {
    setIsLoading(true);

    try {
      const res = await ApiCallToken({
       params: userData.token,
       route: 'list/top-up/host',
       verb: 'GET',
     });
    // console.log("user12", res)
     setTopHostData(res.data)
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
                  item?.image == null ?
                    <Image
                      source={require('../../assets/images/img3.png')}
                      resizeMode="contain"
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        borderWidth: 1,
                        borderColor: '#E92F24',
                      }}
                    /> :
                    <Image
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
                LEVEL {item?.reciever_level}
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
        <StarModal view={<ProfileModalStyles

          data={item}
          onPressCros={() => modalRef4?.current?.toggleModal()}

        />} ref={modalRef4}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#242A38' }}>
      <View style={{ backgroundColor: '#00391D', height: 390, width: '100%' }}>
        <ImageBackground
          style={{ backgroundColor: '#00391D', height: 400, width: '100%' }}
          source={require('../../assets/images/records/numbersGroup.png')}>
          <View
            style={{
              backgroundColor: '#00391D',
              height: 50,
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: 15,
                backgroundColor: '#00391D',
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <LeftArrow
                    name="arrow-back-ios"
                    size={20}
                    style={{ color: 'white', alignSelf: 'center' }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                  }}>
                  Top Talents
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#00593B',
              flexDirection: 'row',
              alignSelf: 'center',
              borderRadius: 20,
              alignItems: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => dailyBtn()}
              style={{
                backgroundColor: daily ? '#FFFFFF' : '#00593B',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: daily ? '#00593B' : '#FFFFFF',
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
                backgroundColor: sevenDays ? '#FFFFFF' : '#00593B',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: sevenDays ? '#00593B' : '#FFFFFF',
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
                backgroundColor: thirtyDays ? '#FFFFFF' : '#00593B',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: thirtyDays ? '#00593B' : '#FFFFFF',
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
                backgroundColor: total ? '#FFFFFF' : '#00593B',
                borderRadius: 20,
                paddingVertical: 8,
                width: '20%',
                alignSelf: 'center',
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 9,
                    color: total ? '#00593B' : '#FFFFFF',
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
              height: '40%',
              width: '100%',
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginTop: 15,

            }}>
            <TouchableOpacity style={{ padding: 10, top: 8 }} onPress={() => modalRef2.current.toggleModal()}>
              <Text
                style={{
                  color: '#FFFFFFaa',
                  position: 'absolute',
                  right: 0,
                  fontWeight: 'bold',
                }}>
                02
              </Text>
              <View style={{ alignSelf: 'center' }}>
                {
                  topHostData?.[1]?.image == null ?
                    <Image

                      source={require('../../assets/images/img3.png')}

                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    /> :
                    <Image
                      source={{ uri: topHostData?.[1]?.image }}
                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    />

                }

                <TouchableOpacity onPress={() => modalRef2.current.toggleModal()}>
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
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ bottom: 28, padding: 8 }} onPress={() => modalRef.current.toggleModal()}>
              {/*  */}
              <Text
                style={{
                  color: '#FFFFFFaa',
                  position: 'absolute',
                  right: 0,
                  fontWeight: 'bold',
                }}>
                01
              </Text>
              <View style={{ alignSelf: 'center' }}>
                {
                  topHostData?.[0]?.image == null ?
                    <Image
                      source={require('../../assets/images/img3.png')}
                      resizeMode="contain"
                      style={{ height: 68, width: 68, borderRadius: 100 }}
                    /> :
                    <Image
                      source={{ uri: topHostData?.[0]?.image }}
                      resizeMode="contain"
                      style={{ height: 68, width: 68, borderRadius: 100 }}
                    />
                }



                <View>
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
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10, top: 8 }} onPress={() => modalRef3.current.toggleModal()}>
              <Text
                style={{
                  color: '#FFFFFFaa',
                  position: 'absolute',
                  right: 0,
                  fontWeight: 'bold',
                }}>
                03
              </Text>
              <View style={{ alignSelf: 'center' }}>
                {
                  topHostData?.[2]?.image == null ?
                    <Image
                      source={require('../../assets/images/img3.png')}
                      resizeMode="contain"
                      style={{ height: 55, width: 55, borderRadius: 100 }}
                    /> :
                    <Image
                      source={{ uri: topHostData?.[2]?.image }}
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
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '30%',
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <View style={{
              top: 15, height: '90%', width: '27%', justifyContent: 'center',
              alignItems: 'center', left: 15
            }}>
              <Text
                style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold', }}>
                {topHostData?.[1]?.full_name ?? topHostData?.[1]?.nick_name}
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
                    fontSize: 9,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>

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
            <View style={{
              height: '100%', width: '27%', justifyContent: 'center',
              alignItems: 'center', bottom: 15
            }}>
              <Text
                style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold', }}>
                {topHostData?.[0]?.full_name ?? topHostData?.[0]?.nick_name}
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
                    fontSize: 9,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  LEVEL {topHostData?.[0]?.reciever_level}
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
            <View style={{
              top: 15, height: '90%', width: '27%', justifyContent: 'center',
              alignItems: 'center', right: 15
            }}>
              <Text
                style={{ color: '#ffffff', fontSize: 15, fontWeight: 'bold', }}>
                {topHostData?.[2]?.full_name.substring(0, 6) ?? topHostData?.[2]?.nick_name.substring(0, 6)}
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
                    fontSize: 9,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  LEVEL {topHostData?.[2]?.reciever_level}
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
       <View style={{ flex: 1, marginTop: 25 }}>
        <FlatList data={topHostData} renderItem={renderView} />
      </View>}

      <StarModal view={<ProfileModalStyles
        data={topHostData?.[1]}
        onPressCros={() => modalRef2?.current?.toggleModal()}

      />} ref={modalRef2}
      />
      <StarModal view={<ProfileModalStyles
        data={topHostData?.[0]}
        onPressCros={() => modalRef?.current?.toggleModal()}

      />} ref={modalRef}
      />
      <StarModal view={<ProfileModalStyles
        data={topHostData?.[2]}
        onPressCros={() => modalRef3?.current?.toggleModal()}

      />} ref={modalRef3}
      />


    </View>
  );
};

export default TopTalentsView;

const styles = StyleSheet.create({});
