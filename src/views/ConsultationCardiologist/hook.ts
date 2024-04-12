import { PostCardiologistAppoinmnet } from 'features/CardiologistAppoinemnt/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useCardiologistAppoinmnetHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<PostCardiologistAppoinmnet>();

  const onSubmit = (data: PostCardiologistAppoinmnet) => {
    console.log(data, ' data from useFormHook in cardiologist hook');
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
