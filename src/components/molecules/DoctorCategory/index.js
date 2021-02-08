import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {
  ILHeart,
  ILHeartWithHand,
  ILMarker,
  ILMedicine,
} from './../../../assets';
import {fonts} from './../../../utils';

const DoctorCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'psikiater') {
      return <ILHeart style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <ILMedicine style={styles.illustration} />;
    }
    if (category === 'dokter anak') {
      return <ILHeartWithHand style={styles.illustration} />;
    }
    return <ILMarker style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <View>
        <Text style={styles.defaultText}>Saya butuh</Text>
        <Text style={styles.title}>{category}</Text>
      </View>
    </TouchableOpacity>
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
