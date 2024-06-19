import {
  useGetRepeatedAppointmentQuery,
  usePatchRepeatedAppointmentMutation,
  usePostRepeatedAppointmentMutation,
} from 'features/Appointments/RepeatedAppointmnet/service';
import { RepeatedAppointment } from 'features/Appointments/RepeatedAppointmnet/types';
import { useReduxSelector } from 'hooks/useReduxHook';
import { useForm } from 'react-hook-form';

export const useRepeatedAppointmentHook = () => {
  const methods = useForm<RepeatedAppointment>();

  const { appointments } = useReduxSelector((state) => state.appointments);

  const CheckRepeatedApp = appointments.repeated_appointment
    ? appointments.repeated_appointment[0]
    : null;

  const { data: repeatedData, refetch: refetchRepeatedAppointment } =
    useGetRepeatedAppointmentQuery(CheckRepeatedApp as never);

  // useEffect(() => {
  //   if (repeatedData) {
  //     const { id, ...restData } = repeatedData;
  //     methods.reset(restData);
  //   }
  // }, [repeatedData]);

  const [fetchRepeatedPatch] = usePatchRepeatedAppointmentMutation();
  const [fetchRequest] = usePostRepeatedAppointmentMutation();

  const onSubmit = (data: RepeatedAppointment) => {
    const postData: RepeatedAppointment = {
      ...data,
      illness_history: 1,
      medical_services: [],
      lab_research: [],
      procedures: [],
      pills: [],
    };
    if (repeatedData) {
      fetchRepeatedPatch({
        id: repeatedData.id,
        data: postData,
      }).then(() => {
        refetchRepeatedAppointment();
      });
    } else {
      fetchRequest(postData).then(() => {
        refetchRepeatedAppointment();
      });
    }
  };

  return {
    appointmentID: 3,
    methods,
    onSubmit,
  };
};
