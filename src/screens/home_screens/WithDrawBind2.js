import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {headings} from '../../utils/Styles';
import BackIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default function WithdrawBind2({navigation}) {
  return (
    <View style={styles.maincontainer}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{flex: 1}}>
        <ScrollView>
          <LinearGradient
            colors={['#4568DC', '#B06AB3']}
            style={styles.settingbox}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon name="left" size={20} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.settingtxt}>Bind</Text>
          </LinearGradient>
          <View style={styles.imgcontainer}>
            <Image
              source={require('../../assets/images/BanoLivePicture.png')}
              style={styles.img}
            />
          </View>

          <View style={styles.inputmainbox}>
            <Text style={styles.nicknametxt}>Account</Text>
            <View style={styles.Usernamebox}>
              <TextInput
                style={styles.Usernametxt}
                placeholder="Enter Email"
                placeholderTextColor={'#FFFFFF'}
              />
            </View>
          </View>
          <View style={styles.Notebox}>
            <Text style={{color: 'white', fontSize: 15}}>Note :</Text>
            <View style={styles.Usernamebox}>
              <Text style={styles.Usernametxt1}>
                When you cash out money form Epay, a fee will beneeded according
                to Epays tariff.
              </Text>
            </View>
            <Text style={styles.NoEpaytxt}>No Epay Account, Register</Text>
          </View>

          <TouchableOpacity style={styles.buttonbox}>
            <Text style={styles.btntxt}>SUBMIT</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
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
  img: {
    height: 120,
    width: 120,
  },
  Informationtxt: {
    color: 'white',
    fontSize: 15,
  },
  imgcontainer: {
    alignItems: 'center',
    marginTop: heightPercentageToDP(4),
  },
  Affectedtxt: {
    color: 'white',
    fontSize: 15,
  },
  txtscontainer: {
    marginTop: heightPercentageToDP(1),
    alignItems: 'center',
  },
  Usernamebox: {
    flexDirection: 'row',
    top: 4,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Usernametxt: {
    fontSize: 12,
    color: 'white',
    marginLeft: 4,

    width: '95%',
    borderRadius: 3,
    borderWidth: 0.4,
    borderColor: '#B06AB3',
    marginTop: '2%',
    paddingLeft: 7,
  },
  nicknametxt: {
    marginLeft: 5,
    color: 'white',
    fontSize: 11,
    top: 3,
  },
  inputmainbox: {
    alignSelf: 'center',
    marginTop: heightPercentageToDP(2),
  },
  buttonbox: {
    backgroundColor: '#c471ed',
    width: '85%',
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    alignSelf: 'center',
    marginTop: heightPercentageToDP(4),
  },
  btntxt: {
    color: 'white',
    fontWeight: '500',
  },
  Usernametxt1: {
    fontSize: 11,
    color: 'white',

    width: '85%',

    marginTop: '2%',
  },
  NoEpaytxt: {
    color: 'red',
    width: '85%',

    marginTop: heightPercentageToDP(2),
    paddingLeft: 7,
  },
  Notebox: {
    paddingLeft: 15,
    marginTop: heightPercentageToDP(2),
  },
});
