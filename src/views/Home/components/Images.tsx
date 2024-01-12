import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Fruits } from '../../../types/fruitsTypes';

const Images = ({ itemData }: { itemData: Fruits[] | undefined }) => {
  const sx = useMediaQuery('(max-width:600px)');
  const md = useMediaQuery('(min-width:920px)');
  return (
    itemData && (
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <ImageList
          sx={{ width: '80%', height: '100vh' }}
          cols={sx ? 1 : md ? 3 : 2}
          rowHeight={394}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                border: '1px solid #ccc',
                height: 340,
                borderRadius: 3,
                px: 2,
                m: 1,
              }}
              className='tw-shadow-md'
            >
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?h=248&w=248&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
                className='tw-object-contain tw-h-48 tw-w-96'
              />
              <ImageListItemBar
                title={
                  <Typography className='tw-text-blue-700 tw-capitalize tw-font-extrabold'>
                    {item.title}
                  </Typography>
                }
                subtitle={
                  <span className='tw-font-bold'>
                    Precio:
                    <span className='tw-text-green-600'>$ {item.price}</span>
                  </span>
                }
                position='below'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    )
  );
};

export default Images;
