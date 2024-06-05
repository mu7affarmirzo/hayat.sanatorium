import {
  usePostCardiologistAppoinmnetMutation,
  useGetCardiologistAppoinmnetQuery,
  usePatchCardiologistAppoinmnetMutation,
} from 'features/Appointments/CardiologistAppoinemnt/service';
import {
  LabResearchForCardiologist,
  MedicalServiceForCardiologist,
  PillForCardiologist,
  CardiologistAppointment,
  ProcedureForCardiologist,
} from 'features/Appointments/CardiologistAppoinemnt/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useEffect, useMemo, useState } from 'react';
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

  const methods = useForm<CardiologistAppointment>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckCardiologistApp = appointments.cardiologist
    ? appointments.cardiologist[0]
    : null;

  const {
    data: cardiologistAppointment,
    refetch: refetchCardiologistAppointment,
  } = useGetCardiologistAppoinmnetQuery(CheckCardiologistApp as never);

  useEffect(() => {
    if (cardiologistAppointment) {
      const { id, ...restData } = cardiologistAppointment;
      methods.reset(restData);
    }
  }, [cardiologistAppointment]);

  const [fetchCardiologistAppointmentPatch] =
    usePatchCardiologistAppoinmnetMutation();
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

  const onSubmit = (data: CardiologistAppointment) => {
    const newData: CardiologistAppointment = {
      ...data,
      illness_history: 1,
      pills: convertToPills,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
    };
    console.log(newData, 'newData in cardiologist hook');

    if (cardiologistAppointment) {
      fetchCardiologistAppointmentPatch({
        id: cardiologistAppointment.id,
        data: newData,
      }).then(() => {
        refetchCardiologistAppointment();
      });
    } else {
      fetchRequest(newData).then(() => {
        refetchCardiologistAppointment();
      });
    }
  };

  return {
    handleChangeStatus,
    appointmentStatus,
    methods,
    onSubmit,
  };
};
