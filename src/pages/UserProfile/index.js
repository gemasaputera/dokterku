import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors, getData, showError, showSuccess} from './../../utils';
import {Header, Profile, List, Separator} from './../../components';
import {ILNullPhoto} from '../../assets';
import {Firebase} from '../../config';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    job: '',
  });

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      if (data.photo === '') {
        data.photo = ILNullPhoto;
      } else {
        data.photo = {uri: response.photo};
      }
      setProfile(data);
    });
  }, []);

  const logout = () => {
    Firebase.auth()
      .signOut()
      .then((res) => {
        showSuccess('succes logout');
        navigation.replace('GetStarted');
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Separator height={10} />
      <Profile
        avatar={profile.photo}
        job={profile.job}
        name={profile.fullName}
      />
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
        name="Sign Out"
        description="Read our guidelines"
        type="next"
        icon="document"
        onPress={logout}
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
