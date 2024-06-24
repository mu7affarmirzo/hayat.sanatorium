import {
  useGetRepeatedAppointmentQuery,
  usePatchRepeatedAppointmentMutation,
  usePostRepeatedAppointmentMutation,
} from 'features/Appointments/RepeatedAppointmnet/service';
import { RepeatedAppointment } from 'features/Appointments/RepeatedAppointmnet/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useRepeatedAppointmentHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.RepeatedAppointment,
  );
  const {
    currentIb,
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useFetchAndTransformData();

  const { data: repeatedAppointment, refetch: refetchRepeatedAppointment } =
    useGetRepeatedAppointmentQuery(appointmentID as never, {
      skip: !appointmentID,
    });

  useEffect(() => {
    if (appointmentID) {
      refetchRepeatedAppointment();
    }
  }, [appointmentID, refetchRepeatedAppointment]);

  const methods = useForm<RepeatedAppointment>();

  useEffect(() => {
    if (repeatedAppointment) {
      const { id, ...restData } = repeatedAppointment;
      methods.reset(restData);
    }
  }, [repeatedAppointment, methods]);

  const [patchRepeatedAppointment] = usePatchRepeatedAppointmentMutation();
  const [postRepeatedAppointment] = usePostRepeatedAppointmentMutation();

  const handleFormSubmit = (data: RepeatedAppointment) => {
    const newData = {
      ...data,
      illness_history: currentIb?.id as number,
      pills: convertToPills,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
    };

    const mutation = repeatedAppointment
      ? patchRepeatedAppointment({
          id: repeatedAppointment.id,
          data: newData,
        })
      : postRepeatedAppointment(newData);

    mutation.then(() => {
      refetchRepeatedAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit: handleFormSubmit,
  };
};
