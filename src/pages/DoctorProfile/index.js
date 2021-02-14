import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  Button,
  Header,
  Profile,
  ProfileItem,
  Separator,
} from '../../components';
import {colors} from './../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View>
          <Separator height={16} />
          <Profile name="Nairobi Putri Hayza" job="Dokter Anak" />
          <Separator height={10} />
          <ProfileItem
            label="Alumnus"
            description="Universitas Indonesia, 2020"
          />
          <ProfileItem
            label="Tempat Praktik"
            description="Rumah Sakit Umum, Bandung"
          />
          <ProfileItem label="No. STR" description="0000116622081996" />
          <Separator height={23} />
          <View style={styles.wrapper}>
            <Button
              title="Start Consultation"
              type="primary"
              onPress={() => navigation.navigate('Chatting')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
});
