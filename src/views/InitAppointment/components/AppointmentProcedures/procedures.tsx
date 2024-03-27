/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import NestedCollapseDropdownCheckbox from 'components/NestedCollapseDropdownCheckbox/nestedCollapseDropdownCheckbox';
import SearchInput from 'components/SearchField/searchInput';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { useState } from 'react';
import useAppointmentPredcedures from './hook';

const options = [
  {
    id: 1,
    title: 'Section 1',
    sections: [
      {
        id: 11,
        title: 'Subsection 1.1',
        items: [
          { id: 111, title: 'Item 1.1.1' },
          { id: 112, title: 'Item 1.1.2' },
        ],
      },
      {
        id: 12,
        title: 'Subsection 1.2',
        items: [
          { id: 121, title: 'Item 1.2.1' },
          { id: 122, title: 'Item 1.2.2' },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Section 2',
    items: [
      { id: 21, title: 'Item 2.1' },
      { id: 22, title: 'Item 2.2' },
    ],
  },
];

const AppointmentProductosModalSection = ({ option }: any) => {
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

export const AppointmentProductos = () => {
  const { data } = useAppointmentPredcedures();
  const [open, setOpen] = useState(false);
  console.log(data, 'data prodcedures ');

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="border p-2 my-2 ">
      <SectionTitle
        title="Лечебные процедуры"
        className="text-base font-medium"
      />
      <Box className="flex flex-row items-center justify-start gap-3 ">
        <DefaultText style="text-sm text-black">
          Лечебные процедуры не назначены.
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
          children={<AppointmentProductosModalSection option={data} />}
          modalTitle={'Выбор назначений'}
        />
      </Box>
    </Box>
  );
};
