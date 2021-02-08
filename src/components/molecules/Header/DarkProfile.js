import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUserPic9} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.category}>Dokter Anak</Text>
      </View>
      <Image style={styles.avatar} source={DummyUserPic9} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  category: {
    color: colors.text.tertiary,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  container: {
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
  },
  name: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    marginBottom: 6,
  },
  wrapper: {
    flex: 1,
  },
});
