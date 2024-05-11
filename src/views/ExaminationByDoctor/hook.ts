import { usePostExaminationMutation } from 'features/Appointments/ExaminationDoctor/service';
import { ExaminationAppointment } from 'features/Appointments/ExaminationDoctor/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useExaminationByDoctorHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const methods = useForm<ExaminationAppointment>();

  const [fetchRequest] = usePostExaminationMutation();

  const onSubmit = (data: ExaminationAppointment) => {
    fetchRequest(data);
  };

  return {
    appointmentStatus,
    handleChangeStatus,
    methods,
    onSubmit,
  };
};

export default useExaminationByDoctorHook;
