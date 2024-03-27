import { useAppModals } from 'components/Modals';
import { useGetMedServiceGroupQuery } from 'features/patient/patientService';
import { useCallback } from 'react';

export const useAppointmentMedicalsActions = () => {
  const appModals = useAppModals();
  const { data } = useGetMedServiceGroupQuery({});

  const handleClickMedicalsBtn = useCallback(() => {
    appModals?.show('appointment_medicals');
  }, [appModals]);

  return {
    handleClickMedicalsBtn,
    data,
  };
};
