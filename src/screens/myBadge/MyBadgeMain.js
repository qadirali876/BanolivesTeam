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
import React, {useState, useRef} from 'react';
import LeftArrow from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

const tasks = [1, 2, 3, 4, 5, 6, 7, 8];

const MyBadgeMain = ({navigation}) => {
  const refRBSheet = useRef();

  return (
    <View style={{flex: 1, backgroundColor: '#242A38'}}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={{
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
                My Badge
              </Text>
            </View>
          </View>
        </LinearGradient>

        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 15,
              marginHorizontal: 20,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#E92F24',
                  width: '45%',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderRadius: 25,
                }}>
                <Text
                  style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  Honor Badges
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#303749',
                  width: '45%',
                  alignItems: 'center',
                  paddingVertical: 8,
                  borderRadius: 25,
                }}>
                <Text
                  style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
                  Event Badges
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#303749',
              height: 6,
              width: '100%',
              marginVertical: 15,
            }}
          />

          <View>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              Rocket Badge
            </Text>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/rocketBoy.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Rocket Boy
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/rocket.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Rocket Men
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/rocket.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Rocket Scientist
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/rocket.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Apolio
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/rocket.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  NASA
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#303749',
              height: 6,
              width: '100%',
              marginVertical: 15,
            }}
          />

          <View>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              Sky Blue Heros Badge
            </Text>
            <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/plane.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Rocket Boy
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/plane.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Rocket Men
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/plane.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Rocket Scientist
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/plane.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  Apolio
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={require('../../assets/images/myBadge/plane.png')}
                  resizeMode="contain"
                  style={{height: 120, width: 120}}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    marginVertical: 10,
                    fontWeight: 'bold',
                  }}>
                  NASA
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MyBadgeMain;

const styles = StyleSheet.create({});
