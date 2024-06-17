import { usePostExaminationMutation } from 'features/Appointments/ExaminationDoctor/service';
import { ExaminationAppointment } from 'features/Appointments/ExaminationDoctor/types';
import { useForm } from 'react-hook-form';

export const useExaminationByDoctorHook = () => {
  const methods = useForm<ExaminationAppointment>();

  const [fetchRequest] = usePostExaminationMutation();

  const onSubmit = (data: ExaminationAppointment) => {
    fetchRequest(data);
  };

  return {
    methods,
    onSubmit,
  };
};

export default useExaminationByDoctorHook;
