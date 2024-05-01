import { createContext, useContext } from 'react';
import { useFinalAppointmentHook } from './hook';

type FinalAppointmentContextType = ReturnType<typeof useFinalAppointmentHook>;

const FinalAppointmentContext = createContext<FinalAppointmentContextType>(
  {} as FinalAppointmentContextType,
);

const useFinalAppointmentContext = () => useContext(FinalAppointmentContext);

const FinalAppointmentProvider = ({ children }: any) => {
  const value = useFinalAppointmentHook();
  return (
    <FinalAppointmentContext.Provider value={value}>
      {children}
    </FinalAppointmentContext.Provider>
  );
};

export { useFinalAppointmentContext, FinalAppointmentProvider };
