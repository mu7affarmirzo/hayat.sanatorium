import { Box, Typography } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useMedicationViewHook } from './hook';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import { MedicationModal } from '../components/MedicationViewModal';

export const MedicationsView = () => {
  const { isOpen, toggleMedicalsModal } = useMedicationViewHook();
  return (
    <Box className="border p-2 my-2">
      <SectionTitle title="Медикаменты" className="text-base font-medium" />
      <Box className="flex items-center justify-between gap-3">
        <Typography className="text-sm text-black">
          Медикаменты не назначены.
        </Typography>
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
          children={<MedicationModal />}
          modalTitle={'Медикаменты'}
        />
      </Box>
    </Box>
  );
};
