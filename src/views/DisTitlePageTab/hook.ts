import { useGetPatientWithIdQuery } from 'features/dispatching/dispatchingService';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useMemo, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Patient } from 'types/booked';

export type IFormInput = {
  lastName: string;
  name: string;
  surName: string;
  appeal: string;
};

const useDispatchTitlePageTabHook = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const { selectedIb } = useReduxSelector((state) => state.dispatching);

  const { data: CurrentPatient } = useGetPatientWithIdQuery(
    selectedIb as number,
  );

  const scrollRef: any = useRef(null);

  const PatientData = useMemo(() => {
    const currentPatient = CurrentPatient?.patient;
    return currentPatient;
  }, [CurrentPatient?.patient]);

  const { register: registerForm, handleSubmit: handleSubmitForm } =
    useForm<Patient>({
      defaultValues: CurrentPatient?.patient ?? {},
    });

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 200;
    }
  };

  return {
    scrollUp,
    register,
    handleSubmit,
    onSubmit,
    scrollRef,
    CurrentPatient,
    PatientData,
    registerForm,
    handleSubmitForm,
  };
};

export default useDispatchTitlePageTabHook;
