import {
  AppointmentStatus,
  setCurrentAppointment,
} from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

const useInitialAppointmentForm = () => {
  const [appointmentStatus, setAppointmentStatus] =
    useState<AppointmentStatus['status']>('notCompleted');

  const dispatch = useReduxDispatch();
  const methods = useForm<InitAppointmentTypes>();
  // const [fetchRequest, { isError, isLoading, isSuccess }] =
  //   usePostInitAppointmentMutation();

  const handleChangeStatus = useCallback(
    (status: AppointmentStatus['status']) => {
      setAppointmentStatus(status);
    },
    [setAppointmentStatus],
  );

  const onSubmit = (data: InitAppointmentTypes) => {
    console.log(data, ' data from useFormHook');
    dispatch(setCurrentAppointment(data));
  };

  return {
    methods,
    onSubmit,
    handleChangeStatus,
    appointmentStatus,
  };
};

export default useInitialAppointmentForm;
