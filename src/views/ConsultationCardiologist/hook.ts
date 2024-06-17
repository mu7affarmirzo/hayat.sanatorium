import { useTransformationsCardiologistHook } from 'features/Appointments/CardiologistAppoinemnt/model/Selectors/useTransformationsCardiologistApp';
import {
  useGetCardiologistAppoinmnetQuery,
  usePatchCardiologistAppoinmnetMutation,
  usePostCardiologistAppoinmnetMutation,
} from 'features/Appointments/CardiologistAppoinemnt/service';
import { CardiologistAppointment } from 'features/Appointments/CardiologistAppoinemnt/types';
import { useCurrentIBSelector } from 'features/DoctorsRoleService/model/selectors/useCurrentIB';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

export const useCardiologistAppoinmnetHook = () => {
  const { currentIb } = useCurrentIBSelector();

  const {
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useTransformationsCardiologistHook();

  const methods = useForm<CardiologistAppointment>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckCardiologistApp = appointments.cardiologist
    ? appointments.cardiologist[0]
    : null;

  const appointmentID = useMemo(() => {
    if (CheckCardiologistApp) {
      return CheckCardiologistApp.id;
    }
    return null;
  }, [CheckCardiologistApp]);

  const {
    data: cardiologistAppointment,
    refetch: refetchCardiologistAppointment,
  } = useGetCardiologistAppoinmnetQuery(CheckCardiologistApp as never);

  // useEffect(() => {
  //   if (cardiologistAppointment) {
  //     const { id, ...restData } = cardiologistAppointment;
  //     methods.reset(restData);
  //   }
  // }, [cardiologistAppointment]);

  const [fetchCardiologistAppointmentPatch] =
    usePatchCardiologistAppoinmnetMutation();
  const [fetchRequest] = usePostCardiologistAppoinmnetMutation();

  const onSubmit = (data: CardiologistAppointment) => {
    const newData: CardiologistAppointment = {
      ...data,
      illness_history: currentIb?.id as number,
      pills: convertToPills,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
    };
    console.log(newData, 'newData in cardiologist hook');

    if (cardiologistAppointment) {
      fetchCardiologistAppointmentPatch({
        id: cardiologistAppointment.id,
        data: newData,
      }).then(() => {
        refetchCardiologistAppointment();
      });
    } else {
      fetchRequest(newData).then(() => {
        refetchCardiologistAppointment();
      });
    }
  };

  return {
    appointmentID,
    methods,
    onSubmit,
  };
};
