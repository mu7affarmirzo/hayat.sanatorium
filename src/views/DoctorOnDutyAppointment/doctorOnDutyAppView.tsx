import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import DiagnostikaItem from 'components/DiagnostikaItem';
import { DiagnosisView } from 'features/Diagnosis';
import { AppointmentConclusionView } from 'components/AppointmentConclusion/concclusionView';
import AppointmentsSections from 'components/AppointmentActionSection/appointmentsSection';
import { useDoctorOnDutyAppointmentHook } from './hook';

const DoctorOnDutyAppointment = () => {
  const { appointmentStatus, handleChangeStatus, handlePostAppointment } =
    useDoctorOnDutyAppointmentHook();

  return (
    <Box>
      <form className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
        <AppointmentHeader
          doctor="Прием дежурного врача, Admin"
          appointmentStatus={appointmentStatus}
          setAppointmentStatus={handleChangeStatus}
          onClick={handlePostAppointment}
        />
        <Box className="bg-[#fff] w-full p-[8px] pb-10 overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
          <DiagnostikaItem title="Жалобы/анамнез" />
          <DiagnostikaItem title="Объективные данные" />
          <DiagnosisView />
          <AppointmentConclusionView />
          <AppointmentsSections />
        </Box>
      </form>
    </Box>
  );
};

export default DoctorOnDutyAppointment;
