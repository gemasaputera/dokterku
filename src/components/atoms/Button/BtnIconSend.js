import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconSentActive, IconSentInactive} from '../../../assets';
import {colors} from '../../../utils';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSentInactive />}
      {!disable && <IconSentActive />}
    </View>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable
      ? colors.disable
      : colors.button.tertiary.background,
    borderRadius: 10,
    height: 45,
    width: 45,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
