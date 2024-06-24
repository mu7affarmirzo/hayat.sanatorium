import {
  useGetCardiologistAppoinmnetQuery,
  usePatchCardiologistAppoinmnetMutation,
  usePostCardiologistAppoinmnetMutation,
} from 'features/Appointments/CardiologistAppoinemnt/service';
import { CardiologistAppointment } from 'features/Appointments/CardiologistAppoinemnt/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useCardiologistAppoinmnetHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.Cardiologist,
  );
  const {
    currentIb,
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useFetchAndTransformData();

  const {
    data: cardiologistAppointment,
    refetch: refetchCardiologistAppointment,
  } = useGetCardiologistAppoinmnetQuery(appointmentID as never, {
    skip: !appointmentID,
  });

  useEffect(() => {
    if (appointmentID) {
      refetchCardiologistAppointment();
    }
  }, [appointmentID, refetchCardiologistAppointment]);

  const methods = useForm<CardiologistAppointment>();

  useEffect(() => {
    if (cardiologistAppointment) {
      const { id, ...restData } = cardiologistAppointment;
      methods.reset(restData);
    }
  }, [cardiologistAppointment, methods]);

  const [patchCardiologistAppointment] =
    usePatchCardiologistAppoinmnetMutation();
  const [postCardiologistAppointment] = usePostCardiologistAppoinmnetMutation();

  const handleFormSubmit = (data: CardiologistAppointment) => {
    const newData = {
      ...data,
      illness_history: currentIb?.id as number,
      pills: convertToPills,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
    };

    const mutation = cardiologistAppointment
      ? patchCardiologistAppointment({
          id: cardiologistAppointment.id,
          data: newData,
        })
      : postCardiologistAppointment(newData);

    mutation.then(() => {
      refetchCardiologistAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit: handleFormSubmit,
  };
};
