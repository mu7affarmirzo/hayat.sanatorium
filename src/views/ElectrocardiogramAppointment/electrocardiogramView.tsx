import { Box } from '@mui/material';
import AppointmentsSections from 'components/AppointmentActionSection';
import { AppointmentConclusionView } from 'components/AppointmentConclusion/concclusionView';
import AppointmentHeader from 'components/AppointmentHeader';
import { DiagnosisView } from 'features/Diagnosis';
import DescriptionOfElectrocardiogramSection from './components/descriptionOfElectrocardiogram';
import {
  ElectrocardiogramAppointmentProvider,
  useElectrocardiogramAppointmentContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentID, appointmentState } =
    useElectrocardiogramAppointmentContext();
  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          methods={methods}
          appointmentState={appointmentState}
          doctor="ECG (Electrocardiogram), Admin"
          appointmentID={appointmentID as never}
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

const ElectrocardiogramView = () => (
  <ElectrocardiogramAppointmentProvider>
    <Main />
  </ElectrocardiogramAppointmentProvider>
);

export default ElectrocardiogramView;
