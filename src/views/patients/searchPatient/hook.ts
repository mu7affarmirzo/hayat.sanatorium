import { useGetAllMyPatientsQuery } from "features/Patient/patientService";
import useDebounce from "hooks/useDebounceHook";
import { useState, useCallback, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export interface IFormInput {
    name: string;
    historyIB: string;
    cardType: [type1: string, type2: string];
}

export const useSearchpatientHook = () => {
    const { data: myPatientData } = useGetAllMyPatientsQuery();
    const [searchValue, setSearchValue] = useState<string>("");
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) =>
        console.log(data, " form values ");

    const debouncedSearchValue = useDebounce(searchValue, 500);

    const handleSearch = useCallback((value: string) => {
        console.log(value, "search value ");
        setSearchValue(value);
    }, []);

    const filteredMyPatientData = useMemo(() => {
        return myPatientData?.filter((patient) =>
            patient.no
                .toLowerCase()
                .includes(debouncedSearchValue.toLowerCase())
        );
    }, [myPatientData, debouncedSearchValue]);

    const NumberOfPatient = useMemo(() => {
        return myPatientData?.length;
    }, [myPatientData?.length]);

    return {
        myPatientData: filteredMyPatientData,
        NumberOfPatient,
        handleSearch,
        register,
        handleSubmit,
        onSubmit,
    };
};
