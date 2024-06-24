import {
  useGetDoctorsOnDutyQuery,
  usePatchDoctorsOnDutyMutation,
  usePostDoctorsOnDutyMutation,
} from 'features/Appointments/DoctorOnDutyAppointment/service';
import { DoctorOnDutyAppointmentTypes } from 'features/Appointments/DoctorOnDutyAppointment/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useDoctorOnDutyAppointmentHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.OnDutyDoctor,
  );

  const {
    currentIb,
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useFetchAndTransformData();

  const methods = useForm<DoctorOnDutyAppointmentTypes>();

  const { data: doctorOnDutyData, refetch: refetchDoctorOnDutyAppointment } =
    useGetDoctorsOnDutyQuery(appointmentID as never, {
      skip: !appointmentID,
    });

  useEffect(() => {
    if (doctorOnDutyData) {
      const { id, ...restData } = doctorOnDutyData;
      methods.reset(restData);
    }
  }, [doctorOnDutyData, methods]);

  const [fetchDoctorOnDutyPatch] = usePatchDoctorsOnDutyMutation();
  const [fetchRequest] = usePostDoctorsOnDutyMutation();

  const onSubmit = (data: DoctorOnDutyAppointmentTypes) => {
    const postData: DoctorOnDutyAppointmentTypes = {
      ...data,
      medical_services: convertToMedicalServices,
      lab_research: convertToLabResearch,
      procedures: convertToProcedures,
      pills: convertToPills,
      illness_history: currentIb?.id ?? 1, // Assuming currentIb is an object with an id property
    };

    const mutation = doctorOnDutyData
      ? fetchDoctorOnDutyPatch({
          id: doctorOnDutyData.id,
          body: postData,
        })
      : fetchRequest(postData);

    mutation.then(() => {
      refetchDoctorOnDutyAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit,
  };
};
