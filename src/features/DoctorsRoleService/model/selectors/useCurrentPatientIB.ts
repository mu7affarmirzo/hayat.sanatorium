import { setAppointments } from 'features/Appointments/slice/appointmentsSlice';
import {
  addActivePatient,
  setActivePatientError,
  setActivePatientLoading,
} from 'features/DoctorsRoleService/model/slices/patientIllnesHistorySlice';
import {
  useGetAppointmentsListByIdQuery,
  useGetPatientByIdQuery,
} from 'features/DoctorsRoleService/service/doctorService';
import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useEffect, useMemo } from 'react';

export const useCurrentPatientIB = () => {
  const { currentPatient } = useReduxSelector(
    (selectPatients) => selectPatients.selectedPatients,
  );

  const dispatch = useReduxDispatch();

  const {
    data: patientHistory,
    isLoading: isLoadingHistory,
    error: errorHistory,
    refetch: refetchPatientHistory
  } = useGetPatientByIdQuery(currentPatient?.id!, {
    skip: !currentPatient?.id,
  });

  const {
    data: appointmentsList,
    isLoading: isLoadingAppointments,
    error: errorAppointments,
  } = useGetAppointmentsListByIdQuery(patientHistory?.id!, {
    skip: !patientHistory?.id,
  });

  const memoizedPatientHistory = useMemo(
    () => patientHistory,
    [patientHistory],
  );

  const memoizedAppointmentsList = useMemo(
    () => appointmentsList,
    [appointmentsList],
  );

  useEffect(() => {
    if (currentPatient?.id) {
      console.log(`Fetching history for patient ID: ${currentPatient.id}`);
    }
  }, [currentPatient]);

  useEffect(() => {
    if (isLoadingHistory) {
      dispatch(setActivePatientLoading(true));
    } else if (patientHistory) {
      dispatch(addActivePatient(patientHistory));
      dispatch(setActivePatientLoading(false));
    } else if (errorHistory) {
      dispatch(setActivePatientError(errorHistory));
      dispatch(setActivePatientLoading(false));
    }
  }, [
    dispatch,
    currentPatient,
    isLoadingHistory,
    patientHistory,
    errorHistory,
  ]);

  useEffect(() => {
    if (appointmentsList) {
      dispatch(setAppointments(appointmentsList));
    }
  }, [appointmentsList, dispatch]);

  return {
    memoizedPatientHistory,
    memoizedAppointmentsList,
    refetchPatientHistory,
    isLoading: isLoadingHistory || isLoadingAppointments,
    error: errorHistory || errorAppointments,
  };
};
