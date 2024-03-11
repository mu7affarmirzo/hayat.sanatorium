/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

const MuscularSystemSection = () => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
      <SectionTitle
        title="Конно—мышечная система"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Деформации:"
        checkBoxStle={'w-[210px]'}
        children={<DefaultCheckbox label="нет" />}
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Контрактуры:"
        checkBoxStle={'w-[210px]'}
        children={<DefaultCheckbox label="нет," />}
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Ограничения движений:"
        checkBoxStle={'w-[280px]'}
        children={<DefaultCheckbox label="нет," />}
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
    </Box>
  );
};

export default MuscularSystemSection;
