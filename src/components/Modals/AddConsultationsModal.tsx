/* eslint-disable react/style-prop-object */
import { useCallback } from 'react';
import { Box, Grid } from '@mui/material';
import { useAppModals } from './ModalsProvider';
import { useEscapeKey } from 'hooks/useEscapeKey';
import { AddConsultationContainer } from './Modals.styles';
import DefaultText from 'components/defaultText/DefaultText';

const AddConsultationsModal = () => {
  const appModals = useAppModals();
  const onCloseModal = useCallback(() => {
    appModals?.hide('add_consultations');
  }, [appModals]);

  useEscapeKey({
    callback: onCloseModal,
  });

  return (
    <AddConsultationContainer
      className={
        appModals?.state.add_consultations.active &&
        !appModals?.state.add_consultations.neverWork
          ? 'active'
          : 'none '
      }>
      <Box className="container bg-[#fff]  ">
        <Grid container className="">
          <Grid
            item
            xs={12}
            md={12}
            className="  flex justify-between items-center  ">
            <DefaultText style="  text-[20px]  font-normal text-[#000] ">
              Добавление связи
            </DefaultText>
          </Grid>
        </Grid>
      </Box>
      <div className="cancel_window" onClick={onCloseModal} />
    </AddConsultationContainer>
  );
};

export default AddConsultationsModal;
