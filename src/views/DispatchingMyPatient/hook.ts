import { RowClickedEvent } from 'ag-grid-community';
import { useGetAllPatientsQuery } from 'features/Dispatching/dispatchingService';
import { addInfoNewIb } from 'features/Dispatching/dispatchingSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
interface IFormInput {
  full_name: string;
  word: string;
  ib: string;
}
const useDispatchingPatientHook = () => {
  const dispatch = useReduxDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();

  const [searchOptions, setSearchOptions] = useState<Partial<IFormInput>>({
    full_name: '',
    ib: '',
    word: '',
  });

  const { data, isError, isLoading, isSuccess, refetch } =
    useGetAllPatientsQuery(searchOptions);

  const OnSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data, ' form values dispatching ');
    setSearchOptions(data);
  };

  useEffect(() => {
    refetch();
  }, [searchOptions, refetch]);

  const handleRowClick = useCallback(
    (event: RowClickedEvent) => {
      console.log(event.data);
      dispatch(
        addInfoNewIb({
          id: event.data.id,
          name: event.data.name,
        }),
      );
    },
    [dispatch],
  );

  return {
    data,
    isError,
    isLoading,
    isSuccess,
    handleRowClick,
    register,
    OnSubmit,
    handleSubmit,
  };
};

export default useDispatchingPatientHook;
