import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { CloseCircleIcon } from 'assets/icons/icons';
import TableComponent from 'components/CustomTable/table';
import { ScheduleDTModalCol } from 'components/columnDefs/bookedCol';
import DefaultText from 'components/defaultText/DefaultText';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { useCallback } from 'react';
import { ScheduleDTContainer } from './Modals.styles';
import { useAppModals } from './ModalsProvider';

const ScheduleDTModal = () => {
  const appModals = useAppModals();
  const onCloseModal = useCallback(() => {
    appModals?.hide('schedule_d_t');
  }, [appModals]);

  useEscapeKey({
    callback: onCloseModal,
  });

  const myPatientData = [
    {
      id: 1,
      cito: null,
      no: 'fb33bf9e-ce53-45e8-8f5e-b1fd5ed88b8e',
      age: 24,
      room: '28-127-8669',
      diagnosis: 'shiza',
      start_date: '2023-11-14',
      end_date: '2023-11-20',
      doctor: '  ',
      name: 'Alick Merlin Stapylton',
    },
  ];

  return (
    <ScheduleDTContainer
      className={
        appModals?.state.schedule_d_t.active &&
        !appModals?.state.schedule_d_t.neverWork
          ? 'active'
          : 'none '
      }>
      <Box className="container bg-[#fff]  ">
        <Grid container className="p-[20px]">
          <Grid
            item
            xs={12}
            md={12}
            className="  flex justify-between items-center  ">
            <DefaultText style="text-[20px]  font-normal text-[#000] ">
              Нарушение правил диспетчеризации
            </DefaultText>
            <IconButton
              className="border  w-[35px] h-[35px] border-[#000] p-[5px] "
              onClick={() => onCloseModal()}>
              <CloseCircleIcon />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={12}
            md={12}
            className="max-h-[600px] h-[500px] p-[5px] bg-[#F5F5F5] border overflow-hidden">
            <Box className="w-full h-[calc(100%)]  ">
              <Typography className="text-[14px]">Массаж общий</Typography>
              <Grid
                item
                xs={12}
                md={12}
                className="bg-[#F5F5F5]"
                sx={{ marginBottom: '20px' }}>
                <TableComponent
                  columnDefs={ScheduleDTModalCol}
                  data={myPatientData as never}
                />
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={12} className="  mt-[15px] flex justify-end ">
            <Button
              variant="contained"
              onClick={() => onCloseModal()}
              className="bg-[#4CAF50]">
              Подтвердить
            </Button>
            <Button
              variant="contained"
              className=" bg-[#EEE] h-[46px] text-[#000]  ml-[10px] "
              onClick={() => onCloseModal()}>
              Отменить
            </Button>
          </Grid>
        </Grid>
      </Box>

      <div className="cancel_window" onClick={onCloseModal} />
    </ScheduleDTContainer>
  );
};
export default ScheduleDTModal;
