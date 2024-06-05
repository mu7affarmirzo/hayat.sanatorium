import { RowClickedEvent } from 'ag-grid-community';
import { useGetAllMyPatientsQuery } from 'features/patient/service';
import useDebounce from 'hooks/useDebounceHook';
import { useState, useCallback, useMemo, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

export interface IFormInput {
  full_name: string;
  ib: string;
  word: string;
}

export const useSearchpatientHook = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchoptions, setSearchOptions] = useState<Partial<IFormInput>>({
    full_name: '',
    ib: '',
    word: '',
  });
  const { register, handleSubmit, reset } = useForm<Partial<IFormInput>>();
  const { data: myPatientData, refetch } = useGetAllMyPatientsQuery({
    full_name: searchoptions.full_name,
    ib: searchoptions.ib,
    word: searchoptions.word,
  });

  const OnSubmit: SubmitHandler<Partial<IFormInput>> = (data) => {
    console.log(data, ' form values ');
    setSearchOptions(data);
  };

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

  useEffect(() => {
    refetch();
  }, [searchoptions, refetch, reset]);

  const numberOfPatient = useMemo(() => {
    return filteredMyPatientData?.length;
  }, [filteredMyPatientData?.length]);

  const handleClickedRowTable = useCallback((event: RowClickedEvent) => {
    console.log(event.data);
  }, []);

  return {
    myPatientData: filteredMyPatientData,
    numberOfPatient,
    handleSearch,
    register,
    handleSubmit,
    OnSubmit,
    handleClickedRowTable,
  };
};
