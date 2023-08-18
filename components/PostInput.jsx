import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function PostInput({
  placeholder,
  placeholderTextColor,
  inputMode,
  secureTextEntry,
  onChangeText,
  style,
  onSubmitEditing,
}) {
  return (
    <TextInput
      style={style ? style : styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      inputMode={inputMode}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 2,
    width: 343,
    height: 50,
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 15,

    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
});
