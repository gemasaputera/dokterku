import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Separator} from '../../components/atoms';
import {
  DoctorCategory,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components/molecules';
import {colors, fonts, showError} from '../../utils';
import {Firebase} from '../../config';

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [topRatedDoctor, setTopRatedDoctor] = useState([]);
  useEffect(() => {
    getCategoryDoctor();
    getTopRatedDoctor();
    getNews();
  }, []);

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filtered = data.filter((el) => el !== null);
          setCategoryDoctor(filtered);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const getTopRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({id: key, data: oldData[key]});
          });
          setTopRatedDoctor(data);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const getNews = () => {
    Firebase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filtered = data.filter((el) => el !== null);
          setNews(filtered);
        }
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Separator height={30} />
          <View style={styles.wrapperSection}>
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcomeText}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.wrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Separator width={32} />
                {categoryDoctor.length !== 0 &&
                  categoryDoctor.map((item) => {
                    return (
                      <DoctorCategory
                        category={item.category}
                        onPress={() =>
                          navigation.navigate('ChooseDoctor', item)
                        }
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
            {topRatedDoctor.map((item) => {
              return (
                <RatedDoctor
                  avatar={{
                    uri: item.data.photo,
                  }}
                  name={item.data.fullName}
                  key={item.id}
                  job={item.data.profession}
                  rate={item.data.rate}
                  onPress={() => navigation.navigate('DoctorProfile', item)}
                />
              );
            })}
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          {news.length !== 0 &&
            news.map((newsItem) => {
              return (
                <NewsItem
                  key={newsItem.id}
                  title={newsItem.title}
                  date={newsItem.date}
                  image={newsItem.image}
                />
              );
            })}
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
