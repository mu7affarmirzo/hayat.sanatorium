import { createContext, useContext } from 'react';
import useExaminationByDoctorHook from './hook';

type ExaminationbyDoctorContextType = ReturnType<
  typeof useExaminationByDoctorHook
>;

export const ExaminationbyDoctorContext =
  createContext<ExaminationbyDoctorContextType>(
    {} as ExaminationbyDoctorContextType,
  );

const useExaminationByDoctorContext = () =>
  useContext(ExaminationbyDoctorContext);

const ExaminationbyDoctorProvider = ({ children }: any) => {
  const value = useExaminationByDoctorHook();
  return (
    <ExaminationbyDoctorContext.Provider value={value}>
      {children}
    </ExaminationbyDoctorContext.Provider>
  );
};

export { useExaminationByDoctorContext, ExaminationbyDoctorProvider };
