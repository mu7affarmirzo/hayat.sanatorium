/* eslint-disable react-hooks/exhaustive-deps */
import { useGetAllEventsQuery } from "features/events/eventsService";
import { useReduxDispatch } from "hooks/useReduxHook";
import { useEffect, useMemo } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
    phone: string;
    email: string;
    company: string;
    manager: string;
}
const useRecaptionEventsHook = () => {
    const { data } = useGetAllEventsQuery();
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    const dispatch = useReduxDispatch();

    const addEventsCountToStore = (count: number) => {
        dispatch({ type: "SET_EVENTS_COUNT", payload: count });
    };

    const CountOfEvents = useMemo(() => {
        return data?.length;
    }, [data?.length]);

    useEffect(() => {
        if (CountOfEvents !== undefined) {
            addEventsCountToStore(CountOfEvents);
        }
    }, [CountOfEvents, addEventsCountToStore]);

    return {
        register,
        handleSubmit,
        onSubmit,
        data,
        CountOfEvents,
    };
};

export default useRecaptionEventsHook;
