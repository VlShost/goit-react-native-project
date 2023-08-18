import { useState } from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export default function AuthBtn({ text, onPress }) {
  return (
    <Pressable style={styles.buttonActive}>
      <Text style={styles.buttonActiveText} onPress={onPress}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonActive: {
    backgroundColor: '#FF6C00',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
  },
  buttonInactive: {
    backgroundColor: '#F6F6F6',
    height: 50,
    width: 343,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
  },
  buttonActiveText: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-400',
  },
  buttonInactiveText: {
    color: '#BDBDBD',
    fontFamily: 'Roboto-400',
  },
});
