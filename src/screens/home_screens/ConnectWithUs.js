import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import BackIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
const ConnectWithUs = () => {
  const navigation = useNavigation();
  const Data = [
    {
      id: 1,
      head: 'Celebrity/Influencer/Expert Content Cooperation',
      para: 'Lorem ipsum, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 2,
      head: 'Brand Cooperation',
      para: 'Lorem ipsum, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 3,
      head: 'Agency Onboarding',
      para: 'Lorem ipsum, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      head: 'Here is what we can help with you',
      para: 'Lorem ipsum, ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
  const ItemStyle = props => (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <Text style={styles.Id}>{props.item.id}.</Text>
        <Text style={styles.FlatHead}>{props.item.head}</Text>
      </View>

      <Text style={styles.para}>{props.item.para}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={styles.settingbox}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon name="left" size={20} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.settingtxt}>Connect With Us</Text>
        </LinearGradient>
        <ScrollView>
          <View style={styles.headbox}>
            <Text style={styles.headtxt}>
              We Seek Cooperation in the following Categories
            </Text>
          </View>
          <View>
            <FlatList data={Data} renderItem={ItemStyle} />
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={['#4568DC', '#B06AB3']}
              style={styles.BtnView}>
              <Text style={styles.BtnTxt}>Connect With Us</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
  },
  settingbox: {
    flexDirection: 'row',
    paddingVertical: heightPercentageToDP('2%'),
    alignItems: 'center',
    backgroundColor: '#303749',
  },
  settingtxt: {
    fontSize: 19,
    color: 'white',
    fontWeight: '500',
  },
  icon: {
    color: 'white',
    paddingHorizontal: 5,
  },
  headbox: {
    // backgroundColor: 'red',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: '2.5%',
  },
  headtxt: {
    fontSize: 20,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingVertical: 5,
  },
  para: {
    color: '#9293B0',
    fontSize: 14,
    width: '95%',
    alignSelf: 'center',
  },
  FlatHead: {
    fontSize: 17,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: '0.5%',
    width: '85%',
  },
  Id: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingVertical: 5,
    paddingLeft: 7,
  },
  BtnView: {
    marginVertical: '7%',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  BtnTxt: {
    textAlign: 'center',
    color: 'white',
    width: '95%',
    alignSelf: 'center',
    paddingVertical: heightPercentageToDP('1.8%'),
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default ConnectWithUs;
