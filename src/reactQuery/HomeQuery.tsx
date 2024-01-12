import { useQuery } from '@tanstack/react-query';
import { UserDb } from '../types/loginTypes';

export const GetUserQuery = () =>
  useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const userLogged = localStorage.getItem('@user');
      return userLogged ? (JSON.parse(userLogged) as UserDb) : null;
    },
  });
