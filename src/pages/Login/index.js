import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, fonts, storeData, useForm} from '../../utils';
import {Firebase} from '../../config';
import {ILLogo} from './../../assets';
import {Input, Separator, Link, Button, Loading} from './../../components';
import {showMessage} from 'react-native-flash-message';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useForm({email: '', password: ''});

  const SignIn = () => {
    setLoading(true);
    Firebase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        Firebase.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((response) => {
            if (response.val()) {
              storeData('user', response.val());
              navigation.replace('MainApp');
            }
          })
          .catch((error) => {
            const errorMessage = error.message;
            showMessage({
              message: errorMessage,
              type: 'danger',
              backgroundColor: colors.error,
              color: colors.white,
            });
          });
        setLoading(false);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'danger',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <ILLogo />
          <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Separator height={24} />
          <Input
            label="Password"
            value={form.password}
            secureTextEntry
            onChangeText={(value) => setForm('password', value)}
          />
          <Separator height={10} />
          <Link title="Forgot My Password" size={12} lineHeight={16} />
          <Separator height={40} />
          <Button type="primary" title="Sign In" onPress={SignIn} />
          <Separator height={30} />
          <Link
            title="Create New Account"
            size={16}
            lineHeight={21}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
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
