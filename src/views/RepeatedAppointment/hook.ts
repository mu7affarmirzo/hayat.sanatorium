import { usePostRepeatedAppointmentMutation } from 'features/Appointments/RepeatedAppointmnet/service';
import {
  LabResearchForRepApp,
  MedicalServiceForRepApp,
  PillForRepApp,
  ProcedureForRepApp,
  RepeatedAppointmentPostData,
} from 'features/Appointments/RepeatedAppointmnet/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useRepeatedAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<RepeatedAppointmentPostData>();

  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const [fetchRequest] = usePostRepeatedAppointmentMutation();

  const convertToMedicalServices = useMemo((): MedicalServiceForRepApp[] => {
    return selectedConsultingItems.map((medication) => ({
      medical_service: medication.id,
      price: medication.cost,
      consulted_doctor: 1,
      state: 'assigned',
    }));
  }, [selectedConsultingItems]);

  const convertToProcedures = useMemo((): ProcedureForRepApp[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      price: procedure.price,
      state: 'assigned',
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToPills = useMemo((): PillForRepApp[] => {
    return medications.map((medication) => ({
      pills_injections: medication.id,
      price: medication.price,
      state: 'assigned',
      quantity: 1,
      period_days: 1,
      end_date: new Date(),
      frequency: 'каждый день',
      comments: 'no comments',
      instruction: 'no instruction',
    }));
  }, [medications]);

  const convertToLabResearch = useMemo((): LabResearchForRepApp[] => {
    return selectedReSearchItems.map((research) => ({
      lab: research.id,
      comments: 'no comments',
    }));
  }, [selectedReSearchItems]);

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const onSubmit = (data: RepeatedAppointmentPostData) => {
    console.log(data);
    const postData = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      procedures: convertToProcedures,
      pills: convertToPills,
    };
    console.log(postData, 'postData');
    fetchRequest(postData);
  };

  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
