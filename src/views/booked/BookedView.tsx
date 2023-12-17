import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BookingScreenTabs, { TabsItem } from 'components/bookingTabs';
import addMedicalHistory from './addMedicalHistory';
import booked from './booked';
const content: TabsItem[] = [
    {
        title: 'Забронированные',
        component: booked,
    },
    {
        title: 'Новая ИБ',
        component: addMedicalHistory,
    },
];
const BookedView = () => {
    return (
        <div className=" w-full  h-full  pt-3 px-3 relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <BookingScreenTabs content={content} />
            </LocalizationProvider>
        </div>
    );
};

export default BookedView;
