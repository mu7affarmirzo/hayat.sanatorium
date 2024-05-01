import { createContext, useContext } from 'react';
import { useElectrocardiogramAppointmentHook } from './hook';

type ElectrocardiogramAppointmentContextType = ReturnType<
  typeof useElectrocardiogramAppointmentHook
>;

const ElectrocardiogramAppointmentContext =
  createContext<ElectrocardiogramAppointmentContextType>(
    {} as ElectrocardiogramAppointmentContextType,
  );

const useElectrocardiogramAppointmentContext = () =>
  useContext(ElectrocardiogramAppointmentContext);

const ElectrocardiogramAppointmentProvider = ({ children }: any) => {
  const value = useElectrocardiogramAppointmentHook();
  return (
    <ElectrocardiogramAppointmentContext.Provider value={value}>
      {children}
    </ElectrocardiogramAppointmentContext.Provider>
  );
};

export {
  useElectrocardiogramAppointmentContext,
  ElectrocardiogramAppointmentProvider,
};
