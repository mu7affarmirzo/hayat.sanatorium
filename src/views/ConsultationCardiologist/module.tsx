import { useCardiologistAppoinmnetHook } from './hook';
import { useContext, createContext } from 'react';

type CardiologistAppointmentContextType = ReturnType<
  typeof useCardiologistAppoinmnetHook
>;

export const CardiologistAppointmentContext =
  createContext<CardiologistAppointmentContextType>(
    {} as CardiologistAppointmentContextType,
  );

const useCardiologistAppoinmnetContext = () =>
  useContext(CardiologistAppointmentContext);

const CardiologistAppointmentProvider = ({ children }: any) => {
  const value = useCardiologistAppoinmnetHook();
  return (
    <CardiologistAppointmentContext.Provider value={value}>
      {children}
    </CardiologistAppointmentContext.Provider>
  );
};

export { useCardiologistAppoinmnetContext, CardiologistAppointmentProvider };
