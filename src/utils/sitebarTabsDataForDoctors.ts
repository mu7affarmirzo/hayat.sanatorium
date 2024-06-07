import { TabsItem } from 'components/sideBar/SideBar';
import PatientDoctorTPContainer from 'containers/Doctors/PatientDoctors/PatientDoctorTPContainer';
import TreatmentSchedule from 'views/TreatmentSchedule';
import changelog from 'views/booked/changelog';
import invoicesDocuments from 'views/booked/invoicesDocuments';
import mainAssignmentSheet from 'views/MainAssigmentSheet';
import measuredParameters from 'views/booked/measuredParameters';
import nutrition from 'views/booked/nutrition';
import researchSummaryTable from 'views/booked/researchSummaryTable';
import { anotherPopopData } from './doctors/dynamicSitebarItems';
import { AppointmentsTypes } from 'features/Appointments/slice/appointmentsSlice';
import { map } from 'lodash';

export const GenerateSidebarTabsData = (
  appointmentsList: AppointmentsTypes,
) => {
  const separateAppointmentsData = () => {
    const list: TabsItem[] = map(appointmentsList ?? {}, (values, key: any) => {
      if (!Array.isArray(values) || values.length === 0) {
        return null;
      }
      const items = map(values ?? [], (appointment, index) => ({
        title: anotherPopopData[key]?.title,
        component: anotherPopopData[key]?.component,
        key,
      }));

      return {
        title: anotherPopopData[key]?.title,
        component: anotherPopopData[key]?.component,
        chiled: items,
      };
    }).filter((item) => item !== null) as TabsItem[];
    return list;
  };

  const staticSidebarItemTabs: TabsItem[] = [
    {
      title: 'Титульная страница',
      component: PatientDoctorTPContainer,
      chiled: [
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
      chiled: [
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
      chiled: [
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
  const sidebarItemTabs = [
    ...staticSidebarItemTabs,
    ...separateAppointmentsData(),
  ];

  return sidebarItemTabs;
};
