import { useGetAllMyPatientsQuery } from 'features/patient/patientService';
import useDebounce from 'hooks/useDebounceHook';
import { useState, useCallback, useMemo } from 'react';
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
  const { register, handleSubmit } = useForm<Partial<IFormInput>>();
  const { data: myPatientData } = useGetAllMyPatientsQuery({
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

  const numberOfPatient = useMemo(() => {
    return filteredMyPatientData?.length;
  }, [filteredMyPatientData?.length]);

  return {
    myPatientData: filteredMyPatientData,
    numberOfPatient,
    handleSearch,
    register,
    handleSubmit,
    OnSubmit,
  };
};
