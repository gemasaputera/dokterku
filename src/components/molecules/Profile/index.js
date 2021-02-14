import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUserPic1, IconPrimaryRemove} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, job, isRemove}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperAvatar}>
        <Image style={styles.avatar} source={DummyUserPic1} />
        {isRemove && <IconPrimaryRemove style={styles.removeIcon} />}
      </View>
      {name && (
        <>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.job}>{job}</Text>
        </>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 110 / 2,
    height: 110,
    width: 110,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  job: {
    color: colors.text.secondary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  name: {
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: fonts.primary[600],
  },
  removeIcon: {
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  wrapperAvatar: {
    borderColor: colors.border,
    borderRadius: 130 / 2,
    borderWidth: 1,
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
  },
});
