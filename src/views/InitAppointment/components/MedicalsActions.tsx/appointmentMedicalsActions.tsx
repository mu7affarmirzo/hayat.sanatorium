/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import { useAppointmentMedicalsActions } from './hook';
import NestedCollapseDropdownCheckbox from 'components/NestedCollapseDropdownCheckbox/CollapseDropdownCheckbox';
import SearchInput from 'components/SearchField/searchInput';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import DefaultText from 'components/defaultText/DefaultText';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import { FC } from 'react';

interface ModalProps {
  options: any;
  handleSelect: (item: any) => void;
  selectedItems: any[];
}

const AppointmentMedicalsModalSection: FC<ModalProps> = ({
  handleSelect,
  options,
  selectedItems,
}) => {
  return (
    <Box className="w-full bg-gray-100 border border-gray-300 overflow-hidden">
      <Grid item xs={12} md={12} className="mt-2 p-1">
        <DefaultText style="text-2xl text-black">
          Доступные назначения
        </DefaultText>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        className="bg-gray-100 max-w-full w-full max-h-400 h-400 overflow-scroll px-1 pb-1">
        <SearchInput placeholder="Искать в таблице" />
        <Box className="border-t overflow-auto">
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

export const AppointmentMedicalsActions = () => {
  const {
    isOpen,
    medicalsData,
    toggleMedicalsModal,
    handleCheckboxChange,
    selectedItems,
  } = useAppointmentMedicalsActions();

  return (
    <Box className="border p-2 my-2">
      <SectionTitle title="Медикаменты" className="text-base font-medium" />
      <Box className="flex items-center justify-between gap-3">
        <DefaultText style="text-sm text-black">
          Медикаменты не назначены.
        </DefaultText>
        <DefaultButton
          classStyle="bg-green-500 text-white"
          title="Добавить"
          onClick={toggleMedicalsModal}
        />
        <AdvancedModal
          open={isOpen}
          onClose={toggleMedicalsModal}
          size="large"
          classNameStyle="w-full py-3 bg-pink-300"
          children={
            <AppointmentMedicalsModalSection
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
