import React from 'react';
import {
  Text,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
const Data = [
  {
    id: '1',
    image: require('../../assets/images/story.jpg'),
    image2: require('../../assets/images/img2.png'),
    name: 'James Olivia',
  },
  {
    id: '2',
    image: require('../../assets/images/story.jpg'),
    image2: require('../../assets/images/img2.png'),
    name: 'James Olivia',
  },
  {
    id: '3',
    image: require('../../assets/images/story.jpg'),
    image2: require('../../assets/images/img2.png'),
    name: 'James Olivia',
  },
  {
    id: '4',
    image: require('../../assets/images/story.jpg'),
    image2: require('../../assets/images/img2.png'),
    name: 'John Doe',
  },
];
const Data2 = [
  {
    img: require('../../assets/images/bgspot.png'),
  },
  {
    img: require('../../assets/images/bgspot.png'),
  },
  {
    img: require('../../assets/images/bgspot.png'),
  },
];
const Stream_Popular = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242A38',
        marginBottom: '15%',
        marginTop: '2%',
      }}>
      <StatusBar backgroundColor="#242A38" />

      {/* <Text
                style={{
                    color: "#ffff",
                    fontSize: 25,
                    fontWeight: "bold",
                    margin: 20
                }}>
                Popular
            </Text> */}
      {/* FlatList */}
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
            data={Data}
            keyExtractor={item => item.id}
            renderItem={(item, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StreamShow');
                }}
                activeOpacity={0.7}
                // onPress={() => this.props.navigation.navigate(item.item.navi)}
                style={{
                  marginTop: '0.5%',

                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 1,
                }}>
                <ImageBackground
                  source={item.item.image}
                  style={{
                    height: 170,
                    width: 175,
                  }}
                  imageStyle={{borderRadius: 6}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: '5%',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'rgba(50, 52, 52, 0.4)',
                        width: 45,
                        height: 17,
                        borderRadius: 30,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <Fontisto name="soundcloud" color="#fff" size={10} />
                      <Text
                        style={{
                          marginHorizontal: 2,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        Live
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#c471ed',
                        width: 45,
                        height: 17,
                        borderRadius: 30,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="video-camera" color="#fff" size={10} />
                      <Text
                        style={{
                          marginHorizontal: 2,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        Live
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{marginTop: 120, marginLeft: '5%', color: '#fff'}}>
                    LIVE-On the Radio
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{marginTop: '2%'}}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            index={2}
            autoplayLoop
            showPagination={false}
            data={Data2}
            renderItem={({item}) => (
              <View style={styles.child}>
                <Image
                  source={item.img}
                  resizeMode="cover"
                  style={styles.swiperimg}
                />
              </View>
            )}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: '2%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
            data={Data}
            keyExtractor={item => item.id}
            renderItem={(item, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StreamShow');
                }}
                activeOpacity={0.7}
                // onPress={() => this.props.navigation.navigate(item.item.navi)}
                style={{
                  marginTop: '0.5%',

                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 1,
                }}>
                <ImageBackground
                  source={item.item.image}
                  style={{
                    height: 170,
                    width: 175,
                  }}
                  imageStyle={{borderRadius: 6}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: '5%',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'rgba(50, 52, 52, 0.4)',
                        width: 45,
                        height: 17,
                        borderRadius: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Fontisto name="soundcloud" color="#fff" size={10} />
                      <Text
                        style={{
                          marginHorizontal: 2,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        Live
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#c471ed',
                        width: 45,
                        height: 17,
                        borderRadius: 30,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="video-camera" color="#fff" size={10} />
                      <Text
                        style={{
                          marginHorizontal: 2,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        Live
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{marginTop: 120, marginLeft: '5%', color: '#fff'}}>
                    LIVE-On the Radio
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{marginTop: '2%'}}>
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            index={2}
            autoplayLoop
            showPagination={false}
            data={Data2}
            renderItem={({item}) => (
              <View style={styles.child}>
                <Image
                  source={item.img}
                  resizeMode="cover"
                  style={styles.swiperimg}
                />
              </View>
            )}
          />
        </View>
        <View style={{alignItems: 'center', marginTop: '2%'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            horizontal={false}
            data={Data}
            keyExtractor={item => item.id}
            renderItem={(item, index) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('StreamShow');
                }}
                activeOpacity={0.7}
                // onPress={() => this.props.navigation.navigate(item.item.navi)}
                style={{
                  marginTop: '0.5%',

                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 1,
                }}>
                <ImageBackground
                  source={item.item.image}
                  style={{
                    height: 170,
                    width: 175,
                  }}
                  imageStyle={{borderRadius: 6}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginHorizontal: '5%',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: 'rgba(50, 52, 52, 0.4)',
                        width: 45,
                        height: 17,
                        borderRadius: 30,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <Fontisto name="soundcloud" color="#fff" size={10} />
                      <Text
                        style={{
                          marginHorizontal: 2,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        Live
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#c471ed',
                        width: 45,
                        height: 17,
                        borderRadius: 30,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                      }}>
                      <FontAwesome name="video-camera" color="#fff" size={10} />
                      <Text
                        style={{
                          marginHorizontal: 2,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        Live
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{marginTop: 120, marginLeft: '5%', color: '#fff'}}>
                    LIVE-On the Radio
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Stream_Popular;

const styles = StyleSheet.create({
  swiperimg: {
    height: 80,
    width: 350,
    marginHorizontal: 6,
    borderRadius: 3,
  },
});
