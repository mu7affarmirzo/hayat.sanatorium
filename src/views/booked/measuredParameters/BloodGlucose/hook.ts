import {
    useGlucometerListQuery,
    useMeasuredParamsGlucometerMutation,
    useGlucometerEditMutation,
    useGlucometerDeleteMutation
} from "features/MeasuredParams/service"
import { useReduxSelector } from "hooks/useReduxHook";
import { useFieldArray, useForm } from "react-hook-form"

export interface GlucometerFormFields {
    bloodGlucose: {
        _id: number;
        date: string;
        blood_glucose: number;
        illness_history: number;
        created_by: number;
    }[]
};

export const useGlucometer = () => {
    const { activePatient } = useReduxSelector(
        (currentPatientData) => currentPatientData.patientIllnesHistory,
    );
    const [createGlucometerRequest] = useMeasuredParamsGlucometerMutation()
    const { refetch } = useGlucometerListQuery(activePatient.id)
    const [editGlucometerRequest] = useGlucometerEditMutation()
    const [deleteGlucometerRequest] = useGlucometerDeleteMutation()

    const defaultValues = async () => {
        const response = await refetch()
        return { bloodGlucose: response?.data?.map(({ id, ...rest }) => ({ ...rest, _id: id })) || [] }
    }

    const { control, register, watch, handleSubmit } = useForm({ defaultValues });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "bloodGlucose",
    });

    const handleCloseItem = (id: number, index: number) => {
        deleteGlucometerRequest({ id }).then((res) => {
            // @ts-expect-error
            if (!res?.error) {
                remove(index)
            }
        })
    }

    const onSubmit = (data: GlucometerFormFields) => {
        console.log({ data });
    }

    const handleEdit = (id: number) => {
        const fieldList = watch('bloodGlucose')
        const foundData = fieldList.find((field) => field._id === id)

        if (foundData) {
            const { _id, ...rest } = foundData
            editGlucometerRequest({ id, body: rest })
        }
    }

    const handleAddItem = () => {
        const illness_history = activePatient.id
        const defaultValues = { blood_glucose: 0, illness_history, created_by: 1 }

        createGlucometerRequest(defaultValues).then(res => {
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