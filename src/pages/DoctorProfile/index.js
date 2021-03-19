import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  Button,
  Header,
  Profile,
  ProfileItem,
  Separator,
} from '../../components';
import {colors} from './../../utils';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.container}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View>
          <Separator height={16} />
          <Profile
            avatar={{uri: dataDoctor.data.photo}}
            name={dataDoctor.data.fullName}
            job={dataDoctor.data.profession}
          />
          <Separator height={10} />
          <ProfileItem
            label="Alumnus"
            description={dataDoctor.data.university}
          />
          <ProfileItem
            label="Tempat Praktik"
            description={dataDoctor.data.hospital_address}
          />
          <ProfileItem
            label="No. STR"
            description={dataDoctor.data.str_number}
          />
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
