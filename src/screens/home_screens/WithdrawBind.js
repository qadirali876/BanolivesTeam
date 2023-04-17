// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ToastAndroid,
//   ImageBackground,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import {
//   ALERT_TYPE,
//   Dialog,
//   AlertNotificationRoot,
//   Toast,
// } from 'react-native-alert-notification';
// import React, {useState} from 'react';
// import {heightPercentageToDP} from 'react-native-responsive-screen';
// import {headings} from '../../utils/Styles';
// import BackIcon from 'react-native-vector-icons/AntDesign';
// import LinearGradient from 'react-native-linear-gradient';

// export default function WithdrawBind({navigation}) {
//   const [name, setname] = useState('');
//   const [bankname, setbankname] = useState('');
//   const [bankaccount, setbankaccount] = useState('');
//   const [number, setnumber] = useState('');

//   return (
//     <AlertNotificationRoot>
//       <View style={styles.maincontainer}>
//         <ImageBackground
//           source={require('../../assets/images/Newprofilebg.png')}
//           resizeMode={'stretch'}
//           style={{flex: 1}}>
//           <ScrollView>
//             <LinearGradient
//               colors={['#4568DC', '#B06AB3']}
//               style={styles.settingbox}>
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <BackIcon name="left" size={20} style={styles.icon} />
//               </TouchableOpacity>
//               <Text style={styles.settingtxt}>Bind</Text>
//             </LinearGradient>
//             <View style={styles.imgcontainer}>
//               <Image
//                 source={require('../../assets/images/BanoLivePicture.png')}
//                 style={styles.img}
//               />
//               <View style={styles.txtscontainer}>
//                 <Text style={styles.Informationtxt}>
//                   Enter Information, Or Your Withdrawal
//                 </Text>
//                 <Text style={styles.Affectedtxt}>Will Be Affected.</Text>
//               </View>
//             </View>

//             <View style={styles.inputmainbox}>
//               <Text style={styles.nicknametxt}>Name</Text>
//               <View style={styles.Usernamebox}>
//                 <TextInput
//                   onChangeText={val => setname(val)}
//                   style={styles.Usernametxt}
//                   placeholder="Enter Name"
//                   placeholderTextColor={'#FFFFFF'}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputmainbox}>
//               <Text style={styles.nicknametxt}>Bank Name</Text>
//               <View style={styles.Usernamebox}>
//                 <TextInput
//                   style={styles.Usernametxt}
//                   onChangeText={val => setbankname(val)}
//                   placeholder="Enter Bank Name"
//                   placeholderTextColor={'#FFFFFF'}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputmainbox}>
//               <Text style={styles.nicknametxt}>Bank Account</Text>
//               <View style={styles.Usernamebox}>
//                 <TextInput
//                   style={styles.Usernametxt}
//                   onChangeText={val => setbankaccount(val)}
//                   placeholder="Enter Bank Account"
//                   placeholderTextColor={'#FFFFFF'}
//                 />
//               </View>
//             </View>
//             <View style={styles.inputmainbox}>
//               <Text style={styles.nicknametxt}>Phone Number</Text>
//               <View style={styles.Usernamebox}>
//                 <TextInput
//                   style={styles.Usernametxt}
//                   onChangeText={val => setnumber(val)}
//                   placeholder="Enter Phone Number"
//                   placeholderTextColor={'#FFFFFF'}
//                   keyboardType={'numeric'}
//                 />
//               </View>
//             </View>
//             <TouchableOpacity onPress={check} style={styles.buttonbox}>
//               <Text style={styles.btntxt}>SUBMIT</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </ImageBackground>
//       </View>
//     </AlertNotificationRoot>
//   );
// }
// const styles = StyleSheet.create({
//   maincontainer: {
//     flex: 1,
//   },
//   settingbox: {
//     flexDirection: 'row',
//     paddingVertical: heightPercentageToDP('2%'),
//     alignItems: 'center',
//     backgroundColor: '#303749',
//   },
//   settingtxt: {
//     fontSize: 19,
//     color: 'white',
//     fontWeight: '500',
//   },
//   icon: {
//     color: 'white',
//     paddingHorizontal: 5,
//   },
//   img: {
//     height: 90,
//     width: 90,
//   },
//   Informationtxt: {
//     color: 'white',
//     fontSize: 15,
//   },
//   imgcontainer: {
//     alignItems: 'center',
//     marginTop: heightPercentageToDP(4),
//   },
//   Affectedtxt: {
//     color: 'white',
//     fontSize: 15,
//   },
//   txtscontainer: {
//     marginTop: heightPercentageToDP(1),
//     alignItems: 'center',
//   },
//   Usernamebox: {
//     flexDirection: 'row',
//     top: 4,

//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   Usernametxt: {
//     fontSize: 12,
//     color: 'white',
//     marginLeft: 4,

//     width: '95%',
//     borderRadius: 3,
//     borderWidth: 0.4,
//     borderColor: '#B06AB3',
//     marginTop: '2%',
//     paddingLeft: 7,
//   },
//   nicknametxt: {
//     marginLeft: 5,
//     color: 'white',
//     fontSize: 11,
//     top: 3,
//   },
//   inputmainbox: {
//     alignSelf: 'center',
//     marginTop: heightPercentageToDP(2),
//   },
//   buttonbox: {
//     backgroundColor: '#c471ed',
//     width: '85%',
//     borderRadius: 5,
//     alignItems: 'center',
//     padding: 15,
//     alignSelf: 'center',
//     marginTop: heightPercentageToDP(4),
//   },
//   btntxt: {
//     color: 'white',
//   },
// });

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
import React, {useState} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {headings} from '../../utils/Styles';
import BackIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {ApiCallToken} from '../../Services/Apis';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';

export default function WithdrawBind({navigation, route}) {
  const [name, setname] = useState('');
  const [number, setnumber] = useState('');
  const [email, setemail] = useState('');
  const [amount, setamount] = useState('');
  const [accountNumber, setaccountNumber] = useState('');
  const {account_name, country, amountUser} = route.params;
  const userData = useSelector(state => state.auth.userData);
  const Convert = JSON.parse(amountUser);

  console.log('Getting data from back ==>>', Convert);
  // console.log('Converet Converet Converet Converet', Convert);
  // const [error, setError] = useState();
  // const [errorEmail, seterrorEmail] = useState();
  const check = () => {};
  // const isEmailValid = item => {
  //   let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  //   if (item.length === 0) {
  //     setError('');
  //     seterrorEmail('Email address is required!');
  //     return false;
  //   } else if (!reg.test(item)) {
  //     setError('');
  //     seterrorEmail('You must enter a valid email address');
  //     return false;
  //   } else {
  //     seterrorEmail('');
  //     setError('');
  //     return true;
  //   }
  // };

  const SendGiftsToHost = async () => {
    try {
      const paramsBody = {
        name: name,
        number: number,
        email: email,
        amount: JSON.parse(amountUser),
        country: country,
        account_name: account_name,
        account_number: accountNumber,
      };
      const res = await ApiCallToken({
        params: userData.token,
        paramsBody: paramsBody,
        route: 'user/withdraw',
        verb: 'POST',
      });
      ToastAndroid.showWithGravityAndOffset(
        res.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
        0,
        0,
      );
      console.log('send WithDrawBid response is -- ', res);
      console.log('send WithDrawBid response message is -- ', res.message);
      navigation.goBack();
    } catch (e) {
      console.log('send WithDrawBid error is -- ', e.toString());
    }
  };

  const checkValidation = () => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let num = /^923\d{9}$|^03\d{9}$/;

    if (name == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Name is required',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (email == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Enter your Email Address',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (!reg.test(email)) {
      ToastAndroid.showWithGravityAndOffset(
        'Enter a valid Email Address',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (accountNumber == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Enter your Bank Account Number',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (!num.test(accountNumber)) {
      ToastAndroid.showWithGravityAndOffset(
        'Enter a valid Bank Account Number',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (Convert < 10) {
      ToastAndroid.showWithGravityAndOffset(
        'You cannot withdraw less than 10',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (Convert > 500) {
      ToastAndroid.showWithGravityAndOffset(
        'You cannot withdraw more than 500',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (number == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Enter your Phone Number',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (!num.test(number)) {
      ToastAndroid.showWithGravityAndOffset(
        'Enter a valid Phone Number',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else {
      SendGiftsToHost();
    }
  };

  return (
    <AlertNotificationRoot>
      <View style={styles.maincontainer}>
        <ImageBackground
          source={require('../../assets/images/Newprofilebg.png')}
          resizeMode={'stretch'}
          style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="always">
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
              <View style={styles.txtscontainer}>
                <Text style={styles.Informationtxt}>
                  Enter Information, Or Your Withdrawal
                </Text>
                <Text style={styles.Affectedtxt}>Will Be Affected.</Text>
              </View>
            </View>

            <View style={styles.inputmainbox}>
              <Text style={styles.nicknametxt}>Name</Text>
              <View style={styles.Usernamebox}>
                <TextInput
                  style={styles.Usernametxt}
                  placeholder="Enter Name"
                  placeholderTextColor={'#FFFFFF'}
                  onChangeText={e => setname(e)}
                />
              </View>
            </View>
            <View style={styles.inputmainbox}>
              <Text style={styles.nicknametxt}>Email</Text>
              <View style={styles.Usernamebox}>
                <TextInput
                  style={styles.Usernametxt}
                  placeholder="Enter Email"
                  autoCapitalize={false}
                  placeholderTextColor={'#FFFFFF'}
                  onChangeText={e => setemail(e)}
                />
              </View>
              {/* <Text style={{color: 'white'}}>{error}</Text>
              <Text style={{color: 'white'}}>{errorEmail}</Text> */}
            </View>
            <View style={styles.inputmainbox}>
              <Text style={styles.nicknametxt}>Bank Name</Text>
              <View style={styles.Usernamebox}>
                <TextInput
                  style={styles.Usernametxt}
                  value={account_name}
                  // placeholder="Enter Bank Name"
                  placeholderTextColor={'#FFFFFF'}
                  // onChangeText={(e)=>setname(e)}
                  editable={false}
                />
              </View>
            </View>
            <View style={styles.inputmainbox}>
              <Text style={styles.nicknametxt}>Bank Account</Text>
              <View style={styles.Usernamebox}>
                <TextInput
                  style={styles.Usernametxt}
                  placeholder="Enter Bank Account"
                  placeholderTextColor={'#FFFFFF'}
                  onChangeText={e => setaccountNumber(e)}
                  keyboardType={'number-pad'}
                />
              </View>
            </View>
            <View style={styles.inputmainbox}>
              <Text style={styles.nicknametxt}>Amount</Text>
              <View style={styles.Usernamebox}>
                <TextInput
                  style={styles.Usernametxt}
                  value={amountUser}
                  editable={false}
                  placeholder="Enter your amount"
                  placeholderTextColor={'#FFFFFF'}
                  keyboardType={'number-pad'}
                  onChangeText={e => setamount(e)}
                  maxLength={4}
                />
              </View>
            </View>
            <View style={styles.inputmainbox}>
              <Text style={styles.nicknametxt}>Phone Number</Text>
              <View style={styles.Usernamebox}>
                <TextInput
                  style={styles.Usernametxt}
                  placeholder="Enter Phone Number"
                  placeholderTextColor={'#FFFFFF'}
                  keyboardType={'numeric'}
                  onChangeText={e => setnumber(e)}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonbox}
              onPress={() => {
                // SendGiftsToHost();
                // isEmailValid();
                checkValidation();
              }}>
              <Text style={styles.btntxt}>SUBMIT</Text>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>
      </View>
    </AlertNotificationRoot>
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
    height: 90,
    width: 90,
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
  },
});
