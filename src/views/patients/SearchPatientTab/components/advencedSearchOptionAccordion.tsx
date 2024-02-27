import { Typography } from '@mui/material';
import CustomizedAccordions from 'components/CustomizedAccordions';

export const BottomAccordionBox = () => {
  return (
    <CustomizedAccordions
      title="Расширенные параметры поиска"
      childrenStyle={{ background: '#F5F5F5' }}>
      <Typography>Somthing</Typography>
    </CustomizedAccordions>
  );
};
