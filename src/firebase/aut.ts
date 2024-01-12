import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from './firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginFirebaseProps } from '../types/loginTypes';

const auth = getAuth();

export const getUserById = async (user: string) =>
  await getDoc(doc(dataBase, 'users', user));

export const loginFirebase = async ({ user, password }: LoginFirebaseProps) => {
  try {
    const loginF = await signInWithEmailAndPassword(auth, user, password);
    return loginF;
  } catch (error: any) {
    console.debug('error message', error.message);
    return null;
  }
};
