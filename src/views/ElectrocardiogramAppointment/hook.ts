import {
  useGetElectrocardiogrammaQuery,
  usePatchElectrocardiogrammaMutation,
  usePostElectrocardiogrammaMutation,
} from 'features/Appointments/Electrocardiogramma/service';
import { EkgAppointmentTypes } from 'features/Appointments/Electrocardiogramma/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useElectrocardiogramAppointmentHook = () => {
  const methods = useForm<EkgAppointmentTypes>();
  const { appointments } = useReduxSelector((state) => state.appointments);

  const appointmentID = appointments.ekg_appointment?.[0]?.id ?? null;

  const { data: ekgData, refetch: refetchEkgAppointment } =
    useGetElectrocardiogrammaQuery(appointmentID);

  useEffect(() => {
    if (ekgData) {
      const { id, ...restData } = ekgData;
      methods.reset(restData);
    }
  }, [ekgData, methods]);

  const [fetchEkgPatch] = usePatchElectrocardiogrammaMutation();
  const [fetchEkgApp] = usePostElectrocardiogrammaMutation();

  const onSubmit = (data: EkgAppointmentTypes) => {
    const newData: EkgAppointmentTypes = {
      ...data,
      illness_history: 1,
      medical_services: [],
      lab_research: [],
      procedures: [],
      pills: [],
      state: 'Не завершено',
    };
    const mutation = ekgData
      ? fetchEkgPatch({
          id: ekgData.id,
          body: newData,
        })
      : fetchEkgApp(newData);

    mutation.then(() => {
      refetchEkgAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit,
  };
};
