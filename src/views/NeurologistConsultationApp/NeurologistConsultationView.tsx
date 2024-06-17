import { Box } from '@mui/material';
import AppointmentsSections from 'components/AppointmentActionSection';
import AppointmentHeader from 'components/AppointmentHeader';
import DiagnostikaItem from 'components/DiagnostikaItem';
import { GetCategoryTextareField } from 'components/GetCategoryTextareField/CategoryTextareFieldView';
import { DiagnosisView } from 'features/Diagnosis';
import { NeurologistConsultationSection } from './components/neurologistConculsionSection';
import NeurologistStatusSection from './components/neurologistStateusSection';
import {
  NeurologistAppointmentProvider,
  useNeurologistAppoinmnetContext,
} from './module';

const Main = () => {
  const { onSubmit, methods, appointmentID } =
    useNeurologistAppoinmnetContext();
  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] max-h-[calc(100vh-220px)] h-full  p-[10px] pt-0 overflow-auto relative">
        <AppointmentHeader
          doctor="Консультация невролога
          первичная, Admin"
          appointmentID={appointmentID}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-max h-full">
          <DiagnostikaItem title="Жалобы" />
          <GetCategoryTextareField title="Жалобы" isActions={true} />
          <DiagnostikaItem title="Анамнез заболевания" />
          <NeurologistStatusSection />
          <DiagnosisView />
          <NeurologistConsultationSection />
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
