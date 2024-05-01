import InitialApportments from 'views/AppointmentInit';
import ConsultationCardiologistView from 'views/ConsultationCardiologist';
import { StartOfReceptionDataType } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs.constants';
import DoctorOnDutyAppointment from 'views/DoctorOnDutyAppointment';
import ElectrocardiogramAppointment from 'views/ElectrocardiogramAppointment';
import ExaminationByDoctor from 'views/ExaminationByDoctor';
import FinalAppointment from 'views/FinalAppointment';
import NeurologistConsultationView from 'views/NeurologistConsultationApp';
import RepeatedAppointment from 'views/RepeatedAppointment';

export const popapData = [
  {
    id: 1,
    title: StartOfReceptionDataType.INITIAL_APPOINTMENT,
    component: InitialApportments,
    chiled: [
      {
        id: 1,
        title: 'Жалобы/анамнез',
      },
      {
        id: 2,
        title: 'Объективный статус',
      },
    ],
  },
  {
    id: 2,
    title: StartOfReceptionDataType.FINAL_APPOINTMENT,
    component: FinalAppointment,
  },
  {
    id: 3,
    title: StartOfReceptionDataType.REPEATED_APPOINTMENT,
    component: RepeatedAppointment,
  },
  {
    id: 4,
    title: StartOfReceptionDataType.EXAMINATION_BY_DOCTOR,
    component: ExaminationByDoctor,
    chiled: [
      {
        id: 0,
        title: 'Жалобы/анамнез',
      },
      {
        id: 1,
        title: 'Объективный статус',
      },
    ],
  },
  {
    id: 5,
    title: StartOfReceptionDataType.NEUROLOGIST_CONSULTATION,
    component: NeurologistConsultationView,
  },
  {
    id: 6,
    title: StartOfReceptionDataType.CARDIOLOGIST_CONSULTATION,
    component: ConsultationCardiologistView,
  },
  {
    id: 7,
    title: StartOfReceptionDataType.DOCTOR_ON_DUTY_APPOINTMENT,
    component: DoctorOnDutyAppointment,
  },
  {
    id: 8,
    title: StartOfReceptionDataType.ELECTROCARDIOGRAM_APPOINTMENT,
    component: ElectrocardiogramAppointment,
  },
];

export const anotherPopopData: { [key: string]: any } = {
  [StartOfReceptionDataType.INITIAL_APPOINTMENT]: InitialApportments,
  [StartOfReceptionDataType.FINAL_APPOINTMENT]: FinalAppointment,
  [StartOfReceptionDataType.REPEATED_APPOINTMENT]: RepeatedAppointment,
  [StartOfReceptionDataType.EXAMINATION_BY_DOCTOR]: ExaminationByDoctor,
  [StartOfReceptionDataType.NEUROLOGIST_CONSULTATION]:
    NeurologistConsultationView,
  [StartOfReceptionDataType.CARDIOLOGIST_CONSULTATION]:
    ConsultationCardiologistView,
  [StartOfReceptionDataType.DOCTOR_ON_DUTY_APPOINTMENT]:
    DoctorOnDutyAppointment,
  [StartOfReceptionDataType.ELECTROCARDIOGRAM_APPOINTMENT]:
    ElectrocardiogramAppointment,
};
