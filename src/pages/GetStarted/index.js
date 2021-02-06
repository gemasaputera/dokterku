import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button, Separator} from '../../components';
import {colors, fonts} from '../../utils';

export default function Navigation({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.openingText}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          type="primary"
          onPress={() => navigation.navigate('Register')}
        />
        <Separator height={16} />
        <Button
          title="Sign In"
          type="secondary"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.white,
  },
  openingText: {
    color: colors.white,
    fontFamily: fonts.primary[600],
    fontSize: 28,
    lineHeight: 34,
    marginTop: 91,
  },
});
