import InitialApportments from 'views/AppointmentInit';
import ConsultationCardiologistView from 'views/ConsultationCardiologist';
import { StartOfReceptionDataType } from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs.constants';
import DoctorOnDutyAppointment from 'views/DoctorOnDutyAppointment';
import ElectrocardiogramAppointment from 'views/ElectrocardiogramAppointment';
import ExaminationByDoctor from 'views/ExaminationByDoctor';
import FinalAppointment from 'views/FinalAppointment';
import NeurologistConsultationView from 'views/NeurologistConsultationApp';
import RepeatedAppointment from 'views/RepeatedAppointment';

export const anotherPopopData: { [key: string]: any } = {
  [StartOfReceptionDataType.initial]: {
    title: 'Первичный прием лечащего врача',
    component: InitialApportments,
    chiled: [
      {
        id: 1,
        title: 'Жалобы/анамнез',
      },
      {
        id: 2,
        title: 'Anamnesis morbi',
      },
      {
        id: 3,
        title: 'Anamnesis vitae',
      },
      {
        id: 4,
        title: 'Эпиданамнез',
      },
      {
        id: 5,
        title: 'Status praesens objectivus',
      },
      {
        id: 6,
        title: 'Косте-мышечная система',
      },
      {
        id: 7,
        title: 'Дыхательная система',
      },
      {
        id: 8,
        title: 'Сердечно—сосудистая система',
      },
      {
        id: 9,
        title: 'Органы пищеварения',
      },
      {
        id: 10,
        title: 'Мочевыделительная система',
      },
      {
        id: 11,
        title: 'Эндокринная система',
      },
      {
        id: 12,
        title: 'Нервная система',
      },
      {
        id: 13,
        title: 'Диагноз',
      },
      {
        id: 8,
        title: 'Заключение',
      },
      {
        id: 8,
        title: 'Назначения',
      },
    ],
  },

  [StartOfReceptionDataType.final_appointment]: {
    title: 'Заключительный прием лечащего врача',
    component: FinalAppointment,
    chiled: [
      {
        id: 0,
        title: 'Объективный статус',
      },
      {
        id: 1,
        title: 'Итоги лечения',
      },
      {
        id: 2,
        title: 'Диагноз',
      },
    ],
  },
  [StartOfReceptionDataType.repeated_appointment]: {
    title: 'Повторный прием лечащего врача',
    component: RepeatedAppointment,
    chiled: [
      {
        id: 0,
        title: 'Жалобы/анамнез',
      },
      {
        id: 1,
        title: 'Объективный статус',
      },
      {
        id: 2,
        title: 'Объективный статус2',
      },
    ],
  },
  [StartOfReceptionDataType.on_duty_doctor]: {
    title: 'Осмотр дежурного врача',
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
  [StartOfReceptionDataType.neurologist]: {
    title: 'Консультация невролога первичная',
    component: NeurologistConsultationView,
  },
  [StartOfReceptionDataType.cardiologist]: {
    title: 'Консультация кардиолога первичная',
    component: ConsultationCardiologistView,
  },
  [StartOfReceptionDataType.on_duty_doctor_on_arrival]: {
    title: 'Прием дежурного врача',
    component: DoctorOnDutyAppointment,
  },
  [StartOfReceptionDataType.ekg_appointment]: {
    title: 'ЭКГ(Электрокардиограмма)',
    component: ElectrocardiogramAppointment,
  },
};
