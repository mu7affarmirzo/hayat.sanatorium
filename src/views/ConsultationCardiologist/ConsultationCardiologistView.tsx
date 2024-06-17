import { Box } from '@mui/material';
import AppointmentsSections from 'components/AppointmentActionSection/appointmentsSection';
import AppointmentHeader from 'components/AppointmentHeader';
import { GetCategoryTextareField } from 'components/GetCategoryTextareField/CategoryTextareFieldView';
import { DiagnosisView } from 'features/Diagnosis';
import { CardiologistConclusionSection } from './components/CardiologistConclusionSection';
import { CardiovascularSection } from './components/CardiovascularSection';
import { ObjectiveResearchSection } from './components/ObjectiveResearchSection.';
import { RespiratorySection } from './components/RespiratorySection';
import {
  CardiologistAppointmentProvider,
  useCardiologistAppoinmnetContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentID } =
    useCardiologistAppoinmnetContext();

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Консультация кардиолога первичная, Admin"
          appointmentID={appointmentID as never}
        />

        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <GetCategoryTextareField title="Жалобы" isActions={true} />

          <GetCategoryTextareField
            title="История заболевания"
            isActions={true}
          />

          <GetCategoryTextareField title="Наследственность" isActions={true} />

          <ObjectiveResearchSection />

          <CardiovascularSection />

          <RespiratorySection />

          <DiagnosisView />

          <CardiologistConclusionSection />

          <AppointmentsSections />
        </Box>
      </form>
    </Box>
  );
};

const ConsultationCardiologistView = () => (
  <CardiologistAppointmentProvider>
    <Main />
  </CardiologistAppointmentProvider>
);

export default ConsultationCardiologistView;
