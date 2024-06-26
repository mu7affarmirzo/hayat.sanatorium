import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import { ArrivalSection } from './components/ArrivalSection';
import { EpidemiologicalHistorySection } from './components/EpidemiologicalHistorySection';
import { SpecialMarksSection } from './components/SpecialMarksSection';
import { ObjectiveDataSection } from './components/ObjectiveDataSection';
import { DieateAndModeSection } from './components/DieateAndModeSection';
import {
  useExaminationByDoctorContext,
  ExaminationbyDoctorProvider,
} from './module';

const Main = () => {
  const { appointmentStatus, handleChangeStatus, methods, onSubmit } =
    useExaminationByDoctorContext();

  return (
    <Box>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Осмотр дежурного врача при поступлении, Admin"
          appointmentStatus={appointmentStatus}
          setAppointmentStatus={handleChangeStatus}
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
