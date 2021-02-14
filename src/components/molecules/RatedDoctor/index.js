import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {IconStar} from './../../../assets';
import {colors, fonts} from './../../../utils';

const RatedDoctor = ({onPress, name, avatar, job}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.doctorPicture} source={avatar} />
      <View style={styles.wrapper}>
        <View style={styles.wrapperText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.category}>{job}</Text>
        </View>
        <View style={styles.wrapperStar}>
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </View>
      </View>
    </TouchableOpacity>
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
