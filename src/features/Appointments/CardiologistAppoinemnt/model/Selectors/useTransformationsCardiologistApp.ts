import {
  LabResearchForCardiologist,
  MedicalServiceForCardiologist,
  PillForCardiologist,
  ProcedureForCardiologist,
} from 'features/Appointments/CardiologistAppoinemnt/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useMemo } from 'react';

export const useTransformationsCardiologistHook = () => {
  const { procedures } = useReduxSelector((state) => state.procedures);
  const { medications } = useReduxSelector((state) => state.medication);
  const { selectedConsultingItems, selectedResearchItems } = useReduxSelector(
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
    return selectedResearchItems.map((procedure) => ({
      lab: procedure.id,
      comments: 'no comments',
    }));
  }, [selectedResearchItems]);

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

  return {
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  };
};
