import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TabsItem } from 'components/SideBar/SideBar';
import DoctorsViewTabs from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import { useReduxSelector } from 'hooks/useReduxHook';

import accounts from 'views/Patients/AccountsTab';
import addPatients from 'views/Patients/addPatients';
import contactAndAccount from 'views/Patients/contactAndAccount';
import doctorOnDuty from 'views/Patients/doctorOnDuty';
import PatientFirst from 'views/Patients/MyPatientTab/myPatientTab';
import nurseOnDuty from 'views/Patients/nurseOnDuty';
import searchPatient from 'views/Patients/SearchPatientTab';

const PatientDoctors = () => {
  //bu yerda doctors lardan olinishi kerak edi
  const { broneData } = useReduxSelector((dynamicTabs) => dynamicTabs?.booked);

  const broneDataTabs = broneData.map((broneItem) => {
    return {
      title: broneItem.name,
      component: addPatients,
    };
  });

  const content: TabsItem[] = [
    {
      title: 'Дежурный врач',
      component: doctorOnDuty,
    },
    {
      title: 'Дежурная медсестра',
      component: nurseOnDuty,
    },
    {
      title: 'Мои пациенты',
      component: PatientFirst,
    },
    {
      title: 'Счета',
      component: accounts,
    },
    {
      title: 'Договоры и счета',
      component: contactAndAccount,
    },
    {
      title: 'Поиск пациентов',
      component: searchPatient,
    },
    ...broneDataTabs,
  ];

  return (
    <div className="w-[100%] h-full relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DoctorsViewTabs content={content} />
      </LocalizationProvider>
    </div>
  );
};

export default PatientDoctors;
