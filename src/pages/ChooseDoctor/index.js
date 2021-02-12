import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {DummyUserPic1, JSONChooseDoctor} from '../../assets';
import {colors} from '../../utils';
import {Header, List} from './../../components';

const ChooseDoctor = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      {JSONChooseDoctor.data.map((item) => {
        return (
          <List
            picture={DummyUserPic1}
            name={item.name}
            description={item.gender}
            key={item.id}
            type="next"
            onPress={() => navigation.navigate('Chatting')}
          />
        );
      })}
      <List
        picture={DummyUserPic1}
        name="Nairobi Putri Hayza"
        description="Wanita"
        type="next"
      />
      <List
        picture={DummyUserPic1}
        name="Nairobi Putri Hayza"
        description="Wanita"
        type="next"
      />
      <List
        picture={DummyUserPic1}
        name="Nairobi Putri Hayza"
        description="Wanita"
        type="next"
      />
      <List
        picture={DummyUserPic1}
        name="Nairobi Putri Hayza"
        description="Wanita"
        type="next"
      />
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
