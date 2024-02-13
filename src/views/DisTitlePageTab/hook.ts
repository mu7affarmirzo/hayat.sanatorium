import { useGetPatientWithIdQuery } from "features/dispatching/dispatchingService";
import { useReduxSelector } from "hooks/useReduxHook";
import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type IFormInput = {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
};

const useDispatchTitlePageTabHook = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    const { selectedIb } = useReduxSelector((state) => state.dispatching);

    const { data: CurrentPatient } = useGetPatientWithIdQuery(
        selectedIb as number
    );

    const scrollRef: any = useRef(null);

    const scrollUp = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop -= 200;
        }
    };

    return {
        scrollUp,
        register,
        handleSubmit,
        onSubmit,
        scrollRef,
        CurrentPatient,
    };
};

export default useDispatchTitlePageTabHook;
