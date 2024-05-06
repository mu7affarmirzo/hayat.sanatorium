import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useRef, useMemo, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GetPatientIbTypes } from 'features/DoctorsRoleService/types/index';
import { useGetPatientByIdQuery } from 'features/DoctorsRoleService/service/doctorService';
import { addActivePatient } from 'features/DoctorsRoleService/model/slices/patientIllnesHistorySlice';

export const usePatientDocTPHook = () => {
  const dispatch = useReduxDispatch();
  const { selectedId } = useReduxSelector(
    (dynamicTopTabs) => dynamicTopTabs.dynamicTopTabs,
  );

  const {
    data: patientData,
    status,
    isLoading,
  } = useGetPatientByIdQuery(Number(selectedId) || 0);

  useEffect(() => {
    if (status === 'fulfilled' && patientData) {
      dispatch(addActivePatient(patientData));
    }
  }, [dispatch, patientData, status]);

  const defaultValues = patientData as GetPatientIbTypes;

  const methods = useForm<GetPatientIbTypes>({
    defaultValues,
  });

  const scrollRef = useRef<any>(null);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 200;
    }
  };

  const doctorData = useMemo(() => patientData?.doctor, [patientData?.doctor]);
  const nurseData = useMemo(() => patientData?.nurse, [patientData?.nurse]);

  const getAgePatient = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const db = new Date(patientData?.patient.date_of_birth as never);
    const newDB = db.getFullYear();
    return currentYear - newDB;
  }, [patientData?.patient.date_of_birth]);

  const exampleObj = {
    name: 'home',
    phone_number: 999616427,
    basic: true,
  };
  const copyArray = useMemo(
    () => Array.from({ length: 2 }, () => exampleObj),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return {
    scrollRef,
    scrollUp,
    methods,
    onSubmit,
    defaultValues,
    doctorData,
    nurseData,
    getAgePatient,
    copyArray,
    isLoading,
  };
};
