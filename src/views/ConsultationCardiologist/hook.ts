import { usePostCardiologistAppoinmnetMutation } from 'features/Appointments/CardiologistAppoinemnt/service';
import {
  LabResearchForCardiologist,
  MedicalServiceForCardiologist,
  PillForCardiologist,
  PostCardiologistAppoinmnet,
  ProcedureForCardiologist,
} from 'features/Appointments/CardiologistAppoinemnt/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useCardiologistAppoinmnetHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const methods = useForm<PostCardiologistAppoinmnet>();

  const [fetchRequest] = usePostCardiologistAppoinmnetMutation();

  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const convertToProcedures = useMemo((): ProcedureForCardiologist[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToLabResearch = useMemo((): LabResearchForCardiologist[] => {
    return selectedReSearchItems.map((procedure) => ({
      lab: procedure.id,
      comments: 'no comments',
    }));
  }, [selectedReSearchItems]);

  const convertToPills = useMemo((): PillForCardiologist[] => {
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
    useMemo((): MedicalServiceForCardiologist[] => {
      return selectedConsultingItems.map((medication) => ({
        medical_service: medication.id,
        consulted_doctor: 1,
        state: 'assigned',
      }));
    }, [selectedConsultingItems]);

  const onSubmit = (data: PostCardiologistAppoinmnet) => {
    console.log(data, 'data in cardiologist hook');
    const newData = {
      ...data,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      pills: convertToPills,
      medical_services: convertToMedicalServices,
    };
    console.log(newData, 'newData in cardiologist hook');
    fetchRequest(newData);
  };

  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
