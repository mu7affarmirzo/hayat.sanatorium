/* eslint-disable react-hooks/exhaustive-deps */
import { useGetAllEventsQuery } from 'features/events/eventsService';
import { eventsCount } from 'features/events/eventsSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useMemo, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  phone: string;
  email: string;
  company: string;
  manager: string;
}

const useDoctorsEventsHook = () => {
  const { data } = useGetAllEventsQuery();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const dispatch = useReduxDispatch();

  const addEventsCountToStore = (count: number) => {
    dispatch(eventsCount(count));
  };

  const CountOfEvents = useMemo(() => {
    return data?.length;
  }, [data?.length]);

  useEffect(() => {
    if (CountOfEvents !== undefined) {
      addEventsCountToStore(CountOfEvents);
    }
  }, [CountOfEvents, addEventsCountToStore]);

  return {
    register,
    handleSubmit,
    onSubmit,
    data,
    CountOfEvents,
  };
};
export default useDoctorsEventsHook;
