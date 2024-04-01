/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import NestedCollapseDropdownCheckbox from 'components/NestedCollapseDropdownCheckbox/CollapseDropdownCheckbox';
import SearchInput from 'components/SearchField/searchInput';
import DefaultText from 'components/defaultText/DefaultText';
import { FC } from 'react';

type MedServiceType = {
  option: any;
  selectedItem: any[];
  handleSelect: (item: any) => void;
};

const AppointmentCosultationModal: FC<MedServiceType> = ({
  option,
  handleSelect,
  selectedItem,
}) => {
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
        <DefaultText style={'text-[20px] text-[#000]'}>
          Доступные назначения
        </DefaultText>
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
            backgroundColor: '#ffff',
            overflow: 'scroll',
            overflowX: 'auto',
          }}>
          <NestedCollapseDropdownCheckbox
            options={option}
            handleSelect={handleSelect}
            selectedItems={selectedItem}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default AppointmentCosultationModal;
