/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import DiagnostikaItem from 'components/DiagnostikaItem';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';
import { EffleurageSymptomsOptions } from '../constant/radioOptions';

interface Props {
  // formMethods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>
  formMethods: any;
}

const UrinarySystemSection: FC<Props> = ({ formMethods }) => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px] ">
      <SectionTitle
        title="Мочевыделительная система"
        className="text-base font-medium"
      />
      <DiagnosticCeckboxItem
        label="Симптом поколачивания:"
        checkBoxStle={'w-[700px]'}
        formMethods={formMethods}
        categoryName="effleurage_symptoms"
        children={
          <Box className="flex">
            <RadioButtonGroup
              name="effleurage_symptoms"
              methods={formMethods}
              options={EffleurageSymptomsOptions}
            />
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
export default UrinarySystemSection;
