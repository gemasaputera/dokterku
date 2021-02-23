import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors, useForm, storeData, showError} from '../../utils';
import {Firebase} from '../../config';
import {Header, Input, Separator, Button, Loading} from './../../components';

export default function Register({navigation}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    password: '',
  });

  const OnContinue = () => {
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setForm('reset');

        const data = {
          fullName: form.fullName,
          job: form.job,
          email: form.email,
          uid: success.user.uid,
        };

        Firebase.database().ref(`users/${success.user.uid}/`).set(data);

        storeData('user', data);
        setLoading(false);
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        setLoading(false);
        showError(error.message);
      });
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <Separator height={24} />
            <Input
              label="Pekerjaan"
              value={form.job}
              onChangeText={(value) => setForm('job', value)}
            />
            <Separator height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Separator height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
              secureTextEntry
            />
            <Separator height={40} />
            <Button type="primary" title="Continue" onPress={OnContinue} />
          </View>
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
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
