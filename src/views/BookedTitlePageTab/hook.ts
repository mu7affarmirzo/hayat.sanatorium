import { usePostDiagnosMutation } from 'features/booked/bookedService';
import { useGetPatientWithIdQuery } from 'features/dispatching/dispatchingService';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export type IFormInput = {
  lastName: string;
  name: string;
  surName: string;
  appeal: string;
};

const useTitlePageTabHook = () => {
  const { selectBroneId } = useReduxSelector(
    (dynamicTabs) => dynamicTabs.booked,
  );
  const { data, isError, isLoading, isSuccess } = useGetPatientWithIdQuery(
    Number(selectBroneId) || 0,
  );
  const [fetchRequest] = usePostDiagnosMutation();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const clicked = () => {
    fetchRequest({
      name: 'string',
      code: 'string',
    });
  };

  const scrollRef: any = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200;
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += 200;
    }
  };

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
    data,
    isError,
    isLoading,
    isSuccess,
  };
};
export default useTitlePageTabHook;
