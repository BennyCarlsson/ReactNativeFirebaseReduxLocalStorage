import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state);
  return <Text style={styles.sectionTitle}>Count {count}</Text>;
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Counter;
