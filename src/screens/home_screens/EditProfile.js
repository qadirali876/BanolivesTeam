import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeModal from '../reuseable_Component/HomeModal';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React, { useContext, useEffect, useState } from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import { useCallback } from 'react';
import { setLoginData, updateUserData } from '../../Redux/Actions';
import { RegionList } from 'react-native-country-picker-modal';
import { UserProfileContext } from '../../context/userProfile';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import moment from 'moment/moment';
import { put } from 'redux-saga/effects';
import { ApiCallFormData, ApiCallToken, ApiUpdateUserData } from '../../Services/Apis';

const modalRef = React.createRef();
const modal2Ref = React.createRef();
const modal3Ref = React.createRef();
const modal5Ref = React.createRef();

const Camera = [
  {
    id: 1,
    name: 'Choose From Gallery',
    icon: 'images',
  },
  {
    id: 1,
    name: 'Take a Photo',
    icon: 'camera',
  },
];
//   {
//     id: 1,
//     name: 'Pakistan',
//   },
//   {
//     id: 1,
//     name: 'India',
//   },
//   {
//     id: 1,
//     name: 'UK',
//   },
//   {
//     id: 1,
//     name: 'Sri Lanka',
//   },
//   {
//     id: 1,
//     name: 'Bangladesh',
//   },
//   {
//     id: 1,
//     name: 'Saudi-Arabia',
//   },
//   {
//     id: 1,
//     name: 'Qatar',
//   },
//   {
//     id: 1,
//     name: 'Veitnam',
//   },
//   {
//     id: 1,
//     name: 'Singapore',
//   },
//   {
//     id: 1,
//     name: 'Thailand',
//   },
//   {
//     id: 1,
//     name: 'China',
//   },
//   {
//     id: 1,
//     name: 'Philipine',
//   },
//   {
//     id: 1,
//     name: 'UAE',
//   },
//   {
//     id: 1,
//     name: 'Turkey',
//   },
//   {
//     id: 1,
//     name: 'Nepal',
//   },
//   {
//     id: 1,
//     name: 'Algeria',
//   },
//   {
//     id: 1,
//     name: 'Tunisia',
//   },
//   {
//     id: 1,
//     name: 'Miser',
//   },
//   {
//     id: 1,
//     name: 'Syria',
//   },
//   {
//     id: 1,
//     name: 'Morocco',
//   },
//   {
//     id: 1,
//     name: 'Lebanon',
//   },
//   {
//     id: 1,
//     name: 'Indonesia',
//   },
//   {
//     id: 1,
//     name: 'Oman',
//   },
//   {
//     id: 1,
//     name: 'Germany',
//   },
//   {
//     id: 1,
//     name: 'Greece',
//   },
//   {
//     id: 1,
//     name: 'Brazil',
//   },
//   {
//     id: 1,
//     name: 'Egypt',
//   },
// ];

const GenderArray = [
  {
    id: 1,
    name: 'Male',
  },
  {
    id: 1,
    name: 'Female',
  },
  {
    id: 1,
    name: 'Other',
  },

  {
    id: 1,
    name: 'Prefer Not to Say',
  },
];

export default function EditProfile() {
  const { userInfo, setUserData } = useContext(UserProfileContext);
  //console.log('userInfo');
 // console.log(userInfo);
  const [selectPkBtn, setselectPkBtn] = useState(userInfo.region);
  const [selectPkBtnA, setselectPkBtnA] = useState(0);
  const [selectPkBtnC, setselectPkBtnC] = useState(0);
  const [selectPkBtn1, setselectPkBtn1] = useState(0);
  const [genderA, setgenderA] = useState(userInfo.gender);
  const [showdate, setshowdate] = useState(userInfo.birthday);
  const [NewDate, setNewDate] = useState('');
  const [img, setimg] = useState(userInfo.image);
  const userData = useSelector(state => state.auth.userData);
  const [nickName, setNickName] = useState(userInfo.nick_name);
  const [FullName, setFullName] = useState(userInfo.full_name);
  const [Gender, setGender] = useState(userInfo.gender);
  const [region, setRegion] = useState('');
  const [birth, setBirth] = useState('');
  const [intro, setIntro] = useState(userInfo.introduction);
  const [imgType, setImgType] = useState('');
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const userUpdatedData = useSelector(state => state.homeRed.userUpdatedData);

  const [getCountry, setGetCountry] = useState([]);
  const [getId, setGetId] = useState(null);
 // console.log("Thisjis", getId)

  function changeKeepAwake(shouldBeAwake) {
    if (shouldBeAwake) {
      KeepAwake.activate();
    } else {
      KeepAwake.deactivate();
    }
  }

  useEffect(() => {
    countries()
  }, [])

  const copyToClipboard = id => {
    Clipboard.setString(id);
    alert(id);
  };
  // console.log('Data for editing from redux', userData.user.uuid);

  const UpdateUserProfile = async () => {
    console.log('Image Path sending to DataBase', img == null ? userUpdatedData?.image : img, " ", getId);
    try {
      setUserData(userUpdatedData);
      setShow(false);
      let formData = new FormData();
      formData.append('image', {
        uri: img == null ? userUpdatedData?.image : img,
        name: 'profile.jpg',
        fileName: 'profile',
        type: 'profile/jpg',
      });
      formData.append(
        'full_name',
        FullName == null ? userUpdatedData?.full_name : FullName,
      );
      formData.append(
        'nick_name',
        nickName == null ? userUpdatedData?.nick_name : nickName,
      );
      formData.append(
        'gender',
        Gender == null ? userUpdatedData?.gender : Gender,
      );
      formData.append(
        'region',
        selectPkBtn == null ? userUpdatedData?.region : selectPkBtn,
      );
      formData.append(
        'birthday',
        showdate == '' ? userUpdatedData?.birthday : showdate,
      );
      formData.append(
        'introduction',
        intro == '' ? userUpdatedData?.introduction : intro,
      );
      formData.append(
        'country_id',
        getId == null ? userUpdatedData?.country_id : getId,
      );

      // console.log("Form Image",formData,)

      await fetch('https://www.banoLive.com/api/user/update', {
        method: 'POST',
        headers: {
           //'Content-type': 'application/json',
          'Content-Type': `multipart/form-data`,
          Authorization: `Bearer ${userData.token}`,
        },
        body: formData
      })
        .then(res => res.json())
        .then(json => {
          console.log('Response update 12', json);
          updateUserData(json?.data)

          setShow(true);
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            textBody: 'Now you profile is up-to-date',
          });

        });
    } catch (e) {
      console.log('Error is -- ', e.toString());
    }

    function* updateUserData(data) {
      console.log("--------------", data)
      yield put(setLoginData(data));
    }

    // var myHeaders = new Headers();
    // myHeaders.append(
    //   'Authorization',
    //   'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMWVjMWZkMzVkNDU1YjI3MzMzYjUyZGM0NmNlMjMxYmVlOTg1MjhlYzg4NGZjM2FiMWQ0ZGEyYTk1OGUyMTE2ZmJiMmJjYjJjOWU1ZGVmZDUiLCJpYXQiOjE2Njk3NDgwNjkuNTAxNjg4OTU3MjE0MzU1NDY4NzUsIm5iZiI6MTY2OTc0ODA2OS41MDE2OTExMDI5ODE1NjczODI4MTI1LCJleHAiOjE3MDEyODQwNjkuNTAwMTU5MDI1MTkyMjYwNzQyMTg3NSwic3ViIjoiNDc2Iiwic2NvcGVzIjpbXX0.PObaQWUXGhqRCduS5b7QdTiVqDaXVLRsZa7Jz835aEKzgWpVo9V_vvEdPfZVS7o6A1xEUWVmKg4ND2S5ZzFByukZ7jieHXem78PQRmbV7t2EfWH0RZp7iO0njh7U2JIAM33-oSfJCHM4gKdeYNZr-PwYH2ntndyNCJrOGkauTbbIl-Nj3sewjJdc477U0avWbOxy-GzF7OLBcF1LAKjsm0tPg9zCs6BzRFH5CJAanlQbJ6Ckxd44UIiN5d_Utv7SyLFFAltmARNvHrwn1rW2HLJkVSRQUADi7GT6xQNPY6SBhc6wOkx2LqxYw1JJCLmPoOFcFZorUe5oLW2opxBW1UQbv-UEbaKWrlJSG9bCqJ_KMLxqVHqOHDNJw6ZJcl1XboM5zs2EDSWoIXHKHd25Bicg_XF39jDK4H6PCFOoDSJibboZq6c5kKLwnbZFBQuj19F_VZsLaqHEgO_uxH9hARa-w_ehPlVJ7kATmfgfvnsS8LDxzMV4lob6nV0mKQ6kRObRJobansD4vue4N-PoY1g3xwaKQMtWmBPb_o311Iz8vfE44owJth4sx1WZlGemTyUzE01AIO1bpg-9s7rALElkFBOS-wlcFLdGXNkRE4U3cfAE2zCBOSE_FJchg642mnZt4-kRu4YLWbmrZox4mei11JSmy1uuxu_b75idNEk',
    // );
    // myHeaders.append(
    //   'Cookie',
    //   'laravel_session=WkRK0D5gbvA0Sm9CAFHRRpl9wxPABVUzrTr78jt4',
    // );

    // var formdata = new FormData();
    // formdata.append('nick_name', nickName);
    // formdata.append('gender', genderA);
    // formdata.append('region', region);
    // formdata.append('birthday', birth);
    // formdata.append('introduction', intro);
    // formdata.append('image', {
    //   uri: img,
    //   name: 'profile.jpg',
    //   fileName: 'profile',
    //   type: 'profile/jpg',
    // });

    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow',
    // };

    // fetch('https://www.banoLive.com/api/user/update', requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  };

  const countries = async() => {
    try {
      const res = await ApiCallToken({
        params: userData.token,
        route: 'countries',
        verb: 'GET',
      });
      //console.log('getting countries from api ',res)
      setGetCountry(res)
    } catch (error) {
      console.log('Editprofile, countries func', error);
    }
  };


  const check = () => {
    if (nickName == null || nickName == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Nickname is required',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (img == '' || img == null) {
      ToastAndroid.showWithGravityAndOffset(
        'Please Update your Image',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (Gender == null) {
      ToastAndroid.showWithGravityAndOffset(
        'Please select your Gender',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (selectPkBtn == null) {
      ToastAndroid.showWithGravityAndOffset(
        'Please select your Region',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (showdate == null) {
      ToastAndroid.showWithGravityAndOffset(
        'Please select your Birthday',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else if (intro == '') {
      ToastAndroid.showWithGravityAndOffset(
        'Please write your introduction',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
        0,
        0,
      );
    } else {
      UpdateUserProfile();
    }
  };

  useFocusEffect(
    useCallback(() => {
     // console.log('data is', userUpdatedData);
    }, []),
  );

  const ChooseFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('PATH IS =>>>>>', image.mime);
      setImgType(image.mime);
      setimg(image.path);
    });
  };

  const ChooseFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
      console.log(image);
      setImgType(image.mime);
      setimg(image.path);
    });
  };

  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date.toString());
    setshowdate(date.toString());
    // {birthDate ? moment(birthDate).format('MMMM DD, YYYY') : '-'}
    // setshowdate(moment(date.toString()).format('DD-MM-YYYY'));
    hideDatePicker();
  };
  return (
    <AlertNotificationRoot>
      <SafeAreaView style={styles.mainview}>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <ImageBackground
          source={require('../../assets/images/Newprofilebg.png')}
          resizeMode={'stretch'}
          style={{ height: '100%', width: '100%' }}>
          <ScrollView>
            <StatusBar backgroundColor="#242A38" />

            <View style={styles.header}>
              <View style={styles.editprofilebox}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Ionicon name="chevron-back" size={30} color={'white'} />
                </TouchableOpacity>
                <Text style={styles.editprofiletxt}>Edit Profile</Text>
              </View>
              {show ? (
                <TouchableOpacity onPress={check}>
                  <View style={styles.savebox}>
                    <Text style={styles.savetxt}>Save</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator />
              )}
            </View>

            <LinearGradient
              colors={['#4568DC', '#B06AB3']}
              style={styles.imagemaincontainer}>
              {/* <Image source={{uri: img}} style={styles.img} /> */}

              {img == null ? (
                <Image
                  source={require('../../assets/images/img3.png')}
                  style={styles.img}
                />
              ) : (
                <Image source={{ uri: img }} style={[styles.img]} />
              )}
              <TouchableOpacity
                onPress={() => {
                  modal5Ref.current.toggleModal();
                }}
                style={styles.camerabox}>
                <FontAwesome name="camera" size={13} color={'#4568DC'} />
              </TouchableOpacity>
            </LinearGradient>

            <View style={styles.inputmainbox}>
              <View>
                <Text style={styles.nicknametxt}>Nickname</Text>

                <View style={styles.Usernamebox}>
                  <TextInput
                    style={styles.Usernametxt}
                    placeholder={nickName}
                    placeholderTextColor={'#FFFFFF'}
                    value={nickName}
                    onChangeText={txt => setNickName(txt)}
                    maxLength={15}
                  />
                  {/* <Text style={styles.Usernametxt}>Bano Live</Text> */}
                  <TouchableOpacity>
                    <Ionicon name="chevron-forward" size={15} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.inputmainbox}>
              <View>
                <Text style={styles.nicknametxt}>ID</Text>
                <View style={styles.Usernamebox}>
                  <Text style={styles.idbox}>{userData?.user?.id}</Text>
                  {console.log('00000000000000', userData?.user?.uuid)}
                  {/* <TouchableOpacity
                  // onPress={() => {
                  //   copyToClipboard(userData?.user?.uuid);
                  // }}
                  >
                    <View style={styles.copybox}>
                      <Text style={styles.copytxt}>Copy</Text>
                    </View>
                  </TouchableOpacity> */}
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => {
                modal3Ref.current.toggleModal();
              }}>
              <View style={styles.inputmainbox}>
                <View>
                  <Text style={styles.nicknametxt}>Gender</Text>

                  <View style={styles.Usernamebox}>
                    <Text style={styles.idbox}>{Gender}</Text>

                    {/* <Text style={styles.Usernametxt}>Female</Text> */}
                    <TouchableOpacity>
                      <Ionicon
                        name="chevron-forward"
                        size={15}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                modal2Ref.current.toggleModal();
              }}>
              <View style={styles.inputmainbox}>
                <View>
                  <Text style={styles.nicknametxt}>Region</Text>
                  <View style={styles.Usernamebox}>
                    {/* <Text style={styles.Usernametxt}>Pakistan</Text> */}
                    {/* {
                    userUpdatedData?.region == null ?
                      <Text style={styles.idbox}>{selectPkBtn}</Text>
                      :
                      <Text style={styles.idbox}>{userUpdatedData?.region}</Text>

                  } */}
                    <Text style={styles.idbox}>{selectPkBtn}</Text>

                    <TouchableOpacity>
                      <Ionicon
                        name="chevron-forward"
                        size={15}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showDatePicker()}>
              <View style={styles.inputmainbox}>
                <View>
                  <Text style={styles.nicknametxt}>Birthday</Text>
                  <View style={styles.Usernamebox}>
                    <Text style={styles.idbox}>
                      {showdate
                        ? moment(showdate).format('MMMM DD, YYYY')
                        : '-'}
                    </Text>

                    {/* {userUpdatedData?.birthday == null ? (
                    <Text style={styles.idbox}>{showdate}</Text>
                  ) : (
                    <Text style={styles.idbox}>
                      {userUpdatedData?.birthday}
                    </Text>
                  )} */}

                    <TouchableOpacity>
                      <Ionicon
                        name="chevron-forward"
                        size={15}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.inputmainbox}>
                <View>
                  <Text style={styles.nicknametxt}>Introduction</Text>
                  <View style={styles.Usernamebox}>
                    <TextInput
                      style={styles.Usernametxt}
                      // placeholder="Intro"
                      placeholder={intro}
                      placeholderTextColor={'#FFFFFF'}
                      value={intro}
                      type={'text'}
                      onChangeText={txt => setIntro(txt)}
                    />
                    {/* <Text style={styles.introtxt}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                  </Text> */}
                    <TouchableOpacity>
                      <Ionicon
                        name="chevron-forward"
                        size={15}
                        color={'white'}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('TalentLevelExplaination')}>
              <View style={styles.progressbarmainbox}>
                <View style={styles.progressbaritemmainbox}>
                  <Text style={styles.progressbartitetxt}>Star</Text>
                  <View style={styles.progressbarallitem}>
                    <View style={styles.progressbarlevelbox}>
                      <AntDesign name="heart" color={'red'} />
                      <Text style={styles.leveltxt}>06</Text>
                    </View>
                    <View style={styles.levelupbox}>
                      <Text style={{ fontSize: 11, color: 'white' }}>
                        50,000 Beans Up to Level Next
                      </Text>
                    </View>
                    <View style={styles.progressbarlevelbox}>
                      <AntDesign name="heart" color={'red'} />
                      <Text style={styles.leveltxt}>06</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Ionicon name="chevron-forward" size={20} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WealthLevelExplaination')}>
              <View style={styles.progressbarmainbox1}>
                <View style={styles.progressbaritemmainbox}>
                  <Text style={styles.progressbartitetxt1}>Wealth</Text>
                  <View style={styles.progressbarallitem}>
                    <View style={styles.progressbarlevelbox1}>
                      <Text style={styles.leveltxt}>Lv.3</Text>
                    </View>
                    <View style={styles.levelupbox1}>
                      <Text style={{ fontSize: 11, color: 'white' }}>
                        50,000 Beans Up to Level Next
                      </Text>
                    </View>
                    <View style={styles.progressbarlevelbox1}>
                      <Text style={styles.leveltxt}>Lv.4</Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Ionicon name="chevron-forward" size={20} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </ImageBackground>

        <HomeModal
          view={
            <Calendar
              onDayPress={day => {
                setBirth(day.timestamp);

                modalRef.current.toggleModal();
              }}
            />
          }
          ref={modalRef}
        />

        <HomeModal
          view={
            <View
              style={{
                backgroundColor: 'white',
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
                <Text style={{ fontSize: 17 }}>Please Select</Text>
                <AntDesign name="caretdown" size={16} />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {getCountry.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setselectPkBtn(item.name);
                      setselectPkBtnA(index);
                      setGetId(item.id)

                      modal2Ref.current.toggleModal();
                    }}>
                    <Text
                      style={[
                        styles.RegionList,
                        selectPkBtnA == index && {
                          borderColor: '#B06AB3',
                          color: '#B06AB3',
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
        <HomeModal
          view={
            <View
              style={{
                backgroundColor: 'white',
                height: 250,
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
                <Text style={{ fontSize: 17 }}>Please Select</Text>
                <AntDesign name="caretdown" size={16} />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {GenderArray.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setGender(item.name);
                      setgenderA(index);

                      modal3Ref.current.toggleModal();
                    }}>
                    <Text
                      style={[
                        styles.RegionList,
                        genderA == index && {
                          borderColor: '#B06AB3',
                          color: '#B06AB3',
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          }
          ref={modal3Ref}
        />

        <HomeModal
          view={
            <View
              style={{
                backgroundColor: 'white',
                height: 150,
                width: 250,
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
                <Text style={{ fontSize: 17 }}>Please Select</Text>
                <AntDesign name="caretdown" size={16} />
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {Camera.map((item, index) => (
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: '1%',
                    }}
                    onPress={() => {
                      setselectPkBtn1(item.name);
                      setselectPkBtnC(index);
                      if (index == 0) {
                        ChooseFromGallery();
                        modal5Ref.current.toggleModal();
                      } else if (index === 1) {
                        ChooseFromCamera();
                        modal5Ref.current.toggleModal();
                      }
                    }}>
                    <Entypo
                      name={item.icon}
                      size={22}
                      color={'black'}
                      style={
                        selectPkBtnC == index && {
                          color: '#B06AB3',
                        }
                      }
                    />
                    <Text
                      style={[
                        styles.RegionList,
                        selectPkBtnC == index && {
                          borderColor: '#B06AB3',
                          color: '#B06AB3',
                        },
                      ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          }
          ref={modal5Ref}
        />
      </SafeAreaView>
    </AlertNotificationRoot>
  );
}

const styles = StyleSheet.create({
  mainview: {
    backgroundColor: '#242A38',
    flex: 1,
    paddingBottom: heightPercentageToDP(5),
  },
  header: {
    flexDirection: 'row',

    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: '#B06AB3',
  },
  editprofilebox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: widthPercentageToDP(34),
    justifyContent: 'space-between',
  },
  editprofiletxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  savebox: {
    backgroundColor: '#B06AB3',
    padding: 5,
    width: widthPercentageToDP(20),
    borderRadius: 20,
  },
  savetxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  img: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  imagemaincontainer: {
    backgroundColor: '#303749',
    height: 200,

    borderBottomRightRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camerabox: {
    backgroundColor: 'lightgrey',
    bottom: 40,
    padding: 10,

    borderRadius: 20,
    left: 40,
  },
  imgcontainer: {
    marginTop: 20,
  },
  Usernamebox: {
    flexDirection: 'row',
    top: 4,

    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Usernametxt: {
    fontSize: 12,
    color: 'white',
    marginLeft: 4,

    padding: 0,
    width: '85%',
    borderRadius: 3,
    borderWidth: 0.4,
    borderColor: '#B06AB3',
    marginTop: '2%',
    paddingLeft: 7,
  },
  nicknametxt: {
    marginLeft: 5,
    color: 'white',
    fontSize: 11,
    top: 3,
  },
  inputmainbox: {
    padding: 12,

    width: '95%',
    alignSelf: 'center',
    borderColor: 'white',
  },
  copybox: {
    backgroundColor: '#B06AB3',
    height: 20,
    width: 50,
    alignItems: 'center',
    borderRadius: 20,
    bottom: 5,
    justifyContent: 'center',
    margin: 5,
    top: 3,
  },
  copytxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
  },
  introtxt: {
    width: widthPercentageToDP(80),
    fontSize: 12,
    color: 'white',
    marginLeft: 4,
  },
  progressbarmainbox: {
    padding: 20,
    flexDirection: 'row',

    borderBottomWidth: 0.4,
    borderColor: 'white',
  },
  progressbaritemmainbox: {
    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  progressbartitetxt: {
    fontSize: 15,
    color: 'white',
  },
  progressbarlevelbox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'orange',
    width: widthPercentageToDP(10),
    justifyContent: 'space-evenly',
    borderRadius: 15,
    height: heightPercentageToDP(3),
  },
  levelupbox: {
    backgroundColor: '#ED2D21',
    padding: 5,
    borderRadius: 20,
  },
  progressbarallitem: {
    flexDirection: 'row',
    width: widthPercentageToDP(70),
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  leveltxt: {
    fontSize: 11,
    color: 'white',
  },
  progressbarlevelbox1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    width: widthPercentageToDP(10),
    justifyContent: 'space-evenly',
    borderRadius: 15,
    height: heightPercentageToDP(3),
  },
  levelupbox1: {
    backgroundColor: 'orange',
    padding: 5,
    borderRadius: 20,
  },
  progressbartitetxt1: {
    fontSize: 12,
    color: 'white',
  },
  progressbarmainbox1: {
    padding: 20,
    flexDirection: 'row',

    borderBottomWidth: 0.4,
    borderColor: 'white',
    right: 4,
  },
  idbox: {
    fontSize: 12,
    color: 'white',
    marginLeft: 4,

    width: '85%',
    borderRadius: 3,

    borderWidth: 0.4,
    borderColor: '#B06AB3',
    padding: 7,
    marginTop: '2%',
  },
  RegionList: {
    marginVertical: 8,
    fontSize: 17,
    borderBottomWidth: 0.3,
    color: 'black',
    paddingLeft: 10,
    marginLeft: '5%',
    width: '75%',
  },
});
