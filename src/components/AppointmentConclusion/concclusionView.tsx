/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import ReuseAbleRadioButtonGroup from 'components/ReuseableRadioButtonGroup/reuseableRadiuBtnGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
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
        {/* <DefaultCheckbox label="Показан" />
        <DefaultCheckbox label="Не показан" />
        <DefaultCheckbox label="Противопоказан" /> */}
        <ReuseAbleRadioButtonGroup options={options} />
      </Box>
      <SectionTitle title="Заключение:" className="text-base font-medium" />
      <DiagnostikaItem
        message=" "
        style="border-[0px] py-0 px-0"
        titleStyle="mb-[0px] text-[#5d5c5c]"
        messageStyle="min-h-[80px]"
      />
    </Box>
  );
};
