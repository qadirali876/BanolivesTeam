import React, { useState, useEffect, useLayoutEffect } from 'react';
import {
  Layout,
} from '@ui-kitten/components';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  Image,
  Pressable,
  TextInput,
  Text
} from 'react-native';
import { Icon } from 'react-native-eva-icons';
import { useZIM } from '../../hooks/zim';
import Avatar from 'react-native-boring-avatars';


const msgStyles = (isMe) => (
  isMe ?
    {
      messageDirection: { flexDirection: 'row-reverse' },
      bgc: { backgroundColor: '#D9FEDA' },
      idDirection: { textAlign: 'right' }
    } : {
      messageDirection: { flexDirection: 'row' },
      bgc: { backgroundColor: '#fff' },
      idDirection: { textAlign: 'left' }
    })

const MessageItem = ({ avatarMap, item }) => {
  const currAvatar = avatarMap[item.senderUserID];
  const transMsg = (item) => {
    const msg = item.message;
    const isURLImg = (value) => /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(value);
    if (msg) {
      if (isURLImg(msg)) {
        return <><Text>${msg}</Text><Image source={msg} resizeMode='cover' /></>;
      }
    }

    return (
      <Text style={styles.messageText}>
        {msg}
      </Text>
    );
  }
  return (
    <View style={[styles.message, msgStyles(item.direction == 0).messageDirection]}>
      {
        currAvatar ?
          <Avatar source={avatarMap[item.senderUserID]} style={styles.avatar} />
          :
          <Avatar
            size={36}
            name={`${item.senderUserID}`}
            variant='beam'
            colors={['#E3D88C', '#7BAEF3', '#C08FEF', '#EF9F9F', '#73CAAE']}
          />
      }
      <View style={styles.messageBox}>
        <View style={styles.idBox}>
          <Text style={[styles.id, msgStyles(item.direction == 0).idDirection]}>{item.senderUserID}</Text>
        </View>
        <View style={[styles.messageTextBox, msgStyles(item.direction == 0).bgc]} >
          {transMsg(item)}
        </View>
      </View>
    </View>
  )
};

const Chat = ({ navigation, route,  dirId, dirType, dirName }) => {
  // console.log("route", route.param)
  // const { id, type, name } = route.params;
  const id = "" + dirId;
  const name = dirName;
  const type = dirType
  const [isOpenBar, setIsOpenBar] = useState(false);
  const [isByte, setIsByte] = useState(false);
  const [inputText, setInputText] = useState('');
  // const [count, setCount] = useState(0);
  const flatList = React.useRef(null);

  const [{ avatarMap, chatMap }, zimAction] = useZIM();


  const featureBar = [
    { name: 'image-outline', func: () => setIsByte(!isByte) },
    { name: 'video-outline', func: () => { navigation.push('Call', { id, type, name }), zimAction.callInvite([id], { timeout: 30, extendedData: 'This is video call' }) } },
    { name: 'phone-outline', func: () => { navigation.push('Call', { id, type, name }), zimAction.callInvite([id], { timeout: 30, extendedData: 'This is voice call' }) } },
    { name: 'folder-add-outline' },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      title: type == 2 ? `${name}[${id}]` : `${name}[${id}]`,
      headerTintColor: 'black',
      headerLeft: () => (
        <Button onPress={() => navigation.navigate('Home')} style={styles.more} title={"Home"} />
   
      ),
      headerRight: () => {
        if (type == 0) {
          return
        } else {
          return (
            <View>
              <Text>hello</Text>
            </View>
            // <Button onPress={() => navigation.push(type == 2 ? 'GroupInfo' : 'Allmembers', { ...route.params })} style={styles.more} >
            //   <Icon name='more-horizontal-outline' fill='black' />
            // </Button>
          )
        }
      }
    });
  }, []);

  useEffect(() => {
    zimAction.setScrollView(flatList);
    zimAction.queryHistoryMessage(id, type, { count: 1000, reverse: true }).then((res) => {
      setTimeout(() => {
        flatList.current.scrollToEnd();
      }, 300);
    });

    // zimAction.queryGroupMemberCount(id).then(res => {
    //   setCount(res.count || '');
    // });

    return () => {
      zimAction.clearConversationUnreadMessageCount(id, type);
      // zimAction.logout();
    }
  }, []);

  const msgs = chatMap[id] || [];

  const sendMessage = (msg) => {
    setInputText('');
    zimAction.sendChatMessage(type, msg, id, isByte).then(() => {
      setTimeout(() => {
        flatList.current.scrollToEnd();
      }, 200);
    });
  }


  return (
    <View style={styles.contain}>
      <FlatList
        ref={flatList}
        data={msgs}
        renderItem={props => <MessageItem key={props.item.messageID} avatarMap={avatarMap} {...props} />}
        keyExtractor={item => item.id}
      >
      </FlatList>

      <View style={styles.footer}>
        {/* <Button
          status='control'
          accessoryLeft={<Icon style={styles.plus} name='plus-circle-outline' fill='black' />}
          onPress={() => setIsOpenBar(!isOpenBar)}
        /> */}
        <View style={styles.input}>
          <TextInput
            value={inputText}
            placeholder="Enter text"
            onChangeText={nextValue => setInputText(nextValue)}
          />
        </View>
        <Button onPress={() => sendMessage(inputText)} style={styles.sendButton} title='sendMessage'> </Button>
      </View>

      {
        isOpenBar && <Layout style={styles.chooseMore} level='1'>
          <Button
            onPress={() => setIsByte(!isByte)}
            style={styles.chooseButton}
            status='control'
            accessoryLeft={<Icon style={styles.plus} name={!isByte ? 'navigation-2-outline' : 'navigation-2'} fill='black' />}
          />
          {
            featureBar.map((item, index) =>
            (<Button
              onPress={item.func}
              style={styles.chooseButton}
              status='control'
              accessoryLeft={<Icon style={styles.plus} name={item.name} fill='black' />}
              key={index}
            />)
            )
          }
        </Layout>
      }
    </View >

  )
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    zIndex: 600
  },
  converse: {
    flex: 1,

  },
  footer: {
    backgroundColor: 'white',
    height: 58,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
  plus: {
    height: 25,
    width: 25,

    backgroundColor: 'white',
    borderColor: 'white'
  },
  input: {
    flex: 1,
  },
  inputButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 0,
    borderColor: 'white'
  },
  sendButton: {
    paddingLeft: 0,
    paddingVertical: 4

  },
  inputIcon: {
    height: 30,
    width: 30
  },
  chooseMore: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    justifyContent: 'space-around',
    height: 80,
    alignItems: 'center'
  },
  chooseButton: {
    height: 50,
    width: 50
  },
  message: {
    paddingHorizontal: 15,
    paddingVertical: 4,
  },
  avatar: {
    height: 35,
    width: 35,
    marginTop: 13,
  },
  messageBox: {
    paddingHorizontal: 10
  },
  id: {
    fontSize: 14,
    paddingBottom: 3,
  },
  idBox: {
    justifyContent: 'flex-end',
  },
  messageTextBox: {
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 8,

  },
  messageText: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    maxWidth: 300
  },
  more: {
    backgroundColor: "#fff",
    borderColor: "#fff",
    paddingHorizontal: 0,
    paddingVertical: 0
  },

})

export default Chat;
