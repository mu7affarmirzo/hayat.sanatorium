/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';
import {
  AppetitOption,
  CracksUlcersInMouthOptions,
  LiverEdgeOptions,
  SpeanEdgeOptions,
  StomachOptions,
  StoolOptions,
  TongueOptions,
} from '../constant/radioOptions';

interface Props {
  formMethods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>;
}

const DigestiveOrgansSection: FC<Props> = ({ formMethods }) => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
      <SectionTitle
        title="Органы пищеварения"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Аппетит:"
        checkBoxStle={'w-[630px]'}
        formMethods={formMethods}
        categoryName="appetit"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="appetit"
              methods={formMethods}
              options={AppetitOption}
            />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Язык:"
        checkBoxStle={'w-[620px]'}
        formMethods={formMethods}
        categoryName="tongue"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="tongue"
              methods={formMethods}
              options={TongueOptions}
            />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Трещины, язвы в полости рта:"
        checkBoxStle={'w-[380px]'}
        formMethods={formMethods}
        categoryName="cracks_ulcers_in_mouth"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="cracks_ulcers_in_mouth"
              methods={formMethods}
              options={CracksUlcersInMouthOptions}
            />
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
        categoryName="stomach"
        formMethods={formMethods}
        children={
          <Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                Живот:
              </Typography>
              <RadioButtonGroup
                name="stomach"
                methods={formMethods}
                options={StomachOptions}
              />
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
        formMethods={formMethods}
        categoryName="liver"
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
        formMethods={formMethods}
        categoryName="liver_edge"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="liver_edge"
              methods={formMethods}
              options={LiverEdgeOptions}
            />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Селезенка:"
        checkBoxStle={'w-[500px]'}
        formMethods={formMethods}
        categoryName="spleen"
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
        formMethods={formMethods}
        categoryName="spleen_edge"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="spleen_edge"
              methods={formMethods}
              options={SpeanEdgeOptions}
            />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="Стул:"
        checkBoxStle={'w-[700px]'}
        formMethods={formMethods}
        categoryName="stool"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="stool"
              methods={formMethods}
              options={StoolOptions}
            />
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
          {...formMethods.register('stool_frequency', { required: true })}
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
