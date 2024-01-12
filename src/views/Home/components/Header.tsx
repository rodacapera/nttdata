import { Avatar, Box, Button, Typography } from '@mui/material';
import { UserDb } from '../../../types/loginTypes';

const Header = ({
  user,
  handleLogout,
}: {
  user: UserDb;
  handleLogout: () => void;
}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        zIndex: 9999999,
        boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.75)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
          backgroundColor: '#2548b9',
          py: 2,
          px: 3,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Avatar alt='Remy Sharp' />
            <Typography className='tw-text-white tw-text-xl tw-mt-1 tw-ml-2'>
              {user.name} {user.last_name}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button sx={{ textTransform: 'none' }} onClick={handleLogout}>
            <Typography className='tw-text-white tw-mr-1 tw-underline tw-text-xl'>
              Salir
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
