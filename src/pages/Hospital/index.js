import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyPicBuilding2} from '../../assets/dummy';
import {ListHospital, Separator} from '../../components';
import {colors, fonts, showError} from './../../utils';
import {Firebase} from './../../config';

const Hospital = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    Firebase.database()
      .ref('hospitals/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          setHospitals(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={DummyPicBuilding2} style={styles.background}>
        <Text style={styles.nearby}>Nearby Hospitals</Text>
        <Text style={styles.available}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.page}>
        <Separator height={14} />
        {hospitals.length !== 0 &&
          hospitals.map((item) => {
            return (
              <ListHospital
                key={item.id}
                name={item.name}
                address={item.address}
                image={item.image}
              />
            );
          })}
      </View>
    </View>
  );
};

export default Hospital;

const styles = StyleSheet.create({
  available: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
  },
  background: {
    height: 240,
  },
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  nearby: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 6,
    textAlign: 'center',
  },
  page: {
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    flex: 1,
  },
});
