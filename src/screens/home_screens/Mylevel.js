import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  linearGradient,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useState, useCallback} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserData, updateUserLevel} from '../../Redux/Actions';
import {UserProfileContext} from '../../context/userProfile';

const Mylevel = ({navigation}) => {
  const userData = useSelector(state => state.auth.userData);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  const userUpdatedLevel = useSelector(state => state.homeRed.userUpdatedLevel);
  const hostUpdatedLevel = useSelector(state => state.homeRed.hostUpdatedLevel);

  const [profileGrid, setProfileGrid] = useState([
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Newbie Gift',
      name: 'Top UP',
      Button: 'Level 01',
      clr: 'red',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: '3 DAYS VIP',
      name: 'Earnings',
      Button: 'Level 01',
      clr: 'red',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Party Room',
      name: 'My Tasks',
      Button: 'Level 02',
      clr: 'red',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Video Streaming',
      name: 'Top UP',
      Button: 'Level 02',
      clr: 'red',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Poster on Home',
      name: 'Earnings',
      Button: 'Level 07',
      clr: 'green',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: '1st Entrance Eff..',
      name: 'My Tasks',
      Button: 'Level 07',
      clr: 'green',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Bronze Badge',
      name: 'Top UP',
      Button: 'Level 10',
      clr: 'green',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: '2ndEntrance Eff..',
      name: 'Earnings',
      Button: 'Level 15',
      clr: 'green',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Elite Costumer',
      name: 'My Tasks',
      Button: 'Level 15',
      clr: 'orange',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: '3rd Entrance Eff..',
      name: 'Top UP',
      Button: 'Level 20',
      clr: 'orange',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Bronze Profile F..',
      name: 'Earnings',
      Button: 'Level 20',
      clr: 'orange',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Silver Badge',
      name: 'My Tasks',
      Button: 'Level 20',
      clr: 'orange',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: '4th Entrance Eff..',
      name: 'Earnings',
      Button: 'Level 25',
      clr: 'grey',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Chat Bubble 1',
      name: 'My Tasks',
      Button: 'Level 25',
      clr: 'grey',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Silver Prome F..',
      name: 'Top UP',
      Button: 'Level 30',
      clr: 'grey',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Glode Badge',
      name: 'Earnings',
      Button: 'Level 30',
      clr: 'grey',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Dever To Car E..',
      name: 'My Tasks',
      Button: 'Level 30',
      clr: 'black',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Chat Bubble 2',
      name: 'My Tasks',
      Button: 'Level 35',
      clr: 'black',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Prome Frame',
      name: 'Earnings',
      Button: 'Level 40',
      clr: 'black',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Platinum Badge',
      name: 'My Tasks',
      Button: 'Level 40',
      clr: 'black',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Chat Bubble 3',
      name: 'Top UP',
      Button: 'Level 45',
      clr: 'blue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Crystar Profile Fr.',
      name: 'Earnings',
      Button: 'Level 50',
      clr: 'blue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Diamond Badge',
      name: 'My Tasks',
      Button: 'Level 50',
      clr: 'blue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Chat Bubble 4',
      name: 'Earnings',
      Button: 'Level 55',
      clr: 'blue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Legend Profile Fr.',
      name: 'My Tasks',
      Button: 'Level 60',
      clr: 'dodgerblue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Admantium Bad.',
      name: 'Top UP',
      Button: 'Level 60',
      clr: 'dodgerblue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Chat Bubble 5',
      name: 'Earnings',
      Button: 'Level 65',
      clr: 'dodgerblue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Captain Badge',
      name: 'My Tasks',
      Button: 'Level 60',
      clr: 'dodgerblue',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Captain Profile F. ',
      name: 'Earnings',
      Button: 'Level 60',
      clr: 'red',
    },
    {
      id: require('../../assets/images/mylevel/1.png'),
      user: 'Chat Bubble 6',
      name: 'My Tasks',
      Button: 'Level 65',
      clr: 'red',
    },
  ]);

  useEffect(() => {
    console.log();
  }, []);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerView}>
        <ImageBackground
          style={styles.imgView}
          source={require('../../assets/images/mylevel/red.png')}>
          <ImageBackground style={styles.logoView}>
            <Text style={styles.txt}>𝙻𝚎𝚟𝚎𝚕</Text>
            <Text style={styles.txt}>{userUpdatedLevel}</Text>
          </ImageBackground>
          <Text style={styles.txt2}>258000/300000</Text>
          <View style={styles.View1}>
            <View style={styles.yellowView} />
          </View>
          <View style={styles.View2}>
            <Text style={styles.txt3}>Lv 3</Text>
            <Text style={styles.txt3}>Lv 4</Text>
          </View>
        </ImageBackground>
      </View>
      <ImageBackground
        source={require('../../assets/images/mylevel/Skyblue.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.txtView}>
          <Text style={styles.txtlvl}>𝙼𝚢 𝙻𝚎𝚟𝚎𝚕</Text>
        </View>

        <FlatList
          renderItem={({item, index}) => (
            <TouchableOpacity style={styles.gridItem}>
              <View>
                <ImageBackground
                  source={item.circle}
                  style={styles.itembackgroungcircle}>
                  <Image
                    source={item.id}
                    style={{height: 59, width: 59, borderRadius: 150 / 1}}
                  />
                </ImageBackground>
              </View>
              <Text
                style={{
                  // ...headings.h7,
                  color: 'white',
                  alignSelf: 'center',
                  fontSize: 11,
                  top: 10,
                }}>
                {item.user}
              </Text>

              <TouchableOpacity
                style={[
                  styles.buttView,
                  {
                    backgroundColor: item.clr,
                  },
                ]}>
                <Text style={{color: 'white'}}>{item.Button}</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={profileGrid}
          contentContainerStyle={{
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default Mylevel;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    marginBottom: '75%',
  },
  imgView: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    height: 270,
    width: '100%',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoView: {
    height: 140,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  txt2: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  yellowView: {
    height: '100%',
    width: '50%',
    backgroundColor: 'yellow',
    borderRadius: 150 / 2,
  },
  View1: {
    height: '4%',
    width: '80%',
    backgroundColor: 'grey',
    flexDirection: 'row',
    borderRadius: 150 / 1,
  },
  txt3: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  View2: {
    height: '10%',
    width: '80%',
    // backgroundColor:'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtlvl: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white',
    marginLeft: 20,
  },
  itembackgroungcircle: {
    height: 50,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    height: heightPercentageToDP(19),
    width: widthPercentageToDP(29),
    backgroundColor: '#242841',
    marginHorizontal: '2%',
    marginVertical: '2%',

    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  txtView: {
    height: '10%',
    width: '100%',
    // backgroundColor:'red',
    justifyContent: 'center',
  },
  buttView: {
    height: '18%',
    width: '70%',
    backgroundColor: '#E92F24',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 5,
    borderRadius: 150 / 2,
    marginVertical: 15,
  },
});
