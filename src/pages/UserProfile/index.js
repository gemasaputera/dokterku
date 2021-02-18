import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {colors, getData} from './../../utils';
import {Header, Profile, List, Separator} from './../../components';
import {ILNullPhoto} from '../../assets';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    job: '',
  });

  useEffect(() => {
    getData('user').then((response) => {
      console.log('response', response);
      const data = response;
      data.photo = {uri: response.photo};
      setProfile(data);
    });
  }, []);

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
        onPress={() => navigation.navigate('UpdateProfile', profile)}
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
