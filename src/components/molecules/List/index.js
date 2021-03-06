import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  IconNext,
  IconFile,
  IconProfile,
  IconStarMenu,
  IconTranslate,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({picture, name, description, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconProfile />;
    }
    if (icon === 'translate') {
      return <IconTranslate />;
    }
    if (icon === 'star-menu') {
      return <IconStarMenu />;
    }
    if (icon === 'document') {
      return <IconFile />;
    }
    return <IconProfile />;
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon ? <Icon /> : <Image style={styles.picture} source={picture} />}
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{description}</Text>
      </View>
      {type === 'next' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 16,
  },
  name: {
    color: colors.text.primary,
    fontSize: 16,
    fontFamily: fonts.primary[400],
  },
  message: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.primary[300],
    textTransform: 'capitalize',
  },
  picture: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
  },
  wrapper: {
    marginLeft: 12,
    flex: 1,
  },
});
