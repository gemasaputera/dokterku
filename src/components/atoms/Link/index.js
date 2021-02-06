import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Link({title, size, lineHeight, align}) {
  return (
    <View>
      <Text style={styles.title(size, lineHeight, align)}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: (size, lineHeight, align) => ({
    fontSize: size,
    lineHeight: lineHeight,
    textAlign: align,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textDecorationLine: 'underline',
    textDecorationColor: colors.text.secondary,
  }),
});
