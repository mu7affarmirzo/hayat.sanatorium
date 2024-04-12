import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import { FC } from 'react';

type Props = {
  children: any;
  boxTitle: string;
};

export const AppointmentSectionContainer: FC<Partial<Props>> = ({
  children,
  boxTitle,
}) => {
  return (
    <Box className="border border-[rgba(0, 0, 0, 0.23)] p-2 my-2">
      <SectionTitle
        title={boxTitle as ''}
        className="text-base font-roboto font-medium"
      />
      <Box>{children}</Box>
    </Box>
  );
};
