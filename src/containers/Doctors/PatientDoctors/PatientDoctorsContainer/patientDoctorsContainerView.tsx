import SideBar from 'components/sideBar/SideBar';
import DiseaseHistoryTopTabs from 'views/DiseaseHistoryActionTabs/diseaseHistoryTabs';
import { useReduxSelector } from 'hooks/useReduxHook';
import {
  GenerateSidebarTabsData,
  selectData,
  selectData2,
} from 'utils/sitebarTabsDataForDoctors';

const PatientDoctorsContainer = () => {
  const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs.patients);

  const sidebarItemTabsData = GenerateSidebarTabsData(broneData);

  return (
    <div className="overflow-hidden relative max-h-[calc(100vh-142px)]  ">
      <DiseaseHistoryTopTabs
        selectData={selectData}
        selectData2={selectData2}
      />
      <div className="overflow-hidden relative max-h-[calc(100vh-150px)] bg-[#f5f5f5]">
        <SideBar content={sidebarItemTabsData} />
      </div>
    </div>
  );
};

export default PatientDoctorsContainer;
