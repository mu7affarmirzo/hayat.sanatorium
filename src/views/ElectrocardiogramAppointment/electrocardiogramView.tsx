import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import { useElectrocardiogramAppointmentHook } from './hook';
import AppointmentsSections from 'components/AppointmentActionSection';
import { AppointmentConclusionView } from 'components/AppointmentConclusion/concclusionView';
import { DiagnosisView } from 'features/Diagnosis';
import DescriptionOfElectrocardiogramSection from './components/descriptionOfElectrocardiogram';

const ElectrocardiogramView = () => {
  const { appointmentStatus, handleChangeStatus } =
    useElectrocardiogramAppointmentHook();
  return (
    <Box>
      <form
        onSubmit={() => console.log('clickesd')}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="ECG (Electrocardiogram), Admin"
          appointmentStatus={appointmentStatus}
          setAppointmentStatus={handleChangeStatus}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <DescriptionOfElectrocardiogramSection />
          <DiagnosisView />
          <AppointmentConclusionView />
          <AppointmentsSections />
        </Box>
      </form>
    </Box>
  );
};

export default ElectrocardiogramView;
