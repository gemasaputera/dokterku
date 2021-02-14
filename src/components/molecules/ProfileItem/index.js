import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({label, description}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  description: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
  label: {
    color: colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
  },
});
