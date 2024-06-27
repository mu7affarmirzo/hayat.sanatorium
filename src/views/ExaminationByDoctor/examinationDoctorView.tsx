import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import { ArrivalSection } from './components/ArrivalSection';
import { DieateAndModeSection } from './components/DieateAndModeSection';
import { EpidemiologicalHistorySection } from './components/EpidemiologicalHistorySection';
import { ObjectiveDataSection } from './components/ObjectiveDataSection';
import { SpecialMarksSection } from './components/SpecialMarksSection';
import {
  ExaminationbyDoctorProvider,
  useExaminationByDoctorContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentState } = useExaminationByDoctorContext();

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          methods={methods}
          appointmentState={appointmentState}
          doctor="Осмотр дежурного врача при поступлении, Admin"
          appointmentID={1}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <ArrivalSection />
          <EpidemiologicalHistorySection />
          <SpecialMarksSection />
          <ObjectiveDataSection />
          <DieateAndModeSection />
        </Box>
      </form>
    </Box>
  );
};

const ExaminationDoctorView = () => {
  return (
    <ExaminationbyDoctorProvider>
      <Main />
    </ExaminationbyDoctorProvider>
  );
};

export default ExaminationDoctorView;
