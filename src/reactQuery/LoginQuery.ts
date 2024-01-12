import { useQuery } from '@tanstack/react-query';
import { getUserById, loginFirebase } from '../firebase/aut';
import { GetLoginQueryProps, UserDb } from '../types/loginTypes';

export const LoginQuery = ({
  user,
  password,
  sendLogin,
  setLoginFail,
}: GetLoginQueryProps) => {
  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const resultUser = await loginFirebase({
        user: user!,
        password: password!,
      });
      if (resultUser && resultUser.user) {
        const docSnap = await getUserById(resultUser.user.uid);
        if (docSnap.exists()) {
          const user = docSnap.data() as UserDb;
          localStorage.setItem(
            '@user',
            JSON.stringify({
              ...user,
              ...{ uid: resultUser.user.uid, email: resultUser.user.email },
            })
          );
          return user;
        } else {
          setLoginFail(true);
          setTimeout(() => {
            setLoginFail(false);
          }, 2000);
          return null;
        }
      } else {
        setLoginFail(true);
        setTimeout(() => {
          setLoginFail(false);
        }, 2000);
        return null;
      }
    },
    retry: false,
    enabled: sendLogin,
  });
  return query;
};
