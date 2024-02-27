import { RowClickedEvent } from 'ag-grid-community';
import { addPatient } from 'features/booked/bookedSlice';
import { useGetAllMyPatientsQuery } from 'features/patient/patientService';
import useDebounce from 'hooks/useDebounceHook';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';

const useMyPatientTabHook = () => {
  const { data: myPatientData } = useGetAllMyPatientsQuery({});
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useReduxDispatch();

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearch = useCallback((value: string) => {
    console.log(value, 'search value ');
    setSearchValue(value);
  }, []);

  const filteredMyPatientData = useMemo(() => {
    return myPatientData?.filter((patient) =>
      patient.no.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
    );
  }, [myPatientData, debouncedSearchValue]);

  const NumberOfPatient = useMemo(() => {
    return myPatientData?.length;
  }, [myPatientData?.length]);

  const handleClickedRowTable = useCallback(
    (event: RowClickedEvent) => {
      console.log(event.data);
      dispatch(
        addPatient({
          id: event.data.id,
          name: event.data.name,
        }),
      );
    },
    [dispatch],
  );

  return {
    myPatientData: filteredMyPatientData,
    NumberOfPatient,
    handleSearch,
    handleClickedRowTable,
  };
};

export default useMyPatientTabHook;
