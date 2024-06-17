import { Box, Typography } from '@mui/material';
import ReuseableModal from 'components/Modals/ReuseableModal/reuseableModal';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { FC, useState } from 'react';

interface Props {
  currentAppointmentId: number;
}

export const CencelStatedAppointmentModal: FC<Partial<Props>> = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <Box>
      <DefaultButton
        title="Отменить начатый приём"
        classStyle="h-[38px] bg-[#2196F3] text-[#fff] mr-[8px]"
        disabled={true}
      />
      <ReuseableModal
        modalTitle="Отмена начатого приёма"
        size="small"
        open={openModal}
        onClose={handleCloseModal}>
        <Box>
          <Typography>
            Отмена начала приведёт к удалению протокола. Продолжить?
          </Typography>
        </Box>
      </ReuseableModal>
    </Box>
  );
};
