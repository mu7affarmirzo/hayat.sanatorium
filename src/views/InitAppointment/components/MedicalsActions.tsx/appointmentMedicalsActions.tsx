/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { useAppointmentMedicalsActions } from './hook';
import NestedCollapseDropdownCheckbox from 'components/NestedCollapseDropdownCheckbox/nestedCollapseDropdownCheckbox';
import SearchInput from 'components/SearchField/searchInput';
import { useState } from 'react';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';

const options = [
  {
    id: 1,
    branch: 'Section 1',
    items: [
      { id: 111, title: 'Item 1.1.1' },
      { id: 112, title: 'Item 1.1.2' },
      { id: 113, title: 'Item 1.1.3' },
      { id: 114, title: 'Item 1.1.4' },
    ],
  },
  {
    id: 2,
    branch: 'Section 2',
    items: [
      { id: 21, title: 'Item 2.1' },
      { id: 22, title: 'Item 2.2' },
    ],
  },
];

const AppointmentMedicalsModalSection = ({ option }: any) => {
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
          <NestedCollapseDropdownCheckbox options={option} />
        </Box>
      </Grid>
    </Box>
  );
};

export const AppointmentMedicalsActions = () => {
  const { data } = useAppointmentMedicalsActions();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  console.log(data, 'data medicals ');
  return (
    <Box className="border p-2 my-2 ">
      <SectionTitle title="Медикаменты" className="text-base font-medium" />
      <Box className="flex flx-row items-center justify-start gap-3">
        <DefaultText style="text-sm text-black">
          Медикаменты не назначены.
        </DefaultText>
        <DefaultButton
          classStyle="bg-[#4CAF50] text-[#fff]"
          title="Добавить"
          onClick={() => setOpen(true)}
        />
        <AdvancedModal
          open={open}
          onClose={handleClose}
          size="large"
          classNameStyle="w-[1024px] py-3  bg-pink-300"
          children={<AppointmentMedicalsModalSection option={data} />}
          modalTitle={'Выбор назначений'}
        />
      </Box>
    </Box>
  );
};
