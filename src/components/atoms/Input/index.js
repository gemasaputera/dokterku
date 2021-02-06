import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

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
    borderColor: colors.border,
    marginTop: 6,
    padding: 12,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 22,
    color: colors.text.secondary,
  },
});
