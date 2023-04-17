import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
//----------Vector Icons----------//
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageTop as hp,
} from 'react-native-responsive-screen';
const data = [
  {
    name: 'Aeroplane',
    image: require('../../assets/images/anime.jpg'),
    image1: require('../../assets/images/story.jpg'),
    navi: 'Record',
  },
  {
    name: 'Aeroplane',
    image: require('../../assets/images/anime.jpg'),
    navi: 'Record',
  },
  {
    name: 'Aeroplane',
    image: require('../../assets/images/anime.jpg'),
    navi: 'Record',
  },
  {
    name: 'Aeroplane',
    image: require('../../assets/images/anime.jpg'),
    navi: 'Record',
  },
  {
    name: 'Aeroplane',
    image: require('../../assets/images/anime.jpg'),
    navi: 'Record',
  },
  {
    name: 'Aeroplane',
    image: require('../../assets/images/anime.jpg'),
    navi: 'Record',
  },
];
const catagories = [
  {
    name: 'weekly',
  },
  {
    name: 'Last Week',
  },
];

const Weekly_Stars = () => {
  const [selectedItem, isSelectedItem] = useState(true);
  const [focused, setFocused] = useState(true);
  const [sec, setSec] = useState('');
  const [cases, setCases] = useState('Freshers');
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View style={{...styles.container}}>
      <View style={{flex: 0.7}}>
        <ImageBackground
          source={require('../../assets/images/purple.png')}
          style={{...StyleSheet.absoluteFillObject, height: 300, flex: 1}}
          resizeMode={'stretch'}>
          {/* header */}
          <View
            style={{flexDirection: 'row', marginHorizontal: 10, marginTop: 8}}>
            <TouchableOpacity onPress={() => navigation.goBack('Streams')}>
              <AntDesign
                name="left"
                size={26}
                style={{marginTop: 2, color: '#fff'}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'normal',
                marginLeft: 10,
              }}>
              Weekly Stars
            </Text>
          </View>

          {/* flatlist */}
          <View
            style={{
              backgroundColor: '#BB8FCE',
              height: 30,
              width: wp('40%'),
              top: 20,
              borderRadius: 30,
              alignSelf: 'center',
            }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={catagories}
              keyExtractor={item => item.id}
              renderItem={(item, index) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    isSelectedItem(item.item.name);
                    // setCases(item.item.name)
                  }}
                  style={{
                    backgroundColor:
                      selectedItem === item.item.name ? '#FFFFFF' : '#BB8FCE',
                    height: 30,
                    width: wp('18%'),

                    borderRadius: 30,
                  }}>
                  <Text
                    style={{
                      color:
                        selectedItem === item.item.name ? '#BB8FCE' : '#FFFFFF',
                      textAlign: 'center',
                      top: 5,
                      fontSize: 12,
                    }}>
                    {item.item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* Image */}
          <Image
            source={require('../../assets/images/star.png')}
            style={styles.img}
          />
        </ImageBackground>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={true}
          horizontal={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={(item, index) => (
            <View>
              <View style={{flexDirection: 'row'}}>
                <Image source={item.item.image} style={styles.story} />
                <Text style={{...styles.text}}>{item.item.name}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 85,
                  }}>
                  <Image source={item.item.image} style={styles.story1} />
                  <Image source={item.item.image} style={styles.story1} />
                  <Image source={item.item.image} style={styles.story1} />
                  <Image source={item.item.image} style={styles.story1} />
                </View>
                <AntDesign
                  name="right"
                  size={26}
                  style={{alignSelf: 'center', marginLeft: 16, color: '#fff'}}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#303749',
                  height: 1,
                  width: '100%',
                  marginTop: '3%',
                  marginBottom: '3%',
                }}></View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Weekly_Stars;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242A38',
  },
  img: {
    alignSelf: 'center',
    marginTop: '5%',
    // position: 'absolute',
    // flex:1
  },
  story: {
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'yellow',
    marginLeft: 10,
  },
  story1: {
    height: 44,
    width: 44,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'silver',
    marginHorizontal: -12,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 10,
  },
});
