import {
    useSaturationListQuery,
    useMeasuredParamsSaturationMutation,
    useSaturationEditMutation,
    useSaturationDeleteMutation
} from "features/MeasuredParams/service"
import { useReduxSelector } from "hooks/useReduxHook";
import { useFieldArray, useForm } from "react-hook-form"

export interface SaturationFormFields {
    saturation: {
        _id: number;
        date: string;
        saturation: number;
        illness_history: number;
        created_by: number;
    }[]
};

export const useSaturation = () => {
    const { activePatient } = useReduxSelector(
        (currentPatientData) => currentPatientData.patientIllnesHistory,
    );
    const [createSaturationRequest] = useMeasuredParamsSaturationMutation()
    const { refetch } = useSaturationListQuery(activePatient.id)
    const [editSaturationRequest] = useSaturationEditMutation()
    const [deleteSaturationRequest] = useSaturationDeleteMutation()

    const defaultValues = async () => {
        const response = await refetch()
        return { saturation: response?.data?.map(({ id, ...rest }) => ({ ...rest, _id: id })) || [] }
    }

    const { control, register, watch, handleSubmit } = useForm({ defaultValues });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "saturation",
    });

    const handleCloseItem = (id: number, index: number) => {
        deleteSaturationRequest({ id }).then((res) => {
            // @ts-expect-error
            if (!res?.error) {
                remove(index)
            }
        })
    }

    const onSubmit = (data: SaturationFormFields) => {
        console.log({ data });
    }

    const handleEdit = (id: number) => {
        const fieldList = watch('saturation')
        const foundData = fieldList.find((field) => field._id === id)

        if (foundData) {
            const { _id, ...rest } = foundData
            editSaturationRequest({ id, body: rest })
        }
    }

    const handleAddItem = () => {
        const illness_history = activePatient.id
        const defaultValues = { saturation: 0, illness_history, created_by: 1 }

        createSaturationRequest(defaultValues).then(res => {
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