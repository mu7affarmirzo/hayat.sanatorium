import { usePostInitAppointmentMutation } from 'features/patient/patientService';
import { useForm } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

const useInitialAppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InitAppointmentTypes>();
  const [fetchRequest, { isError, isLoading, isSuccess }] =
    usePostInitAppointmentMutation();

  const onSubmit = (data: InitAppointmentTypes) => {
    console.log(data, ' data from useFormHook');
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
    isError,
    isSuccess,
    errors,
  };
};

export default useInitialAppointmentForm;
