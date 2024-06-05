import {
  usePostFinalAppointmentMutation,
  useGetFinalAppointmentQuery,
  usePatchFinalAppointmentMutation,
} from 'features/Appointments/FinalAppointment/service';
import { FinalAppointment } from 'features/Appointments/FinalAppointment/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useFinalAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckFinalAppointment = appointments.final_appointment
    ? appointments.final_appointment[0]
    : null;

  const { data: finalData, refetch: refetchFinalAppointment } =
    useGetFinalAppointmentQuery(CheckFinalAppointment as never);

  const methods = useForm<FinalAppointment>();

  useEffect(() => {
    if (finalData) {
      const { id, ...restData } = finalData;
      methods.reset(restData);
    }
  }, [finalData]);

  const [fetchFinalPatch] = usePatchFinalAppointmentMutation();
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

    if (finalData) {
      fetchFinalPatch({
        id: finalData.id,
        data: newData,
      }).then(() => {
        refetchFinalAppointment();
      });
    } else {
      fetchFinal(newData).then(() => {
        refetchFinalAppointment();
      });
    }
  };

  return {
    appointmentStatus,
    handleChangeStatus,
    fetchFinal,
    methods,
    onSubmit,
    finalData,
  };
};
