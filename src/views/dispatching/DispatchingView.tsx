import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BookingScreenTabs, { TabsItem } from 'components/bookingTabs';
import frontPage from './frontPage';
import myPatients from './myPatients';
const content: TabsItem[] = [
    {
        title: 'Мои пациенты',
        component: myPatients,
    },
    {
        title: 'Титульная страница',
        component: frontPage,
    },
];
const DispatchingView = () => {
    return (
        <div className=" w-full  h-full  relative">
            <BookingScreenTabs content={content} />
        </div>
    );
};

export default DispatchingView;
