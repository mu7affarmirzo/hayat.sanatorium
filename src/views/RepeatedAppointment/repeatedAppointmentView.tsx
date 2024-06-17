import { Box } from '@mui/material';
import AppointmentsSections from 'components/AppointmentActionSection/appointmentsSection';
import AppointmentHeader from 'components/AppointmentHeader';
import TextareActionBox from 'components/TextareActionBox';
import { DiagnosisView } from 'features/Diagnosis';
import { UploadFileView } from 'features/UploadFile';
import { ObjectiveStatusSection } from './components/ObjectivDataSection';
import { RepeatedConclusionSectiont } from './components/RepeatedConclusionSection';
import {
  RepeatedAppointmentProvider,
  useRepeatedAppointmentContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentID } = useRepeatedAppointmentContext();

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Повторный приём лечащего врача, Admin"
          appointmentID={appointmentID}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <Box className="border p-[10px] flex flex-col mb-[10px]">
            <TextareActionBox title="Жалобы" isActions isDisabled />
          </Box>
          <ObjectiveStatusSection />
          <DiagnosisView />
          <RepeatedConclusionSectiont />
          <AppointmentsSections />
          <UploadFileView />
        </Box>
      </form>
    </Box>
  );
};

const RepeatedAppointmentView = () => {
  return (
    <RepeatedAppointmentProvider>
      <Main />
    </RepeatedAppointmentProvider>
  );
};

export default RepeatedAppointmentView;
