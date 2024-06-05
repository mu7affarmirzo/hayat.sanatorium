import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TabsItem } from 'components/sideBar/SideBar';
import MyPatientTab from 'views/patients/MyPatientTab';
import SearchPatientTab from 'views/patients/SearchPatientTab';
import AccountsTab from 'views/patients/AccountsTab';
import PatientViewTabs from 'components/Tabs/patientViewTabs/patientTabs';

//bu ham booked kabi boladi PatientTabsData ni hook orqali bervorib dynamik ravishda qoshib qoysaiz buladi //
const PatientTabsData: TabsItem[] = [
  {
    title: 'Мои пациенты',
    component: MyPatientTab,
  },
  {
    title: 'Счета',
    component: AccountsTab,
  },
  {
    title: 'Поиск пациентов',
    component: SearchPatientTab,
  },
];

const ReceptionPatientView = () => {
  return (
    <div className="w-[100%] h-full relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* siz bu yerda BroneViewTabsga bervorish kerak Doctorslar uchun dynamic ravishda qoshib uchirib boladigan boladi shunda  */}
        <PatientViewTabs content={PatientTabsData} />
      </LocalizationProvider>
    </div>
  );
};

export default ReceptionPatientView;
