import {
  useGetFinalAppointmentQuery,
  usePatchFinalAppointmentMutation,
  usePostFinalAppointmentMutation,
} from 'features/Appointments/FinalAppointment/service';
import { FinalAppointment } from 'features/Appointments/FinalAppointment/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useFinalAppointmentHook = () => {
  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckFinalAppointment = appointments.final_appointment
    ? appointments.final_appointment[0]
    : null;

  const appointmentID = useMemo(() => {
    if (CheckFinalAppointment) {
      return CheckFinalAppointment.id;
    }
  }, [CheckFinalAppointment]);

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
    appointmentID,
    fetchFinal,
    methods,
    onSubmit,
    finalData,
  };
};
