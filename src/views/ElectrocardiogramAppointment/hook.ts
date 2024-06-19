import {
  useGetElectrocardiogrammaQuery,
  usePatchElectrocardiogrammaMutation,
  usePostElectrocardiogrammaMutation,
} from 'features/Appointments/Electrocardiogramma/service';
import { EkgAppointmentTypes } from 'features/Appointments/Electrocardiogramma/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useElectrocardiogramAppointmentHook = () => {
  const methods = useForm<EkgAppointmentTypes>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckElectrogrammaApp = appointments.ekg_appointment
    ? appointments.ekg_appointment[0]
    : null;

  const appointmentID = useMemo(() => {
    if (CheckElectrogrammaApp) {
      return CheckElectrogrammaApp.id;
    }
    return null;
  }, [CheckElectrogrammaApp]);

  const { data: ekgData, refetch: refetchEkgAppointment } =
    useGetElectrocardiogrammaQuery(appointments.ekg_appointment[0].id);

  useEffect(() => {
    if (ekgData) {
      const { id, ...restData } = ekgData;
      methods.reset(restData);
    }
  }, [ekgData]);

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
    if (ekgData) {
      fetchEkgPatch({
        id: ekgData.id,
        body: newData,
      }).then(() => {
        refetchEkgAppointment();
      });
    } else {
      fetchEkgApp(newData).then(() => {
        refetchEkgAppointment();
      });
    }
  };

  return {
    appointmentID,
    methods,
    onSubmit,
  };
};
