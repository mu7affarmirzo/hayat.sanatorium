import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import { OpjectiveStatusSection } from './components/ObjectiveStatusSection';
import { TreatmentResultsSectiont } from './components/TreatmentResultsSection';
import { FinalAppointmentProvider, useFinalAppointmentContext } from './module';

const Main = () => {
  const { appointmentID, methods, onSubmit, finalData } =
    useFinalAppointmentContext();

  console.log('FinalAppointmentView', finalData);

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Заключительный прием лечащего врача, Admin"
          appointmentID={appointmentID as never}
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
