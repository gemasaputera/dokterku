import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Button, Link, Separator} from '../../components';
import {colors, fonts, storeData} from '../../utils';
import {ILNullPhoto, IconPrimaryAdd, IconPrimaryRemove} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Firebase} from '../../config';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, job, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [photoForDB, setPhotoForDB] = useState('');

  const PressedFunction = () => {
    if (hasPhoto) {
      setHasPhoto(!hasPhoto);
      setPhoto(ILNullPhoto);
    } else {
      launchImageLibrary(
        {includeBase64: true, quality: 0.3, maxHeight: 200, maxWidth: 200},
        (response) => {
          if (response.didCancel) {
            showMessage({
              message: 'User tidak mengimport foto',
              type: 'danger',
              backgroundColor: colors.error,
              color: colors.white,
            });
          } else {
            const dataForDB = `data:${response.type};base64, ${response.base64}`;
            const resource = {uri: response.uri};
            setPhotoForDB(dataForDB);
            setPhoto(resource);
            setHasPhoto(true);
          }
        },
      );
    }
  };

  const UploadAndContinue = () => {
    Firebase.database().ref(`users/${uid}/`).update({photo: photoForDB});
    const data = route.params;
    data.photo = photoForDB;
    storeData('user', data);
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profileWrapper}>
          <TouchableOpacity
            style={styles.avatarWrapper}
            onPress={PressedFunction}>
            <Image source={photo} style={styles.avatar} />
            {!hasPhoto && <IconPrimaryAdd style={styles.icon} />}
            {hasPhoto && <IconPrimaryRemove style={styles.icon} />}
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{job}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            type="primary"
            onPress={UploadAndContinue}
          />
          <Separator height={30} />
          <Link
            title="Skip for this"
            size={16}
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
    flex: 1,
    justifyContent: 'space-between',
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: colors.border,
  },
  profileWrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
});
