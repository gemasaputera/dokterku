import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {DummyUserPic1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.homepicture} source={DummyUserPic1} />
      <View style={styles.wrapperProfile}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.title}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  homepicture: {
    width: 46,
    height: 46,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  title: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[600],
  },
  wrapperProfile: {
    marginHorizontal: 12,
  },
});
