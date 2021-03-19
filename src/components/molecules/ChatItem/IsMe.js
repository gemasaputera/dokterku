import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from './../../../utils';

const IsMe = ({message, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.chatText}>{message}</Text>
      </View>
      <Text style={styles.chatDate}>{time}</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.lightBlue,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    maxWidth: '70%',
    padding: 12,
  },
  chatDate: {
    color: colors.text.secondary,
    fontSize: 11,
    fontFamily: fonts.primary[400],
    marginTop: 8,
  },
  chatText: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingRight: 16,
  },
});
