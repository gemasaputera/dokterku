import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Button({type, title, onPress}) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: type === 'primary' ? '#0BCAD4' : '#FFF',
  }),
  text: (type) => ({
    color: type === 'primary' ? '#FFF' : '#112340',
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    lineHeight: 25,
  }),
});
