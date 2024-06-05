/* eslint-disable react/style-prop-object */
import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/AutocomplateCategoryBox/AutocomplateCategoryBoxView';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';

interface Props {
  // formMethods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>
  formMethods: any;
}

const MuscularSystemSection: FC<Props> = ({ formMethods }) => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
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
        formMethods={formMethods}
        categoryName="deformations"
      />
      <DiagnosticCeckboxItem
        label="Контрактуры:"
        checkBoxStle={'w-[210px]'}
        children={<DefaultCheckbox label="нет," />}
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
        formMethods={formMethods}
        categoryName="contractures"
      />
      <DiagnosticCeckboxItem
        label="Ограничения движений:"
        checkBoxStle={'w-[280px]'}
        children={<DefaultCheckbox label="нет," />}
        description=" "
        titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        style="mt-[5px]"
        formMethods={formMethods}
        categoryName="movement_restrictions"
      />
    </Box>
  );
};

export default MuscularSystemSection;
