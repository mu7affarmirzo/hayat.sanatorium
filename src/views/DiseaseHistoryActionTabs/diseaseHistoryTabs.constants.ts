import { DropdownAppointmentMenuItem, DropdownMenuItem } from './diseaseHistoryTabs';

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

export const StartOfReceptionData: DropdownAppointmentMenuItem[] = [
  {
    title: 'Без назначения',
    subMenu: [
      {
        title: StartOfReceptionDataType.final_appointment,
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
        title: StartOfReceptionDataType.cardiologist,
      },
      {
        title: StartOfReceptionDataType.neurologist,
      },
      {
        title: StartOfReceptionDataType.ekg_appointment,
      },
      {
        title: StartOfReceptionDataType.repeated_appointment,
      },
      {
        title: StartOfReceptionDataType.on_duty_doctor_on_arrival,
      },
      {
        title: StartOfReceptionDataType.on_duty_doctor,
      },
    ],
  },
];
