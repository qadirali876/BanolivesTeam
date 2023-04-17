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
import React, {useState} from 'react';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const tasks = [
  {
    image: require('../../assets/images/records/aeroplane.jpg'),
    name: 'Aeroplane',
  },
  {image: require('../../assets/images/records/kiss.png'), name: 'Kiss'},
  {
    image: require('../../assets/images/records/lavish.png'),
    name: 'Lavish Lifestyle',
  },
  {image: require('../../assets/images/records/rocket.png'), name: 'Rocket'},
  {image: require('../../assets/images/records/story.png'), name: 'Love Story'},
];

const renderView = ({item}) => {
  return (
    <View style={{}}>
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', width: '50%'}}>
            <View
              style={{
                width: '30%',
                height: 70,
                paddingVertical: 8,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
              }}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: '#E92F24',
                }}
              />
            </View>
            <View style={{}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  marginLeft: 10,
                  width: '100%',
                  fontSize: 16,
                }}>
                {item.name}
              </Text>
            </View>
          </View>
          <View
            style={{width: '33%', flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', width: '85%'}}>
              <View style={{}}>
                <Image
                  source={require('../../assets/images/records/profile.jpg')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#4D5875',
                  }}
                />
                <Image
                  source={require('../../assets/images/records/profile.jpg')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#4D5875',
                    position: 'absolute',
                    left: 20,
                    zIndex: -1,
                  }}
                />
                <Image
                  source={require('../../assets/images/records/profile.jpg')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#4D5875',
                    position: 'absolute',
                    left: 40,
                    zIndex: -2,
                  }}
                />
                <Image
                  source={require('../../assets/images/records/profile.jpg')}
                  resizeMode="contain"
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#4D5875',
                    position: 'absolute',
                    left: 60,
                    zIndex: -3,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity style={{justifyContent: 'center', width: '15%'}}>
              <View
                style={{
                  paddingVertical: 2,
                  borderRadius: 15,
                  alignItems: 'center',
                }}>
                <LeftArrow
                  name="arrow-forward-ios"
                  size={15}
                  style={{color: 'white', alignSelf: 'center'}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#303749',
            marginVertical: 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const WeeklyStarView = ({navigation}) => {
  const [weekly, setWeekly] = useState(true);
  const [lastWeek, setLastWweek] = useState(false);

  const weeklyBtn = () => {
    setWeekly(true);
    setLastWweek(false);
  };

  const lastWweekBtn = () => {
    setWeekly(false);
    setLastWweek(true);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#242A38'}}>
      <LinearGradient
        colors={['#331346', '#431D5A', '#622487', '#8C35C2']}
        style={{
          height: '35%',
          width: '100%',
          borderBottomLeftRadius: 190,
          borderBottomRightRadius: 190,
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
            backgroundColor: '#7C4190',
            flexDirection: 'row',
            alignSelf: 'center',
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity
            onPress={() => weeklyBtn()}
            style={{
              backgroundColor: weekly ? '#FFFFFF' : '#7C4190',
              borderRadius: 20,
              paddingVertical: 8,
              width: '22%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  color: weekly ? '#6F4194' : '#FFFFFF',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Weekly
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => lastWweekBtn()}
            style={{
              backgroundColor: lastWeek ? '#FFFFFF' : '#7C4190',
              borderRadius: 20,
              paddingVertical: 8,
              width: '22%',
              alignSelf: 'center',
            }}>
            <View>
              <Text
                style={{
                  color: lastWeek ? '#6F4194' : '#FFFFFF',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                Last Week
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf: 'center', bottom: 20}}>
          <Image
            source={require('../../assets/images/records/stars.png')}
            resizeMode="contain"
            style={{height: 170, width: 170}}
          />
        </View>
      </LinearGradient>
      <View style={{flex: 1}}>
        <FlatList data={tasks} renderItem={renderView} />
      </View>
    </View>
  );
};

export default WeeklyStarView;

const styles = StyleSheet.create({});
