import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    ImageBackground,
    Image,
    Modal
} from 'react-native';
import React, { useState } from 'react';
import { Searchbar, TextInput } from 'react-native-paper';
import Search from 'react-native-vector-icons/Feather';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { ApiCallToken } from '../../Services/Apis';
import StarModal from '../reuseable_Component/StarModal';
import ProfileModalStyles, { ProfileModalStyle } from '../../screens/reuseable_Component/ProfileModalStyle'
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';

const SearchView = props => {

    const navigation = useNavigation();
    const [userId, setUserId] = useState('')
    const userData = useSelector(state => state.auth.userData);
    const [serachedData, setSearchedData] = useState([])
    const [show, setShow] = useState(true)
    const [userArrayData, setUserArrayData] = useState(userData)  
    const modalRef = React.createRef();
    // console.log('userArrayData =================> ', userArrayData)
    dispatch = useDispatch()
    const SearchUser = async () => {
        try {
            if (userId == '') {
                alert('Enter user ID first')
            }
            else {
                const paramsBody = {
                    id: userId
                };
                const res = await ApiCallToken({
                    params: userData.token,
                    paramsBody: paramsBody,
                    route: 'search',
                    verb: 'POST',
                });

                if (!res?.data?.[0]) {
                    alert('User not found or Wrong ID')
                    setShow(true)
                }
                else {
                    console.log('here is the respone for searched user', res.data);
                    setSearchedData(res.data[0])
                    setShow(false)
                }
            }
        } catch (e) {
            console.log('user search error is -- ', e.toString());
        }
    };
    return (
        <ImageBackground
            source={require('../../assets/images/Newprofilebg.png')}
            resizeMode={'stretch'}
            style={{ flex: 1, alignItems: 'center' }}>
            {/* Searchbar */}
            <View
                style={{ flexDirection: 'row', margin: 10, justifyContent: 'space-between', marginHorizontal: '5%', }}>
                <ImageBackground source={require('../../assets/images/searchrectangle.png')}
                    imageStyle={{
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>

                    <View style={{ backgroundColor: 'white', width: wp(85), height: 40, borderRadius: 30, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }}>
                        <TouchableOpacity onPress={() => SearchUser()}>
                            <Search name="search" size={25} color="black" style={{}} />
                        </TouchableOpacity>
                        <TextInput style={styles.input}
                            placeholder='Search by username/ user ID'
                            placeholderTextColor='#252841'
                            onChangeText={(txt) => setUserId(txt)}
                        // style={styles.input}

                        // onKeyPress={() => alert('hi')}
                        // onTouchEnd={()=> alert('hii')}
                        />
                    </View>
                </ImageBackground>
            </View>
            {
                show ? null :
                        <TouchableOpacity onPress={() => modalRef.current.toggleModal()} 
                            style={{ marginTop: 10, width: '90%', height: '10%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }} >
                        {
                            serachedData?.image &&
                                <Image source={{ uri: serachedData?.image }} style={{ height: 70, width: 70, borderRadius: 100 }} />
                        }
                        <View>
                            <Text style={{ marginLeft: 10, color: '#FFFFFF', fontSize: 18 }}>{serachedData?.nick_name ?? serachedData?.full_name}</Text>
                        </View>
                        </TouchableOpacity>
            }

            <View
                style={{
                    width: '100%',
                    alignItems: 'flex-end',
                    marginRight: 5,
                    top: heightPercentageToDP(1),
                }}>

            </View>
            <StarModal view={<ProfileModalStyles
            data={serachedData}
                 onPressCros={() => modalRef.current.toggleModal()}
                
            />} ref={modalRef}
            onBackdropPress
            />
        </ImageBackground>

    );
};
export default SearchView;
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 229.8,
        backgroundColor: "white", 
        color: 'white', // set the text color to white
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20
    },
    modalView: {
        width: '80%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'space-between',
        height: heightPercentageToDP(50),
    },
});