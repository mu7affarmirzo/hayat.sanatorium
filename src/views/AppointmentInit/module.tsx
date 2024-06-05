import React, { useContext, createContext, PropsWithChildren } from 'react';
import useInitialAppointmentForm from './hook';

type AppintementInitContextType = ReturnType<typeof useInitialAppointmentForm>;

export const AppointmentInitContext = createContext<AppintementInitContextType>(
  {} as AppintementInitContextType,
);

const useAppAppointmentInitContext = () => useContext(AppointmentInitContext);

const AppointmentInitProvider = ({ children }: PropsWithChildren) => {
  const value = useInitialAppointmentForm();
  return (
    <AppointmentInitContext.Provider value={value}>
      {children}
    </AppointmentInitContext.Provider>
  );
};

export { useAppAppointmentInitContext, AppointmentInitProvider };
