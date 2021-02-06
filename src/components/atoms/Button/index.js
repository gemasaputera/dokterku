import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../../utils';
import IconOnly from './IconOnly';

export default function Button({type, title, onPress, icon}) {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
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
    backgroundColor:
      type === 'primary'
        ? colors.button.primary.background
        : colors.button.secondary.background,
  }),
  text: (type) => ({
    color:
      type === 'primary'
        ? colors.button.primary.text
        : colors.button.secondary.text,
    fontSize: 18,
    fontFamily: fonts.primary[600],
    lineHeight: 25,
  }),
});
