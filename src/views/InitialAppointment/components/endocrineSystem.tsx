/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

const EndocrineSystemSection = () => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
      <SectionTitle
        title="Эндокринная система"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Щитовидная железа:"
        checkBoxStle={'w-[730px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="без изменений," />
            <DefaultCheckbox label="увеличена," />
            <DefaultCheckbox label="болезненна," />
            <DefaultCheckbox label="консистенция," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnostikaItem
        message=" "
        style="border-[0px] py-0 px-0"
        titleStyle="mb-[0px] text-[#5d5c5c]"
        messageStyle="min-h-[80px]"
      />
    </Box>
  );
};

export default EndocrineSystemSection;
