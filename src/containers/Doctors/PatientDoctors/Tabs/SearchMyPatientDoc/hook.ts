import { RowClickedEvent } from 'ag-grid-community';
import { useGetAllDocPatientsQuery } from 'features/DoctorsRoleService/service/doctorService';
import useDebounce from 'hooks/useDebounceHook';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

export interface IFormInput {
  full_name: string;
  ib: string;
  word: string;
}

export const useSearchDocPatientHook = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchoptions, setSearchOptions] = useState<Partial<IFormInput>>({
    full_name: '',
    ib: '',
    word: '',
  });
  const { register, handleSubmit, reset } = useForm<Partial<IFormInput>>();

  const { data: SearchPatientData, refetch } = useGetAllDocPatientsQuery({
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
    return SearchPatientData?.filter((patient) =>
      patient.no.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
    );
  }, [SearchPatientData, debouncedSearchValue]);

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
    SearchPatientData: filteredMyPatientData,
    numberOfPatient,
    handleSearch,
    handleSubmit,
    register,
    OnSubmit,
    handleClickedRowTable,
  };
};
