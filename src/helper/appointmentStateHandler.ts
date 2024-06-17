import { AppointmentStatus } from 'features/Appointments/types';
import { useState } from 'react';

type AppointmentStatuses = {
  [id: number]: AppointmentStatus;
};

export const useAppointmentStateHandler = (id: number) => {
  // Initialize state to store statuses for multiple appointments
  const [appointmentStatuses, setAppointmentStatuses] =
    useState<AppointmentStatuses>({});

  const handleChangeStatus = (id: number, status: AppointmentStatus) => {
    setAppointmentStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: status,
    }));
  };

  // Get the current status for the provided id, defaulting to 'Не завершено'
  const appointmentStatus = appointmentStatuses[id] || 'Не завершено';

  return {
    appointmentStatus,
    handleChangeStatus: (status: AppointmentStatus) =>
      handleChangeStatus(id, status),
  };
};
