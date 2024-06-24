import {
  useGetFinalAppointmentQuery,
  usePatchFinalAppointmentMutation,
  usePostFinalAppointmentMutation,
} from 'features/Appointments/FinalAppointment/service';
import { FinalAppointment } from 'features/Appointments/FinalAppointment/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useFinalAppointmentHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.FinalAppointment,
  );
  const { currentIb } = useFetchAndTransformData();

  const { data: finalAppointment, refetch: refetchFinalAppointment } =
    useGetFinalAppointmentQuery(appointmentID as never, {
      skip: !appointmentID,
    });

  useEffect(() => {
    if (appointmentID) {
      refetchFinalAppointment();
    }
  }, [appointmentID, refetchFinalAppointment]);

  const methods = useForm<FinalAppointment>();

  useEffect(() => {
    if (finalAppointment) {
      const { id, ...restData } = finalAppointment;
      methods.reset(restData);
    }
  }, [finalAppointment, methods]);

  const [patchFinalAppointment] = usePatchFinalAppointmentMutation();
  const [postFinalAppointment] = usePostFinalAppointmentMutation();

  const handleFormSubmit = (data: FinalAppointment) => {
    const newData = {
      ...data,
      illness_history: currentIb?.id as number,
      diagnosis: [1, 2],
    };

    const mutation = finalAppointment
      ? patchFinalAppointment({
          id: finalAppointment.id,
          data: newData,
        })
      : postFinalAppointment(newData);

    mutation.then(() => {
      refetchFinalAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit: handleFormSubmit,
  };
};
