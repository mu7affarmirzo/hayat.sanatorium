import SideBar, { TabsItem } from 'components/SideBar/SideBar';
import DiseaseHistoryTopTabs from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import TreatmentSchedule from 'views/TreatmentSchedule';
import changelog from 'views/booked/changelog';
import consultationTechniques from 'views/booked/consultationTechniques';
import invoicesDocuments from 'views/booked/invoicesDocuments';
import mainAssignmentSheet from 'views/booked/mainAssignmentSheet';
import measuredParameters from 'views/booked/measuredParameters';
import nutrition from 'views/booked/nutrition';
import researchSummaryTable from 'views/booked/researchSummaryTable';
import BookedTitlePageContainer from '../BookedTitlePageContainer';

const selectData = [
  {
    id: 0,
    title: 'Начало приёма',
  },
  {
    id: 1,
    title: 'Начало приём2',
  },
];

const selectData2 = [
  {
    id: 0,
    title: 'Осмотр дежурного врача при поступлении',
  },
  {
    id: 1,
    title: 'Прием дежурного врача',
  },
];

const sidebarItemTabs: TabsItem[] = [
  {
    title: 'Титульная страница',
    component: BookedTitlePageContainer,
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

const BookedReceptionContainer = () => {
  return (
    <div className="overflow-hidden relative max-h-[calc(100vh-142px)]">
      <DiseaseHistoryTopTabs
        selectData={selectData}
        selectData2={selectData2}
      />
      <div className="overflow-hidden relative max-h-[calc(100vh-150px)] bg-[#F5F5F5]">
        <SideBar content={sidebarItemTabs} />
      </div>
    </div>
  );
};

export default BookedReceptionContainer;
