import { PostExamitationByDoctor } from 'features/ExaminationDoctor/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useExaminationByDoctorHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<PostExamitationByDoctor>();

  const onSubmit = (data: PostExamitationByDoctor) => {
    console.log(data, ' data from useFormHook in ExaminationDoctor hook');
  };

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  return {
    appointmentStatus,
    handleChangeStatus,
    methods,
    onSubmit,
  };
};

export default useExaminationByDoctorHook;
