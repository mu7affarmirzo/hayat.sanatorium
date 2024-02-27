import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import BroneViewTabs from 'components/Tabs/BookedPageTabs/bookedTabs';
import { useDoctorsContainerHook } from './hook';

const BookedDoctorsView = () => {
  const { dynamicContent } = useDoctorsContainerHook();
  return (
    <div className="w-[100%] h-full relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BroneViewTabs content={dynamicContent} />
      </LocalizationProvider>
    </div>
  );
};

export default BookedDoctorsView;
