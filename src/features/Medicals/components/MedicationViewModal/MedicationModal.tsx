import { Box, Grid, Typography } from '@mui/material';
import SearchInput from 'components/SearchField/searchInput';
import { MedicationTableView } from '../MedicationTable';
import ReuseableRadioButtonGroup from 'components/ReuseableRadioButtonGroup';

const options = [
  { label: 'Аптека стационара', value: 'hospitalpharmacy' },
  { label: 'Свой', value: 'onlyMy' },
];

export const MedicationModal = () => {
  return (
    <Box
      className="w-[100%]  bg-[#F5F5F5] border border-[rgba(0, 0, 0, 0.23)] overflow-hidden"
      sx={{
        width: '100%',
        border: '1px',
        borderColor: 'rgba(0, 0, 0, 0.23)',
        overflow: 'hidden',
      }}>
      <Grid
        item
        xs={12}
        md={12}
        className="mt-[10px]  p-[4px]"
        sx={{ marginTop: '10px', padding: '4px' }}>
        <Typography className={'text-[20px] text-[#000]'}>
          Медикаменты
        </Typography>
        <ReuseableRadioButtonGroup options={options} />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className=" bg-[#F5F5F5]  max-w-[100%] w-[100%]  max-h-[400px]  h-[400px] overflow-scroll px-[5px] pb-[5px]"
        sx={{
          maxWidth: '100%',
          width: '100%',
          maxHeight: '400px',
          height: '400px',
          padding: '0 5px , 5px , 5px',
        }}>
        <SearchInput placeholder="Искать в таблице" />
        <Box
          sx={{
            borderTop: '1px',
            height: '100%',
            backgroundColor: '#cd2222',
            overflow: 'scroll',
            overflowX: 'auto',
          }}>
          <MedicationTableView />
        </Box>
      </Grid>
    </Box>
  );
};
