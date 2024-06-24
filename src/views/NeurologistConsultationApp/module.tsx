import { PropsWithChildren, createContext, useContext } from 'react';
import { useNeurologistAppointmentHook } from './hook';

type NeurologistAppointmentContectType = ReturnType<
  typeof useNeurologistAppointmentHook
>;

export const NeurologistAppointmentContext =
  createContext<NeurologistAppointmentContectType>(
    {} as NeurologistAppointmentContectType,
  );

const useNeurologistAppoinmnetContext = () =>
  useContext(NeurologistAppointmentContext);

const NeurologistAppointmentProvider = ({ children }: PropsWithChildren) => {
  const value = useNeurologistAppointmentHook();
  return (
    <NeurologistAppointmentContext.Provider value={value}>
      {children}
    </NeurologistAppointmentContext.Provider>
  );
};

export { NeurologistAppointmentProvider, useNeurologistAppoinmnetContext };
