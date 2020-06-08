import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import Counter from './src/components/Counter';
import Button from './src/components/Button';
import {Provider} from 'react-redux';
import {databaseListener} from './src/firebase';
import {store, persistor} from './src/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    const unsubscribe = databaseListener();
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <Counter />
          <Button />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;
