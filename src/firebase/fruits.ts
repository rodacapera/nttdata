import { collection, getDocs } from 'firebase/firestore';
import { AllRefPropsFirebase } from '../types/firebase';
import { dataBase } from './firebaseConfig';

const allRef = ({ ref }: AllRefPropsFirebase) => collection(dataBase, ref);

export const getAllFruits = async () =>
  await getDocs(allRef({ ref: 'fruits' }));
