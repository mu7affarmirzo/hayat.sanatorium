import {
  useGetInitAppointmentQuery,
  usePatchInitAppointmentMutation,
  usePostInitAppointmentMutation,
} from 'features/Appointments/InitAppointment/service';
import { InitAppointment } from 'features/Appointments/InitAppointment/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { AppointmentStatus } from 'features/Appointments/types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const useInitialAppointmentForm = () => {
  const appointmentID = useCurrentAppointmentID(AppointmentKeyTypes.Initial);

  const { currentIb, convertToProcedures } = useFetchAndTransformData();

  const methods = useForm<InitAppointment>();

  const { data: initialAppointment, refetch: refetchInitialAppointment } =
    useGetInitAppointmentQuery(appointmentID as never, {
      skip: !appointmentID,
    });

  useEffect(() => {
    if (appointmentID) {
      refetchInitialAppointment();
    }
  }, [appointmentID, refetchInitialAppointment]);

  useEffect(() => {
    if (initialAppointment) {
      const { id, ...restData } = initialAppointment;
      methods.reset(restData);
    }
  }, [initialAppointment, methods]);

  const [fetchInitialAppointmentPatch] = usePatchInitAppointmentMutation();
  const [fetchRequest] = usePostInitAppointmentMutation();

  const onSubmit = (data: InitAppointment) => {
    const newData: InitAppointment = {
      ...data,
      medical_services: [],
      lab_research: [],
      pills: [],
      procedures: convertToProcedures,
      illness_history: currentIb?.id as number,
    };
    const mutation = initialAppointment
      ? fetchInitialAppointmentPatch({
        id: initialAppointment.id,
        data: newData,
      })
      : fetchRequest(newData);

    mutation.then(() => {
      appointmentID && refetchInitialAppointment();
    });
  };

  return {
    methods,
    onSubmit,
    appointmentID,
    appointmentState: initialAppointment?.state as AppointmentStatus
  };
};

export default useInitialAppointmentForm;
