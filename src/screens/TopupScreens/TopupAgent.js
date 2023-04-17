import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import {
  black,
  headings,
  primaryColor,
  secondaryColor,
  white,
} from '../../utils/Styles';
import {Divider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import HomeModal from '../reuseable_Component/HomeModal';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
const Regions = [
  {
    id: 1,
    name: 'Pakistan',
  },
  {
    id: 2,
    name: 'India',
  },
  {
    id: 3,
    name: 'UK',
  },
  {
    id: 4,
    name: 'Sri Lanka',
  },
  {
    id: 6,
    name: 'Bangladesh',
  },
  {
    id: 7,
    name: 'Saudi-Arabia',
  },
  {
    id: 8,
    name: 'Qatar',
  },
  {
    id: 9,
    name: 'Veitnam',
  },
  {
    id: 10,
    name: 'Singapore',
  },
  {
    id: 11,
    name: 'Thailand',
  },
  {
    id: 12,
    name: 'China',
  },
  {
    id: 13,
    name: 'Philipine',
  },
  {
    id: 14,
    name: 'UAE',
  },
  {
    id: 15,
    name: 'Turkey',
  },
  {
    id: 16,
    name: 'Nepal',
  },
  {
    id: 17,
    name: 'Algeria',
  },
  {
    id: 18,
    name: 'Tunisia',
  },
  {
    id: 19,
    name: 'Miser',
  },
  {
    id: 20,
    name: 'Syria',
  },
  {
    id: 21,
    name: 'Morocco',
  },
  {
    id: 22,
    name: 'Lebanon',
  },
  {
    id: 23,
    name: 'Indonesia',
  },
  {
    id: 24,
    name: 'Oman',
  },
  {
    id: 25,
    name: 'Germany',
  },
  {
    id: 26,
    name: 'Greece',
  },
  {
    id: 27,
    name: 'Brazil',
  },
  {
    id: 28,
    name: 'Egypt',
  },
];
export default function TopupAgent() {
  const navigation = useNavigation();
  const modal2Ref = React.createRef();
  const [selectPkBtn, setselectPkBtn] = useState('Pakistan');
  const [selectPkBtnA, setselectPkBtnA] = useState(0);
  const [mobileNumber, setMobileNumber] = useState('7415738162');
  const [whatsAppMsg, setWhatsAppMsg] = useState('');
  const [mobileNumber2, setMobileNumber2] = useState('3137282182');
  const [whatsAppMsg2, setWhatsAppMsg2] = useState('');
  const [mobileNumber3, setMobileNumber3] = useState('6572799341');
  const [whatsAppMsg3, setWhatsAppMsg3] = useState('');
  const [mobileNumber4, setMobileNumber4] = useState('430839971');
  const [whatsAppMsg4, setWhatsAppMsg4] = useState('');
  const initiateWhatsApp = () => {
    // if (mobileNumber.length != 11) {
    //   alert('Please insert correct WhatsApp number');
    //   return;
    // }
    let url =
      'whatsapp://send?text=' + whatsAppMsg + '&phone=44' + mobileNumber;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
  const initiateWhatsApp2 = () => {
    // if (mobileNumber.length != 10) {
    //   alert('Please insert correct WhatsApp number');
    //   return;
    // }
    let url =
      'whatsapp://send?text=' + whatsAppMsg2 + '&phone=92' + mobileNumber2;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
  const initiateWhatsApp3 = () => {
    // if (mobileNumber.length != 10) {
    //   alert('Please insert correct WhatsApp number');
    //   return;
    // }
    let url =
      'whatsapp://send?text=' + whatsAppMsg3 + '&phone=96' + mobileNumber3;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };
  const initiateWhatsApp4 = () => {
    // if (mobileNumber.length != 10) {
    //   alert('Please insert correct WhatsApp number');
    //   return;
    // }
    let url =
      'whatsapp://send?text=' + whatsAppMsg4 + '&phone=97' + mobileNumber4;
    Linking.openURL(url)
      .then(data => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color={white}></Ionicons>
        </TouchableOpacity>
        <Text style={{...headings.h3, color: 'white'}}>Topup Agent</Text>
      </View>
      <ScrollView
        style={{
          height: '100%',
          width: '100%',
        }}>
        <ImageBackground
          source={require('../../assets/images/topupAgent/topupbg.png')}
          resizeMode="cover">
          <View style={{height: 400, width: '100%'}}></View>
          <View style={styles.topupcard}>
            <LinearGradient
              colors={['#FFE266', '#FFBB2D']}
              style={styles.linearGradient}>
              <Text style={styles.topupText}>Special Topup Offer</Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text
                  style={{
                    width: '50%',
                    color: black,
                    fontSize: 16,
                    padding: 10,
                  }}>
                  Abhi TopUp Karain aur Jetain Shandaar Rewards!
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('TopupDetails')}
                  style={{
                    backgroundColor: '#EB352A',
                    width: 120,
                    height: 40,
                    borderRadius: 30,
                    alignSelf: 'center',
                    justifyContent: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignSelf: 'center',

                      justifyContent: 'center',
                    }}>
                    <Text style={{color: secondaryColor}}>Details</Text>
                    <MaterialCommunityIcons
                      name="chevron-double-right"
                      size={20}
                      color={white}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </View>
          <TouchableOpacity
            onPress={() => {
              modal2Ref.current.toggleModal();
            }}
            style={{
              marginVertical: 20,
              backgroundColor: '#FFDE60',
              width: 190,
              height: 40,
              borderRadius: 30,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
              }}>
              <Text style={{color: 'black'}}>{selectPkBtn}</Text>
              <AntDesign
                name="caretdown"
                size={10}
                color={black}
                style={{alignSelf: 'center'}}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.agentcard}>
          <LinearGradient
            colors={['#FFE266', '#FFBB2D']}
            style={styles.linearGradient}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Mohsin Malik
                </Text>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                  }}>
                  +44 7415 738162
                </Text>
              </View>
              <TouchableOpacity
                onPress={initiateWhatsApp}
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 40,
                  borderRadius: 30,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Image
                    source={require('../../assets/images/whatsapp.png')}
                    style={{height: 25, width: 25}}
                  />
                  <Text
                    style={{
                      color: 'green',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Message Us!
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Divider
              bold="2"
              style={{
                backgroundColor: '#000000',
                marginHorizontal: 20,
                opacity: 0.2,
              }}
            />
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  M. Ramzan
                </Text>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                  }}>
                  +923137282182
                </Text>
              </View>
              <TouchableOpacity
                onPress={initiateWhatsApp2}
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 40,
                  borderRadius: 30,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Image
                    source={require('../../assets/images/whatsapp.png')}
                    style={{height: 25, width: 25}}
                  />
                  <Text
                    style={{
                      color: 'green',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Message Us!
                  </Text>
                </View>
              </TouchableOpacity>
            </View> */}
            <Divider
              bold="2"
              style={{
                backgroundColor: '#000000',
                marginHorizontal: 20,
                opacity: 0.2,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Shams ur Rehman
                </Text>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                  }}>
                  +96 6572799341
                </Text>
              </View>
              <TouchableOpacity
                onPress={initiateWhatsApp3}
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 40,
                  borderRadius: 30,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Image
                    source={require('../../assets/images/whatsapp.png')}
                    style={{height: 25, width: 25}}
                  />
                  <Text
                    style={{
                      color: 'green',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Message Us!
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Divider
              bold="2"
              style={{
                backgroundColor: '#000000',
                marginHorizontal: 20,
                opacity: 0.2,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}>
              <View>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  Mejbah Ul Haqe
                </Text>
                <Text
                  style={{
                    color: black,
                    fontSize: 16,
                  }}>
                  +97430839971
                </Text>
              </View>
              <TouchableOpacity
                onPress={initiateWhatsApp4}
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 40,
                  borderRadius: 30,
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                  <Image
                    source={require('../../assets/images/whatsapp.png')}
                    style={{height: 25, width: 25}}
                  />
                  <Text
                    style={{
                      color: 'green',
                      alignSelf: 'center',
                      marginLeft: 5,
                    }}>
                    Message Us!
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <Divider
              bold="2"
              style={{
                backgroundColor: '#000000',
                marginHorizontal: 20,
                opacity: 0.2,
              }}
            />
          </LinearGradient>
        </View>
      </ScrollView>
      <HomeModal
        view={
          <View
            style={{
              backgroundColor: '#FBDB65',
              height: 400,
              width: 300,
              alignSelf: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
              }}>
              <Text style={{fontSize: 17}}>Please Select</Text>
              <AntDesign name="caretdown" size={16} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {Regions.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    setselectPkBtn(item.name);
                    setselectPkBtnA(index);

                    modal2Ref.current.toggleModal();
                  }}>
                  <Text
                    style={[
                      styles.RegionList,
                      selectPkBtnA == index && {
                        borderColor: '#EB352A',
                        color: black,
                        fontWeight: '500',
                      },
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
        ref={modal2Ref}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9B7833',
  },
  topview: {
    flexDirection: 'row',
    paddingTop: 10,
    backgroundColor: '#E3A542',
    paddingBottom: 10,
  },
  topupcard: {
    alignSelf: 'center',
    width: '90%',
    height: 150,
    borderColor: '#EB352A',
    borderWidth: 1,
    borderRadius: 15,
  },
  agentcard: {
    alignSelf: 'center',
    width: '90%',
    // height: 300,
    borderColor: '#EB352A',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 40,
  },
  topupText: {
    alignSelf: 'center',
    color: black,
    fontSize: 22,
    fontWeight: '500',
    marginTop: 15,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 15,
  },
  RegionList: {
    marginVertical: 8,
    fontSize: 18,
    borderBottomWidth: 0.3,
    color: 'black',
    paddingLeft: 10,
  },
});
