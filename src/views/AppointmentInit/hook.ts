import {
  PostInitAppointmentTypes,
  LabResearchForInitAppointment,
  MedicalServiceForInitAppointment,
  PillForInitAppointment,
  ProcedureForInitAppointment,
} from 'features/Appointments/InitAppointment/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

const useInitialAppointmentForm = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');
  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);

  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const methods = useForm<PostInitAppointmentTypes>();

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const convertToMedicalServices =
    useMemo((): MedicalServiceForInitAppointment[] => {
      return selectedConsultingItems.map((medication) => ({
        medical_service: medication.id,
        price: medication.cost,
        consulted_doctor: 1,
        state: 'assigned',
      }));
    }, [selectedConsultingItems]);

  const convertToProcedures = useMemo((): ProcedureForInitAppointment[] => {
    return procedures.map((procedure) => ({
      medical_service: procedure.id,
      price: procedure.price,
      state: 'assigned',
      quantity: 1,
      frequency: 'каждый день',
      comments: 'no comments',
    }));
  }, [procedures]);

  const convertToPills = useMemo((): PillForInitAppointment[] => {
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

  const onSubmit = (data: PostInitAppointmentTypes) => {
    const newData: PostInitAppointmentTypes = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      pills: convertToPills,
      procedures: convertToProcedures,
    };
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
