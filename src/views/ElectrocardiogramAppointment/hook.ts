import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useState, useCallback } from 'react';

export const useElectrocardiogramAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  return {
    handleChangeStatus,
    appointmentStatus,
  };
};
