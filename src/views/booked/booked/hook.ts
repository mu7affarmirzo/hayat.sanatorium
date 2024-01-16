import { useGetAllIbsQuery } from "features/booked/bookedService";
import useDebounce from "hooks/useDebounceHook";
import { useCallback, useState } from "react";
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

    const handleSearchInputChange = useCallback((e: any) => {
        const serachText = e.targed.value;
        setSearchTerm(serachText);
    }, []);

    return {
        handleSearchInputChange,
        debouncedSearchTerm,
        register,
        handleSubmit,
        onSubmit,
        data,
    };
};

export default useBookedHook;
