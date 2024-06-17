import { useReduxSelector } from 'hooks/useReduxHook';

export const useCurrentIBSelector = () => {
  const { activePatient, error, loading } = useReduxSelector(
    (currentIB) => currentIB.patientIllnesHistory,
  );

  const isActivePatientValid =
    activePatient && Object.keys(activePatient).length > 0;

  return {
    currentIb: isActivePatientValid ? activePatient : null,
    error,
    loading,
  };
};
