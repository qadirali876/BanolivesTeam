import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import ForwardIcon from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {headings} from '../../utils/Styles';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Settings = () => {
  const navigation = useNavigation();
  const SettingsList = [
    {
      id: 0,
      heading: 'Privacy',
      icon: 'right',
    },
    {
      id: 1,
      heading: 'Blocked List',
      icon: 'right',
    },
    {
      id: 2,
      heading: 'Security',
      icon: 'right',
    },
    {
      id: 3,
      heading: 'Room Effects',
      icon: 'right',
    },
    {
      id: 4,
      heading: 'Inbox',
      icon: 'right',
    },
    {
      id: 5,
      heading: 'Language',
      icon: 'right',
    },
    {
      id: 6,
      heading: 'App Alerts',
      icon: 'right',
    },
    {
      id: 7,
      heading: 'Clear Chache',
      icon: 'right',
    },
    {
      id: 8,
      heading: 'Review Us!',
      icon: 'right',
    },
    {
      id: 9,
      heading: 'Facebook',
      icon: 'right',
    },
    {
      id: 10,
      heading: 'FAQ',
      icon: 'right',
    },
    {
      id: 11,
      heading: 'Terms & Conditions',
      icon: 'right',
    },
    {
      id: 12,
      heading: 'Connect With Us',
      icon: 'right',
    },
    {
      id: 13,
      heading: 'About',
      icon: 'right',
    },
  ];
  const dispatch = useDispatch();
  const logoutUser = async () => {
    try {

    const authIs = auth().currentUser
    console.log("checkkkkkkk", authIs?.uid)

    if(authIs?.uid) {
          await auth().signOut()
          await GoogleSignin.signOut();
          dispatch({
            type: 'LOGOUT',
          });   
    }
  } catch (error) {
    console.error(error);
  }
  }

  // isSignedIn = async () => {
  //   const isSignedIn = await GoogleSignin.isSignedIn();
  // };
  const settingsItemStyle = props => (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (props.index == 0) {
            navigation.navigate('Privacy');
          } else if (props.index == 1) {
            navigation.navigate('BlockedList');
          } else if (props.index == 2) {
            navigation.navigate('Security');
          } else if (props.index == 3) {
            navigation.navigate('Room_Effects');
          } else if (props.index == 4) {
            navigation.navigate('Inbox');
          } else if (props.index == 5) {
            navigation.navigate('Language');
          } else if (props.index == 10) {
            navigation.navigate('Faq');
          } else if (props.index == 12) {
            navigation.navigate('ConnectWithUs');
          } else if (props.index == 13) {
            navigation.navigate('AboutUs');
          } else if (props.index == 11) {
            navigation.navigate('Terms');
          }
        }}>
        <View style={styles.ItemView}>
          <Text style={styles.headingtxt}>{props.item.heading}</Text>
          <ForwardIcon name={props.item.icon} size={20} style={styles.icon} />
        </View>
      </TouchableOpacity>
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
          <Text style={styles.settingtxt}>Settings</Text>
        </LinearGradient>
        <ScrollView>
          <View style={{flex: 1}}>
            <FlatList data={SettingsList} renderItem={settingsItemStyle} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => logoutUser()}
              >
              <LinearGradient
                colors={['#4568DC', '#B06AB3']}
                style={[
                  styles.logbox,
                  {marginTop: heightPercentageToDP('1.5%')},
                ]}>
                <Text style={[styles.logtxt]}>Log Out</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={[styles.logbox]}>
            <Text style={styles.power}>
              Powered by LimeTechnologies Pvt Ltd
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303749',
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
  ItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: heightPercentageToDP('2.5%'),
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#303749',
    paddingLeft: '3%',
    paddingRight: '3%',
    backgroundColor: 'transparent',
  },
  headingtxt: {
    fontSize: 15,
    color: 'white',
  },
  logbox: {
    paddingVertical: heightPercentageToDP('2%'),
    marginHorizontal: 10,
    borderRadius: 5,
  },
  logtxt: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
  power: {
    textAlign: 'center',
    ...headings.h8,
    color: 'white',
  },
});
