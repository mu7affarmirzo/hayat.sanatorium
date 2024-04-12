import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import TextareActionBox from 'components/TextareActionBox';
import { FC } from 'react';

type Props = {
  title: string;
  boxLabel?: string;
  topChildern?: any;
  bottomChildern?: any;
  isActions?: boolean;
  isDisabled?: boolean;
};

export const GetCategoryTextareField: FC<Props> = ({
  title,
  bottomChildern,
  topChildern,
  isActions = false,
  boxLabel,
  isDisabled = true,
}) => {
  return (
    <Box className="border p-2 my-2">
      <SectionTitle
        title={boxLabel as ''}
        className="text-base font-roboto font-medium"
      />
      <Box>{topChildern}</Box>
      <TextareActionBox
        isActions={isActions}
        isDisabled={isDisabled}
        title={title}
      />
      <Box>{bottomChildern}</Box>
    </Box>
  );
};
