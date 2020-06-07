import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Counter from './src/components/Counter';
import Button from './src/components/Button';
import {Provider} from 'react-redux';
import {databaseListener} from './src/firebase';
import store from './src/store';

const App = () => {
  useEffect(() => {
    const unsubscribe = databaseListener();
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Counter />
        <Button />
      </SafeAreaView>
    </Provider>
  );
};
export default App;
