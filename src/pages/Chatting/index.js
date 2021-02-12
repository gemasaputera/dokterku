import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from './../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.goBack()}
        title="sample"
        type="dark-profile"
      />
      <ScrollView style={styles.wrapperChat}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem
          isMe
          message="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
        />
        <ChatItem message="Oh tentu saja tidak karena jeruk itu sangat sehat..." />
        <ChatItem
          isMe
          message="Ibu dokter, apakah memakan jeruk tiap hari itu buruk?"
        />
      </ScrollView>
      <InputChat />
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
