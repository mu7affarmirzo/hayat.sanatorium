import { DropdownAppointmentMenuItem } from './diseaseHistoryTabs';

export enum StartOfReceptionDataType {
  on_duty_doctor = 'on_duty_doctor',
  cardiologist = 'cardiologist',
  neurologist = 'neurologist',
  ekg_appointment = 'ekg_appointment',
  final_appointment = 'final_appointment',
  repeated_appointment = 'repeated_appointment',
  initial = 'initial',
  on_duty_doctor_on_arrival = 'on_duty_doctor_on_arrival',
}

export enum StartOfReceptionNameType {
  on_duty_doctor = 'Прием дежурного врача',
  cardiologist = 'Консультация кардиолога первичная',
  neurologist = 'Консультация невролога первичная',
  ekg_appointment = 'ЭКГ (Электрокардиограмма)',
  final_appointment = 'Заключительный прием лечащего врача',
  repeated_appointment = 'Повторный приём лечащего врача',
  initial = 'Первичный прием лечащего врача',
  on_duty_doctor_on_arrival = 'Осмотр дежурного врача при поступлении',
}

export const StartOfReceptionData: DropdownAppointmentMenuItem[] = [
  {
    title: 'Без назначения',
    subMenu: [
      {
        title: StartOfReceptionNameType.final_appointment,
        id: 101,
        child: [
          {
            id: 0,
            title: 'Диагнозы',
          },
          {
            id: 1,
            title: 'Особые отметки',
          },
        ],
      },
      {
        title: StartOfReceptionNameType.cardiologist,
        id: 102,
      },
      {
        title: StartOfReceptionNameType.neurologist,
        id: 103,
      },
      {
        title: StartOfReceptionNameType.ekg_appointment,
        id: 104,
      },
      {
        title: StartOfReceptionNameType.repeated_appointment,
        id: 105,
      },
      {
        title: StartOfReceptionNameType.on_duty_doctor_on_arrival,
        id: 106,
      },
      {
        title: StartOfReceptionNameType.on_duty_doctor,
        id: 107,
      },
    ],
  },
];

export const appointmentObject = {
  ['Заключительный прием лечащего врача']: [StartOfReceptionDataType.final_appointment],
  ['Консультация кардиолога первичная']: [StartOfReceptionDataType.cardiologist],
  ['ЭКГ (Электрокардиограмма)']: [StartOfReceptionDataType.ekg_appointment],
  ['Первичный прием лечащего врача']: [StartOfReceptionDataType.initial],
  ['Консультация невролога первичная']: [StartOfReceptionDataType.neurologist],
  ['Прием дежурного врача']: [StartOfReceptionDataType.on_duty_doctor],
  ['Осмотр дежурного врача при поступлении']: [StartOfReceptionDataType.on_duty_doctor_on_arrival],
  ['Повторный приём лечащего врача']: [StartOfReceptionDataType.repeated_appointment],
}
