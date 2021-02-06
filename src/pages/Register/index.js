import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../utils';
import {Header, Input, Separator, Button} from './../../components';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Separator height={24} />
        <Input label="Pekerjaan" />
        <Separator height={24} />
        <Input label="Email Address" />
        <Separator height={24} />
        <Input label="Password" />
        <Separator height={40} />
        <Button
          type="primary"
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
