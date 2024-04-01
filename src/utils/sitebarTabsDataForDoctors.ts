import { TabsItem } from 'components/sideBar/SideBar';
import PatientDoctorTPContainer from 'containers/Doctors/PatientDoctors/PatientDoctorTPContainer';
import InitialApportments from 'views/AppointmentInit';
import RepeatedAppointment from 'views/RepeatedAppointment';
import TreatmentSchedule from 'views/TreatmentSchedule';
import changelog from 'views/booked/changelog';
import consultationTechniques from 'views/booked/consultationTechniques';
import invoicesDocuments from 'views/booked/invoicesDocuments';
import mainAssignmentSheet from 'views/booked/mainAssignmentSheet';
import measuredParameters from 'views/booked/measuredParameters';
import nutrition from 'views/booked/nutrition';
import researchSummaryTable from 'views/booked/researchSummaryTable';

export const selectData = [
  {
    id: 0,
    title: 'Начало приёма',
  },
  {
    id: 1,
    title: 'Начало приём2',
  },
];

export const selectData2 = [
  {
    id: 0,
    title: 'Осмотр дежурного врача при поступлении',
  },
  {
    id: 1,
    title: 'Прием дежурного врача',
  },
];

export const GenerateSidebarTabsData = (broneData: any) => {
  const popapData = [
    {
      id: 1,
      title: 'Заключительный прием лечащего врача',
      component: PatientDoctorTPContainer,
    },
    {
      id: 2,
      title: 'Консультация кардиолога первичная',
      component: PatientDoctorTPContainer,
    },
    {
      id: 3,
      title: 'Консультация невролога первичная',
      component: PatientDoctorTPContainer,
    },
    {
      id: 4,
      title: ' Осмотр дежурного врача при поступлении',
      component: PatientDoctorTPContainer,
    },
    {
      id: 5,
      title: 'Повторный приём лечащего врача',
      component: PatientDoctorTPContainer,
    },

    {
      id: 6,
      title: 'Прием дежурного врача',
      component: PatientDoctorTPContainer,
    },
    {
      id: 7,
      title: 'ЭКГ(Электрокардиограмма)',
      component: PatientDoctorTPContainer,
    },
  ];

  const broneDataTabs = broneData.map((broneItem: any) => {
    return {
      title: broneItem.name,
      component: popapData[broneItem?.id].component,
    };
  });

  const sidebarItemTabs: TabsItem[] = [
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
    ...broneDataTabs,
    {
      title: 'Консультации и повторные приемы',
      component: consultationTechniques,
      activBtnType: 'panel1',
      chiled: [
        {
          id: 0,
          title: 'Прием дежурного врача',
          link: '#frontPage',
        },
        {
          id: 1,
          title: 'Жалобы/анамнез',
        },
        {
          id: 2,
          title: 'Объективные данные',
        },
        {
          id: 3,
          title: 'Диагноз',
        },
        {
          id: 4,
          title: 'Заключение',
        },
        {
          id: 5,
          title: 'Назначения',
        },
      ],
    },

    {
      title: 'Основной лист назначений',
      component: mainAssignmentSheet,
      activBtnType: 'panel1',
      chiled: [
        {
          id: 0,
          title: 'Консультации и исследования',
        },
        {
          id: 1,
          title: 'Лечебные процедуры',
        },
      ],
    },
    {
      title: 'Сводная таблица исследований',
      component: researchSummaryTable,
    },
    {
      title: 'Первичный прием лечащего врача',
      component: InitialApportments,
    },
    {
      title: 'Повторный приём лечащего врача',
      component: RepeatedAppointment,
    },
    {
      title: 'Измеряемые параметры',
      component: measuredParameters,
      activBtnType: 'panel1',
      chiled: [
        {
          id: 0,
          title: 'Артериальное давление',
        },
        {
          id: 1,
          title: 'Глюкоза крови (глюкометр)',
        },
        {
          id: 3,
          title: 'Пульс',
        },
        {
          id: 4,
          title: 'Сатурация',
        },

        {
          id: 5,
          title: 'Температура',
        },
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

  return [...sidebarItemTabs];
};
