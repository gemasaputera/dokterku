import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconFace,
  IconFaceActive,
  IconMap,
  IconMapActive,
  IconMessage,
  IconMessageActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({onPress, onLongPress, label, active}) => {
  const Icon = () => {
    if (label === 'Doctor') {
      return active ? <IconFaceActive /> : <IconFace />;
    }
    if (label === 'Messages') {
      return active ? <IconMessageActive /> : <IconMessage />;
    }
    if (label === 'Hospitals') {
      return active ? <IconMapActive /> : <IconMap />;
    }
    return <IconFace />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.label(active)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: (active) => ({
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    fontSize: 10,
    marginTop: 4,
  }),
});
