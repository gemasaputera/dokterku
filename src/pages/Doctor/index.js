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
import {JSONCategory} from './../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Separator height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile />
            <Text style={styles.welcomeText}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Separator width={32} />
                {JSONCategory.data.map((item) => {
                  return (
                    <DoctorCategory
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor')}
                      key={item.id}
                    />
                  );
                })}
                <Separator width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}> Top Rated Doctors</Text>
            <RatedDoctor />
            <RatedDoctor />
            <RatedDoctor />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Separator height={30} />
        </ScrollView>
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
  wrapperSection: {
    paddingHorizontal: 16,
  },
});
