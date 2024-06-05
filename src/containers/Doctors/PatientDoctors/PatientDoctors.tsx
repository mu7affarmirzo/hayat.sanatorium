import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DoctorsViewTabs from 'components/Tabs/doctorsViewTabs/doctorsViewTabs';

import { useDoctorsPatientHook } from './hook';

const PatientDoctors = () => {
  const { content } = useDoctorsPatientHook();

  return (
    <div className="w-[100%] h-full relative">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DoctorsViewTabs content={content} />
      </LocalizationProvider>
    </div>
  );
};

export default PatientDoctors;
