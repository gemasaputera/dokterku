import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {ILLogo} from './../../assets';
import {Firebase} from './../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('user', user);
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      });
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    lineHeight: 27,
    marginTop: 20,
    color: colors.secondary,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
