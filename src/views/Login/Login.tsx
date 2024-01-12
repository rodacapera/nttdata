import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import background from '../../assets/background.jpg';
import CustomLoader from '../../components/CustomLoader';
import LoginHook from '../../hooks/LoginHook';

const Login = () => {
  const {
    handleLogin,
    handleSendLogin,
    allFieldsRequired,
    loginFail,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    currentUser,
  } = LoginHook();

  return currentUser.isLoading ? (
    <CustomLoader />
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          filter: 'opacity(70%)',
          height: '100vh',
          width: '100%',
        }}
      ></Box>
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 400,
          width: 400,
          py: 2,
          px: 6,
          borderRadius: 4,
          backgroundColor: '#fff',
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          {/* <Avatar alt='Logo' src={logo} sx={{ width: 100, height: 100 }} /> */}
          <Typography className='tw-text-black tw-text-3xl tw-font-bold'>
            Iniciar Sesión
          </Typography>
        </Box>

        <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>Usiaro</InputLabel>
          <OutlinedInput
            label='Password'
            onChange={(text: any) => handleLogin(text, 'user')}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-password'>
            Contraseña
          </InputLabel>
          <OutlinedInput
            id='outlined-adornment-password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='Password'
            onChange={(text: any) => handleLogin(text, 'pass')}
          />
        </FormControl>
        <Button
          variant='contained'
          className='tw-bg-blue-700'
          onClick={handleSendLogin}
        >
          Login
        </Button>
      </Box>
      {allFieldsRequired && (
        <Alert severity='error'>Todos los campos son requeridos.</Alert>
      )}
      {loginFail && (
        <Alert severity='error'>
          El usuario y (o) la contraseña no corresponde, por favor intenta de
          nuevo.
        </Alert>
      )}
    </Box>
  );
};

export default Login;
