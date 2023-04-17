import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {headings} from '../../utils/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const payment = [
  {
    id: '1',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '2',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '3',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '4',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '5',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '6',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '7',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '8',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '9',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '10',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '11',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
  {
    id: '12',
    date: 'April, 2022',
    duration: 'Duration (12:30) 00:00',
    bean: require('../../assets/images/bean.png'),
    bean_quantity: '+20',
  },
];
const Earning_Records = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#242A38'}}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <StatusBar backgroundColor="#242A38" />
        {/* 
            ///////////////////// */}
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={{
            //   height: heightPercentageToDP(8),
            width: widthPercentageToDP(100),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: '3%',
              marginVertical: '5%',
            }}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={{marginHorizontal: '2%'}}>
                <AntDesign
                  onPress={() => {
                    navigation.goBack();
                  }}
                  name="left"
                  size={20}
                  color="#fff"
                  style={{
                    top: 1,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  ...headings.h6M,
                  marginLeft: '3%',

                  color: '#fff',
                }}>
                Earning Records
              </Text>
            </View>

            <Text
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                ...headings.h5,
                color: '#ffff',
              }}>
              Close
            </Text>
          </View>
        </LinearGradient>

        {/* FlatList */}
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={payment}
            keyExtractor={item => item.id}
            renderItem={(item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Details')}
                activeOpacity={0.7}
                style={{
                  ...styles.backgroundColor,
                }}>
                <View
                  style={{
                    ...styles.alignment,
                  }}>
                  <View>
                    <Text
                      style={{
                        ...styles.text_date,
                      }}>
                      {item.item.date}
                    </Text>
                    <Text
                      style={{
                        ...styles.text_duration,
                      }}>
                      {item.item.duration}
                    </Text>
                  </View>

                  <View
                    style={{
                      ...styles.bean_view,
                    }}>
                    <Image
                      source={item.item.bean}
                      style={{
                        ...styles.bean,
                      }}
                    />
                    <Text
                      style={{
                        ...styles.bean_quantity,
                      }}>
                      {item.item.bean_quantity}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'transparent',
    height: widthPercentageToDP(15),
    marginTop: '1%',
  },
  text_date: {
    ...headings.h6,
    color: '#ffffff',
  },
  text_duration: {
    ...headings.h9,
    color: '#C6C6C6',
  },
  alignment: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    marginVertical: '2%',
  },
  bean: {
    // top: 2,
    alignSelf: 'center',
  },
  bean_quantity: {
    ...headings.h4,
    color: '#ffff',
    marginLeft: 5,
  },
  bean_view: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default Earning_Records;
