/* eslint-disable react/style-prop-object */
import { Box, Button } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import useInitialAppointmentForm from './hook';
import EpidemiologicalHistorySection from './components/epidemiologicalHistory';
import RespiratorySystemSection from './components/respiratorySystem';
import CardiovascularSystemSection from './components/cardiovascularSystem';
import DigestiveOrgansSection from './components/digestiveOrgans';
import UrinarySystemSection from './components/urinarySystem';
import EndocrineSystemSection from './components/endocrineSystem';
import NervousSystemSection from './components/nervousSystem';
import DiagnosisSection from './components/diagnosisSection';
import ConclusionSection from './components/conclusionSection';
import AppointmentsSection from '../../components/AppointmentActionSection/appointmentsSection';
import StatusPraesensSection from './components/statusPraesensSection';
import MuscularSystemSection from './components/muscularSystemSection';
import { FormProvider } from 'react-hook-form';
import AppointmentHeader from 'components/AppointmentHeader';

const IntialApportmentView = () => {
  const { methods, onSubmit, appointmentStatus, handleChangeStatus } =
    useInitialAppointmentForm();

  return (
    <Box>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
          <AppointmentHeader
            doctor="Первичный прием лечащего врача, Admin"
            appointmentStatus={appointmentStatus}
            setAppointmentStatus={handleChangeStatus}
          />
          <Box className="bg-[#fff] w-full p-[8px] overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)]">
            <DiagnostikaItem title="Жалобы/анамнез" />
            <DiagnostikaItem title="Anamnesis morbi" />
            <DiagnostikaItem title="Anamnesis vitae" />

            <EpidemiologicalHistorySection formMethods={methods} />

            <StatusPraesensSection formMethods={methods} />

            <MuscularSystemSection formMethods={methods} />

            <RespiratorySystemSection formMethods={methods} />

            <CardiovascularSystemSection formMethods={methods} />

            <DigestiveOrgansSection formMethods={methods} />

            <UrinarySystemSection formMethods={methods} />

            <EndocrineSystemSection formMethods={methods} />

            <NervousSystemSection />

            <DiagnosisSection />

            <ConclusionSection />
            <Button type="submit" variant="contained" className="my-2">
              Submit
            </Button>
            <AppointmentsSection />
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default IntialApportmentView;
