import { useTransformationsCardiologistHook } from 'features/Appointments/CardiologistAppoinemnt/model/Selectors/useTransformationsCardiologistApp';
import { setCurrentAppointmentById } from 'features/Appointments/slice/appointmentsSlice';
import { useCurrentIBSelector } from 'features/DoctorsRoleService/model/selectors/useCurrentIB';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useCallback, useMemo } from 'react';

export enum AppointmentKeyTypes {
  Initial = 'initial',
  Neurologist = 'neurologist',
  Cardiologist = 'cardiologist',
  OnDutyDoctorOnArrival = 'on_duty_doctor_on_arrival',
  OnDutyDoctor = 'on_duty_doctor',
  RepeatedAppointment = 'repeated_appointment',
  EKGAppointment = 'ekg_appointment',
  FinalAppointment = 'final_appointment',
}

export const useAppointmentsSelectors = () => {
  const dispatch = useReduxDispatch();
  const { appointments } = useReduxSelector((state) => state.appointments);

  const currentAppointment = useMemo(
    () => appointments.current_appointment,
    [appointments.current_appointment],
  );

  const currentAppoiintmetDispatch = useCallback(
    (type: AppointmentKeyTypes, id: number) => {
      dispatch(setCurrentAppointmentById({ type, id }));
    },
    [dispatch],
  );

  return {
    appointments,
    currentAppointment,
    currentAppoiintmetDispatch,
  };
};

export const useCurrentAppointmentID = (key: AppointmentKeyTypes) => {
  const { appointments } = useAppointmentsSelectors();

  return useMemo(() => {
    if (
      appointments.current_appointment &&
      appointments.current_appointment.key === key
    ) {
      return appointments.current_appointment.appointmentID;
    }
    return null;
  }, [appointments.current_appointment, key]);
};

export const useFetchAndTransformData = () => {
  const { currentIb } = useCurrentIBSelector();
  const {
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useTransformationsCardiologistHook();

  return useMemo(
    () => ({
      currentIb,
      convertToProcedures,
      convertToLabResearch,
      convertToPills,
      convertToMedicalServices,
    }),
    [
      currentIb,
      convertToProcedures,
      convertToLabResearch,
      convertToPills,
      convertToMedicalServices,
    ],
  );
};
