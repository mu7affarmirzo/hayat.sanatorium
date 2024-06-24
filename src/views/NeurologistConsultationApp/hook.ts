import {
  useGetNeurologistAppointmentQuery,
  usePatchNeurologistAppointmentMutation,
  usePostNeurologistAppointmentMutation,
} from 'features/Appointments/NeuroligstAppointment/service';
import { NeuroligstAppointment } from 'features/Appointments/NeuroligstAppointment/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useNeurologistAppointmentHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.Neurologist,
  );
  const {
    currentIb,
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useFetchAndTransformData();

  const {
    data: neurologistAppointment,
    refetch: refetchNeurologistAppointment,
  } = useGetNeurologistAppointmentQuery(appointmentID as never, {
    skip: !appointmentID,
  });

  useEffect(() => {
    if (appointmentID) {
      refetchNeurologistAppointment();
    }
  }, [appointmentID, refetchNeurologistAppointment]);

  const methods = useForm<NeuroligstAppointment>();

  useEffect(() => {
    if (neurologistAppointment) {
      const { id, ...restData } = neurologistAppointment;
      methods.reset(restData);
    }
  }, [neurologistAppointment, methods]);

  const [patchNeurologistAppointment] =
    usePatchNeurologistAppointmentMutation();
  const [postNeurologistAppointment] = usePostNeurologistAppointmentMutation();

  const handleFormSubmit = (data: NeuroligstAppointment) => {
    const newData = {
      ...data,
      illness_history: currentIb?.id as number,
      pills: convertToPills,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
    };

    const mutation = neurologistAppointment
      ? patchNeurologistAppointment({
          id: neurologistAppointment.id,
          body: newData,
        })
      : postNeurologistAppointment(newData);

    mutation.then(() => {
      refetchNeurologistAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit: handleFormSubmit,
  };
};
