import { Box, Typography } from '@mui/material';
import ReuseAbleRadioButtonGroup from 'components/ReuseableRadioButtonGroup/reuseableRadiuBtnGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { NewDefaultCheckbox } from 'components/checkbox/NewDefaultCheckbox';
import { useDoctorOnDutyAppointmentContext } from '../module';

const options = [
  {
    label: 'Показан',
    value: 'shown',
  },
  {
    label: 'Не показан',
    value: 'notShown',
  },
  {
    label: 'Противопоказан',
    value: 'contraindicated',
  },
];

export const DocDutyConclusionSectiont = () => {
  const { methods } = useDoctorOnDutyAppointmentContext();
  return (
    <Box className="border w-full p-[10px] mt-[10px]">
      <SectionTitle title="Заключение" className="text-base font-medium" />
      <NewDefaultCheckbox methods={methods} name={'cito'} label="Cito" />
      <Box className="flex flex-row items-center justify-start">
        <Typography className="text-sm mr-2">
          Для санаторно-курортного лечения:
        </Typography>
        <ReuseAbleRadioButtonGroup
          options={options}
          methods={methods}
          name={'summary'}
        />
      </Box>
      <TextareActionBoxView isActions title="Заключение:" />
    </Box>
  );
};
