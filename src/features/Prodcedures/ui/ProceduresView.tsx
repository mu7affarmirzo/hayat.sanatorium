import { Box, Typography } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useProceduresViewHook } from './hook';
import AdvancedModal from 'components/Modals/ReuseableModal/reuseableModal';
import { ProceduresModalView } from '../components/ProceduresModal';

export const ProceduresView = () => {
  const { isOpen, toggleMedicalsModal } = useProceduresViewHook();
  return (
    <Box className="border p-2 my-2 ">
      <SectionTitle
        title="Лечебные процедуры"
        className="text-base font-medium"
      />
      <Box className="flex flex-row items-center justify-start gap-3 ">
        <Typography className="text-sm text-black">
          Лечебные процедуры не назначены.
        </Typography>
        <DefaultButton
          classStyle="bg-[#4CAF50] text-[#fff]"
          title="Добавить"
          onClick={toggleMedicalsModal}
        />
        <AdvancedModal
          open={isOpen}
          onClose={toggleMedicalsModal}
          size="large"
          children={<ProceduresModalView />}
          modalTitle={'Выбор назначений'}
        />
      </Box>
    </Box>
  );
};
