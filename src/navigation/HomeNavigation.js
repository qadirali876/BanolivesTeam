import * as React from 'react';
//-----------Navigation-----------//
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//----------Auth Screens----------//
import Splash from '../screens/auth_Screens/Splash';
import Login_With_SocialMedia from '../screens/auth_Screens/Login_With_SocailMedia';
import Home from '../screens/home_screens/Home';
import BottomNavigation from './BottomNavigation';
import Auth from './AuthNavigation';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigations from './Navigator';

const HomeNavigation = () => {
  const token = useSelector(state => state.auth.userToken);
  const userData = useSelector(state => state.auth.userData)
  React.useEffect(() => {
     console.log('here is token', token );
  }, []);

  return (
    <NavigationContainer>
      {token ? <HomeNavigations /> : <Auth />}
      {/* <BottomNavigation /> */}
    </NavigationContainer>
  );
};

export default HomeNavigation;
