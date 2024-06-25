import { AppointmentStatus } from 'features/Appointments/types';
import { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';

type AppointmentStatuses = {
  [id: number]: AppointmentStatus;
};

type StatusesToCheckbox = {
  appointment_completed: AppointmentStatus;
  appointment_cancelled: AppointmentStatus;
  // appointment_not_completed: AppointmentStatus;
}

type UseStateHandlerProps = {
  id: number,
  methods?: UseFormReturn,
  appointmentState?: AppointmentStatus
}

export const useAppointmentStateHandler = (props: UseStateHandlerProps) => {
  const { id, methods, appointmentState } = props
  // Initialize state to store statuses for multiple appointments
  const defaultState = { [id]: appointmentState ?? 'Не завершено' }

  const [appointmentStatuses, setAppointmentStatuses] =
    useState<AppointmentStatuses>(defaultState);

  console.log({ appointmentStatuses, defaultState, id });
  const statuses: StatusesToCheckbox = {
    'appointment_completed': 'Приём завершён' as AppointmentStatus,
    'appointment_cancelled': 'Пациент на прием не явился' as AppointmentStatus,
    // 'appointment_not_completed': 'Не завершено' as AppointmentStatus
  }

  const handleChangeStatus = (status: keyof StatusesToCheckbox) => {
    if (id && status && statuses?.[status]) {
      setAppointmentStatuses((prevStatuses) => ({
        ...prevStatuses,
        [id]: statuses?.[status],
      }));
      methods?.setValue('state', statuses?.[status])
    }
  };

  // console.log({ appointmentStatuses, aid: appointmentStatuses[id], id })

  // Get the current status for the provided id, defaulting to 'Не завершено'
  const appointmentStatus = methods?.getValues('state') ?? appointmentStatuses[id] ?? 'Не завершено';

  return {
    appointmentStatus,
    handleChangeStatus
  };
};
