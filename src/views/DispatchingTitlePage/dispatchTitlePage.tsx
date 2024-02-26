/* eslint-disable react/style-prop-object */
import treatmentSchedule from '../TreatmentSchedule';
import SideBar, { TabsItem } from 'components/SideBar/SideBar';
import researchSummaryTable from '../booked/researchSummaryTable';
import DisTitlePageTab from 'views/DisTitlePageTab';
import HydroBaths from 'views/Dispatching/Saidbar/hydroBaths/HydroBaths';
import Appointments from 'views/Dispatching/Saidbar/Appointments/appointments';

const content: TabsItem[] = [
  {
    title: 'Титульная страница',
    component: DisTitlePageTab,
    activBtnType: 'panel1',
  },
  {
    title: 'Расписание лечения',
    component: treatmentSchedule,
  },
  {
    title: 'Автоматическая диспетчеризация',
    component: researchSummaryTable,
  },

  {
    title: 'Назначения',
    component: Appointments,
    chiled: [
      {
        id: 0,
        title: 'Диагнозы',
        data: [
          {
            id: 1,
            title: 'Гидрованны',
            component: Appointments,
            link: '/#frontPage',
          },
          {
            id: 2,
            title: 'Гидроколонотерапия (орошение кишечника)',
            component: HydroBaths,
            link: '/#frontPage',
          },
        ],
      },
    ],
    search: true,
  },
];

const DispatchingTitleContainer = () => {
  return (
    <div className=" overflow-hidden relative max-h-[calc(100vh-142px)] ">
      <div className="overflow-hidden relative max-h-[calc(100vh-50px)] bg-[#f5f5f5]">
        <SideBar content={content} />
      </div>
    </div>
  );
};

export default DispatchingTitleContainer;
