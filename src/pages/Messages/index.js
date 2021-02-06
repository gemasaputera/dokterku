import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from './../../utils';
import {ListDoctor} from './../../components';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctor />
        <ListDoctor />
        <ListDoctor />
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
