import {
  useGetNeurologistAppointmentQuery,
  usePatchNeurologistAppointmentMutation,
  usePostNeurologistAppointmentMutation,
} from 'features/Appointments/NeuroligstAppointment/service';
import { NeuroligstAppointment } from 'features/Appointments/NeuroligstAppointment/types';

import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useNeurologistAppoinmnetHook = () => {
  const { appointments } = useReduxSelector((state) => state.appointments);

  const {
    data: neurologistAppointment,
    refetch: refetchNeurologistAppointment,
  } = useGetNeurologistAppointmentQuery(
    appointments.neurologist[0].id as never,
  );

  const appointentID = useMemo(() => {
    return appointments.neurologist[0]?.id;
  }, [appointments.neurologist]);

  useEffect(() => {
    if (neurologistAppointment) {
      const { id, ...restData } = neurologistAppointment;
      methods.reset(restData);
    }
  }, [neurologistAppointment]);

  const [fetchNeurologistPatch] = usePatchNeurologistAppointmentMutation();
  const [fetchNeuroligstApi] = usePostNeurologistAppointmentMutation();
  const methods = useForm<NeuroligstAppointment>();

  const onSubmit = (data: NeuroligstAppointment) => {
    const newData: NeuroligstAppointment = {
      ...data,
      illness_history: 1,
      procedures: [],
      lab_research: [],
      medical_services: [],
      pills: [],
    };
    if (neurologistAppointment) {
      fetchNeurologistPatch({
        id: neurologistAppointment.id,
        body: newData,
      }).then(() => {
        refetchNeurologistAppointment();
      });
    } else {
      fetchNeuroligstApi(newData).then(() => {
        refetchNeurologistAppointment();
      });
    }
  };

  return {
    appointmentID: appointentID,
    methods,
    onSubmit,
  };
};
