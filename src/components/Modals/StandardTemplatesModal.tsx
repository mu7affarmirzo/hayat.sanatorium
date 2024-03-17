import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import DefaultText from 'components/defaultText/DefaultText';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { CancelAppointmentContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

const StandardTemplatesModal = () => {
  const appModals = useAppModals();
  const onCloseModal = useCallback(() => {
    appModals?.hide('standard_templates');
  }, [appModals]);

  useEscapeKey({
    callback: onCloseModal,
  });

  return (
    <CancelAppointmentContainer
      className={
        appModals?.state.standard_templates.active &&
        !appModals?.state.standard_templates.neverWork
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
              Стандартные шаблоны
            </DefaultText>
            <IconButton
              className="border  w-[35px] h-[35px] border-[#000] p-[5px]"
              onClick={() => onCloseModal()}>
              <CloseCircleIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} md={12} sx={{ margin: '20px 0' }}>
            <Typography>
              Добавить текущий текст к вашим стандартным шаблонам? нет
            </Typography>
          </Grid>

          <Grid item xs={12} md={12} className="mt-[15px] flex justify-end">
            <Button
              variant="contained"
              onClick={() => onCloseModal()}
              className="bg-[#4CAF50]">
              Добавить
            </Button>
            <Button
              variant="contained"
              className="bg-[#EEE] h-[46px] text-[#000]  ml-[10px] "
              onClick={() => onCloseModal()}>
              Отменить
            </Button>
          </Grid>
        </Grid>
      </Box>

      <div className="cancel_window" onClick={onCloseModal} />
    </CancelAppointmentContainer>
  );
};
export default StandardTemplatesModal;
