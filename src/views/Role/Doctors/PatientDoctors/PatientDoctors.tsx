import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TabsItem } from 'components/SideBar/SideBar';
import DoctorsViewTabs from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';
import { useReduxSelector } from 'hooks/useReduxHook';
import accounts from 'views/patients/accounts';
import addPatients from 'views/patients/addPatients';
import contactAndAccount from 'views/patients/contactAndAccount';
import doctorOnDuty from 'views/patients/doctorOnDuty';
import PatientFirst from 'views/patients/myPatient/myPatientTab';
import nurseOnDuty from 'views/patients/nurseOnDuty';
import searchPatient from 'views/patients/searchPatient';

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
