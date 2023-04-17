import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ApiCallToken } from '../../Services/Apis';

const ChatTest = () => {

    const [messages, setMessages] = useState([]);
    const userData = useSelector(state => state.auth.userData);
    const route = useRoute().params;
    console.log("routes", route)
    const { data,id,image,name } = route
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();
    const [givenDataFromApi,setGivenDataFromApi] = useState()
    const [chat_id, setChatId] = useState(null)
    useEffect(() => {
         searchID() 
    }, []);
    useEffect(() => {
        console.log("chatid", chat_id)
        const unsubscribe = firestore().doc(`messages/${chat_id}`).onSnapshot(fetchMessages);
       return () => {
           unsubscribe();
       };
   }, [chat_id]);

    const searchID = async () => {
        try {
           console.log("search id",id,userData?.user?.id)
          const res = await ApiCallToken({
            params: userData?.token,
            paramsBody: {
              sender_id:id?.toString(),
              recever_id: userData?.user?.id?.toString()
            },
            route: 'search/chat',
            verb: 'POST',
          });
          setGivenDataFromApi(res);
          if(res?.data?.[0]?.chat_id) {
            setChatId(res?.data?.[0]?.id)
            console.log("check data search/caht api ", res, res?.data?.[0]?.chat_id)
          }
          else {
            friendRequestCome()
          }
        
        }catch (error) {
          console.log('ERROR IS Store Purchase ====>>>', error);
        }
      }

    const friendRequestCome = async () => {
        const idcheck = userData?.user?.id.toString() + id.toString();
        try {
           console.log("adding new chat to database ",id, idcheck)
          const res = await ApiCallToken({
            params: userData.token,
            paramsBody: {
              friend_id:id,
              chat_id: idcheck
            },
            route: 'send/chat/request',
            verb: 'POST',
          });
          searchID()
          if(res?.data?.[0]?.id){
              setGivenDataFromApi(res);
              setChatId(res?.data?.[0]?.id)
          }
          console.log("send/chat/request ", res)
        } catch (error) {
          console.log('ERROR IS Store Purchase ====>>>', error);
        }
      }
      
  
   const  checkDtaa = ()=>{
   // console.log("check about feriend request come or not ",chat_id)
   } 

    const fetchMessages = async () => {
        try {
            const documentSnapshot = await firestore().doc(`messages/${chat_id}`).get();
            const data = documentSnapshot.data();
            if (data) {
                console.log("llllllllllllllllllllll")
                setMessages(data.messages);
            }
        } catch (error) {
            console.error(error);
        }
    };

   

    const handleSend = async (sender) => {
        try {
          if(chat_id)
          {  
            const documentRef = firestore().doc(`messages/${chat_id}`);
            console.log("meessage send", chat_id)
            const documentSnapshot = await documentRef.get();
            const data = documentSnapshot.data();

            const messages = data ? data.messages : [];
            const newMessage = {
                id: userData?.user?.id,
                text: inputText,
                sender: sender,
            };
            const updatedMessages = [...messages, newMessage];
            await documentRef.set({ messages: updatedMessages });
            setInputText('');}
            else {
                console.log("null", chat_id)
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/images/banoReels/backGround.jpeg')} style={styles.image}>
                <View style={styles.container2}>
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} >
                        <Icon name="chevron-left" size={20} color="white" />
                    </TouchableOpacity>
                    <View style={styles.profile}>
                        <View style={{ width: 60, justifyContent: "center", alignItems: "center" }}>
                            <Image source={{
                                //  uri: 'http://4.bp.blogspot.com/-bHFiMRPghBs/UgZFFT-YvDI/AAAAAAAAPV4/nfPd9khIf-U/s1600/tumblr_mdt6wjBXra1ribq8to1_500.jpeg'
                                uri: image
                            }} style={styles.profileImage} />
                        </View>
                        <View style={styles.senderInfo}>
                            <Text style={styles.senderName}>{name}</Text>
                            <TouchableOpacity onPress={()=>getId()}>
                            <Text style={styles.senderStatus}>Online</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.callIcons}>
                        <Icon name="phone" size={25} color="white" />
                        <TouchableOpacity onPress={() => checkDtaa()}>
                            <Icon name="video-camera" size={25} color="white" style={styles.videoIcon}/>
                        </TouchableOpacity>
                    </View>

                </View>
             {chat_id ?   
                <ScrollView contentContainerStyle={styles.messagesContainer}>
                    {messages.map((message, index) => (
                        <View
                            key={index}
                            style={[
                                styles.messageBubble,
                                message.id == userData?.user?.id
                                    ? styles.messageBubbleRight
                                    : styles.messageBubbleLeft,
                            ]}
                        >
                            <Text style={{ fontSize: 13, color: "white", fontWeight: "500" }}>{message.text}</Text>
                        </View>
                    ))}
                </ScrollView>
                :
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={25} />
                </View>
                }
                <View style={styles.inputContainer}>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: 'center',
                        borderColor: 'gray',
                        borderWidth: 1,
                        borderRadius: 25,
                    }}>
                        <TextInput
                            value={inputText}
                            onChangeText={setInputText}
                            placeholder="Enter your message"
                            style={styles.inputField}
                        />
                        <TouchableOpacity style={{ width: 45, backgroundColor: "#ea4542", height: 45, justifyContent: "center", alignItems: "center", marginRight: 3, borderRadius: 30 }} onPress={() => handleSend('me')}>
                            <Icon name="send" size={22} color="white" style={{}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    container2: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',

        height: 70,
        backgroundColor: '#242a38',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 3,
    },

    iconContainer: {
        marginLeft: 10,
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",

    },
    profileIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    messagesContainer: {
        paddingBottom: 10,
        flexGrow: 1,
        paddingBottom: 10,
        // backgroundColor: "#5c6678",
        width: "100%"
    },
    messageBubble: {
        padding: 10,
        borderRadius: 20,
        maxWidth: '80%',
        marginVertical: 5,
    },
    messageBubbleLeft: {
        alignSelf: 'flex-start',
        backgroundColor: '#ea4542',
        marginLeft: "5%",

    },
    messageBubbleRight: {
        alignSelf: 'flex-end',
        backgroundColor: '#4a5469',
        color: '#fff',
        marginRight: "5%"
    },


    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f2f2f2',
        padding: 5,

        width: "100%",

        paddingBottom: 10
    },
    inputField: {
        flex: 1,
        height: 50,

        paddingHorizontal: 10,
    },
    sendIcon: {
        marginRight: 10,
    },

    sendButton: {
        borderRadius: 20,
        marginLeft: 5,
    },
    backButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: "10%",
        // backgroundColor:"pink",
        height: "100%"
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',

        width: "60%",

        height: "100%"

    },
    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 30,

    },
    senderInfo: {
        justifyContent: 'center',
        marginLeft: "3%"
    },
    senderName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "white"
    },
    senderStatus: {
        color: 'grey',
    },
    callIcons: {
        flexDirection: 'row',
        alignItems: 'center',

        width: "35%",
        height: "100%",

        paddingLeft: '4%',

    },
    videoIcon: {
        marginLeft: 14,
    },

});


export default ChatTest
