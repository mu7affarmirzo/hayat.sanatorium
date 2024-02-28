import PatientFirst from 'views/Patients/MyPatientTab/myPatientTab';
import { useReduxSelector } from 'hooks/useReduxHook';
import PatientDoctorsContainer from './PatientDoctorsContainer';
import SearchPatientTab from 'views/Patients/SearchPatientTab';
import { TabsItem } from 'components/SideBar/SideBar';

export const useDoctorsPatientHook = () => {
  const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs.booked);

  const broneDataTabs = broneData.map((broneItem) => {
    return {
      title: broneItem.name,
      component: PatientDoctorsContainer,
    };
  });

  const content: TabsItem[] = [
    {
      title: 'Мои пациенты',
      component: PatientFirst,
    },
    {
      title: 'Поиск пациентов',
      component: SearchPatientTab,
    },
    ...broneDataTabs,
  ];

  return {
    content,
  };
};
