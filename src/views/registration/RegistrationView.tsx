import BookingScreenTabs, { TabsItem } from 'components/bookingTabs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import searchPatients from 'views/registration/searchPatients';
import { LocalizationProvider } from '@mui/x-date-pickers';
import booked from './booked';
import addMedicalHistory from './addMedicalHistory';
const content: TabsItem[] = [
    // {
    //     title: 'Поиск пациентов',
    //     component: searchPatients,
    // },
    {
        title: 'Забронированные',
        component: booked,
    },
    {
        title: 'Новая ИБ',
        component: addMedicalHistory,
    },
];
const RegistrationView = () => {
    return (
        <div className=" w-full  h-full  pt-3 px-3 relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BookingScreenTabs content={content} />
            </LocalizationProvider>
        </div>
    );
};

export default RegistrationView;
