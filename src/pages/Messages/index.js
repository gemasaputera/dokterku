import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from './../../utils';
import {List} from './../../components';
import {DummyUserPic2, DummyUserPic3, DummyUserPic4} from '../../assets';

const Messages = ({navigation}) => {
  const [messages] = useState([
    {
      id: 1,
      profile: DummyUserPic2,
      name: 'Alexander Jannie',
      description: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DummyUserPic3,
      name: 'Nairobi Putri Hayza',
      description: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyUserPic4,
      name: 'John McParker Steve',
      description: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Messages</Text>
        {messages.map((message) => {
          return (
            <List
              key={message.id}
              picture={message.profile}
              name={message.name}
              description={message.description}
              onPress={() => navigation.navigate('Chatting')}
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
