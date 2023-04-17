import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
//----------Vector Icons----------//
import AntDesign from 'react-native-vector-icons/AntDesign';
import {headings} from '../../utils/Styles';
//----------Switch----------//
import {Switch} from 'react-native-paper';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const Privacy = () => {
  const RenderFunction = props => (
    <View style={{}}>
      <View style={{...styles.view2}}>
        <View style={{...styles.view1}}>
          <Text style={{...styles.text}}>{props.item.name}</Text>
        </View>

        <Text style={{...styles.text1}}>{props.item.name1}</Text>
      </View>
      <View style={{...styles.line}}></View>
    </View>
  );
  const data = [
    {
      name: 'Bounses',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },

    {
      name: 'Hide Your Online Status',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      name: 'Hide Your Recent Active Time',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      name: 'Comment Post',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      name: 'Do Not Distrub From Strangers',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
    {
      name: 'Do Not Accept Strangers Line Invitations',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },

    {
      name: 'Close Screenshots In Profile',
      name1:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    },
  ];

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isSwitchOn1, setIsSwitchOn1] = React.useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
  const [isSwitchOn3, setIsSwitchOn3] = React.useState(false);
  const [isSwitchOn4, setIsSwitchOn4] = React.useState(false);
  const [isSwitchOn5, setIsSwitchOn6] = React.useState(false);
  const [isSwitchOn7, setIsSwitchOn7] = React.useState(false);
  const [isSwitchOn8, setIsSwitchOn8] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{...styles.container}}>
      <ImageBackground
        source={require('../../assets/images/Newprofilebg.png')}
        resizeMode={'stretch'}
        style={{height: '100%', width: '100%'}}>
        {/* Header */}

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
          <Text style={{...styles.headertxt}}>Privacy</Text>
        </LinearGradient>

        {/* FlatList*/}
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={RenderFunction}
        />
        <View style={[styles.logbox]}>
          <Text style={styles.power}>Powered by LimeTechnologies Pvt Ltd</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Privacy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
  },
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
  text: {
    fontSize: 15,
    fontWeight: '300',
    left: 18,
    color: '#fff',
  },
  text1: {
    fontSize: 11,
    fontWeight: '400',
    left: 12,
    color: '#9293B0',
    top: 3,
    width: '85%',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 10,
  },
  view2: {
    marginTop: '2%',
    marginBottom: '5%',
  },
  line: {
    backgroundColor: '#303749',
    height: 1,
    width: '100%',
  },
  logbox: {
    paddingVertical: heightPercentageToDP('1%'),
    marginHorizontal: 10,
    borderRadius: 5,
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
