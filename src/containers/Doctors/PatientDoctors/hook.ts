import { TopTabsItemType } from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import { useReduxSelector } from 'hooks/useReduxHook';
import PatientDoctorsContainer from './PatientDoctorsContainer';
import MyPatientsDoc from './Tabs/MyPatientsDoc';
import SearchMyPatientDoc from './Tabs/SearchMyPatientDoc';

export const useDoctorsPatientHook = () => {
  const { data: dynamicTabsData } = useReduxSelector(
    (state) => state.selectedPatients,
  );

  const broneDataTabs: TopTabsItemType[] = dynamicTabsData.map((item) => ({
    title: item.name,
    component: PatientDoctorsContainer,
    isRemove: true,
    isUserIcon: true,
  }));

  const staticTabs: TopTabsItemType[] = [
    {
      title: 'Мои пациенты',
      component: MyPatientsDoc,
      isRemove: false,
      isUserIcon: false,
    },
    {
      title: 'Поиск пациентов',
      component: SearchMyPatientDoc,
      isRemove: false,
      isUserIcon: false,
    },
  ];

  const content: TopTabsItemType[] = [...staticTabs, ...broneDataTabs];

  return {
    content,
  };
};
