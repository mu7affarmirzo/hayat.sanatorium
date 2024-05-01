/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/AutocomplateCategoryBox/AutocomplateCategoryBoxView';

import { AdditionalDataOptions } from '../constant/radioOptions';
import { useAppAppointmentInitContext } from '../module';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';

const EpidemiologicalHistorySection = () => {
  const { methods } = useAppAppointmentInitContext();

  return (
    <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
      <Grid item className="">
        <SectionTitle title="Эпиданамнез" className="text-base font-medium" />

        <AutoComplateCategoryBoxView
          categoryName="effleurage_symptoms"
          formMethods={methods}
          isSearchAction={true}
          isGetAction={true}
          label="Контакт с инфекционными больными"
          defaultCheckbox={true}
          fieldStyle="w-full"
          containerStyle="flex flex-col p-2 w-[100%] border border-gray-300 "
        />

        <DiagnosticCeckboxItem
          label="Контакт с больными гриппом, ОРВИ:"
          checkBoxStle={'w-[360px]'}
          children={<DefaultCheckbox label="нет," />}
          titleStyle="w-[100%] border p-[5px] rounded-[4px]"
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Выезд за пределы населенного пункта за 2 месяца ДО настоящего заболевания:"
          checkBoxStle={'w-[710px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Перенесенные инфекционные заболевания:"
          checkBoxStle={'w-[420px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="transferred_infectious"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Нахождение на стационарном лечении:"
          checkBoxStle={'w-[380px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Получение гемотрансфузий (крови и ее компонентов):"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[500px]'}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Оперативные и массивные вмешательства за последние 6 месяцев:"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[610px]'}
          description=" "
          categoryName="surgical_massive_interventions_six_months"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Посещение стоматолога за последние 6 месяцев:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          checkBoxStle={'w-[460px]'}
          categoryName="dentist_visits_last_six_months"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          formMethods={methods}
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
          formMethods={methods}
        />

        <DiagnosticCeckboxItem
          label="Дополнительная информация:"
          checkBoxStle={'w-[900px]'}
          categoryName="additional_data"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          style="mt-[5px]"
          description=" "
          formMethods={methods}
          children={
            <Box className="flex flex-row ">
              <RadioButtonGroup
                options={AdditionalDataOptions}
                name="additional_data"
                methods={methods}
              />
            </Box>
          }
        />
      </Grid>
    </Box>
  );
};

export default EpidemiologicalHistorySection;
