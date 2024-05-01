import { usePostInitAppointmentMutation } from 'features/patient/patientService';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  InitAppointmentTypes,
  LabResearchForInitAppointment,
  MedicalService,
  Pill,
  Procedure,
} from 'types/patientTypes';

const useInitialAppointmentForm = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');
  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);

  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const methods = useForm<InitAppointmentTypes>();
  const [fetchRequest] = usePostInitAppointmentMutation();

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const convertToMedicalServices = useMemo((): MedicalService[] => {
    return selectedConsultingItems.map((medication) => ({
      medical_service: medication.id,
      price: medication.cost,
      consulted_doctor: 1,
      state: 'assigned',
    }));
  }, [selectedConsultingItems]);

  const convertToProcedures = useMemo((): Procedure[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      price: procedure.price,
      state: 'assigned',
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToPills = useMemo((): Pill[] => {
    return medications.map((medication) => ({
      pills_injections: medication.id,
      price: medication.price,
      state: 'assigned',
      quantity: 1,
      period_days: 1,
      end_date: new Date(),
      frequency: 'daily',
      comments: 'no comments',
      instruction: 'no instruction',
    }));
  }, [medications]);

  const convertToLabResearch = useMemo((): LabResearchForInitAppointment[] => {
    return selectedReSearchItems.map((research) => ({
      lab: research.id,
      price: research.price,
      state: 'assigned',
      comments: 'no comments',
    }));
  }, [selectedReSearchItems]);

  console.log(
    convertToMedicalServices,
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    ' convertToMedicalServices',
  );

  const onSubmit = (data: InitAppointmentTypes) => {
    const newData: InitAppointmentTypes = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      pills: convertToPills,
      procedures: convertToProcedures,
    };
    fetchRequest(newData);
    console.log(newData, ' data from useFormHook');
  };

  return {
    methods,
    onSubmit,
    handleChangeStatus,
    appointmentStatus,
  };
};

export default useInitialAppointmentForm;
