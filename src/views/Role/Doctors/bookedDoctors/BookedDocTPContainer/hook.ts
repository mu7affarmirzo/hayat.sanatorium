import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export type IFormInput = {
  lastName: string;
  name: string;
  surName: string;
  appeal: string;
};
const useDocTPBookedTitleHook = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const scrollRef: any = useRef(null);
  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 200;
    }
  };

  return {
    scrollRef,
    scrollUp,
    register,
    handleSubmit,
    onSubmit,
  };
};

export default useDocTPBookedTitleHook;
