import {
    usePulseListQuery,
    useMeasuredParamsPulseMutation,
    usePulseEditMutation,
    usePulseDeleteMutation
} from "features/MeasuredParams/service"
import { useFieldArray, useForm } from "react-hook-form"

export interface PulseFormFields {
    pulse: {
        _id: number;
        date: string;
        pulse: number;
        illness_history: number;
        created_by: number;
    }[]
};

export const usePulse = () => {
    const [createPulseRequest] = useMeasuredParamsPulseMutation()
    const { refetch } = usePulseListQuery(1)
    const [editPulseRequest] = usePulseEditMutation()
    const [deletePulseRequest] = usePulseDeleteMutation()

    const defaultValues = async () => {
        const response = await refetch()
        return { pulse: response?.data?.map(({ id, ...rest }) => ({ ...rest, _id: id })) || [] }
    }

    const { control, register, watch, handleSubmit } = useForm({ defaultValues });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "pulse",
    });

    const handleCloseItem = (id: number, index: number) => {
        deletePulseRequest({ id }).then((res) => {
            // @ts-expect-error
            if (!res?.error) {
                remove(index)
            }
        })
    }

    const onSubmit = (data: PulseFormFields) => {
        console.log({ data });
    }

    const handleEdit = (id: number) => {
        const fieldList = watch('pulse')
        const foundData = fieldList.find((field) => field._id === id)

        if (foundData) {
            const { _id, ...rest } = foundData
            editPulseRequest({ id, body: rest })
        }
    }

    const handleAddItem = () => {
        const illness_history = 1
        const defaultValues = { pulse: 0, illness_history, created_by: 1 }

        createPulseRequest(defaultValues).then(res => {
            // @ts-expect-error
            if (res?.data) {
                // @ts-expect-error
                const { id, ...rest } = res.data
                append({ _id: id, ...rest })
            }
        })
    }

    return {
        handleAddItem,
        handleCloseItem,
        fields,
        handleSubmit,
        onSubmit,
        register,
        handleEdit,
        control
    }
}