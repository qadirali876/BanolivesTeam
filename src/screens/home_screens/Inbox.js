import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import TickIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {headings} from '../../utils/Styles';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ForwardIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Inbox = () => {
  const navigation = useNavigation();
  const [check, setcheck] = useState(0);
  const Data = [
    {
      id: 0,
      name: 'All Users',
    },
    {
      id: 1,
      name: 'Users on Followed List',
    },
    {
      id: 2,
      name: 'High Level Users',
    },
  ];
  const ItemStyle = (props, index) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          setcheck(props.item.id);
        }}>
        <View style={styles.itemBox}>
          <Text style={styles.itemTxt}>{props.item.name}</Text>
          {props.item.id === check ? (
            <TickIcon
              size={20}
              name="check"
              color={'#B06AB3'}
              style={{paddingRight: '3%'}}
            />
          ) : null}
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
          <Text style={styles.settingtxt}>Inbox</Text>
        </LinearGradient>
        <View style={styles.msgBox}>
          <Text style={styles.msgTxt}>Accept Private Message From</Text>
        </View>
        <View>
          <FlatList data={Data} renderItem={ItemStyle} />
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.ListBox}>
              <Text style={styles.ListTxt}>User Level</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.LvTxt}>Lv.4</Text>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ListBox}>
              <Text style={styles.ListTxt}>Talent Level</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.CrownView}>
                  <Image
                    source={require('../../assets/images/crown.png')}
                    style={{height: 11, width: 11}}
                  />
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10,
                    }}>
                    06
                  </Text>
                </View>
                <ForwardIcon name="right" size={20} color={'white'} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: heightPercentageToDP('2%')}}>
          <Text style={styles.msgTxt}>
            User can still receive private message from friends
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={[styles.logbox]}>
            <Text style={styles.power}>
              Powered by LimeTechnologies Pvt Ltd
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
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
  msgBox: {
    paddingVertical: heightPercentageToDP('2%'),
    borderBottomWidth: 1,
    borderColor: '#303749',
  },
  msgTxt: {
    color: '#9293B0',
    marginHorizontal: widthPercentageToDP('2.5%'),
    fontSize: 14,
  },
  itemBox: {
    paddingVertical: heightPercentageToDP('2.5%'),
    borderBottomWidth: 1,
    borderColor: '#303749',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP('3%'),
  },
  itemTxt: {
    color: 'white',
  },
  ListBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPercentageToDP('3%'),
    paddingVertical: heightPercentageToDP('2.5%'),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#303749',
  },
  ListTxt: {
    color: 'white',
  },
  LvTxt: {
    color: 'white',
    marginLeft: 5,
    backgroundColor: 'red',
    paddingHorizontal: 7,
    borderRadius: 10,
    fontSize: 10,
    marginHorizontal: widthPercentageToDP('1%'),
  },
  CrownView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    backgroundColor: '#FE9E00',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 6,
    marginHorizontal: widthPercentageToDP('1%'),
  },
  logbox: {
    paddingVertical: heightPercentageToDP('2%'),
    marginHorizontal: 10,
    borderRadius: 5,
    justifyContent: 'flex-end',
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
