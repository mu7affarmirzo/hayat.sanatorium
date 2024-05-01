import { createContext, useContext } from 'react';
import { useDoctorOnDutyAppointmentHook } from './hook';

type DoctorOnDutyAppointmentContextType = ReturnType<
  typeof useDoctorOnDutyAppointmentHook
>;

const DoctorOnDutyAppointmentContext =
  createContext<DoctorOnDutyAppointmentContextType>(
    {} as DoctorOnDutyAppointmentContextType,
  );

const useDoctorOnDutyAppointmentContext = () =>
  useContext(DoctorOnDutyAppointmentContext);

const DoctorOnDutyAppointmentProvider = ({ children }: any) => {
  const value = useDoctorOnDutyAppointmentHook();
  return (
    <DoctorOnDutyAppointmentContext.Provider value={value}>
      {children}
    </DoctorOnDutyAppointmentContext.Provider>
  );
};

export { useDoctorOnDutyAppointmentContext, DoctorOnDutyAppointmentProvider };
