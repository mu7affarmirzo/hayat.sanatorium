import { addPatient } from 'features/DoctorsRoleService/model/slices/selectedPatientsSlice';
import { useGetAllDocPatientsQuery } from 'features/DoctorsRoleService/service/doctorService';
import { GetMyPatients } from 'features/DoctorsRoleService/types';
import useDebounce from 'hooks/useDebounceHook';
import { useReduxDispatch } from 'hooks/useReduxHook';
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

  const dispatch = useReduxDispatch();

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

  const handleClearValues = () => {
    setSearchOptions({
      full_name: '',
      ib: '',
      word: '',
    })
  }
  const filteredMyPatientData = useMemo(() => {
    return SearchPatientData?.filter((patient) =>
      patient.no.toLowerCase().includes(debouncedSearchValue.toLowerCase()) || patient.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
    );
  }, [SearchPatientData, debouncedSearchValue]);

  useEffect(() => {
    refetch();
  }, [searchoptions, refetch, reset]);

  const numberOfPatient = useMemo(() => {
    return filteredMyPatientData?.length;
  }, [filteredMyPatientData?.length]);

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
    SearchPatientData: filteredMyPatientData,
    numberOfPatient,
    handleSearch,
    handleSubmit,
    register,
    OnSubmit,
    handleClickedRowTable,
    handleClearValues
  };
};
