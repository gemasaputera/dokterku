import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Profile, Separator} from '../../components';
import {colors} from '../../utils';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile isRemove />
          <Separator height={26} />
          <Input label="Full Name" />
          <Separator height={24} />
          <Input label="Pekerjaan" />
          <Separator height={24} />
          <Input label="Email Address" />
          <Separator height={24} />
          <Input label="Password" />
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
