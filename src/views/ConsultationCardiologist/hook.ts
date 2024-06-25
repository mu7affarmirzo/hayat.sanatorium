import {
  useGetCardiologistAppoinmnetQuery,
  usePatchCardiologistAppoinmnetMutation,
  usePostCardiologistAppoinmnetMutation,
} from 'features/Appointments/CardiologistAppoinemnt/service';
import { CardiologistAppointment } from 'features/Appointments/CardiologistAppoinemnt/types';
import {
  AppointmentKeyTypes,
  useCurrentAppointmentID,
  useFetchAndTransformData,
} from 'features/Appointments/slice/useAppoitnmentsSelectors';
import { AppointmentStatus } from 'features/Appointments/types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useCardiologistAppoinmnetHook = () => {
  const appointmentID = useCurrentAppointmentID(
    AppointmentKeyTypes.Cardiologist,
  );
  const {
    currentIb,
    convertToProcedures,
    convertToLabResearch,
    convertToPills,
    convertToMedicalServices,
  } = useFetchAndTransformData();

  const {
    data: cardiologistAppointment,
    refetch: refetchCardiologistAppointment,
  } = useGetCardiologistAppoinmnetQuery(appointmentID as never, {
    skip: !appointmentID,
  });

  const methods = useForm<CardiologistAppointment>();
  const defaultValue = {
    state: "Не завершено",
    created_at: null,
    modified_at: null,
    has_cardio_complaints: false,
    has_nerve_complaints: false,
    other_complaints: null,
    history_of_illness: null,
    inheritance: null,
    height: null,
    weight: null,
    pulse_general: null,
    arterial_high: null,
    arterial_low: null,
    imt: null,
    imt_interpretation: null,
    body_figure: null,
    skin: null,
    sclera_visible_mucosa: null,
    thyroids: null,
    cervical: null,
    axillary: null,
    inguinal: null,
    pulse_per_min: null,
    pulse: null,
    fault_of_pulse: null,
    heart_arterial_high: null,
    heart_arterial_low: null,
    left_heart_edges: null,
    right_heart_edges: null,
    upper_heart_edges: null,
    heart_beat: null,
    heart_tone: null,
    i_tone: null,
    ii_tone: null,
    noise: null,
    arterial_pulse_stop: null,
    varicose_veins_of_superficial_veins: null,
    trophic_skin_changes: null,
    chdd_per_minute: null,
    chest_shape: null,
    pulmonary_fields: null,
    auscultation_breathing: null,
    wheezing: null,
    pleural_friction_rub: null,
    cito: false,
    for_sanatorium_treatment: null,
    summary: null,
    recommendation: null,
    created_by: null,
    modified_by: null,
    doctor: null,
    illness_history: null,
    medical_services: null,
    lab_research: null,
    procedures: null,
    pills: null,
  }

  // const defaultValue = {
  //   state: 'Не завершено',
  //   created_at: new Date(),
  //   modified_at: new Date(),
  //   has_cardio_complaints: false,
  //   has_nerve_complaints: false,
  //   other_complaints: '',
  //   history_of_illness: '',
  //   inheritance: '',
  //   height: 0,
  //   weight: 0,
  //   pulse_general: 0,
  //   arterial_high: 0,
  //   arterial_low: 0,
  //   imt: 0,
  //   imt_interpretation: 0,
  //   body_figure: '',
  //   skin: [],
  //   sclera_visible_mucosa: [],
  //   thyroids: [],
  //   cervical: [],
  //   axillary: [],
  //   inguinal: [],
  //   pulse_per_min: [],
  //   pulse: '',
  //   fault_of_pulse: '',
  //   heart_arterial_high: 0,
  //   heart_arterial_low: 0,
  //   left_heart_edges: '',
  //   right_heart_edges: '',
  //   upper_heart_edges: '',
  //   heart_beat: '',
  //   heart_tone: '',
  //   i_tone: [],
  //   ii_tone: [],
  //   noise: [],
  //   arterial_pulse_stop: [],
  //   varicose_veins_of_superficial_veins: [],
  //   trophic_skin_changes: [],
  //   chdd_per_minute: 0,
  //   chest_shape: '',
  //   pulmonary_fields: [],
  //   auscultation_breathing: [],
  //   wheezing: [],
  //   pleural_friction_rub: [],
  //   cito: [],
  //   for_sanatorium_treatment: '',
  //   summary: [],
  //   recommendation: '',
  //   created_by: 0,
  //   modified_by: 0,
  //   doctor: 0,
  //   illness_history: 0,
  //   medical_services: [],
  //   lab_research: [],
  //   procedures: [],
  //   pills: []
  // }

  useEffect(() => {
    if (appointmentID) {
      refetchCardiologistAppointment();
    } else {
      // @ts-expect-error
      methods.reset(defaultValue)
      console.log('reset ww')
    }
  }, [appointmentID, refetchCardiologistAppointment]);

  // console.log({ appointmentID })

  useEffect(() => {
    if (cardiologistAppointment && appointmentID) {
      const { id, ...restData } = cardiologistAppointment;
      if (id) {
        console.log('resetted', appointmentID, id)
        methods.reset(restData);
      }
    }
  }, [appointmentID, cardiologistAppointment, JSON.stringify(methods.reset)]);

  const [patchCardiologistAppointment] =
    usePatchCardiologistAppoinmnetMutation();
  const [postCardiologistAppointment] = usePostCardiologistAppoinmnetMutation();

  const handleFormSubmit = (data: CardiologistAppointment) => {
    const newData = {
      ...data,
      illness_history: currentIb?.id as number,
      pills: convertToPills,
      procedures: convertToProcedures,
      lab_research: convertToLabResearch,
      medical_services: convertToMedicalServices,
    };

    console.log({ newData });


    const mutation = cardiologistAppointment && appointmentID
      ? patchCardiologistAppointment({
        id: cardiologistAppointment.id,
        data: newData,
      })
      : postCardiologistAppointment(newData);

    mutation.then(() => {
      appointmentID && refetchCardiologistAppointment();
    });
  };

  return {
    appointmentID,
    methods,
    onSubmit: handleFormSubmit,
    appointmentState: cardiologistAppointment?.state as AppointmentStatus
  };
};
