import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const UserListScreen = ({list, dataList}) => {
  const [data, setData] = useState([]);

  const FlatListController = () => {
    setList(!list);
    console.log('flatlist')
  };

  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    fetch('https://www.banoLive.com/api/channel/list?channel_name=xyz', {
      method: 'POST',
    })
      .then(res => res.json())
      .then(json => setData(json.data));
  };
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: 'https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg',
      }}>
      <View style={styles.header}>
        <View style={styles.headerImageContainer}>
          <TouchableOpacity onPress={FlatListController}>
            <Image
              style={styles.headerImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={FlatListController}>
            <Image
              style={styles.headerImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={FlatListController}>
            <Image
              style={styles.headerImage}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.headerCounter}>
          <Text style={styles.text}>{data.length}</Text>
        </View>
        <View style={styles.headerCross}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/cross.png')} />
          </TouchableOpacity>
        </View>
      </View>

      {list && (
        <View style={styles.flatContainer}>
          <View style={styles.flatListHeader}>
            <Text style={styles.flatListHeaderText}>
              Viewers ({data.length})
            </Text>
            <TouchableOpacity onPress={FlatListController}>
              <Image source={require('../../assets/images/cross.png')} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            renderItem={({item, i}) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={styles.flatInnerContainer}
                  onPress={() => alert('Good Luck')}>
                  <View style={styles.listImage}>
                    <Image
                      resizeMode="center"
                      source={
                        item.image
                          ? {uri: item.image}
                          : {
                              uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                            }
                      }
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.listText}>
                    <Text style={[styles.text, {fontSize: 16}]}>
                      {item.full_name}
                    </Text>
                    <View style={styles.levelTextContainer}>
                      <Text style={styles.text}>Lv. {item.level}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default UserListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatContainer: {
    height: 600,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    zIndex: 1,
    // padding: 20,
  },
  flatListHeaderText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  flatInnerContainer: {
    height: 80,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  listImage: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelTextContainer: {
    backgroundColor: '#27B0FF',
    height: 20,
    width: 50,
    borderRadius: 20,
    paddingHorizontal: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  listText: {
    flex: 7,
    justifyContent: 'center',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  flatListHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 20,
    alignItems: 'center',
  },
  headerImageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerImage: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginHorizontal: 5,
  },
  headerCounter: {
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: 30,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  headerCross: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
  },
});
