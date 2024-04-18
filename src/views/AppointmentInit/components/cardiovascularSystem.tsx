/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DiagnosticCeckboxItem from 'components/AutocomplateCategoryBox/AutocomplateCategoryBoxView';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';
import {
  AccentInAortaOptions,
  HeardEdgesOptions,
  HeardTonesOptions,
  NoiseChangeOnOtOptions,
  PulseNoiseOnArteriaOptions,
} from '../constant/radioOptions';

interface Props {
  formMethods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>;
}

const CardiovascularSystemSection: FC<Props> = ({ formMethods }) => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px]  ">
      <SectionTitle
        title="Сердечно-сосудистая система"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Границы сердца:"
        checkBoxStle={'w-[400px]'}
        formMethods={formMethods}
        categoryName="heart_edge"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="heart_edge"
              methods={formMethods}
              options={HeardEdgesOptions}
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
        formMethods={formMethods}
        categoryName="heart_tones"
        children={
          <Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                Тоны сердца:
              </Typography>
              <RadioButtonGroup
                name="heart_tones"
                methods={formMethods}
                options={HeardTonesOptions}
              />
            </Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                акцент 2 тона на аорте:
              </Typography>
              <RadioButtonGroup
                name="accent_in_aorta"
                methods={formMethods}
                options={AccentInAortaOptions}
              />
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
          formMethods={formMethods}
          categoryName="noise_change_on_ot"
          children={
            <Box className="flex">
              <RadioButtonGroup
                name="noise_change_on_ot"
                methods={formMethods}
                options={NoiseChangeOnOtOptions}
              />
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
        formMethods={formMethods}
        categoryName="pulse_noise_on_arteria"
        children={
          <Box>
            <Box className="flex items-center">
              <Typography className="text-[14px]  font-normal text-[#000]">
                Пульсация, шум над артериями:
              </Typography>
              <RadioButtonGroup
                name="pulse_noise_on_arteria"
                methods={formMethods}
                options={PulseNoiseOnArteriaOptions}
              />
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
