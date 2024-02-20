import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TabsItem } from 'components/SideBar/SideBar';
import PatientViewTabs from 'components/Tabs/patientViewTabs/patientTabs';
import SearchPatiant from 'views/patients/searchPatient/SearchPatiant';
import accounts from 'views/patients/accounts';
import PatientFirst from 'views/patients/myPatient/myPatientTab';

const PatientTabsData: TabsItem[] = [
  {
    title: 'Мои пациенты',
    component: PatientFirst,
  },
  {
    title: 'Счета',
    component: accounts,
  },
  {
    title: 'Поиск пациентов',
    component: SearchPatiant,
  },
];

const ReceptionPatientView = () => {
  return (
    <div className="w-[100%] h-full relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <PatientViewTabs content={PatientTabsData} />
      </LocalizationProvider>
    </div>
  );
};

export default ReceptionPatientView;
