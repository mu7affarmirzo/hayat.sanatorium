import { useReduxSelector } from 'hooks/useReduxHook';
import PatientDoctorsContainer from './PatientDoctorsContainer';
import { TopTabsItemType } from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import MyPatientsDoc from './Tabs/MyPatientsDoc';
import SearchMyPatientDoc from './Tabs/SearchMyPatientDoc';

export const useDoctorsPatientHook = () => {
  const { data: dynamicTabsData } = useReduxSelector(
    (state) => state.dynamicTopTabs,
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
