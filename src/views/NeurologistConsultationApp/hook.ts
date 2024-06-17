import {
  useGetNeurologistAppointmentQuery,
  usePatchNeurologistAppointmentMutation,
  usePostNeurologistAppointmentMutation,
} from 'features/Appointments/NeuroligstAppointment/service';
import {
  LabResearchForNeuroligst,
  MedicalServiceForNeuroligst,
  NeuroligstAppointment,
  PilForNeuroligst,
  ProcedureForNeuroligst,
} from 'features/Appointments/NeuroligstAppointment/types';

import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useNeurologistAppoinmnetHook = () => {


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



  const { appointments } = useReduxSelector((state) => state.appointments);

  const {
    data: neurologistAppointment,
    refetch: refetchNeurologistAppointment,
  } = useGetNeurologistAppointmentQuery(
    appointments.neurologist[0].id as never,
  );


  const appointentID = useMemo(() => {
    return appointments.neurologist[0]?.id;
  }
  , [appointments.neurologist]);

  useEffect(() => {
    if (neurologistAppointment) {
      const { id, ...restData } = neurologistAppointment;
      methods.reset(restData);
    }
  }, [neurologistAppointment]);

  const [fetchNeurologistPatch] = usePatchNeurologistAppointmentMutation();
  const [fetchNeuroligstApi] = usePostNeurologistAppointmentMutation();
  const methods = useForm<NeuroligstAppointment>();

  const onSubmit = (data: NeuroligstAppointment) => {
    const newData: NeuroligstAppointment = {
      ...data,
      illness_history: 1,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
      pills: convertToPills,
    };
    if (neurologistAppointment) {
      fetchNeurologistPatch({
        id: neurologistAppointment.id,
        body: newData,
      }).then(() => {
        refetchNeurologistAppointment();
      });
    } else {
      fetchNeuroligstApi(newData).then(() => {
        refetchNeurologistAppointment();
      });
    }
  };

  return {
    appointmentID: appointentID,
    methods,
    onSubmit,
  };
};
