import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import {ILNullPhoto} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    job: '',
  });

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      data.photo = {uri: response.photo};
      setProfile(data);
    });
  }, []);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.homepicture} source={profile.photo} />
      <View style={styles.wrapperProfile}>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.title}>{profile.job}</Text>
      </View>
    </TouchableOpacity>
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
    borderRadius: 46 / 2,
    width: 46,
    height: 46,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
  },
  title: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[600],
    textTransform: 'capitalize',
  },
  wrapperProfile: {
    marginHorizontal: 12,
  },
});
