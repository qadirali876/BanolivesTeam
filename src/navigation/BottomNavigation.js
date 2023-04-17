import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Password from '../screens/auth_Screens/Password';
import Home from '../screens/home_screens/Home';
import SignUp_With_Number from '../screens/auth_Screens/SignUp_With_Number';
import Stream from '../screens/stream_Screen/Streams';
import Record from '../screens/stream_Screen/Record';
import Profile from '../screens/home_screens/Profile';
import ChatNavigation from '../screens/ChatScreens/ChatNavigation';
import Notifications from '../screens/home_screens/Notifications';
import Earning from '../screens/home_screens/Earnings';
import Apply_Form from '../screens/home_screens/Apply_Form';
import Earning_Records from '../screens/home_screens/Earning_Records';
import Offical_Talent from '../screens/home_screens/Official_Talent';
import NewProfile from '../screens/home_screens/NewProfile';
import EditProfile from '../screens/home_screens/EditProfile';

import WithdrawMain from '../screens/withdrawScreens/WithdrawMain';
import WithdrawMethod from '../screens/withdrawScreens/WithdrawMethod';
import Details from '../screens/withdrawScreens/Details';
import MainWealthClass from '../screens/wealthClass/MainWealthClass';
import Gifts01 from '../screens/Store/Store';
import Reels1 from '../screens/home_screens/Reels1';
import Topup from '../screens/home_screens/Topup';
import ComingSoon from '../screens/reuseable_Component/ComingSoon';
const HomeScreenStack = createNativeStackNavigator();

function HomeScreenStackScreen() {
  return (
    <HomeScreenStack.Navigator screenOptions={{headerShown: false}}>
      <HomeScreenStack.Screen name="Home" component={Home} />
      {/* <HomeScreenStack.Screen name="GoLive" component={Reels1} /> */}
    </HomeScreenStack.Navigator>
  );
}

const ProfileScreenStack = createNativeStackNavigator();
function ProfileScreenStackScreen() {
  return (
    <ProfileScreenStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileScreenStack.Screen name="Profile" component={NewProfile} />
      <ProfileScreenStack.Screen name="EditProfile" component={EditProfile} />

      <ProfileScreenStack.Screen name="Earnings" component={Earning} />
      <ProfileScreenStack.Screen name="Apply_Form" component={Apply_Form} />
      <ProfileScreenStack.Screen name="WithdrawMain" component={WithdrawMain} />
      {/* <ProfileScreenStack.Screen name="Store" component={Gifts01} /> */}
      <ProfileScreenStack.Screen
        name="MainWealthClass"
        component={MainWealthClass}
      />
      <ProfileScreenStack.Screen name="Details" component={Details} />
      <ProfileScreenStack.Screen
        name="WithdrawMethod"
        component={WithdrawMethod}
      />

      {/* <ProfileScreenStack.Screen name="Settings" component={Settings} /> */}
      <ProfileScreenStack.Screen
        name="Offical_Talent"
        component={Offical_Talent}
      />
      <ProfileScreenStack.Screen
        name="Earning_Records"
        component={Earning_Records}
      />
    </ProfileScreenStack.Navigator>
  );
}

const PasswordScreenStack = createNativeStackNavigator();

function PasswordScreenStackScreen() {
  return (
    <PasswordScreenStack.Navigator screenOptions={{headerShown: false}}>
      <PasswordScreenStack.Screen name="SplashScreen" component={Record} />
    </PasswordScreenStack.Navigator>
  );
}

const StreamScreenStack = createNativeStackNavigator();
function StreamScreenStackScreen() {
  return (
    <StreamScreenStack.Navigator screenOptions={{headerShown: false}}>
      <StreamScreenStack.Screen name="Home" component={Stream} />
    </StreamScreenStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 3,
          backgroundColor: '#242841',
          height: 50,
          ...styles.shadow,
          // borderRadius: 12,
          elevation: 15,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreenStackScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Feather
                name="home"
                size={focused ? 13 : 10}
                style={{color: focused ? '#c471ed' : 'white'}}
              />
              {/* <Image source={require('../assets/images/Vector.png')}
                                style={{ height: 30, width: 30, tintColor: focused ? "#E93025" : "white", }}
                                focused={focused}
                            /> */}
              <Text
                style={{
                  color: focused ? '#c471ed' : 'white',
                  fontSize: focused ? 13 : 10,
                  fontFamily: 'Lato-Regular',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Streams"
        component={StreamScreenStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialIcons
                name="live-tv"
                size={focused ? 13 : 10}
                style={{color: focused ? '#c471ed' : 'white'}}
                focused={focused}
              />

              <Text
                style={{
                  color: focused ? '#c471ed' : 'white',
                  fontSize: focused ? 13 : 10,
                }}>
                Streams
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons
                name="message-text-outline"
                size={focused ? 13 : 10}
                style={{color: focused ? '#c471ed' : 'white'}}
                focused={focused}
              />
              <Text
                style={{
                  color: focused ? '#c471ed' : 'white',
                  fontSize: focused ? 12 : 10,
                }}>
                Messages
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {/* <Image source={require('../assets/images/info.png')}
                                style={{ height: 30, width: 30, tintColor: focused ? "#5499C7" : "#154360", }}
                                focused={focused}
                            /> */}
              <Entypo
                name="notification"
                size={focused ? 13 : 10}
                style={{color: focused ? '#c471ed' : 'white'}}
                focused={focused}
              />
              <Text
                style={{
                  color: focused ? '#c471ed' : 'white',
                  fontSize: focused ? 12 : 10,
                }}>
                Notifications
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profiles"
        component={ProfileScreenStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              {/* <Image source={require('../assets/images/info.png')}
                                style={{ height: 30, width: 30, tintColor: focused ? "#5499C7" : "#154360", }}
                                focused={focused}
                            /> */}
              <AntDesign
                name="profile"
                size={focused ? 13 : 10}
                style={{color: focused ? '#c471ed' : 'white'}}
                focused={focused}
              />
              <Text
                style={{
                  color: focused ? '#c471ed' : 'white',
                  fontSize: focused ? 13 : 10,
                }}>
                Profiles
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 5,
      height: 16,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
    elevation: 16,
  },
});
