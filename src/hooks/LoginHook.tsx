import { useEffect, useState } from 'react';
import { LoginQuery } from '../reactQuery/LoginQuery';
import { useNavigate } from 'react-router-dom';
import { GetUserQuery } from '../reactQuery/HomeQuery';

export type LoginType = 'user' | 'pass';
const LoginHook = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [allFieldsRequired, setAllFieldsRequired] = useState(false);
  const [loginFail, setLoginFail] = useState(false);
  const [sendLogin, setSendLogin] = useState(false);
  const { data, isLoading } = LoginQuery({
    user,
    password,
    sendLogin,
    setLoginFail,
  });
  const currentUser = GetUserQuery();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLogin = (
    data: React.ChangeEvent<HTMLInputElement>,
    type: LoginType
  ) => {
    type == 'user'
      ? setUser(data.target.value)
      : setPassword(data.target.value);
  };

  const handleSendLogin = () => {
    if (user && password) {
      setSendLogin(true);
      setTimeout(() => {
        setSendLogin(false);
      }, 2000);
    } else {
      setAllFieldsRequired(true);
      setTimeout(() => {
        setAllFieldsRequired(false);
      }, 2000);
    }
  };

  useEffect(() => {
    !isLoading && data && navigate('/');
  }, [isLoading, data]);

  useEffect(() => {
    currentUser?.data && navigate('/');
  }, [currentUser]);

  return {
    handleLogin,
    handleSendLogin,
    allFieldsRequired,
    loginFail,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    currentUser,
  };
};

export default LoginHook;
