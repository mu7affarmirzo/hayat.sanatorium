import { PostNeuroligstAppointment } from 'features/NeuroligstAppointment/types/neuroligsAppointmentType';
// import { usePostNeurologistAppointmentMutation } from 'features/patient/patientService';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useNeurologistAppoinmnetHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');
  //   const [fetchNeuroligstApi] = usePostNeurologistAppointmentMutation();
  const methods = useForm<PostNeuroligstAppointment>();
  const onSubmit = (data: PostNeuroligstAppointment) => {
    console.log(data, ' data from useFormHook in neuroligst hook');
  };

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
