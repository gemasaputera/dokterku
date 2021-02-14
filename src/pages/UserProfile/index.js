import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors} from './../../utils';
import {Header, Profile, List, Separator} from './../../components';

const UserProfile = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Separator height={10} />
      <Profile job="Product Designer" name="Shayna Melinda" />
      <Separator height={14} />
      <List
        name="Edit Profile"
        description="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Language"
        description="Available 12 languages"
        type="next"
        icon="translate"
      />
      <List
        name="Give Us Rate"
        description="On Google Play Store"
        type="next"
        icon="star-menu"
      />
      <List
        name="Help Center"
        description="Read our guidelines"
        type="next"
        icon="document"
      />
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
