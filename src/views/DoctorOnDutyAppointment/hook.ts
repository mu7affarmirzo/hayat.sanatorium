import {
  useGetDoctorsOnDutyQuery,
  usePatchDoctorsOnDutyMutation,
  usePostDoctorsOnDutyMutation,
} from 'features/Appointments/DoctorOnDutyAppointment/service';
import {
  DoctorOnDutyAppointmentTypes,
  LabResearchForDoctorOnDuty,
  MedicalServiceForDoctorOnDuty,
  PillForDoctorOnDuty,
  ProcedureForDoctorOnDuty,
} from 'features/Appointments/DoctorOnDutyAppointment/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useDoctorOnDutyAppointmentHook = () => {
  const methods = useForm<DoctorOnDutyAppointmentTypes>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckDocOnDutyApp = appointments.on_duty_doctor_on_arrival
    ? appointments.on_duty_doctor_on_arrival[0]
    : null;

  const appointmentID = useMemo(() => {
    if (CheckDocOnDutyApp) {
      return CheckDocOnDutyApp.id;
    }
    return null;
  }, [CheckDocOnDutyApp]);

  const { data: doctorOnDutyData, refetch: refetchDoctorOnDutyAppointment } =
    useGetDoctorsOnDutyQuery(CheckDocOnDutyApp as never);

  useEffect(() => {
    if (doctorOnDutyData) {
      const { id, ...restData } = doctorOnDutyData;
      methods.reset(restData);
    }
  }, [doctorOnDutyData]);

  const [fetchDoctorOnDutyPatch] = usePatchDoctorsOnDutyMutation();
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

  const onSubmit = (data: DoctorOnDutyAppointmentTypes) => {
    const postData: DoctorOnDutyAppointmentTypes = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      procedures: convertToProcedures,
      pills: convertToPills,
      illness_history: 1,
    };
    if (doctorOnDutyData) {
      fetchDoctorOnDutyPatch({
        id: doctorOnDutyData.id,
        body: postData,
      }).then(() => {
        refetchDoctorOnDutyAppointment();
      });
    } else {
      fetchRequest(postData).then(() => {
        refetchDoctorOnDutyAppointment();
      });
    }
  };

  return {
    appointmentID,
    methods,
    onSubmit,
  };
};
