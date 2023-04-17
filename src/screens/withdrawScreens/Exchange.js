import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Colors, primaryColor, secondaryColor} from '../../utils/Styles';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {updateUserData} from '../../Redux/Actions';
import {useFocusEffect} from '@react-navigation/native';

const Exchange = ({navigation, route}) => {
  const userData = useSelector(state => state.auth.userData);
  const [selectBtn, setselectBtn] = useState(null);
  const [btnDisable, setbtnDisable] = useState(true);
  const [selectedPair, setselectedPair] = useState(null);
  const selectCoinExchange = [
    {coins: '100,000', dollar: '10'},
    {coins: '500,000', dollar: '50'},
  ];

  const {coinsUser} = route.params;

  const StoreCoins = () => {
    AsyncStorage.setItem('@CoinExchange', JSON.stringify(selectedPair));
  };
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);
  const dispatch = useDispatch();
  const [allCoins, setallCoins] = useState(coinsUser);
  const limitCoins = userUpdatedData?.coins;
  // console.log('***************************',selectedPair)
  // useFocusEffect(
  //     useCallback(() => {
  //         UpdateUserData()
  //     }, []),
  // );
  // const UpdateUserData = async () => {
  //     try {
  //         await fetch('https://www.banoLive.com/api/user/updated-data', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-type': 'application/json',
  //                 Authorization: `Bearer ${userData.token}`,
  //             },

  //             body: JSON.stringify({ id: userData.user.id }),
  //         })
  //             .then(res => res.json())
  //             .then(json => { dispatch(updateUserData(json.data)) });
  //     } catch (e) {
  //         console.log('saga login error -- ', e.toString());
  //     }
  // };

  const Calculation = () => {
    const walletprice = userUpdatedData.wallet;
    const selectPrice = selectedPair == null ? 0 : selectedPair == 0 ? 10 : 50;
    return walletprice + selectPrice;
  };
  const sendData = {
    ...userUpdatedData,
    coins:
      selectedPair == null
        ? userUpdatedData.coins
        : selectedPair == 0
        ? userUpdatedData.coins - 100000
        : userUpdatedData.coins - 500000,
    wallet: Calculation(),
  };
  // dispatch(updateUserData(sendData))
  const confirmCoin = () => {
    StoreCoins() +
      navigation.navigate('WithdrawMethod', {
        amount: Math.floor(allCoins / 10000).toString(),
      });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/Newprofilebg.png')}
      resizeMode={'stretch'}
      style={{flex: 1}}>
      <LinearGradient
        colors={['#4568DC', '#B06AB3']}
        style={{
          ...styles.header,
        }}>
        <TouchableOpacity activeOpacity={1}>
          <AntDesign
            onPress={() => navigation.goBack()}
            name="left"
            size={20}
            style={{alignSelf: 'center', color: '#fff'}}
          />
        </TouchableOpacity>
        <Text style={{...styles.headertxt}}>Exchange Coins</Text>
      </LinearGradient>
      <LinearGradient
        colors={['#4568DC', '#B06AB3']}
        style={{
          height: 120,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 8,
          marginTop: 18,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: secondaryColor, fontSize: 20, fontWeight: '900'}}>
          {/* {selectedPair == null ? 0 : selectedPair == 0 ? 10 : 50} */}
          {Math.floor(limitCoins / 10000) * 10000}
        </Text>
        <Image
          source={require('../../assets/images/coinA.png')}
          style={{width: 20, height: 20, marginTop: 4}}
          resizeMode={'contain'}
        />
      </LinearGradient>
      {/* <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
          Your Current Coins
        </Text>
      </View>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
          Coins : {userUpdatedData?.coins}
        </Text>
      </View> */}
      <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
          Number of exchange
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 14,
        }}>
        {/* {selectCoinExchange.map((item, index) => (
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#fff',
                width: '38%',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 4,
                alignItems: 'center',
              },
              selectBtn == index && {
                backgroundColor: '#D4CEC3',
                width: '38%',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 4,
                alignItems: 'center',
                borderWidth: 2,
                borderColor: '#B06AB3',
              },
            ]}
            activeOpacity={userUpdatedData?.coins <= 100000 ? 1 : 0.6}
            onPress={() => {
              userUpdatedData?.coins <= 100000
                ? setselectBtn(null)
                : setselectBtn(index) +
                  setbtnDisable(false) +
                  setselectedPair(index);
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/coinA.png')}
                style={{width: 14, height: 14}}
                resizeMode={'contain'}
              />
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                {item.coins}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                ${' '}
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                {item.dollar}
              </Text>
            </View>
          </TouchableOpacity>
        ))} */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '98%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              borderRadius: 6,
              width: '20%',
              alignSelf: 'center',
              marginTop: 20,
            }}
            activeOpacity={0.6}
            disabled={Math.floor(allCoins / 10000) == 0 ? true : false}
            onPress={() => {
              if (allCoins != 0) {
                setallCoins(allCoins - 10000);
              } else {
                setallCoins(0);
              }
            }}
            onLongPress={() => setallCoins(50)}>
            <LinearGradient
              colors={['#4568DC', '#B06AB3']}
              style={{
                flex: 1,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'white'}}>
                -
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={[
              {
                backgroundColor: '#fff',
                width: '38%',
                paddingVertical: 10,
                paddingHorizontal: 10,
                borderRadius: 4,
                alignItems: 'center',
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/coinA.png')}
                style={{width: 14, height: 14}}
                resizeMode={'contain'}
              />
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                {Math.floor(allCoins / 10000) * 10000}
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                ${' '}
              </Text>
              <Text style={{fontSize: 14, color: 'black', fontWeight: '600'}}>
                {Math.floor(allCoins / 10000)}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              borderRadius: 6,
              width: '20%',
              alignSelf: 'center',
              marginTop: 20,
            }}
            activeOpacity={0.6}
            disabled={
              Math.floor(allCoins / 10000) == Math.floor(limitCoins / 10000)
                ? true
                : false
            }
            onPress={() => {
              setallCoins(allCoins + 10000);
            }}>
            <LinearGradient
              colors={['#4568DC', '#B06AB3']}
              style={{
                flex: 1,
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 12, fontWeight: '900', color: 'white'}}>
                +
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
          Rule description
        </Text>
      </View>
      <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '400'}}>
          1. Redeem up to 500,000 points per day.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 6,
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}
        disabled={Math.floor(allCoins / 10000) == 0 ? true : false}
        activeOpacity={0.6}
        onPress={() => confirmCoin()}>
        <LinearGradient
          colors={['#4568DC', '#B06AB3']}
          style={{
            flex: 1,
            borderRadius: 6,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}}>
            Confirm
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'red',
    // height: 46,
    paddingVertical: heightPercentageToDP('2%'),
    alignItems: 'center',
  },
  headertxt: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    // marginTop: 6,
  },
});

export default Exchange;
