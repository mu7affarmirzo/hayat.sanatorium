import { Box } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox';
import TextareActionBox from 'components/TextareActionBox';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useFinalAppointmentContext } from '../module';
import ReuseableRadioButtonGroup from 'components/ReuseableRadioButtonGroup';
import { DiagnosisView } from 'features/Diagnosis';
import { UploadFileView } from 'features/UploadFile';

const options = [
  {
    label: 'Улучение',
    value: 'improvement',
  },
  {
    label: 'Без изменения',
    value: 'no_changes',
  },
  {
    label: 'Ухудшение',
    value: 'deterioration',
  },
];

export const TreatmentResultsSectiont = () => {
  const { methods } = useFinalAppointmentContext();

  return (
    <AppointmentSectionContainer boxTitle="Итоги лечения, рекомендации по дальнейшему лечению">
      <TextareActionBox isActions isDisabled />
      <Box className="border border-[#a2a2a2af] p-[10px] flex flex-col my-[10px] rounded ">
        <AppoinmentItemTitle
          title="Результат лечения:"
          taxtStyle="font-semibold"
        />

        <ReuseableRadioButtonGroup
          methods={methods}
          name="treatment_results"
          options={options}
        />
      </Box>
      <DiagnosisView />
      <UploadFileView />
    </AppointmentSectionContainer>
  );
};
