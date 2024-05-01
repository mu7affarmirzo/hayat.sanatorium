import { Box } from '@mui/material';
import { FinalAppointmentProvider, useFinalAppointmentContext } from './module';
import AppointmentHeader from 'components/AppointmentHeader';
import { OpjectiveStatusSection } from './components/ObjectiveStatusSection';
import { TreatmentResultsSectiont } from './components/TreatmentResultsSection';

const Main = () => {
  const { appointmentStatus, handleChangeStatus, methods, onSubmit } =
    useFinalAppointmentContext();

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Заключительный прием лечащего врача, Admin"
          setAppointmentStatus={handleChangeStatus}
          appointmentStatus={appointmentStatus}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <OpjectiveStatusSection />
          <TreatmentResultsSectiont />
        </Box>
      </form>
    </Box>
  );
};

const FinalAppointmentView = () => {
  return (
    <FinalAppointmentProvider>
      <Main />
    </FinalAppointmentProvider>
  );
};

export default FinalAppointmentView;
