import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Header, Input, Profile, Separator} from '../../components';
import {colors, getData, showError, showSuccess, storeData} from '../../utils';
import {Firebase} from '../../config';
import {launchImageLibrary} from 'react-native-image-picker';
import {ILNullPhoto} from '../../assets';

const UpdateProfile = ({navigation}) => {
  const [password, setPassword] = useState('');

  const [profile, setProfile] = useState({
    fullName: '',
    job: '',
    email: '',
  });

  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      if (data.photo === '') {
        setPhoto(ILNullPhoto);
      } else {
        setPhoto({uri: response.photo});
      }
      setProfile(data);
    });
  }, []);

  const updateProfile = () => {
    const data = profile;
    data.photo = photoForDB;
    console.log('data', data);
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter');
      } else {
        updatePassword();
        updateProfileData(data);
      }
    } else {
      updateProfileData(data);
    }
  };

  const updateProfileData = (data) => {
    Firebase.database()
      .ref(`users/${data.uid}/`)
      .update(data)
      .then((res) => {
        showSuccess('updated');
        storeData('user', data);
        navigation.replace('MainApp');
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const updatePassword = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showError(err.message);
        });
      }
    });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const changePhoto = () => {
    launchImageLibrary(
      {includeBase64: true, quality: 0.3, maxHeight: 200, maxWidth: 200},
      (response) => {
        console.log('response', response);
        if (response.didCancel) {
          showError('User tidak mengimport foto');
        } else {
          const dataForDB = `data:${response.type};base64, ${response.base64}`;
          const resource = {uri: response.uri};
          setPhotoForDB(dataForDB);
          setPhoto(resource);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Profile avatar={photo} isRemove onPress={changePhoto} />
          <Separator height={26} />
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Separator height={24} />
          <Input
            label="Pekerjaan"
            value={profile.job}
            onChangeText={(value) => changeText('job', value)}
          />
          <Separator height={24} />
          <Input label="Email Address" value={profile.email} disabled />
          <Separator height={24} />
          <Input
            label="Password"
            value={password}
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
          />
          <Separator height={40} />
          <Button title="Save Profile" type="primary" onPress={updateProfile} />
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
