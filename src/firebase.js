import firestore from '@react-native-firebase/firestore';
import store from './store';

export const databaseListener = () => {
  return firestore()
    .collection('counter')
    .doc('count')
    .onSnapshot(snapshot => {
      setTimeout(
        () =>
          store.dispatch({
            type: 'ADD',
            payload: {count: snapshot.data().count},
          }),
        2000,
      );
    });
};

export const updateCount = n => {
  firestore()
    .collection('counter')
    .doc('count')
    .set({count: n});
};
