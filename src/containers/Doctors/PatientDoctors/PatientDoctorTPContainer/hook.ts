import { useSanatoriumDoctorsIdQuery } from 'features/booked/bookedService';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useRef, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BookedDoctorsRootTypes } from 'types/bookedDoctorsTypes';

export const usePatientDocTPHook = () => {
  const { selectBroneId } = useReduxSelector(
    (dynamicTabs) => dynamicTabs.booked,
  );

  const { data } = useSanatoriumDoctorsIdQuery(Number(selectBroneId) || 0);

  const defaultValues = data as unknown as BookedDoctorsRootTypes;

  const { register, handleSubmit, setValue, watch } =
    useForm<BookedDoctorsRootTypes>({
      defaultValues,
    });

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const scrollRef: any = useRef(null);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 200;
    }
  };

  const doctorData = useMemo(() => {
    return data?.doctor;
  }, [data?.doctor]);

  const nurseData = useMemo(() => {
    return data?.nurse;
  }, [data?.nurse]);

  const getAgePatient = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const db = new Date(data?.patient.date_of_birth as never);
    const newDB = db.getFullYear();
    return currentYear - newDB;
  }, [data?.patient.date_of_birth]);

  const exampleObj = {
    name: 'home',
    phone_number: 999616427,
    basic: true,
  };
  const copyArray = Array.from({ length: 2 }, () => exampleObj);

  return {
    scrollRef,
    scrollUp,
    register,
    handleSubmit,
    onSubmit,
    setValue,
    defaultValues,
    watch,
    doctorData,
    nurseData,
    getAgePatient,
    copyArray,
  };
};
