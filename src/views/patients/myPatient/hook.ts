import { useGetAllMyPatientsQuery } from "features/Patient/patientService";
import useDebounce from "hooks/useDebounceHook";
import { useCallback, useMemo, useState } from "react";

const useMyPatientTabHook = () => {
    const { data: myPatientData } = useGetAllMyPatientsQuery();
    const [searchValue, setSearchValue] = useState<string>("");

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
    };
};

export default useMyPatientTabHook;
