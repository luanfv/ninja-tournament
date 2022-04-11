import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';

import { INinja } from '../@types/ninja';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: 'naruto-shuriken',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getNinjas = async (): Promise<INinja[]> => {
  const data = collection(db, 'ninjas');
  const snapshot = await getDocs(data);
  const ninjas = snapshot.docs.map((doc) => doc.data()) as INinja[];

  return ninjas;
};

export { getNinjas };
