import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUserPic4} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.picture} source={DummyUserPic4} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.message}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  message: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[300],
  },
  picture: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  wrapper: {
    marginLeft: 12,
  },
});
