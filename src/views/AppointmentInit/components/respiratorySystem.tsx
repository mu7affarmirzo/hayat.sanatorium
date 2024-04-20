/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';
import {
  AuscultationBreathingOptions,
  BreathingTypeOptions,
  CoughOptions,
  CrepotusOptions,
  WheezingOptions,
  HeardEdgeOptions,
} from '../constant/radioOptions';
import RadioButtonGroup from 'components/RadioButtonGroup';

interface Props {
  // formMethods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>
  formMethods: any;
}

const RespiratorySystemSection: FC<Props> = ({ formMethods }) => {
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
        formMethods={formMethods}
        categoryName="breathing_type"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="breathing_type"
              methods={formMethods}
              options={BreathingTypeOptions}
            />
          </Box>
        }
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
      />
      <DiagnosticCeckboxItem
        label="В легких аускультативно дыхание:"
        checkBoxStle={'w-[700px]'}
        formMethods={formMethods}
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="auscultative_breathing"
              methods={formMethods}
              options={AuscultationBreathingOptions}
            />
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
        formMethods={formMethods}
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="wheezing"
              methods={formMethods}
              options={WheezingOptions}
            />
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
        formMethods={formMethods}
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="wheezing"
              methods={formMethods}
              options={CoughOptions}
            />
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
        formMethods={formMethods}
        categoryName="spleen"
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
        formMethods={formMethods}
        categoryName="crepitus"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="crepitus"
              methods={formMethods}
              options={CrepotusOptions}
            />
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
        formMethods={formMethods}
        style="flex flex-col items-start border p-[5px]"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="heart_edge"
              methods={formMethods}
              options={HeardEdgeOptions}
            />
          </Box>
        }
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
      />
    </Box>
  );
};

export default RespiratorySystemSection;
