import { Box } from '@mui/material';
import AppointmentsSections from 'components/AppointmentActionSection/appointmentsSection';
import { AppointmentConclusionView } from 'components/AppointmentConclusion/concclusionView';
import AppointmentHeader from 'components/AppointmentHeader';
import DiagnostikaItem from 'components/DiagnostikaItem';
import { DiagnosisView } from 'features/Diagnosis';
import { ObjectiveStatusSection } from './components/ObjectiveStatusSection';
import {
  DoctorOnDutyAppointmentProvider,
  useDoctorOnDutyAppointmentContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentID } =
    useDoctorOnDutyAppointmentContext();

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Прием дежурного врача, Admin"
          appointmentID={appointmentID as never}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <DiagnostikaItem title="Жалобы/анамнез" />
          <ObjectiveStatusSection />
          <DiagnosisView />
          <AppointmentConclusionView />
          <AppointmentsSections />
        </Box>
      </form>
    </Box>
  );
};

const DoctorOnDutyAppointment = () => {
  return (
    <DoctorOnDutyAppointmentProvider>
      <Main />
    </DoctorOnDutyAppointmentProvider>
  );
};

export default DoctorOnDutyAppointment;
