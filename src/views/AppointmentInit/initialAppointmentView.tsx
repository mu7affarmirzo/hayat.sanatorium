/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import AppointmentHeader from 'components/AppointmentHeader';
import DiagnostikaItem from 'components/DiagnostikaItem';
import { FormProvider } from 'react-hook-form';
import AppointmentsSection from '../../components/AppointmentActionSection/appointmentsSection';
import CardiovascularSystemSection from './components/cardiovascularSystem';
import ConclusionSection from './components/conclusionSection';
import DiagnosisSection from './components/diagnosisSection';
import DigestiveOrgansSection from './components/digestiveOrgans';
import EndocrineSystemSection from './components/endocrineSystem';
import EpidemiologicalHistorySection from './components/epidemiologicalHistory';
import MuscularSystemSection from './components/muscularSystemSection';
import NervousSystemSection from './components/nervousSystem';
import RespiratorySystemSection from './components/respiratorySystem';
import StatusPraesensSection from './components/statusPraesensSection';
import UrinarySystemSection from './components/urinarySystem';

import {
  AppointmentInitProvider,
  useAppAppointmentInitContext,
} from './module';

const Main = () => {
  const { methods, onSubmit, appointmentID, appointmentState } = useAppAppointmentInitContext();

  return (
    <Box>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="border border-[rgba(0, 0, 0, 0.23)] h-[calc(100vh-220px)]  p-[10px] overflow-hidden ">
          <AppointmentHeader
            appointmentState={appointmentState}
            methods={methods}
            doctor="Первичный прием лечащего врача, Admin"
            appointmentID={appointmentID as never}
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
