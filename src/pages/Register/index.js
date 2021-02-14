import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../../utils';
import {Header, Input, Separator, Button} from './../../components';

export default function Register({navigation}) {
  const [fullName, setFullName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const OnContinue = () => {
    console.log('masuk fungsi continue');
    console.log('fullName', fullName);
    console.log('job', job);
    console.log('email', email);
    console.log('password', password);
    // navigation.navigate('UploadPhoto')
  };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={fullName}
            onChangeText={(value) => setFullName(value)}
          />
          <Separator height={24} />
          <Input
            label="Pekerjaan"
            value={job}
            onChangeText={(value) => setJob(value)}
          />
          <Separator height={24} />
          <Input
            label="Email Address"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Separator height={24} />
          <Input
            label="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry
          />
          <Separator height={40} />
          <Button type="primary" title="Continue" onPress={OnContinue} />
        </View>
      </ScrollView>
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
