/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';
import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { InitAppointmentTypes } from 'types/patientTypes';
import { AdditionalDataOptions } from '../constant/radioOptions';

interface Props {
  formMethods: UseFormReturn<InitAppointmentTypes, any, InitAppointmentTypes>;
}

const EpidemiologicalHistorySection: FC<Props> = ({ formMethods }) => {
  return (
    <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
      <Grid item className="">
        <SectionTitle title="Эпиданамнез" className="text-base font-medium" />

        <DiagnosticCeckboxItem
          label="Контакт с инфекционными больными"
          description=" "
          checkBoxStle={'w-[100%]'}
          style="flex flex-col border p-2"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle="w-[100%]"
          formMethods={formMethods}
          categoryName="effleurage_symptoms"
          children={<DefaultCheckbox label="нет," />}
        />

        <DiagnosticCeckboxItem
          label="Контакт с больными гриппом, ОРВИ:"
          checkBoxStle={'w-[360px]'}
          children={<DefaultCheckbox label="нет," />}
          titleStyle="w-[100%] border p-[5px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Выезд за пределы населенного пункта за 2 месяца ДО настоящего заболевания:"
          checkBoxStle={'w-[710px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Перенесенные инфекционные заболевания:"
          checkBoxStle={'w-[420px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="transferred_infectious"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Нахождение на стационарном лечении:"
          checkBoxStle={'w-[380px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Получение гемотрансфузий (крови и ее компонентов):"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[500px]'}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Оперативные и массивные вмешательства за последние 6 месяцев:"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[610px]'}
          description=" "
          categoryName="surgical_massive_interventions_six_months"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Посещение стоматолога за последние 6 месяцев:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          checkBoxStle={'w-[460px]'}
          categoryName="dentist_visits_last_six_months"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Профессия с подробным указанием
                                профессиональных вредностей и др.
                                особенностей (например, контакт с
                                животными):"
          description=" "
          checkBoxStle={'w-[100%]'}
          style="flex flex-col"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle="w-[100%]"
          formMethods={formMethods}
        />

        <DiagnosticCeckboxItem
          label="Дополнительная информация:"
          checkBoxStle={'w-[900px]'}
          categoryName="additional_data"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          style="mt-[5px]"
          description=" "
          formMethods={formMethods}
          children={
            <Box className="flex flex-row ">
              <RadioButtonGroup
                options={AdditionalDataOptions}
                name="additional_data"
                methods={formMethods}
              />
            </Box>
          }
        />
      </Grid>
    </Box>
  );
};

export default EpidemiologicalHistorySection;
