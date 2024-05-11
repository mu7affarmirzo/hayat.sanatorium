import { createContext, useContext } from 'react';
import { usePatientDocTPHook } from './hook';

type GetPatientIllnesHistoryContextType = ReturnType<
  typeof usePatientDocTPHook
>;

export const PatientDocTPContext =
  createContext<GetPatientIllnesHistoryContextType>(
    {} as GetPatientIllnesHistoryContextType,
  );

const usePatientDocTPContext = () => useContext(PatientDocTPContext);

const PatientDocTPProvider = ({ children }: any) => {
  const value = usePatientDocTPHook();
  return (
    <PatientDocTPContext.Provider value={value}>
      {children}
    </PatientDocTPContext.Provider>
  );
};

export { usePatientDocTPContext, PatientDocTPProvider };
