import { Box, Grid, Typography } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import NestedCollapseDropdownCheckbox from 'components/NestedCollapseDropdownCheckbox/CollapseDropdownCheckbox';
import SearchInput from 'components/SearchField/searchInput';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import { useState } from 'react';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import { ConsultingAndResearchView } from 'features/ConsultingAndResearch';
import { ProceduresView } from 'features/Prodcedures';
import { MedicationsView } from 'features/Medicals';

const AppointmentsBoxModal = ({ option }: any) => {
  return (
    <Box
      className=" bg-[#F5F5F5] border border-[rgba(0, 0, 0, 0.23)] overflow-hidden"
      sx={{
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
        <Typography className="text-lg text-black font-roboto font-normal">
          Доступные назначения
        </Typography>
        <DefaultCheckbox label="Скрывать сделанные назначения" />
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className=" bg-[#F5F5F5]  max-w-[100%] w-[100%] max-h-[400px]  h-[400px] overflow-scroll px-[5px] pb-[5px]"
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
            handleSelect={() => console.log('clicked')}
            selectedItems={[]}
          />
        </Box>
      </Grid>
    </Box>
  );
};

const AppointmentsBox = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="border px-[10px] py-[5px] mt-[10px] mb-10">
      <SectionTitle title="Назначения" className="text-base font-medium py-2" />
      <DefaultButton
        classStyle="bg-[#4CAF50] text-[#fff] h-[30px]"
        title="Назначить из лечебной программы!"
        onClick={() => setOpen(true)}
      />
      <AdvancedModal
        open={open}
        modalTitle={'Выбор назначений'}
        onClose={handleClose}
        size="large"
        children={<AppointmentsBoxModal option={[]} />}
      />
    </Box>
  );
};

const AppointmentsSections = () => {
  return (
    <Box className="border w-full px-[10px] py-[5px] mt-[10px] ">
      <AppointmentsBox />
      <ConsultingAndResearchView />
      <ProceduresView />
      <MedicationsView />
    </Box>
  );
};

export default AppointmentsSections;
