import { RowClickedEvent } from 'ag-grid-community';
import { useGetAllPatientsQuery } from 'features/dispatching/dispatchingService';
import { addInfoNewIb } from 'features/dispatching/dispatchingSlice';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback } from 'react';

const useDispatchingPatientHook = () => {
  const dispatch = useReduxDispatch();
  const { data, isError, isLoading, isSuccess } = useGetAllPatientsQuery();

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
  };
};

export default useDispatchingPatientHook;
