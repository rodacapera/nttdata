import { Box, CircularProgress } from '@mui/material';

const CustomLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '110vh',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default CustomLoader;
