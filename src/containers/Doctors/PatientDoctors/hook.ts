import { useReduxSelector } from 'hooks/useReduxHook';
import PatientFirst from 'views/patients/MyPatientTab/myPatientTab';
import PatientDoctorsContainer from './PatientDoctorsContainer';
import SearchPatientTab from 'views/patients/SearchPatientTab';
import { TopTabsItemType } from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';

export const useDoctorsPatientHook = () => {
  const { broneData: dynamicTabsData } = useReduxSelector(
    (dynamicTabs) => dynamicTabs.booked,
  );

  const broneDataTabs = dynamicTabsData.map((broneItem, index) => ({
    title: broneItem.name,
    component: PatientDoctorsContainer,
    isRemove: true,
    isUserIcon: true,
  }));

  const content: TopTabsItemType[] = [
    {
      title: 'Мои пациенты',
      component: PatientFirst,
      isRemove: false,
      isUserIcon: false,
    },
    {
      title: 'Поиск пациентов',
      component: SearchPatientTab,
      isRemove: false,
      isUserIcon: false,
    },
    ...broneDataTabs,
  ];

  return {
    content,
  };
};
