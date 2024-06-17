import { addPatient } from 'features/DoctorsRoleService/model/slices/selectedPatientsSlice';
import { useGetAllDocPatientsQuery } from 'features/DoctorsRoleService/service/doctorService';
import { GetMyPatients } from 'features/DoctorsRoleService/types';
import useDebounce from 'hooks/useDebounceHook';
import { useReduxDispatch } from 'hooks/useReduxHook';
import { useCallback, useMemo, useState } from 'react';

export const useMyPatientsDocHook = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useReduxDispatch();

  const { data: DocPatientsData } = useGetAllDocPatientsQuery({});

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearch = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const filteredMyPatientData = useMemo(() => {
    return DocPatientsData?.filter((patient) =>
      patient.no.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
    );
  }, [DocPatientsData, debouncedSearchValue]);

  const NumberOfPatient = useMemo(() => {
    return DocPatientsData?.length;
  }, [DocPatientsData?.length]);

  const handleClickedRowTable = useCallback(
    (event: GetMyPatients) => {
      console.log(event, ' patient data ');
      if (event) {
        dispatch(addPatient(event as never));
      }
    },
    [dispatch],
  );

  return {
    handleSearch,
    NumberOfPatient,
    handleClickedRowTable,
    DocPatientsData: filteredMyPatientData,
  };
};
