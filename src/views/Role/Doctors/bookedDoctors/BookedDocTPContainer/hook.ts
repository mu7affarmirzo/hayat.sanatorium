import { useSanatoriumDoctorsIdQuery } from 'features/booked/bookedService';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useMemo, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BookedDoctorsRootTypes } from 'types/bookedDoctorsTypes';

const useDocTPBookedTitleHook = () => {
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

  const dostorData = useMemo(() => {
    return data?.doctor;
  }, [data?.doctor]);

  const nurseData = useMemo(() => {
    return data?.nurse;
  }, [data?.nurse]);

  console.log('watch', JSON.stringify(watch(), null, 2));

  return {
    scrollRef,
    scrollUp,
    register,
    handleSubmit,
    onSubmit,
    setValue,
    defaultValues,
    watch,
    dostorData,
    nurseData,
  };
};

export default useDocTPBookedTitleHook;
