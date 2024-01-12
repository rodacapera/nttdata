import { useQuery } from '@tanstack/react-query';
import { getAllFruits } from '../firebase/fruits';
import { Fruits } from '../types/fruitsTypes';

export const GetFruitsQuery = () =>
  useQuery({
    queryKey: ['fruits'],
    queryFn: async () => {
      const fruits: Fruits[] = [];
      const querySnapshot = await getAllFruits();
      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc: any) => {
          const dataResult = doc.data() as Fruits;
          fruits.push({ ...dataResult, id: doc.id });
        });
      }
      return fruits;
    },
  });
