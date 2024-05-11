import { usePostFinalAppointmentMutation } from 'features/Appointments/FinalAppointment/service';
import { FinalAppointment } from 'features/Appointments/FinalAppointment/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useFinalAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<FinalAppointment>();

  const [fetchFinal] = usePostFinalAppointmentMutation();

  const handleChangeStatus = (status: AppointmentStatus['status']) => {
    setAppointmentStatus(status);
  };

  const onSubmit = (data: FinalAppointment) => {
    console.log(data);
    const newData: FinalAppointment = {
      ...data,
      illness_history: 1,
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
