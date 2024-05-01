import { DropdownMenuItem } from './diseaseHistoryTabs';

export enum StartOfReceptionDataType {
  EXAMINATION_BY_DOCTOR = 'Осмотр дежурного врача при поступлении',
  CARDIOLOGIST_CONSULTATION = 'Консультация кардиолога первичная',
  NEUROLOGIST_CONSULTATION = 'Консультация невролога первичная',
  ELECTROCARDIOGRAM_APPOINTMENT = 'ЭКГ(Электрокардиограмма)',
  FINAL_APPOINTMENT = 'Заключительный прием лечащего врача',
  REPEATED_APPOINTMENT = 'Повторный приём лечащего врача',
  INITIAL_APPOINTMENT = 'Первичный прием лечащего врача',
  DOCTOR_ON_DUTY_APPOINTMENT = 'Прием дежурного врача',
}

export const StartOfReceptionData: DropdownMenuItem[] = [
  {
    id: 1,
    title: StartOfReceptionDataType.INITIAL_APPOINTMENT,
    child: [
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
    title: 'Без назначения',
    subMenu: [
      {
        id: 9,
        title: StartOfReceptionDataType.FINAL_APPOINTMENT,
        child: [
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
        title: StartOfReceptionDataType.CARDIOLOGIST_CONSULTATION,
        child: [
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
        id: 3,
        title: StartOfReceptionDataType.NEUROLOGIST_CONSULTATION,
      },
      {
        id: 4,
        title: StartOfReceptionDataType.EXAMINATION_BY_DOCTOR,
      },
      {
        id: 5,
        title: StartOfReceptionDataType.REPEATED_APPOINTMENT,
      },
      {
        id: 6,
        title: StartOfReceptionDataType.DOCTOR_ON_DUTY_APPOINTMENT,
      },
      {
        id: 7,
        title: StartOfReceptionDataType.ELECTROCARDIOGRAM_APPOINTMENT,
      },
      {
        id: 8,
        title: StartOfReceptionDataType.INITIAL_APPOINTMENT,
      },
    ],
  },
];
