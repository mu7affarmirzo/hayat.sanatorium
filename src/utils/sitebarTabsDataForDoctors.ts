import { TabsItem } from 'components/sideBar/SideBar';
import PatientDoctorTPContainer from 'containers/Doctors/PatientDoctors/PatientDoctorTPContainer';
import { useMemo } from 'react';
import TreatmentSchedule from 'views/TreatmentSchedule';
import changelog from 'views/booked/changelog';
import consultationTechniques from 'views/booked/consultationTechniques';
import invoicesDocuments from 'views/booked/invoicesDocuments';
import mainAssignmentSheet from 'views/MainAssigmentSheet';
import measuredParameters from 'views/booked/measuredParameters';
import nutrition from 'views/booked/nutrition';
import researchSummaryTable from 'views/booked/researchSummaryTable';
import { anotherPopopData } from './doctors/dynamicSitebarItems';

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
  const dynamicSidebarItemTabs = useMemo(() => {
    const newList = [...broneData];
    return [
      ...newList.map((key: any) => ({
        title: key.title,
        component: (anotherPopopData as { [key: string]: any })[
          key.title as string
        ],
        hiled: anotherPopopData[key.title as string]?.chiled || [],
      })),
    ];
  }, [broneData]);

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
    ...dynamicSidebarItemTabs,
    {
      title: 'Консультации и повторные приемы, приемы',
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
