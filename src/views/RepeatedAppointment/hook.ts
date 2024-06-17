import {
  useGetRepeatedAppointmentQuery,
  usePatchRepeatedAppointmentMutation,
  usePostRepeatedAppointmentMutation,
} from 'features/Appointments/RepeatedAppointmnet/service';
import {
  LabResearchForRepApp,
  MedicalServiceForRepApp,
  PillForRepApp,
  ProcedureForRepApp,
  RepeatedAppointment,
} from 'features/Appointments/RepeatedAppointmnet/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useRepeatedAppointmentHook = () => {
  const methods = useForm<RepeatedAppointment>();

  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedReSearchItems } = useReduxSelector(
    (state) => state.consultingAndResearch,
  );
  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckRepeatedApp = appointments.repeated_appointment
    ? appointments.repeated_appointment[0]
    : null;

  const { data: repeatedData, refetch: refetchRepeatedAppointment } =
    useGetRepeatedAppointmentQuery(CheckRepeatedApp as never);

  useEffect(() => {
    if (repeatedData) {
      const { id, ...restData } = repeatedData;
      methods.reset(restData);
    }
  }, [repeatedData]);

  const [fetchRepeatedPatch] = usePatchRepeatedAppointmentMutation();
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

  const onSubmit = (data: RepeatedAppointment) => {
    const postData: RepeatedAppointment = {
      ...data,
      illness_history: 1,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      procedures: convertToProcedures,
      pills: convertToPills,
    };
    if (repeatedData) {
      fetchRepeatedPatch({
        id: repeatedData.id,
        data: postData,
      }).then(() => {
        refetchRepeatedAppointment();
      });
    } else {
      fetchRequest(postData).then(() => {
        refetchRepeatedAppointment();
      });
    }
  };

  return {
    appointmentID: 3,
    methods,
    onSubmit,
  };
};
