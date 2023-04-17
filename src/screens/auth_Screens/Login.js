import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useState, useNavigation} from 'react';
//---------Vector icons-----------//
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//-----------reuseable components----------//
import Input_Passowrd from '../../components/Input_Password';
import PrimaryButton from '../reuseable_Component/PrimaryButton';
import Input from '../reuseable_Component/Input';
import {useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {loginRequest, socialLoginRequest} from '../../Redux/Actions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '1035269178902-u6cb870j3qpkusg51v8vnc6uimaocndi.apps.googleusercontent.com',
});
// import { ScrollView } from 'native-base';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import LoginMainScreen from '../reuseable_Component/LoginMainScreen';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [login, Setlogin] = useState('LOGIN');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [myLoginError, setMyLoginError] = useState(true);

  isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    console.log("is signed in", isSignedIn)
  };

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    console.log("in google sign in")
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    console.log("in google sign in token", idToken)
    if(idToken) 
    {
      sendSocialLoginRequest()
    }
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //getCurrentUser()
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  const sendSocialLoginRequest = async () => {
    setMyLoginError(false);
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log("current user", currentUser?.user)
    const params = {
      full_name:  currentUser?.user?.givenName,
      email: currentUser?.user?.email,
      social_login_type: "google",
      social_login_id: currentUser?.user?.id,
    }
     dispatch(socialLoginRequest({params, setMyLoginError}))
     setMyLoginError(false)
  }

  getCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    console.log("hello", currentUser)
  };

  signOut = async () => {
    try {
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const UserLoginFunction = async () => {
    console.log('This is UserName', useremail);
    console.log('This is Password', password);
    setMyLoginError(false);
    const params = {
      email: useremail,
      password: password,
    };
    console.log('loginfun');
    if (useremail != '' && password != '') {
      console.log('in dispach func');
      dispatch(loginRequest({params, setMyLoginError}));
    } else {
      alert('Enter login details');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LoginMainScreen />
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
  },
  image: {
    flex: 1,
  },
  img: {
    alignSelf: 'center',
    resizeMode: 'center',
  },
  enterphonetxt: {
    textAlign: 'center',
    fontWeight: 'normal',
    color: '#fff',
    fontSize: 17,
  },
});
