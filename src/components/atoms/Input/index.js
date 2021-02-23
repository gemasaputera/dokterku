import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';

export default function Input({
  label,
  value,
  onChangeText,
  secureTextEntry,
  disabled,
}) {
  const [border, setBorder] = useState(colors.border);
  const OnFocusForm = () => {
    setBorder(colors.blue);
  };
  const OnBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        onFocus={OnFocusForm}
        onBlur={OnBlurForm}
        style={styles.input(border)}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        value={value}
        editable={!disabled}
        selectTextOnFocus={!disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: (border) => ({
    height: 45,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
    marginTop: 6,
    padding: 12,
  }),
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    lineHeight: 22,
    color: colors.text.secondary,
  },
});
