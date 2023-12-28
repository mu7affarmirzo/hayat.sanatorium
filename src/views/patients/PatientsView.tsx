import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BookingScreenTabs, { TabsItem } from 'components/bookingTabs';
import accounts from './accounts';
import addPatients from './addPatients';
import contactAndAccount from './contactAndAccount';
import doctorOnDuty from './doctorOnDuty';
import nurseOnDuty from './nurseOnDuty';
import PatientFirst from './patientFirst/PatientFirst';
import searchPatient from './searchPatient';

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
    {
        title: '919/2022 Холматов У.',
        component: addPatients,
    },
];

const PatientsView = () => {
    return (
        <div className=" w-full  h-full  relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BookingScreenTabs content={content} />
            </LocalizationProvider>
        </div>
    );
};

export default PatientsView;
