import { usePostFinalAppointmentMutation } from 'features/FinalAppointment/service';
import { FinalAppointmentPostData } from 'features/FinalAppointment/types';
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
  };

  return {
    appointmentStatus,
    handleChangeStatus,
    fetchFinal,
    methods,
    onSubmit,
  };
};
