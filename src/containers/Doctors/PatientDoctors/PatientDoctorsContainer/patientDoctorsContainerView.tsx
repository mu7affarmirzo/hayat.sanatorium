// import SideBar from 'components/sideBar/SideBar';
import DiseaseHistoryTopTabs from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import { useReduxSelector } from 'hooks/useReduxHook';
import { GenerateSidebarTabsData } from 'utils/sitebarTabsDataForDoctors';
import { SidebarDoctors } from 'components/sideBar/DocrotsSectionSidebar/SidebarDoctors';

const PatientDoctorsContainer = () => {
  const { appointments } = useReduxSelector((state) => state.appointments);

  const sidebarItemTabsData = GenerateSidebarTabsData(appointments);

  return (
    <div className="overflow-hidden relative max-h-[calc(100vh-142px)] bg-red-400 ">
      <DiseaseHistoryTopTabs />
      <div className="overflow-hidden relative max-h-[calc(100vh-150px)] bg-[#f5f5f5]">
        <SidebarDoctors content={sidebarItemTabsData} />
      </div>
    </div>
  );
};

export default PatientDoctorsContainer;
