import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const NewsItem = ({title, date, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>{date}</Text>
      </View>
      <Image style={styles.picture} source={{uri: image}} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[600],
    lineHeight: 22,
    maxWidth: '80%',
  },
  time: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[400],
  },
  picture: {
    height: 60,
    width: 80,
    borderRadius: 11,
  },
  wrapper: {
    flex: 1,
  },
});
