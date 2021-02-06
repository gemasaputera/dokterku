import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import {DummyUserPic2, IconStar} from './../../../assets';
import {colors, fonts} from './../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.doctorPicture} source={DummyUserPic2} />
      <View style={styles.wrapper}>
        <View style={styles.wrapperText}>
          <Text style={styles.name}>Alexa Rachel</Text>
          <Text style={styles.category}>Pediatrician</Text>
        </View>
        <View style={styles.wrapperStar}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
  },
  doctorPicture: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  category: {
    color: colors.text.secondary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wrapperStar: {
    flexDirection: 'row',
  },
  wrapperText: {
    marginLeft: 12,
  },
});
