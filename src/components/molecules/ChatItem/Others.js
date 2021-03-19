import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from './../../../utils';

const Others = ({avatar, message, time}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.userPicture} source={avatar} />
      <View>
        <View style={styles.background}>
          <Text style={styles.chatText}>{message}</Text>
        </View>
        <Text style={styles.chatDate}>{time}</Text>
      </View>
    </View>
  );
};

export default Others;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    maxWidth: '80%',
    padding: 12,
  },
  chatDate: {
    color: colors.text.secondary,
    fontSize: 11,
    fontFamily: fonts.primary[400],
    marginTop: 8,
  },
  chatText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
  container: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    marginBottom: 20,
    paddingLeft: 16,
  },
  userPicture: {
    borderRadius: 30 / 2,
    height: 30,
    marginRight: 12,
    width: 30,
  },
});
