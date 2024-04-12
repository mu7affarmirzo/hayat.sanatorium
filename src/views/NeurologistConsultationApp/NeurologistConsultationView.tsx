import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import { useNeurologistAppoinmnetHook } from './hook';
import AppointmentsSections from 'components/AppointmentActionSection';
import { AppointmentConclusionView } from 'components/AppointmentConclusion/concclusionView';
import DiagnostikaItem from 'components/DiagnostikaItem';
import { DiagnosisView } from 'features/Diagnosis';
import { GetCategoryTextareField } from 'components/GetCategoryTextareField/CategoryTextareFieldView';
import NeurologistStatusSection from './components/neurologistStateusSection';
import { NeurologistAppointmentProvider } from './module';

const Main = () => {
  const { appointmentStatus, handleChangeStatus, onSubmit, methods } =
    useNeurologistAppoinmnetHook();
  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Консультация невролога
          первичная, Admin"
          appointmentStatus={appointmentStatus}
          setAppointmentStatus={handleChangeStatus}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <DiagnostikaItem title="Жалобы" />
          <GetCategoryTextareField title="Жалобы" isActions={true} />
          <DiagnostikaItem title="Анамнез заболевания" />
          <NeurologistStatusSection />
          <DiagnosisView />
          <AppointmentConclusionView />
          <AppointmentsSections />
        </Box>
      </form>
    </Box>
  );
};

const NeurologistConsultationView = () => (
  <NeurologistAppointmentProvider>
    <Main />
  </NeurologistAppointmentProvider>
);

export default NeurologistConsultationView;
