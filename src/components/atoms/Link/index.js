import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    fontFamily: 'Nunitp-Regular',
    color: '#7D8797',
    textDecorationLine: 'underline',
    textDecorationColor: '#7D8797',
  }),
});
