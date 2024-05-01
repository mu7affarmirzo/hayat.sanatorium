import { Box, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
  isUpper?: boolean;
  taxtStyle?: string;
};

export const AppoinmentItemTitle: FC<Partial<Props>> = ({
  isUpper,
  title,
  taxtStyle,
}) => {
  return (
    <Box>
      <Typography
        className={`font-roboto text-sm font-normal ${isUpper && 'uppercase'} ${taxtStyle}`}>
        {title}
      </Typography>
    </Box>
  );
};
