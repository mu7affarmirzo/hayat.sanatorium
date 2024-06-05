import { useReduxDispatch, useReduxSelector } from 'hooks/useReduxHook';
import { useRef, useMemo, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { GetPatientIbTypes } from 'features/DoctorsRoleService/types/index';
import {
  useGetAppointmentsListByIdQuery,
  useGetPatientByIdQuery,
} from 'features/DoctorsRoleService/service/doctorService';
import { addActivePatient } from 'features/DoctorsRoleService/model/slices/patientIllnesHistorySlice';
import { setAppointments } from 'features/Appointments/slice/appointmentsSlice';

export const usePatientDocTPHook = () => {
  const [illnesHistoryId, setIllnesHistoryId] = useState<number | null>(null);
  const dispatch = useReduxDispatch();

  const { selectedPatient } = useReduxSelector(
    (dynamicTopTabs) => dynamicTopTabs.dynamicTopTabs,
  );

  const {
    data: patientIBData,
    status,
    isLoading,
  } = useGetPatientByIdQuery(Number(selectedPatient?.id) || 0);

  const { data: AppointmentsList } = useGetAppointmentsListByIdQuery(
    illnesHistoryId || 2,
  );

  useEffect(() => {
    if (status === 'fulfilled' && patientIBData) {
      dispatch(addActivePatient(patientIBData));
      setIllnesHistoryId(patientIBData.id);
    }
  }, [dispatch, patientIBData, status]);

  useEffect(() => {
    if (illnesHistoryId) {
      dispatch(setAppointments(AppointmentsList));
    }
  }, [AppointmentsList, dispatch, illnesHistoryId, patientIBData]);

  const defaultValues = patientIBData as GetPatientIbTypes;

  const methods = useForm<GetPatientIbTypes>({
    defaultValues,
  });

  const scrollRef = useRef<any>(null);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop -= 200;
    }
  };

  const doctorData = useMemo(
    () => patientIBData?.doctor,
    [patientIBData?.doctor],
  );
  const nurseData = useMemo(() => patientIBData?.nurse, [patientIBData?.nurse]);

  const getAgePatient = useMemo(() => {
    const currentYear = new Date().getFullYear();
    const db = new Date(patientIBData?.patient.date_of_birth as never);
    const newDB = db.getFullYear();
    return currentYear - newDB;
  }, [patientIBData?.patient.date_of_birth]);

  const exampleObj = {
    name: 'home',
    phone_number: 999616427,
    basic: true,
  };
  const copyArray = useMemo(
    () => Array.from({ length: 2 }, () => exampleObj),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  return {
    scrollRef,
    scrollUp,
    methods,
    onSubmit,
    defaultValues,
    doctorData,
    nurseData,
    getAgePatient,
    copyArray,
    isLoading,
  };
};
