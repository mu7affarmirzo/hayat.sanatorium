import { PropsWithChildren, createContext, useContext } from 'react';
import { useNeurologistAppoinmnetHook } from './hook';

type NeurologistAppointmentContectType = ReturnType<
  typeof useNeurologistAppoinmnetHook
>;

export const NeurologistAppointmentContext =
  createContext<NeurologistAppointmentContectType>(
    {} as NeurologistAppointmentContectType,
  );

const useNeurologistAppoinmnetContext = () =>
  useContext(NeurologistAppointmentContext);

const NeurologistAppointmentProvider = ({ children }: PropsWithChildren) => {
  const value = useNeurologistAppoinmnetHook();
  return (
    <NeurologistAppointmentContext.Provider value={value}>
      {children}
    </NeurologistAppointmentContext.Provider>
  );
};

export { useNeurologistAppoinmnetContext, NeurologistAppointmentProvider };
