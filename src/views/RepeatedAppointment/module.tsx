import { createContext, useContext } from 'react';
import { useRepeatedAppointmentHook } from './hook';

type RepeatedAppointmentContextType = ReturnType<
  typeof useRepeatedAppointmentHook
>;

const RepeatedAppointmentContext =
  createContext<RepeatedAppointmentContextType>(
    {} as RepeatedAppointmentContextType,
  );

const useRepeatedAppointmentContext = () =>
  useContext(RepeatedAppointmentContext);

const RepeatedAppointmentProvider = ({ children }: any) => {
  const value = useRepeatedAppointmentHook();
  return (
    <RepeatedAppointmentContext.Provider value={value}>
      {children}
    </RepeatedAppointmentContext.Provider>
  );
};

export { useRepeatedAppointmentContext, RepeatedAppointmentProvider };
