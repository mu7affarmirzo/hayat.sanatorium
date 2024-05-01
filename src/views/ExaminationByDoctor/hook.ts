import { usePostExaminationMutation } from 'features/ExaminationDoctor/service/examinationSecvice';
import { PostExamitationByDoctor } from 'features/ExaminationDoctor/types';
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

  const methods = useForm<PostExamitationByDoctor>();

  const [fetchRequest] = usePostExaminationMutation();

  const onSubmit = (data: PostExamitationByDoctor) => {
    console.log(data, ' data from useFormHook in ExaminationDoctor hook');

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
