/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
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

import {
  AppointmentInitProvider,
  useAppAppointmentInitContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentStatus, handleChangeStatus } =
    useAppAppointmentInitContext();

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
          <Box className="bg-[#fff] w-full p-[8px] overflow-scroll max-h-[calc(100vh-300px)] h-[calc(100vh-300px)] pb-10">
            <DiagnostikaItem title="Жалобы/анамнез" />
            <DiagnostikaItem title="Anamnesis morbi" />
            <DiagnostikaItem title="Anamnesis vitae" />

            <EpidemiologicalHistorySection />

            <StatusPraesensSection />

            <MuscularSystemSection formMethods={methods} />

            <RespiratorySystemSection formMethods={methods} />

            <CardiovascularSystemSection formMethods={methods} />

            <DigestiveOrgansSection formMethods={methods} />

            <UrinarySystemSection formMethods={methods} />

            <EndocrineSystemSection formMethods={methods} />

            <NervousSystemSection />

            <DiagnosisSection />

            <ConclusionSection />

            <AppointmentsSection />
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

const InitialAppointmentView = () => (
  <AppointmentInitProvider>
    <Main />
  </AppointmentInitProvider>
);

export default InitialAppointmentView;
