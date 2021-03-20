import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts, getData} from './../../utils';
import {Firebase} from './../../config';
import {List} from './../../components';

const Messages = ({navigation}) => {
  const [historyChat, setHistoryChat] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getDataUserFromLocal();
    const urlHistory = `message/${user.uid}`;
    const rootDB = Firebase.database().ref();
    const messagesDB = rootDB.child(urlHistory);

    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const newData = [];

        const promises = await Object.keys(oldData).map(async (item) => {
          const urlUidDoctor = `doctors/${oldData[item].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          newData.push({
            id: item,
            detailDoctor: detailDoctor.val(),
            ...oldData[item],
          });
        });

        await Promise.all(promises);
        setHistoryChat(newData);
      }
    });
  }, [user.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Messages</Text>
        {historyChat.map((chat) => {
          const dataDoctor = {
            id: chat.detailDoctor.uid,
            data: chat.detailDoctor,
          };
          return (
            <List
              key={chat.id}
              picture={{uri: chat.detailDoctor.photo}}
              name={chat.detailDoctor.fullName}
              description={chat.lastContentChat}
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  page: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flex: 1,
  },
  title: {
    color: colors.text.primary,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
  },
});
