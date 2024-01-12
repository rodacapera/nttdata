import { Box, Typography } from '@mui/material';
import CustomLoader from '../../components/CustomLoader';
import HomeHook from '../../hooks/HomeHook';
import Header from './components/Header';
import Images from './components/Images';

const Home = () => {
  const { user, isLoading, itemData, itemDataIsLoading, handleLogout } =
    HomeHook();

  return isLoading ? (
    <CustomLoader />
  ) : (
    user && (
      <Box>
        <Header user={user} handleLogout={handleLogout} />
        <Typography className='tw-text-black tw-text-2xl tw-font-extrabold tw-text-center tw-pt-32'>
          Listado de frutas disponibles
        </Typography>
        <Box sx={{ px: 3, pt: 4, pb: 1 }}>
          {itemDataIsLoading ? (
            <CustomLoader />
          ) : (
            <Images itemData={itemData} />
          )}
        </Box>
      </Box>
    )
  );
};

export default Home;
