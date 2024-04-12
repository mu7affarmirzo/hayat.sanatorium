import { Box, Typography } from '@mui/material';
import ReuseAbleRadioButtonGroup from 'components/ReuseableRadioButtonGroup/reuseableRadiuBtnGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';

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

export const AppointmentConclusionView = () => {
  return (
    <Box className="border w-full p-[10px] mt-[10px]">
      <SectionTitle title="Заключение" className="text-base font-medium" />
      <DefaultCheckbox label="Cito!" />
      <Box className="flex flex-row items-center justify-start">
        <Typography className="text-sm mr-2">
          Для санаторно-курортного лечения:
        </Typography>
        <ReuseAbleRadioButtonGroup options={options} />
      </Box>
      <TextareActionBoxView isActions title="Заключение:" />
    </Box>
  );
};
