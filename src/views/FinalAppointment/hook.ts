import { usePostFinalAppointmentMutation } from 'features/Appointments/FinalAppointment/service';
import { FinalAppointmentPostData } from 'features/Appointments/FinalAppointment/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useFinalAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<FinalAppointmentPostData>();

  const [fetchFinal] = usePostFinalAppointmentMutation();

  const handleChangeStatus = (status: AppointmentStatus['status']) => {
    setAppointmentStatus(status);
  };

  const onSubmit = (data: FinalAppointmentPostData) => {
    console.log(data);
    const newData = {
      ...data,
      diagnosis: [1, 2],
    };
    fetchFinal(newData);
  };

  return {
    appointmentStatus,
    handleChangeStatus,
    fetchFinal,
    methods,
    onSubmit,
  };
};
