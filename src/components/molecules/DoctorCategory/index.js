import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {ILMarker} from './../../../assets';
import {fonts} from './../../../utils';

const DoctorCategory = ({title}) => {
  return (
    <View style={styles.container}>
      <ILMarker style={styles.illustration} />
      <View>
        <Text style={styles.defaultText}>Saya butuh</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    padding: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginRight: 10,
    width: 100,
    height: 130,
  },
  defaultText: {
    color: colors.text.primary,
    fontSize: 12,
    fontFamily: fonts.primary[400],
  },
  illustration: {
    marginBottom: 28,
  },
  title: {
    color: colors.text.primary,
    fontSize: 12,
    fontFamily: fonts.primary[600],
  },
});
