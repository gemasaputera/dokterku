import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Button, Link, Separator} from '../../components';
import {colors, fonts} from '../../utils';
import {ILNullPhoto, IconPrimaryAdd, IconPrimaryRemove} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);

  const PressedFunction = () => {
    if (hasPhoto) {
      setHasPhoto(!hasPhoto);
      setPhoto(ILNullPhoto);
    } else {
      launchImageLibrary({}, (res) => {
        console.log('Response = ', res);
        if (res.didCancel) {
          showMessage({
            message: 'User tidak mengimport foto',
            type: 'danger',
            backgroundColor: colors.error,
            color: colors.white,
          });
        } else {
          const resource = {uri: res.uri};
          setPhoto(resource);
          setHasPhoto(true);
        }
      });
    }
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
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            type="primary"
            onPress={() => navigation.replace('MainApp')}
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
