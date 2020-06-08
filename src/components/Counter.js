import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useSelector} from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);
  return <Text style={styles.sectionTitle}>Count {count}</Text>;
};

const styles = StyleSheet.create({
  sectionTitle: {
    padding: 50,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Counter;
