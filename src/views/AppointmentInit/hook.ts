import {
  useGetInitAppointmentQuery,
  usePatchInitAppointmentMutation,
  usePostInitAppointmentMutation,
} from 'features/Appointments/InitAppointment/service';
import { InitAppointment } from 'features/Appointments/InitAppointment/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

const useInitialAppointmentForm = () => {
  const { activePatient } = useReduxSelector(
    (state) => state.patientIllnesHistory,
  );

  const methods = useForm<InitAppointment>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const ChechInitialAppointment = appointments.initial
    ? appointments.initial[0]
    : null;

  const appointmentID = useMemo(() => {
    if (ChechInitialAppointment) {
      return ChechInitialAppointment.id;
    }
    return null;
  }, [ChechInitialAppointment]);

  const { data: initialAppointment, refetch: refetchInitialAppointment } =
    useGetInitAppointmentQuery(ChechInitialAppointment);

  useEffect(() => {
    if (initialAppointment) {
      const { id, ...restData } = initialAppointment;
      methods.reset(restData);
    }
  }, [initialAppointment]);

  const [fetchInitialAppointmentPatch] = usePatchInitAppointmentMutation();
  const [fetchRequest] = usePostInitAppointmentMutation();

  const onSubmit = (data: InitAppointment) => {
    const newData: InitAppointment = {
      ...data,
      medical_services: [],
      lab_research: [],
      pills: [],
      procedures: [],
      illness_history: activePatient.id,
    };
    if (initialAppointment) {
      fetchInitialAppointmentPatch({
        id: initialAppointment.id,
        body: newData,
      }).then(() => {
        refetchInitialAppointment();
      });
    } else {
      fetchRequest(newData).then(() => {
        refetchInitialAppointment();
      });
    }
  };

  return {
    methods,
    onSubmit,
    appointmentID,
  };
};

export default useInitialAppointmentForm;
