/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import NestedCollapseDropdownCheckbox from 'components/NestedCollapseDropdownCheckbox/CollapseDropdownCheckbox';
import SearchInput from 'components/SearchField/searchInput';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import { useAppointmentProceduresActions } from './hook';
import { FC } from 'react';

type ProdcedureModalProps = {
  options: any;
  handleSelect: (item: any) => void;
  selectedItems: any[];
};

const AppointmentProductosModalSection: FC<ProdcedureModalProps> = ({
  options,
  handleSelect,
  selectedItems,
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
            options={options}
            handleSelect={handleSelect}
            selectedItems={selectedItems}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export const AppointmentProductos = () => {
  const {
    handleCheckboxChange,
    isOpen,
    medicalsData,
    selectedItems,
    toggleMedicalsModal,
  } = useAppointmentProceduresActions();
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
          onClick={toggleMedicalsModal}
        />
        <AdvancedModal
          open={isOpen}
          onClose={toggleMedicalsModal}
          size="large"
          children={
            <AppointmentProductosModalSection
              options={medicalsData}
              handleSelect={handleCheckboxChange}
              selectedItems={selectedItems}
            />
          }
          modalTitle={'Выбор назначений'}
        />
      </Box>
    </Box>
  );
};
