/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

const CardiovascularSystemSection = () => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
      <SectionTitle
        title="Сердечно-сосудистая система"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Границы сердца:"
        checkBoxStle={'w-[400px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="в норме," />
            <DefaultCheckbox label="расширены," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />

      <DiagnosticCeckboxItem
        boxStyle="w-[100%]"
        checkBoxStle={'w-[100%] '}
        style="flex flex-col items-start border p-[5px]"
        children={
          <Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                Тоны сердца:
              </Typography>
              <DefaultCheckbox label="звучные," />
              <DefaultCheckbox label="приглушенные," />
              <DefaultCheckbox label="глухие," />
              <DefaultCheckbox label="ритмичные," />
              <DefaultCheckbox label="аритмичные," />
              <DefaultCheckbox label="мерцательная аритмия," />
              <DefaultCheckbox label="тахикардия," />
              <DefaultCheckbox label="брадикардия," />
            </Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                акцент 2 тона на аорте:
              </Typography>
              <DefaultCheckbox label="есть," />
              <DefaultCheckbox label="нет," />
              <DefaultCheckbox label="патологические шумы" />
            </Box>
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
      />

      <Box className=" py-2">
        <Typography>
          Изменение шума в зависимости ОТ положения тела, задержки дыхания на
          вдохе И выдохе и после физической нагрузки:
        </Typography>
        <DiagnosticCeckboxItem
          label=""
          checkBoxStle={'w-[310px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="усиливается," />
              <DefaultCheckbox label="неизменяется," />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          style="mt-[5px]"
        />
      </Box>

      <Box className="flex flex-row items-center p-1">
        <Typography>АД слева</Typography>
        <OutlinedInput
          sx={{ height: '35px', width: '100px' }}
          className="mx-2"
        />
        <Typography>, АД справа,</Typography>
        <OutlinedInput
          sx={{ height: '35px', width: '100px' }}
          className="mx-2"
        />
        <Typography>, PS слева</Typography>
        <OutlinedInput
          sx={{ height: '35px', width: '100px' }}
          className="mx-2"
        />
        <Typography>, PS справа</Typography>
        <OutlinedInput
          sx={{ height: '35px', width: '80px' }}
          className="mx-2"
        />
      </Box>
      <DiagnosticCeckboxItem
        boxStyle="w-[100%]"
        checkBoxStle={'w-[100%] '}
        style="flex flex-col items-start border p-[5px]"
        children={
          <Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                Пульсация, шум над артериями:
              </Typography>
              <DefaultCheckbox label="нет," />
              <DefaultCheckbox label="сонная," />
              <DefaultCheckbox label="подключичная," />
              <DefaultCheckbox label="яремная," />
              <DefaultCheckbox label="тыльная," />
              <DefaultCheckbox label="слева," />
              <DefaultCheckbox label="справа" />
            </Box>
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
      />

      <DiagnostikaItem
        message=" "
        style="border-[0px]  "
        titleStyle="mb-[0px] text-[#5d5c5c]"
        messageStyle="min-h-[80px]"
      />
    </Box>
  );
};

export default CardiovascularSystemSection;
