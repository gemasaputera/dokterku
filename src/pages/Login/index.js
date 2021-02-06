import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {ILLogo} from './../../assets';
import {Input, Separator, Link, Button} from './../../components';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Separator height={24} />
      <Input label="Password" />
      <Separator height={10} />
      <Link title="Forgot My Password" size={12} lineHeight={16} />
      <Separator height={40} />
      <Button
        type="primary"
        title="Sign In"
        onPress={() => navigation.replace('MainApp')}
      />
      <Separator height={30} />
      <Link
        title="Create New Account"
        size={16}
        lineHeight={21}
        align="center"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 40,
  },
  title: {
    color: colors.secondary,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: fonts.primary[600],
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 165,
  },
});
