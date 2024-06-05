import {
  useGetInitAppointmentQuery,
  usePatchInitAppointmentMutation,
  usePostInitAppointmentMutation,
} from 'features/Appointments/InitAppointment/service';
import {
  InitAppointment,
  LabResearchForInitAppointment,
  MedicalServiceForInitAppointment,
  PillForInitAppointment,
  ProcedureForInitAppointment,
} from 'features/Appointments/InitAppointment/types';
import { AppointmentStatus } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

const useInitialAppointmentForm = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');
  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  // const { initialAppointment } = useReduxSelector((state) => state.appointments);
  const dispatch = useReduxDispatch();

  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );

  const { activePatient } = useReduxSelector(
    (state) => state.patientIllnesHistory,
  );

  const methods = useForm<InitAppointment>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const ChechInitialAppointment = appointments.initial
    ? appointments.initial[0]
    : null;

  const { data: initialAppointment, refetch: refetchInitialAppointment } =
    useGetInitAppointmentQuery(ChechInitialAppointment);

  useEffect(() => {
    if (initialAppointment) {
      const { id, ...restData } = initialAppointment;
      methods.reset(restData);
    }
  }, [initialAppointment]);

  const [fetchInitialAppointmentPatch] = usePatchInitAppointmentMutation();
  const [fetchRequest] = usePostInitAppointmentMutation();

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
      start_date: new Date(),
      comments: 'no comments',
    }));
  }, [selectedReSearchItems]);

  const onSubmit = (data: InitAppointment) => {
    const newData: InitAppointment = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      pills: convertToPills,
      procedures: convertToProcedures,
      illness_history: activePatient.id,
    };
    if (initialAppointment) {
      fetchInitialAppointmentPatch({
        id: initialAppointment.id,
        body: newData,
      }).then(() => {
        refetchInitialAppointment();
      });
    } else {
      fetchRequest(newData).then(() => {
        refetchInitialAppointment();
      });
    }
  };

  return {
    methods,
    onSubmit,
    handleChangeStatus,
    appointmentStatus,
  };
};

export default useInitialAppointmentForm;
