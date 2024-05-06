import SideBar from 'components/sideBar/SideBar';
import DiseaseHistoryTopTabs from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import { useReduxSelector } from 'hooks/useReduxHook';
import { GenerateSidebarTabsData } from 'utils/sitebarTabsDataForDoctors';

const PatientDoctorsContainer = () => {
  const { dynamicSidebarItems } = useReduxSelector(
    (dynamicTabs) => dynamicTabs.dynamicSidebarItems,
  );

  const sidebarItemTabsData = GenerateSidebarTabsData(dynamicSidebarItems);

  return (
    <div className="overflow-hidden relative max-h-[calc(100vh-142px)] bg-red-400 ">
      <DiseaseHistoryTopTabs />
      <div className="overflow-hidden relative max-h-[calc(100vh-150px)] bg-[#f5f5f5]">
        <SideBar content={sidebarItemTabsData} />
      </div>
    </div>
  );
};

export default PatientDoctorsContainer;
