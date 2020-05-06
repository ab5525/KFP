import config from './config';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    if(!snapShot.exists){
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error){
        console.log('error creating user')

      }

    }

    console.log(snapShot);

    return userRef;

  }

  export const createDonator = async(firstName, lastName, email, selected, additionalData) => {

    const increment = firebase.firestore.FieldValue.increment(1);
    const ref = firestore.collection('amountDonations').doc('amount');

    ref.update({amount: increment});
    
    const userRef = firestore.doc(`donation/${firstName}`);

    const snapShot = await userRef.get();

    const createdAt = new Date();

    const amountDonated=selected;

      try {
        await userRef.set({
          firstName,
          lastName,
          email,
          createdAt,
          amountDonated,
          ...additionalData
        })
      } catch(error){
        console.log('error logging the donation')
      }


    console.log(snapShot);

    return userRef;

  }
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;