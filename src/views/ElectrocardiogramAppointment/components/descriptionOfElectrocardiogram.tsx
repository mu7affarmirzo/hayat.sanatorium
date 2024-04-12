import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import TextareActionBoxView from 'components/TextareActionBox';
import DiagnosticCeckboxItem from 'components/AutocomplateCategoryBox/AutocomplateCategoryBoxView';

const DescriptionOfElectrocardiogramSection = () => {
  return (
    <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
      <SectionTitle
        title="Описание электрокардиограммы"
        className="text-base font-bold font-roboto"
      />
      <DiagnosticCeckboxItem label="Зубец Р:" description=" " />
      <DiagnosticCeckboxItem label="Комплекс QRS:" description=" " />
      <DiagnosticCeckboxItem label="Зубец Т:" description=" " />
      <DiagnosticCeckboxItem label="Сегмент S-Т:" description=" " />
      <TextareActionBoxView isActions={true} title="example" />
    </Box>
  );
};

export default DescriptionOfElectrocardiogramSection;
