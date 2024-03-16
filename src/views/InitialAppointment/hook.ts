import { usePostInitAppointmentMutation } from 'features/patient/patientService';
import { useForm } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

const useInitialAppointmentForm = () => {
  const methods = useForm<InitAppointmentTypes>();
  const [fetchRequest, { isError, isLoading, isSuccess }] =
    usePostInitAppointmentMutation();

  const onSubmit = (data: InitAppointmentTypes) => {
    console.log(data, ' data from useFormHook');
  };

  return {
    methods,
    onSubmit,
    isLoading,
    isError,
    isSuccess,
  };
};

export default useInitialAppointmentForm;
