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
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import Mic from 'react-native-vector-icons/MaterialCommunityIcons';
import Gift from 'react-native-vector-icons/MaterialCommunityIcons';
import User from 'react-native-vector-icons/FontAwesome5';
import Trophy from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import TopUsers from './components/TopUsers';
import TopTalentsWeeklyStar from './components/TopTalentsWeeklyStar';
import Combo from './components/Combo';
import { useSelector } from 'react-redux';
import { ApiCallToken } from '../../Services/Apis';

const tasks = [1, 2, 3, 4, 5, 6, 7, 8];

const RecordsMain = ({navigation}) => {

  const userData = useSelector(state => state.auth.userData);
  const [topUsersData, setTopUsersData] = useState([]);
  const [topHostData, setTopHostData] = useState([]);

  useEffect(() => {
    getTopUsersList()
    getTopHostsList()
  }, [])

  const getTopUsersList = async () => {
    try {
      const res = await ApiCallToken({
       params: userData.token,
       route: 'list/top-up/user',
       verb: 'GET',
     });
     console.log("user11", res)
     setTopUsersData(res.data)
   } catch (error) {
     console.log('Error Recordsmain screen gettopuser func ', error);
   }
  };

  const getTopHostsList = async () => {
    try {
      const res = await ApiCallToken({
       params: userData.token,
       route: 'list/top-up/host',
       verb: 'GET',
     });
    //  console.log("user12", res)
     setTopHostData(res.data)
   } catch (error) {
    console.log('Error Recordsmain screen getoptalent func ', error);
  }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#242A38'}}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <LinearGradient
          colors={['#8E0E00', '#8E0E00']}
          style={{
            backgroundColor: '#303749',
            height: 50,
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <LeftArrow
                  name="arrow-back-ios"
                  size={20}
                  style={{color: 'white', alignSelf: 'center'}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                }}>
                Records
              </Text>
            </View>
          </View>
        </LinearGradient>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('TopUsers');
          }}>
          <TopUsers />
        </TouchableOpacity> */}
        <LinearGradient
          colors={['#80060C', '#A51318', '#C1130E', '#FF0401']}
          style={{
            alignSelf: 'center',
            width: '93%',
            marginTop: 20,
            height: '26%',
            borderRadius: 7,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TopUsers', {
                id: '1',
                topUsers: topUsersData,
              });
            }}>
            <View style={{}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 10,
                }}>
                <TouchableOpacity>
                  <User
                    name="user-friends"
                    size={20}
                    style={{color: 'white', alignSelf: 'center'}}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  Top Users
                </Text>
              </View>
              <View
                style={{
                  height: '66%',
                  width: '75%',
                  alignSelf: 'center',
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginTop: 10,
                }}>
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={{ uri: topUsersData?.[1]?.image }}
                      resizeMode="contain"
                      style={{height: 55, width: 55, borderRadius: 100}}
                    />
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
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#FFFFFF',
                      textAlign: 'center',
                    }}>
                    2
                  </Text>
                </View>

                <View style={{bottom: 10}}>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={{ uri: topUsersData?.[0]?.image }}
                      resizeMode="contain"
                      style={{height: 64, width: 63, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame2.png')}
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
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#FFFFFF',
                      textAlign: 'center',
                    }}>
                    1
                  </Text>
                </View>
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={{ uri: topUsersData?.[2]?.image }}
                      resizeMode="contain"
                      style={{height: 56, width: 56, borderRadius: 100}}
                    />
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
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#FFFFFF',
                      textAlign: 'center',
                    }}>
                    3
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            height: '23%',
          }}>
          <LinearGradient
            colors={['#093418', '#0E4724', '#16733C', '#26A757']}
            style={{
              width: '48%',
              marginTop: 20,
              height: '90%',
              borderRadius: 7,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('TopTalent', {
                topHost: topHostData,
              })}>
              <View style={{alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity>
                    <Mic
                      name="microphone-variant"
                      size={22}
                      style={{color: 'white', alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Top Talents
                  </Text>
                </View>
                <View
                  style={{
                    height: '70%',
                    alignSelf: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    marginTop: 10,
                    width: '100%',
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                     source={{ uri: topHostData?.[1]?.image }}
                      resizeMode="contain"
                      style={{height: 46, width: 46, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame2.png')}
                      resizeMode="contain"
                      style={{
                        height: 64,
                        width: 64,
                        position: 'absolute',
                        bottom: 0,
                        right: -9,
                      }}
                    />
                  </View>

                  <View style={{alignSelf: 'center'}}>
                    <Image
                     source={{ uri: topHostData?.[0]?.image }}
                      resizeMode="contain"
                      style={{height: 49, width: 49, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame1.png')}
                      resizeMode="contain"
                      style={{
                        height: 63,
                        width: 63,
                        position: 'absolute',
                        bottom: 0,
                        right: -8,
                      }}
                    />
                  </View>

                  <View style={{alignSelf: 'center'}}>
                    <Image
                     source={{ uri: topHostData?.[2]?.image }}
                      resizeMode="contain"
                      style={{height: 47, width: 47, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame3.png')}
                      resizeMode="contain"
                      style={{
                        height: 64,
                        width: 64,
                        position: 'absolute',
                        bottom: 0,
                        right: -9,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={['#331346', '#431D5A', '#622487', '#8C35C2']}
            style={{
              width: '48%',
              marginTop: 20,
              height: '90%',
              borderRadius: 7,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('WeeklyStar')}>
              <View style={{alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity>
                    <Mic
                      name="gift"
                      size={22}
                      style={{color: 'white', alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Weekly Star
                  </Text>
                </View>
                <View
                  style={{
                    height: '70%',
                    alignSelf: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    marginTop: 10,
                    width: '100%',
                  }}>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../../assets/images/records/profile.jpg')}
                      resizeMode="contain"
                      style={{height: 46, width: 46, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame2.png')}
                      resizeMode="contain"
                      style={{
                        height: 64,
                        width: 64,
                        position: 'absolute',
                        bottom: 0,
                        right: -9,
                      }}
                    />
                  </View>

                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../../assets/images/records/profile.jpg')}
                      resizeMode="contain"
                      style={{height: 49, width: 49, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame1.png')}
                      resizeMode="contain"
                      style={{
                        height: 63,
                        width: 63,
                        position: 'absolute',
                        bottom: 0,
                        right: -8,
                      }}
                    />
                  </View>

                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../../assets/images/records/profile.jpg')}
                      resizeMode="contain"
                      style={{height: 47, width: 47, borderRadius: 100}}
                    />
                    <Image
                      source={require('../../assets/images/records/frame3.png')}
                      resizeMode="contain"
                      style={{
                        height: 64,
                        width: 64,
                        position: 'absolute',
                        bottom: 0,
                        right: -9,
                      }}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <LinearGradient
          colors={['#F06B00', '#E49608', '#E2AA03', '#D4B204']}
          style={{
            alignSelf: 'center',
            width: '93%',
            height: '22%',
            borderRadius: 7,
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Combo')}>
            <View style={{}}>
              <View style={{alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                  }}>
                  <TouchableOpacity>
                    <Trophy
                      name="trophy"
                      size={20}
                      style={{color: 'white', alignSelf: 'center'}}
                    />
                  </TouchableOpacity>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Combo
                  </Text>
                </View>
              </View>

              <View
                style={{
                  height: '60%',
                  width: '75%',
                  alignSelf: 'center',
                  justifyContent: 'space-evenly',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../../assets/images/records/profile.jpg')}
                      resizeMode="contain"
                      style={{height: 55, width: 55, borderRadius: 100}}
                    />
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
                  <View
                    style={{
                      backgroundColor: '#ED2D21',
                      borderRadius: 20,
                      paddingVertical: 2,
                      bottom: 3,
                    }}>
                    <Text
                      style={{
                        fontSize: 9,
                        color: '#FFFFFF',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      LEVEL 12
                    </Text>
                  </View>
                </View>

                <View style={{alignSelf: 'center'}}>
                  <Text style={{fontSize: 15, color: '#FFFFFF', bottom: 5}}>
                    Send To
                  </Text>
                </View>
                <View>
                  <View style={{alignSelf: 'center'}}>
                    <Image
                      source={require('../../assets/images/records/profile.jpg')}
                      resizeMode="contain"
                      style={{height: 56, width: 56, borderRadius: 100}}
                    />
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
                  <View
                    style={{
                      backgroundColor: '#ED2D21',
                      borderRadius: 20,
                      paddingVertical: 2,
                      bottom: 3,
                    }}>
                    <Text
                      style={{
                        fontSize: 9,
                        color: '#FFFFFF',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}>
                      LEVEL 06
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default RecordsMain;

const styles = StyleSheet.create({});
