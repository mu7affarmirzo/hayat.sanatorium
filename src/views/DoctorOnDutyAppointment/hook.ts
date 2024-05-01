import { usePostDoctorsOnDutyMutation } from 'features/DoctorOnDutyAppointment/service';
import {
  DoctorOnDutyAppointmentPostData,
  LabResearchForDoctorOnDuty,
  MedicalServiceForDoctorOnDuty,
  PillForDoctorOnDuty,
  ProcedureForDoctorOnDuty,
} from 'features/DoctorOnDutyAppointment/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

export const useDoctorOnDutyAppointmentHook = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const methods = useForm<DoctorOnDutyAppointmentPostData>();

  const [fetchRequest] = usePostDoctorsOnDutyMutation();

  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const convertToMedicalServices =
    useMemo((): MedicalServiceForDoctorOnDuty[] => {
      return selectedConsultingItems.map((medication) => ({
        medical_service: medication.id,
        price: medication.cost,
        consulted_doctor: 1,
        state: 'assigned',
      }));
    }, [selectedConsultingItems]);

  const convertToProcedures = useMemo((): ProcedureForDoctorOnDuty[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      price: procedure.price,
      state: 'assigned',
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToPills = useMemo((): PillForDoctorOnDuty[] => {
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

  const convertToLabResearch = useMemo((): LabResearchForDoctorOnDuty[] => {
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

  const onSubmit = (data: DoctorOnDutyAppointmentPostData) => {
    console.log(data);
    const postData = {
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      procedures: convertToProcedures,
      pills: convertToPills,
      state: appointmentStatus,
      complaints: data.complaints,
      objective_data: data.objective_data,
      arterial_high: data.arterial_high,
      arterial_low: data.arterial_low,
      imt: data.imt,
      cito: data.cito,
      for_sanatorium_treatment: data.for_sanatorium_treatment,
      summary: data.summary,
      recommendation: data.recommendation,
      created_by: 1,
      modified_by: 1,
      doctor: 1,
      illness_history: 1,
    };

    fetchRequest(postData);
  };

  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
