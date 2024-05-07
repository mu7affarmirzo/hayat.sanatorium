import { usePostElectrocardiogrammaMutation } from 'features/Appointments/Electrocardiogramma/service';
import {
  LabResearchForEkg,
  MedicalServiceForEKG,
  PillForEkg,
  PostEkgAppointmentTypes,
  ProcedureForEKG,
} from 'features/Appointments/Electrocardiogramma/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useState, useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useElectrocardiogramAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<PostEkgAppointmentTypes>();

  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const [fetchEkgApp] = usePostElectrocardiogrammaMutation();

  const convertToMedicalServices = useMemo((): MedicalServiceForEKG[] => {
    return selectedConsultingItems.map((medication) => ({
      medical_service: medication.id,
      consulted_doctor: 1,
      state: 'assigned',
    }));
  }, [selectedConsultingItems]);

  const convertToProcedures = useMemo((): ProcedureForEKG[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToPills = useMemo((): PillForEkg[] => {
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

  const convertToLabResearch = useMemo((): LabResearchForEkg[] => {
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

  const onSubmit = (data: PostEkgAppointmentTypes) => {
    console.log(data, ' data from useFormHook in ExaminationDoctor hook');
    const newData = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      procedures: convertToProcedures,
      pills: convertToPills,
      state: 'assigned',
    };
    console.log(newData, ' newData from useFormHook in ExaminationDoctor hook');
    fetchEkgApp(newData);
  };

  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
