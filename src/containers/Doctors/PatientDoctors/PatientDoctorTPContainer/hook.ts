/* eslint-disable react-hooks/exhaustive-deps */
import { GetPatientIbTypes } from 'features/DoctorsRoleService/types';
import { useMemo, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { useCurrentPatientIB } from 'features/DoctorsRoleService/model/selectors/useCurrentPatientIB';

export const usePatientDocTPHook = () => {
  const {
    memoizedPatientHistory: currentPatientIB,
    isLoading,
    error,
  } = useCurrentPatientIB();

  const methods = useForm<GetPatientIbTypes>({
    defaultValues: currentPatientIB,
  });

  const scrollRef = useRef<any>(null);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 200;
    }
  };

  const doctorData = useMemo(
    () => currentPatientIB?.doctor,
    [currentPatientIB?.doctor],
  );

  const nurseData = useMemo(
    () => currentPatientIB?.nurse,
    [currentPatientIB?.nurse],
  );

  const getAgePatient = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const birthYear = new Date(
      currentPatientIB?.patient?.date_of_birth as never,
    ).getFullYear();
    return currentYear - birthYear;
  }, [currentPatientIB?.patient?.date_of_birth]);

  const exampleObj = {
    name: 'home',
    phone_number: 999616427,
    basic: true,
  };

  const copyArray = useMemo(() => [exampleObj, exampleObj], []);

  const onSubmit: SubmitHandler<GetPatientIbTypes> = (data) => {
    console.log(data);
  };

  return {
    scrollRef,
    scrollUp,
    methods,
    onSubmit,
    doctorData,
    nurseData,
    getAgePatient,
    copyArray,
    isLoading: isLoading,
    activePatient: currentPatientIB,
    activePatientError: error,
  };
};
