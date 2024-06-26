import {
    useTemperatureListQuery,
    useMeasuredParamsTemperatureMutation,
    useTemperatureEditMutation,
    useTemperatureDeleteMutation
} from "features/MeasuredParams/service"
import { useReduxSelector } from "hooks/useReduxHook";
import { useFieldArray, useForm } from "react-hook-form"

export interface TemperatureFormFields {
    temperature: {
        _id: number;
        date: string;
        temperature: number;
        illness_history: number;
        created_by: number;
    }[]
};

export const useTemperature = () => {
    const { activePatient } = useReduxSelector(
        (currentPatientData) => currentPatientData.patientIllnesHistory,
    );
    const [createTemperatureRequest] = useMeasuredParamsTemperatureMutation()
    const { refetch } = useTemperatureListQuery(activePatient.id)
    const [editTemperatureRequest] = useTemperatureEditMutation()
    const [deleteTemperatureRequest] = useTemperatureDeleteMutation()

    const defaultValues = async () => {
        const response = await refetch()
        return { temperature: response?.data?.map(({ id, ...rest }) => ({ ...rest, _id: id })) || [] }
    }

    const { control, register, watch, handleSubmit } = useForm({ defaultValues });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "temperature",
    });

    const handleCloseItem = (id: number, index: number) => {
        deleteTemperatureRequest({ id }).then((res) => {
            // @ts-expect-error
            if (!res?.error) {
                remove(index)
            }
        })
    }

    const onSubmit = (data: TemperatureFormFields) => {
        console.log({ data });
    }

    const handleEdit = (id: number) => {
        const fieldList = watch('temperature')
        const foundData = fieldList.find((field) => field._id === id)

        if (foundData) {
            const { _id, ...rest } = foundData
            editTemperatureRequest({ id, body: rest })
        }
    }

    const handleAddItem = () => {
        const illness_history = activePatient.id
        const defaultValues = { temperature: 0, illness_history, created_by: 1 }

        createTemperatureRequest(defaultValues).then(res => {
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