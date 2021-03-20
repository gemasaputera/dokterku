import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from './../../utils';
import {Firebase} from './../../config';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chattingContent, setChattingContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();
    const chatId = `${user.uid}_${dataDoctor.data.uid}`;

    const urlFirebase = `chatting/${chatId}/allChat/`;
    Firebase.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          Object.keys(dataSnapshot).map((item) => {
            const dataChat = dataSnapshot[item];
            const newDataChat = [];

            Object.keys(dataChat).map((key) => {
              newDataChat.push({id: key, data: dataChat[key]});
            });

            allDataChat.push({id: item, data: newDataChat});
          });
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const sendChat = () => {
    const today = new Date();

    const chatId = `${user.uid}_${dataDoctor.data.uid}`;

    const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}`;

    const urlMessageUser = `message/${user.uid}/${chatId}`;

    const urlMessageDoctor = `message/${dataDoctor.data.uid}/${chatId}`;

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chattingContent,
    };

    const dataHistoryChatForUser = {
      lastContentChat: chattingContent,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.data.uid,
    };

    const dataHistoryChatForDoctor = {
      lastContentChat: chattingContent,
      lastChatDate: today.getTime(),
      uidPartner: user.uid,
    };

    Firebase.database()
      .ref(urlFirebase)
      .push(data)
      .then(() => {
        setChattingContent('');
        // set history for user
        Firebase.database().ref(urlMessageUser).set(dataHistoryChatForUser);
        // set history for doctor
        Firebase.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor);
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        title={dataDoctor.data.fullName}
        category={dataDoctor.data.profession}
        avatar={{uri: dataDoctor.data.photo}}
        type="dark-profile"
      />
      <View style={styles.wrapperChat}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((listChat) => {
            return (
              <View key={listChat.id}>
                <Text style={styles.chatDate}>{listChat.id}</Text>
                {listChat.data.map((chat) => {
                  const isMe = user.uid === chat.data.sendBy;
                  return (
                    <ChatItem
                      key={chat.id}
                      isMe={isMe}
                      message={chat.data.chatContent}
                      time={chat.data.chatTime}
                      avatar={isMe ? null : {uri: dataDoctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        onButtonPress={sendChat}
        onChangeText={(value) => setChattingContent(value)}
        value={chattingContent}
        placeholder={`Tulis pesan untuk ${dataDoctor.data.fullName}`}
      />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  chatDate: {
    color: colors.text.secondary,
    fontSize: 11,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapperChat: {
    flex: 1,
  },
});
