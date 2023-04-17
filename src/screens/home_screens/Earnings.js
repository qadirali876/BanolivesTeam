import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
//----------Vector Icons----------//
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ApiCallToken } from '../../Services/Apis';
import { useSelector } from 'react-redux';
// import {headings, white} from '../../utils/Styles';

const data = [
  {
    name: 'Bonuses',
    image: require('../../assets/images/earning1.png'),
    name1: '+20',
  },
  {
    name: 'Withdraw',
    image: require('../../assets/images/earning1.png'),
    name1: '+20',
  },
  {
    name: 'Germs Refounding',
    image: require('../../assets/images/earning1.png'),
    name1: '+20',
  },
  {
    name: 'Others',
    image: require('../../assets/images/earning1.png'),
    name1: '+20',
  },
]


const Earning = () => {

  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);

  const [Data, setData] = useState([])
  const userData = useSelector(state => state.auth.userData);
  const navigation = useNavigation()
  const GetHostRecord = async () => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'list/host/reward',
        verb: 'GET',
      });
      console.log("GetHostRecord", res?.data?.[0])
       setData(res?.data?.[0])
    } catch (error) {
      console.log('ERROR GetHostRecord ====>>>', error);
    }
  };

  useEffect(() => {
    GetHostRecord()
  }, [])
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={['#3494E6', '#EC6EAD']}
          style={{
            borderBottomLeftRadius: 150,
            borderBottomRightRadius: 20,
          }}>
          <View style={{ ...styles.header }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '3%',
                marginVertical: '4%',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginHorizontal: '2%' }}>
                  <AntDesign
                    onPress={() => {
                      navigation.goBack();
                    }}
                    name="left"
                    size={24}
                    color="#fff"
                    style={{
                      top: 1,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    ...styles.headertxt,
                  }}>
                  Earning Records
                </Text>
              </View>
              <Text
                onPress={() => {
                  navigation.goBack();
                }}
                style={{
                  // ...headings.h5,
                  color: '#ffff',
                  fontSize: 16,
                  fontWeight: 'normal',
                }}>
                Close
              </Text>
            </View>
          </View>

          <View style={{ ...styles.view }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{ color: '#fff', marginLeft: 15, marginTop: 5 }}>
                August 2022
              </Text>
              <Text
                onPress={() => {
                  navigation.navigate('Earning_Records');
                }}
                style={{
                  color: 'white',
                  marginRight: 15,
                  marginTop: 5,
                  backgroundColor: '#ad5389',
                  padding: 5,
                  borderRadius: 5,
                  fontSize: 11,
                }}>
                Monthly Earnings Records
              </Text>
            </View>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ ...styles.img}}
              source={require('../../assets/images/earning1.png')} />
            <Text style={{ fontSize: 47, fontWeight: '800', color: 'white', marginLeft: 5 }}>{userUpdatedData?.coins}</Text>
          </View> 
            <Text style={{ ...styles.txt1 }}>Expected Earnings</Text>
            <Text style={{ ...styles.txt2 }}>(This Month)</Text>
          </View>
        </LinearGradient>
        <View style={styles.View1}>
          <TouchableOpacity
            style={styles.View2}>
           <View style={{ height: 40, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ height: 20, width: 20, right: 5 }}
              source={require('../../assets/images/earning1.png')} />
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>{userUpdatedData?.coins}</Text>
          </View>
          <Text style={{ color: 'white',fontSize: 13, }}>Actual Earning</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.View2}>
           <View style={{ height: 40, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ height: 20, width: 20, right: 5 }}
              source={require('../../assets/images/earning1.png')} />
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>{Data?.total_time}h</Text>
          </View>
          <Text style={{ color: 'white',fontSize: 14, }}>Live Video Duration</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.View2}>
           <View style={{ height: 40, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ height: 20, width: 20, right: 5 }}
              source={require('../../assets/images/earning1.png')} />
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>{Data?.host_total_rewards}h</Text>
          </View>
          <Text style={{ color: 'white',fontSize: 13,}}>Valid Hours</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: 'center' }}>
          <View style={{ height: 40, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ height: 20, width: 20, right: 5 }}
              source={require('../../assets/images/earning1.png')} />
            <Text style={{ fontSize: 20, fontWeight: '800', color: 'white' }}>+20</Text>
          </View>
          <Text style={{ color: 'white' }}>Estimate Basic Salary</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={(item, index) => (
            <View style={{}}>
              <View style={{ ...styles.list }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                    // flex: 1,
                  }}>
                  <Text style={{ ...styles.bns }}>{item.item.name}</Text>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginRight: 10,
                      alignItems: 'center',
                      //   backgroundColor: 'blue',
                    }}>
                    <Image
                      source={item.item.image}
                      style={{
                        height: 18,
                        width: 18,
                        alignSelf: 'center',
                        // backgroundColor: 'red',
                      }}
                      resizeMode={'stretch'}
                    />
                  {item.item.name === 'Bonuses' &&  <Text style={{ ...styles.num }}>{Data?.rewarded_coins}</Text>}
                  {item.item.name === 'Withdraw' &&  <Text style={{ ...styles.num }}>{userUpdatedData?.coins}</Text>}
                   {/* {index === 2 &&   <Text style={{ ...styles.num }}>{item.item.name1}</Text>} */}
                    <AntDesign
                      name="right"
                      size={26}
                      style={{ marginTop: 2, color: '#fff' }}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
        />
        <View style={{ right: 9, top: 10 }}>
          <Text style={{ ...styles.qut }}>
            How to calculate monthly earning?
          </Text>
          <Text style={{ ...styles.ans }}>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Text>
          <Text style={{ ...styles.qut }}>
            How to calculate the basic Salary?
          </Text>
          <Text style={{ ...styles.ans }}>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </Text>
          <Text style={{ ...styles.qut }}>Note</Text>
          <Text style={{ ...styles.ans }}>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38'
  },
  View1: {
    height: 150,
    width: '100%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  View2: {
    height: '60%',
    width: '30%',
    backgroundColor: '#383F52',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
  },
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 0,
  },
  headertxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'normal',
    marginLeft: '3%',
    color: '#fff',
  },
  view: {
    // height: 200,
    // position: "absolute",
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: '5%',
  },
  img: {
    height: widthPercentageToDP(18),
    width: widthPercentageToDP(18),
    alignSelf: 'center',
    // marginTop: heightPercentageToDP(4),
    // backgroundColor: 'red',
  },
  txt1: {
    // ...headings.h7,
    color: '#fff',
    textAlign: 'center',
    top: 5,
  },
  txt2: {
    // ...headings.h8,
    color: '#C6C6C6',
    textAlign: 'center',
    top: 5,
  },
  list: {
    backgroundColor: 'transparent',
    height: 50,
    width: '100%',
    top: 10,
    marginBottom: '2%',
  },
  bns: {
    // ...headings.h7,
    // top: 10,
    left: 12,
    color: 'white',
  },
  num: {
    // ...headings.h6,
    color: '#fff',
    // top: 10,
    marginLeft: '2%',
  },
  qut: {
    color: '#fff',
    fontSize: 16,
    left: 16,
    color: 'white',
  },
  ans: {
    left: 17,
    color: '#a8c0ff',
    fontSize: 13,
  },
});

export default Earning;