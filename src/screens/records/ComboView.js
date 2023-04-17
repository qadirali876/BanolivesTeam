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
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Trophy from 'react-native-vector-icons/Entypo';

const tasks = [
  {
    image: require('../../assets/images/records/aeroplane.jpg'),
    name: 'Aeroplane Combo',
    X: '5060',
  },
  {
    image: require('../../assets/images/records/kiss.png'),
    name: 'Rocket Combo',
    X: '550',
  },
  {
    image: require('../../assets/images/records/lavish.png'),
    name: 'Unlimited Combo',
    X: '01',
  },
  {
    image: require('../../assets/images/records/aeroplane.jpg'),
    name: 'Aeroplane Combo',
    X: '5060',
  },
  {
    image: require('../../assets/images/records/kiss.png'),
    name: 'Rocket Combo',
    X: '550',
  },
  {
    image: require('../../assets/images/records/lavish.png'),
    name: 'Unlimited Combo',
    X: '01',
  },
];

const renderView = ({item}) => {
  const dimensions = Dimensions.get('window');

  return (
    <View
      style={{
        alignSelf: 'center',
        width: dimensions.width * 0.9,
        height: dimensions.height * 0.25,
        marginTop: 20,
        backgroundColor: '#303749',
        borderRadius: 10,
      }}>
      <TouchableOpacity>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', margin: 10}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginLeft: 5,
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  marginLeft: 5,
                }}>
                {item.X}
              </Text>
            </View>
            <Text style={{fontSize: 16, color: '#AEAECE', margin: 10}}>
              22-06-2022
            </Text>
          </View>

          <View
            style={{
              height: '65%',
              width: '85%',
              alignSelf: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
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
              <View style={{marginVertical: 5}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  John Smith
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ED2D21',
                  borderRadius: 20,
                  paddingVertical: 2,
                  width: '70%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  LEVEL 12
                </Text>
              </View>
            </View>

            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 15, color: '#FFFFFF', bottom: 25}}>
                Send To
              </Text>
            </View>
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
              <View style={{marginVertical: 5}}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  James Olivia
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#ED2D21',
                  borderRadius: 20,
                  paddingVertical: 2,
                  width: '70%',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 8,
                    color: '#FFFFFF',
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  LEVEL 12
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ComboView = ({navigation}) => {
  const [sevenDays, setSevenDays] = useState(true);
  const [thirtyDays, setThirtyDaily] = useState(false);
  const [total, setTotal] = useState(false);

  const sevenBtn = () => {
    setSevenDays(true);
    setThirtyDaily(false);
    setTotal(false);
  };

  const thirtyBtn = () => {
    setSevenDays(false);
    setThirtyDaily(true);
    setTotal(false);
  };

  const totalBtn = () => {
    setSevenDays(false);
    setThirtyDaily(false);
    setTotal(true);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#242A38'}}>
      <LinearGradient
        colors={['#F06B00', '#E49608', '#E2AA03', '#D4B204']}
        style={{
          height: '30%',
          width: '100%',
          borderBottomLeftRadius: 80,
          borderBottomRightRadius: 80,
        }}>
        <View style={{height: 50, justifyContent: 'center'}}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 15,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
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
                Weekly Star
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F5AA23',
            flexDirection: 'row',
            alignSelf: 'center',
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => sevenBtn()}
            style={{
              backgroundColor: sevenDays ? '#FFFFFF' : '#F5AA23',
              borderRadius: 20,
              paddingVertical: 8,
              width: '20%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 9,
                  color: sevenDays ? '#F5AA23' : '#FFFFFF',
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
              backgroundColor: thirtyDays ? '#FFFFFF' : '#F5AA23',
              borderRadius: 20,
              paddingVertical: 8,
              width: '20%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 9,
                  color: thirtyDays ? '#F5AA23' : '#FFFFFF',
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
              backgroundColor: total ? '#FFFFFF' : '#F5AA23',
              borderRadius: 20,
              paddingVertical: 8,
              width: '20%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 9,
                  color: total ? '#F5AA23' : '#FFFFFF',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Total
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={{height: '83%', bottom: 90}}>
        <FlatList data={tasks} renderItem={renderView} />
      </View>
    </View>
  );
};

export default ComboView;

const styles = StyleSheet.create({});
