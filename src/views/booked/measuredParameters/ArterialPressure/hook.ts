import {
    useArterialPressureListQuery,
    useMeasuredParamsArterialMutation,
    useArterialPressureEditMutation,
    useArterialPressureDeleteMutation
} from "features/MeasuredParams/service"
import { useFieldArray, useForm } from "react-hook-form"

export interface ArterialFormFields {
    arterialPressure: {
        _id: number;
        date: string;
        systologic: number;
        diastologic: number;
        illness_history: number;
        created_by: number;
    }[]
};

export const useArterialPressure = () => {
    const [createArterialRequest] = useMeasuredParamsArterialMutation()
    const { refetch } = useArterialPressureListQuery(1)
    const [editArterialRequest] = useArterialPressureEditMutation()
    const [deleteArterialRequest] = useArterialPressureDeleteMutation()

    const defaultValues = async () => {
        const response = await refetch()
        return { arterialPressure: response?.data?.map(({ id, ...rest }) => ({ ...rest, _id: id })) || [] }
    }

    const { control, register, watch, handleSubmit } = useForm({ defaultValues, });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "arterialPressure",
    });

    const handleCloseItem = (id: number, index: number) => {
        deleteArterialRequest({ id }).then((res) => {
            // @ts-expect-error
            if (!res?.error) {
                remove(index)
            }
        })
    }

    const onSubmit = (data: ArterialFormFields) => {
        console.log({ data });
    }

    const onBlur = (data: ArterialFormFields) => {
        console.log({ data }, 'blur');
    }

    const handleEdit = (id: number) => {
        const fieldList = watch('arterialPressure')
        const foundData = fieldList.find((field) => field._id === id)

        if (foundData) {
            const { _id, ...rest } = foundData
            editArterialRequest({ id, body: rest })
        }
    }

    const handleAddItem = () => {
        const illness_history = 1
        const defaultValues = { created_by: 1, diastologic: 0, illness_history, systologic: 0 }

        createArterialRequest(defaultValues).then(res => {
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