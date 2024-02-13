import {
    useGetAllIbsQuery,
    usePostSearchIbsMutation,
} from "features/Booked/bookedService";
import useDebounce from "hooks/useDebounceHook";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
export interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}
const useBookedHook = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { register, handleSubmit } = useForm<IFormInput>();
    const { data, isError, isSuccess, isLoading } = useGetAllIbsQuery();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [fetchSearchIbs, { data: searchData }] = usePostSearchIbsMutation();

    const handleSearchIbss = useMemo(
        () => (event: React.ChangeEvent<HTMLInputElement>) => {
            const serachText = event.target.value;
            setSearchTerm(serachText);
        },
        []
    );

    useEffect(() => {
        if (debouncedSearchTerm) {
            fetchSearchIbs({ word: debouncedSearchTerm });
        }
    }, [debouncedSearchTerm, fetchSearchIbs]);

    return {
        handleSearchIbss,
        searchTerm,
        register,
        handleSubmit,
        onSubmit,
        data,
        isError,
        isSuccess,
        isLoading,
        searchData,
    };
};

export default useBookedHook;
