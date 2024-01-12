import { useEffect } from 'react';
import { GetUserQuery } from '../reactQuery/HomeQuery';
import { UserDb } from '../types/loginTypes';
import { useNavigate } from 'react-router-dom';
import { GetFruitsQuery } from '../reactQuery/FruitsQuery';
import { QueryClient } from '@tanstack/react-query';

const HomeHook = () => {
  const { data, isLoading } = GetUserQuery();
  const fruits = GetFruitsQuery();
  const navigate = useNavigate();
  const queryClient = new QueryClient();

  const handleLogout = () => {
    localStorage.clear();
    queryClient.clear();
    navigate('/login');
  };

  useEffect(() => {
    !isLoading && !data && navigate('/login');
  }, [data]);

  return {
    user: data as UserDb,
    isLoading,
    itemData: fruits.data,
    itemDataIsLoading: fruits.isLoading,
    handleLogout,
  };
};

export default HomeHook;
