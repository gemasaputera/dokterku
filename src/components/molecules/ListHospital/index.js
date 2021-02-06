import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyPicBuilding3} from './../../../assets';
import {colors, fonts} from './../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={DummyPicBuilding3} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  address: {
    color: colors.text.secondary,
    fontFamily: fonts.primary[300],
    fontSize: 12,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    maxWidth: '80%',
  },
  picture: {
    height: 60,
    width: 80,
    borderRadius: 10,
  },
  wrapper: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
});
