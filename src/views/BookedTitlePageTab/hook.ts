import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export type IFormInput = {
    lastName: string;
    name: string;
    surName: string;
    appeal: string;
};

const useTitlePageTabHook = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

    const scrollRef: any = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200;
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 200;
        }
    };

    const scrollDown = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop += 200;
        }
    };

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
    };
};
export default useTitlePageTabHook;
