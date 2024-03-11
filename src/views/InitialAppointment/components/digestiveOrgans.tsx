/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

const DigestiveOrgansSection = () => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
      <SectionTitle
        title="Органы пищеварения"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Аппетит:"
        checkBoxStle={'w-[630px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="удовлетворительный," />
            <DefaultCheckbox label="снижен," />
            <DefaultCheckbox label="повышен," />
            <DefaultCheckbox label="анорексия," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Язык:"
        checkBoxStle={'w-[620px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="чистый," />
            <DefaultCheckbox label="влажный," />
            <DefaultCheckbox label="географически й," />
            <DefaultCheckbox label="обложен налетом," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Трещины, язвы в полости рта:"
        checkBoxStle={'w-[380px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="нет," />
            <DefaultCheckbox label="есть," />
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
                Живот:
              </Typography>
              <DefaultCheckbox label="мягкий," />
              <DefaultCheckbox label="вздутый," />
              <DefaultCheckbox label="впавший," />
            </Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                болезненный
              </Typography>
              <DefaultCheckbox label="в правом подреберье," />
              <DefaultCheckbox label="в гипогастрии," />
              <DefaultCheckbox label="по ходу толстого кишечника," />
              <DefaultCheckbox label="по ходу тонкого кишечника," />
              <DefaultCheckbox label="вокруг пупка" />
            </Box>
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
      />
      <DiagnosticCeckboxItem
        label="Печень:"
        checkBoxStle={'w-[500px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="не увеличена," />
            <DefaultCheckbox label="увеличена на" />
            <Box className=" flex gap-2 items-center">
              <Box className=" border rounded-[4px] p-[20px] pr-[30px] items-center">
                <Typography className=" pr-[20px] text-[#007DFF]"></Typography>
              </Box>
              <Typography className=" text-[14px]  font-normal text-[#000]">
                см.,
              </Typography>
            </Box>
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Край печени:"
        checkBoxStle={'w-[600px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="острый," />
            <DefaultCheckbox label="закругленный," />
            <DefaultCheckbox label="мягкий," />
            <DefaultCheckbox label="плотный," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Селезенка:"
        checkBoxStle={'w-[500px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="не увеличена," />
            <DefaultCheckbox label="увеличена на" />
            <Box className=" flex gap-2 items-center">
              <Box className=" border rounded-[4px] p-[20px] pr-[30px] items-center">
                <Typography className=" pr-[20px] text-[#007DFF]"></Typography>
              </Box>
              <Typography className=" text-[14px]  font-normal text-[#000]">
                см.,
              </Typography>
            </Box>
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Край селезенки:"
        checkBoxStle={'w-[600px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="острый," />
            <DefaultCheckbox label="закругленный," />
            <DefaultCheckbox label="мягкий," />
            <DefaultCheckbox label="плотный," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Стул:"
        checkBoxStle={'w-[700px]'}
        children={
          <Box className="flex">
            <DefaultCheckbox label="жидкий," />
            <DefaultCheckbox label="кашицеобразный," />
            <DefaultCheckbox label="оформленный," />
            <DefaultCheckbox label="запоры," />
            <DefaultCheckbox label="диарея," />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <Box className=" flex gap-2 items-center">
        <Typography className=" text-[14px]  font-normal text-[#000]">
          Частота стула:
        </Typography>

        <OutlinedInput
          sx={{ height: '35px', width: '60px' }}
          className="mx-2"
        />

        <Typography className=" text-[14px]  font-normal text-[#000]">
          раз в день
        </Typography>
      </Box>
      <DiagnostikaItem
        message=" "
        style="border-[0px] py-0 px-0"
        titleStyle="mb-[0px] text-[#5d5c5c]"
        messageStyle="min-h-[80px]"
      />
    </Box>
  );
};

export default DigestiveOrgansSection;
