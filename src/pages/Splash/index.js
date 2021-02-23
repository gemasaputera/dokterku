import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../utils';
import {ILLogo} from './../../assets';
import {Firebase} from './../../config';

export default function Splash({navigation}) {
  useEffect(() => {
    const unsubcribe = Firebase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 2000);
    });

    return () => unsubcribe();
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
