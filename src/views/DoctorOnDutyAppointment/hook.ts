import { usePostNeurologistAppointmentMutation } from 'features/patient/patientService';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';

export const useDoctorOnDutyAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');
  const [fetchNeurologistApp] = usePostNeurologistAppointmentMutation();
  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const handlePostAppointment = useCallback(() => {
    console.log('post appointment');
    fetchNeurologistApp({
      lab_research: [
        ...selectedReSearchItems.map((item) => ({
          lab: item.id,
          comments: item.name,
        })),
      ],
      medical_services: [
        ...selectedConsultingItems.map((item) => ({
          medical_service: item.id,
          consulted_doctor: 1,
        })),
      ],
      pills: [
        ...medications.map((item) => ({
          pills_injections: item.id,
          quantity: item.id,
          period_days: 4,
          end_date: item.expire_date,
          frequency: '2',
          comments: '', // Add this line
          instruction: '', // Add this line
        })),
      ],
      procedures: procedures,
    });
  }, [
    fetchNeurologistApp,
    medications,
    procedures,
    selectedConsultingItems,
    selectedReSearchItems,
  ]);

  return {
    handleChangeStatus,
    appointmentStatus,
    handlePostAppointment,
  };
};
