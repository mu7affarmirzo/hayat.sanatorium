import {
  LabResearchForNeuroligst,
  MedicalServiceForNeuroligst,
  PilForNeuroligst,
  PostNeuroligstAppointment,
  ProcedureForNeuroligst,
} from 'features/NeuroligstAppointment/types/neuroligsAppointmentType';
import { usePostNeurologistAppointmentMutation } from 'features/patient/patientService';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useNeurologistAppoinmnetHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const convertToProcedures = useMemo((): ProcedureForNeuroligst[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToLabResearch = useMemo((): LabResearchForNeuroligst[] => {
    return selectedReSearchItems.map((procedure) => ({
      lab: procedure.id,
      comments: 'no comments',
    }));
  }, [selectedReSearchItems]);

  const convertToPills = useMemo((): PilForNeuroligst[] => {
    return medications.map((medication) => ({
      pills_injections: medication.id,
      state: 'assigned',
      quantity: 1,
      period_days: 1,
      end_date: new Date(),
      frequency: 'каждый день',
      comments: 'no comments',
      instruction: 'no instruction',
    }));
  }, [medications]);

  const convertToMedicalServices =
    useMemo((): MedicalServiceForNeuroligst[] => {
      return selectedConsultingItems.map((medication) => ({
        medical_service: medication.id,
        consulted_doctor: 1,
        state: 'assigned',
      }));
    }, [selectedConsultingItems]);

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const [fetchNeuroligstApi] = usePostNeurologistAppointmentMutation();
  const methods = useForm<PostNeuroligstAppointment>();

  const onSubmit = (data: PostNeuroligstAppointment) => {
    console.log(data, ' data from useFormHook in neuroligst hook');
    const newData = {
      ...data,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
      pills: convertToPills,
    };

    console.log(newData, 'newData in neuroligst hook');
    fetchNeuroligstApi(newData);
  };
  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
