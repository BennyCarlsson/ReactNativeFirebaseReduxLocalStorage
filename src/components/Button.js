import React from 'react';
import {Button} from 'react-native';
import {useSelector} from 'react-redux';
import {updateCount} from '../firebase';

const Counter = () => {
  const count = useSelector(state => state.count);
  return <Button title="Press Me" onPress={() => updateCount(count + 1)} />;
};

export default Counter;
