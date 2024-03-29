import { setCurrentAppointment } from 'features/slices/initAppoinmentStatusSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useForm } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

const useInitialAppointmentForm = () => {
  const dispatch = useReduxDispatch();
  const methods = useForm<InitAppointmentTypes>();
  // const [fetchRequest, { isError, isLoading, isSuccess }] =
  //   usePostInitAppointmentMutation();

  const onSubmit = (data: InitAppointmentTypes) => {
    console.log(data, ' data from useFormHook');
    dispatch(setCurrentAppointment(data));
  };

  return {
    methods,
    onSubmit,
  };
};

export default useInitialAppointmentForm;
