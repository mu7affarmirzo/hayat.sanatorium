import { RowClickedEvent } from 'ag-grid-community';
import { useGetAllPatientsQuery } from 'features/Dispatching/dispatchingService';
import { useCallback } from 'react';

const useDispatchingPatientHook = () => {
    const { data, isError, isLoading, isSuccess } = useGetAllPatientsQuery();

    const handleRowClick = useCallback((event: RowClickedEvent) => {
        console.log(event);
    }, []);

    return {
        data,
        isError,
        isLoading,
        isSuccess,
        handleRowClick,
    };
};

export default useDispatchingPatientHook;
