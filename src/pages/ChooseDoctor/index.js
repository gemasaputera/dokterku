import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Firebase} from '../../config';
import {colors} from '../../utils';
import {Header, List} from './../../components';

const ChooseDoctor = ({navigation, route}) => {
  const itemCategory = route.params;

  const [listDoctor, setListDoctor] = useState([]);

  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callDoctorByCategory = (category) => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const dataDoctor = [];
          Object.keys(data).map((key) => {
            dataDoctor.push({id: key, data: data[key]});
          });
          setListDoctor(dataDoctor);
        }
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Header
        title={itemCategory.category}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {listDoctor.map((doctor) => {
        return (
          <List
            picture={{uri: doctor.data.photo}}
            name={doctor.data.fullName}
            description={doctor.data.gender}
            key={doctor.data.uid}
            type="next"
            onPress={() => navigation.navigate('DoctorProfile', doctor)}
          />
        );
      })}
    </ScrollView>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
