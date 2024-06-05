import {
  usePostExaminationMutation,
  useGetExaminationQuery,
  usePatchExamationMutation
} from 'features/Appointments/ExaminationDoctor/service';
import { ExaminationAppointment } from 'features/Appointments/ExaminationDoctor/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useEffect, useState } from 'react';
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
  const { appointments } = useReduxSelector((state) => state.appointments) 
  
  const {
  data: examinationData,
  refetch: refetchExaminationAppointment
  } = useGetExaminationQuery(appointments.on_duty_doctor_on_arrival[0].id)

  useEffect(() => {
    if (examinationData) {
      const {id, ...restData} = examinationData
      methods.reset(restData)
    }
  }, [examinationData])

  const [fetchExaminationPatch] = usePatchExamationMutation();
  const [fetchRequest] = usePostExaminationMutation();

  const onSubmit = (data: ExaminationAppointment) => {
    const newData: ExaminationAppointment = {
      ...data,
      illness_history: 1,
    };
    if (examinationData) {
      fetchExaminationPatch({
        id: examinationData.id,
        data: newData
      }).then(() => {
        refetchExaminationAppointment()
      })
    }
    else {
      fetchRequest(newData).then(() => {
        refetchExaminationAppointment()
      });
    }
  };

  return {
    appointmentStatus,
    handleChangeStatus,
    methods,
    onSubmit,
  };
};
