import {
  useGetExaminationQuery,
  usePatchExamationMutation,
  usePostExaminationMutation,
} from 'features/Appointments/ExaminationDoctor/service';
import { ExaminationAppointment } from 'features/Appointments/ExaminationDoctor/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { AppointmentStatus } from 'features/Appointments/types';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useExaminationByDoctorHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.OnDutyDoctorOnArrival,
  );
  const { currentIb } = useFetchAndTransformData();

  const methods = useForm<ExaminationAppointment>();

  const { data: examinationData, refetch: refetchExaminationAppointment } =
    useGetExaminationQuery(appointmentID as never, {
      skip: !appointmentID,
    });

  useEffect(() => {
    if (examinationData) {
      const { id, ...restData } = examinationData;
      methods.reset(restData);
    }
  }, [examinationData, methods]);

  useEffect(() => {
    if (appointmentID) {
      refetchExaminationAppointment();
    }
  }, [appointmentID, refetchExaminationAppointment]);

  const [patchExamination] = usePatchExamationMutation();
  const [postExamination] = usePostExaminationMutation();

  const onSubmit = useCallback(
    (data: ExaminationAppointment) => {
      const newData: ExaminationAppointment = {
        ...data,
        illness_history: currentIb?.id as number,
      };

      const mutation = examinationData
        ? patchExamination({
          id: examinationData.id,
          data: newData,
        })
        : postExamination(newData);

      mutation.then(() => {
        refetchExaminationAppointment();
      });
    },
    [
      currentIb?.id,
      examinationData,
      patchExamination,
      postExamination,
      refetchExaminationAppointment,
    ],
  );

  return {
    appointmentID,
    methods,
    onSubmit,
    appointmentState: examinationData?.state as AppointmentStatus
  };
};

export default useExaminationByDoctorHook;
