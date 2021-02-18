import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Profile, Separator} from '../../components';
import {colors, useForm} from '../../utils';

const UpdateProfile = ({navigation, route}) => {
  const {fullName, email, photo, job} = route.params;
  const [form, setForm] = useForm({
    fullName: fullName,
    job: job,
    email: email,
    photo: photo,
    password: '',
  });

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile avatar={form.photo} isRemove />
          <Separator height={26} />
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
            secureTextEntry
            onChangeText={(value) => setForm('password', value)}
          />
          <Separator height={40} />
          <Button
            title="Save Profile"
            type="primary"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingTop: 16,
    paddingBottom: 48,
  },
});
