/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

const RespiratorySystemSection = () => {
  return (
    <Box className="border w-full px-[10px] py-[10px] mt-[10px] ">
      <SectionTitle
        title="Дыхательная система"
        className="text-base font-medium"
      />
      <Box className=" flex gap-2 items-center">
        <Typography className=" text-[14px]  font-normal text-[#000]">
          ЧДД
        </Typography>
        <OutlinedInput
          sx={{ height: '35px', width: '60px' }}
          className="mx-2"
        />
        <Typography className=" text-[14px]  font-normal text-[#000]">
          в 1 минуту
        </Typography>
      </Box>
      <DiagnosticCeckboxItem
        label="Тип дыхания:"
        checkBoxStle={'w-[450px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="нет," />
            <DefaultCheckbox label="брюшной," />
            <DefaultCheckbox label="смешанный," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="В легких аускультативно дыхание:"
        checkBoxStle={'w-[700px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="везикулярное," />
            <DefaultCheckbox label="жесткое," />
            <DefaultCheckbox label="ослабленное," />
          </Box>
        }
        description=" "
        actions={false}
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Хрипы:"
        checkBoxStle={'w-[280px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="сухие," />
            <DefaultCheckbox label="влажные," />
          </Box>
        }
        description=" "
        actions={false}
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Кашель:"
        checkBoxStle={'w-[280px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="сухой," />
            <DefaultCheckbox label="мокрый," />
          </Box>
        }
        description=" "
        actions={false}
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Мокрота:"
        checkBoxStle={'w-[150px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="нет," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Крепитация:"
        checkBoxStle={'w-[750px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="верхняя часть," />
            <DefaultCheckbox label="средняя часть," />
            <DefaultCheckbox label="нижняя часть," />
            <DefaultCheckbox label="слева," />
            <DefaultCheckbox label="справа," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Перкуторно в легких звук:"
        boxStyle="w-[100%]"
        checkBoxStle={'w-[100%] '}
        style="flex flex-col items-start border p-[5px]"
        children={
          <Box className="flex">
            <DefaultCheckbox label="ясный," />
            <DefaultCheckbox label="легочный," />
            <DefaultCheckbox label="притупленный," />
            <DefaultCheckbox label="тупой," />
            <DefaultCheckbox label="коробочный," />
            <DefaultCheckbox label="тимпанический," />
            <DefaultCheckbox label="притупленно-тимпанический," />
            <DefaultCheckbox label="слева," />
            <DefaultCheckbox label="справа" />
          </Box>
        }
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
      />
    </Box>
  );
};

export default RespiratorySystemSection;
