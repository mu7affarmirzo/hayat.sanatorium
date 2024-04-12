import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  isUpper?: boolean;
};

export const AppoinmentItemTitle: FC<Partial<Props>> = ({ isUpper, title }) => {
  return (
    <Box>
      <Typography
        className={`font-roboto text-sm font-normal ${isUpper && 'uppercase'} `}>
        {title}
      </Typography>
    </Box>
  );
};
