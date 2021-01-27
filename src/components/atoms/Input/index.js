import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    marginTop: 6,
    padding: 12,
  },
  title: {
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: '#7D8797',
  },
});
