import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Separator, Button} from '../../atoms';
import DarkProfile from './DarkProfile';

export default function Header({onPress, title, type}) {
  if (type === 'dark-profile') {
    return <DarkProfile onPress={onPress} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(type)}>{title}</Text>
      <Separator width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: (type) => ({
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
    flex: 1,
  }),
});
