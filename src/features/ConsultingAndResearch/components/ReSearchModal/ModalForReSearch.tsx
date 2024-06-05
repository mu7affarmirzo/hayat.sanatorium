import { Box, Grid, Typography } from '@mui/material';
import SearchInput from 'components/SearchField/searchInput';
import { useReSearchHook } from './hook';
import CollapseCheckBoxField from 'components/NestedCollapseDropdownCheckbox/CollapseCheckboxField';

export const ReSearchModalView = () => {
  const { researchData, handleLabResearchCheckboxChange, selectedItems } =
    useReSearchHook();
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
          Доступные назначения
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className=" bg-[#F5F5F5]  max-w-[100%] w-[100%]  max-h-[400px]  h-[400px] overflow-scroll px-[5px] pb-[5px]"
        sx={{
          width: '100%',
          height: '400px',
          maxWidth: '100%',
          maxHeight: '400px',
          padding: '0 5px , 5px , 5px',
        }}>
        <SearchInput placeholder="Искать в таблице" />
        <Box
          sx={{
            height: '100%',
            borderTop: '1px',
            overflowX: 'auto',
            overflow: 'scroll',
            backgroundColor: '#ffff',
          }}>
          <CollapseCheckBoxField
            option={researchData}
            selectedItems={selectedItems}
            handleCheckboxChange={handleLabResearchCheckboxChange}
          />
        </Box>
      </Grid>
    </Box>
  );
};
