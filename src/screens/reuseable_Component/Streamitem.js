import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useNavigation} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Streamitem(props) {
  const navigation = useNavigation;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#181A2D',
          padding: 4,
          borderRadius: 20,
          paddingHorizontal: 8,
        }}>
        <View
          style={{
            backgroundColor: props.iconbgclr,
            padding: 4,
            borderRadius: 20,
            marginHorizontal: 5,
          }}>
          <Image
            source={props.img}
            style={{height: 10, width: 10}}
            resizeMode={'center'}
          />
        </View>
        <Text style={{color: 'white', fontSize: 11}}>{props.title}</Text>
      </View>
    </View>
  );
}
