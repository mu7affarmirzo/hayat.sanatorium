import { useGetIbsWithIdQuery } from "features/Booked/bookedService";
import { useReduxSelector } from "hooks/useReduxHook";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Patient } from "types/booked";

const useAddMediceHistoryHook = () => {
    const { selectBroneId } = useReduxSelector((brone) => brone.booked);
    const { data, isError, isLoading, isSuccess } = useGetIbsWithIdQuery(
        selectBroneId as never
    );

    const PatientData = useMemo(() => {
        return data?.patient;
    }, [data?.patient]);

    const { register, handleSubmit } = useForm<Patient>({
        defaultValues: PatientData,
    });

    const onSubmit = (formData: any) => {
        console.log(formData);
    };
    return {
        selectBroneId,
        data,
        PatientData,
        onSubmit,
        register,
        handleSubmit,
    };
};

export default useAddMediceHistoryHook;
