import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { CancelAppointmentContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

const CancelAppointmentModal = () => {
  const appModals = useAppModals();
  const onCloseModal = useCallback(() => {
    appModals?.hide('cancel_appointment');
  }, [appModals]);

  useEscapeKey({
    callback: onCloseModal,
  });

  return (
    <CancelAppointmentContainer
      className={
        appModals?.state.cancel_appointment.active &&
        !appModals?.state.cancel_appointment.neverWork
          ? 'active'
          : 'none '
      }>
      <Box className="container bg-[#fff]  ">
        <Grid container className="p-[20px]">
          <Grid
            item
            xs={12}
            md={12}
            className="flex justify-between items-center">
            <DefaultText style="text-[20px]  font-normal text-[#000]">
              Отмена начатого приёма
            </DefaultText>
            <IconButton
              className="border  w-[35px] h-[35px] border-[#000] p-[5px]"
              onClick={() => onCloseModal()}>
              <CloseCircleIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={12} sx={{ margin: '20px 0' }}>
            <Typography>
              Отмена начала приведёт к удалению протокола. Продолжить?
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} className="mt-[15px] flex justify-end">
            <Button
              variant="contained"
              onClick={() => onCloseModal()}
              className="bg-[#4CAF50]">
              Да, отменить
            </Button>
            <Button
              variant="contained"
              className="bg-[#EEE] h-[46px] text-[#000]  ml-[10px] px-[30px]"
              onClick={() => onCloseModal()}>
              Нет
            </Button>
          </Grid>
        </Grid>
      </Box>

      <div className="cancel_window" onClick={onCloseModal} />
    </CancelAppointmentContainer>
  );
};
export default CancelAppointmentModal;
