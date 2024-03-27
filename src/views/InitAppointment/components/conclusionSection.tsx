/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';

const ConclusionSection = () => {
  return (
    <Box className="border w-full p-[10px] mt-[10px]">
      <SectionTitle title="Заключение" className="text-base font-medium" />
      <DefaultCheckbox label="Cito!" />
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

export default ConclusionSection;
