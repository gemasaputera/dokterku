import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Separator} from '../../components/atoms';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Doctor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <HomeProfile />
        <Text style={styles.welcomeText}>
          Mau konsultasi dengan siapa hari ini?
        </Text>
        <View style={styles.wrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Separator width={16} />
              <DoctorCategory title="dokter umum" />
              <DoctorCategory title="psikiater" />
              <DoctorCategory title="dokter obat" />
              <DoctorCategory title="dokter anak" />
              <Separator width={6} />
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionLabel}> Top Rated Doctors</Text>
        <RatedDoctor />
        <RatedDoctor />
        <RatedDoctor />
        <Text style={styles.sectionLabel}>Good News</Text>
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  page: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 16,
    flex: 1,
  },
  sectionLabel: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
  },
  welcomeText: {
    color: colors.text.primary,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    lineHeight: 24,
    maxWidth: 215,
    marginBottom: 16,
  },
  wrapper: {
    marginHorizontal: -16,
  },
});
