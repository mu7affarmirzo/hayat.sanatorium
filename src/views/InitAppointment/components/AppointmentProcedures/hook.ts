import { useGetProceduresGroupByCategoryQuery } from 'features/patient/patientService';
import { useState } from 'react';

const useAppointmentPredcedures = () => {
  const { data } = useGetProceduresGroupByCategoryQuery({});
  const [open, setOpen] = useState(false);

  return {
    data,
    open,
    setOpen,
  };
};

export default useAppointmentPredcedures;
