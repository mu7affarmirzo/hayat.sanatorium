import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Booked from 'views/booked';

const BookedDoctorsView = () => {
    return (
        <div className="w-[100%] h-full relative">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Booked />
            </LocalizationProvider>
        </div>
    );
};

export default BookedDoctorsView;
