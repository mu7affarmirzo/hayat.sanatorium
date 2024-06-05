import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useRecaptionContainerHook } from './hook';
import DoctorsViewTabs from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';

const BookedReceptionView = () => {
  const { dynamicContent } = useRecaptionContainerHook();
  return (
    <div className=" w-full  h-full  relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DoctorsViewTabs content={dynamicContent} />
      </LocalizationProvider>
    </div>
  );
};

export default BookedReceptionView;
