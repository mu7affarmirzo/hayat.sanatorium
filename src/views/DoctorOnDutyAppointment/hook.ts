import {
  useGetDoctorsOnDutyQuery,
  usePatchDoctorsOnDutyMutation,
  usePostDoctorsOnDutyMutation,
} from 'features/Appointments/DoctorOnDutyAppointment/service';
import { DoctorOnDutyAppointmentTypes } from 'features/Appointments/DoctorOnDutyAppointment/types';
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

  const onSubmit = (data: DoctorOnDutyAppointmentTypes) => {
    const postData: DoctorOnDutyAppointmentTypes = {
      ...data,
      medical_services: [],
      lab_research: [],
      procedures: [],
      pills: [],
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
