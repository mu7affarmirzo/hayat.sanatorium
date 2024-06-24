import PatientDoctorTPContainer from 'containers/Doctors/PatientDoctors/PatientDoctorTPContainer';
import { AppointmentsTypes } from 'features/Appointments/slice/appointmentsSlice';
import { compact, map } from 'lodash';
import mainAssignmentSheet from 'views/MainAssigmentSheet';
import TreatmentSchedule from 'views/TreatmentSchedule';
import changelog from 'views/booked/changelog';
import invoicesDocuments from 'views/booked/invoicesDocuments';
import measuredParameters from 'views/booked/measuredParameters';
import nutrition from 'views/booked/nutrition';
import researchSummaryTable from 'views/booked/researchSummaryTable';
import { anotherPopopData } from './doctors/dynamicSitebarItems';

interface ChildItemPropsForSidebarDoctors {
  id: number;
  title: string;
  link?: string;
  key?: string;
}

export interface DynamicSidebarTabsDataType {
  title: string;
  component: React.ComponentType<any>;
  child?: ChildItemPropsForSidebarDoctors[];
  activBtnType?: string;
}

const separateAppointmentsData = (
  appointmentsList: AppointmentsTypes,
): DynamicSidebarTabsDataType[] => {
  return compact(
    map(appointmentsList, (appointments, key) => {
      if (!Array.isArray(appointments) || appointments.length === 0)
        return null;

      const items = appointments.map((appointment) => ({
        id: appointment.id,
        title: anotherPopopData[key]?.title ?? '',
        link: anotherPopopData[key]?.link,
        key,
      }));

      return {
        title: anotherPopopData[key]?.title ?? '',
        component: anotherPopopData[key]?.component,
        child: items,
      };
    }),
  );
};

const staticSidebarItemTabs: DynamicSidebarTabsDataType[] = [
  {
    title: 'Титульная страница',
    component: PatientDoctorTPContainer,
    child: [
      { id: 0, title: 'Диагнозы', link: '/#frontPage' },
      { id: 2, title: 'Особые отметки', link: '/#frontPage' },
    ],
    activBtnType: 'panel1',
  },
  {
    title: 'Документы',
    component: invoicesDocuments,
  },
  {
    title: 'Питание',
    component: nutrition,
  },
  {
    title: 'Основной лист назначений',
    component: mainAssignmentSheet,
    activBtnType: 'panel1',
    child: [
      { id: 0, title: 'Консультации и исследования' },
      { id: 1, title: 'Лечебные процедуры' },
    ],
  },
  {
    title: 'Сводная таблица исследований',
    component: researchSummaryTable,
  },
  {
    title: 'Измеряемые параметры',
    component: measuredParameters,
    activBtnType: 'panel1',
    child: [
      { id: 0, title: 'Артериальное давление' },
      { id: 1, title: 'Глюкоза крови (глюкометр)' },
      { id: 3, title: 'Пульс' },
      { id: 4, title: 'Сатурация' },
      { id: 5, title: 'Температура' },
    ],
  },
  {
    title: 'Расписание лечения',
    component: TreatmentSchedule,
  },
  {
    title: 'Журнал изменений',
    component: changelog,
  },
];

export const GenerateSidebarTabsData = (
  appointmentsList: AppointmentsTypes,
): DynamicSidebarTabsDataType[] => {
  const dynamicSidebarItemTabs = separateAppointmentsData(appointmentsList);

  return [...staticSidebarItemTabs, ...dynamicSidebarItemTabs];
};
