/* eslint-disable react/style-prop-object */
import { Box, Grid } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';

const EpidemiologicalHistorySection = () => {
  return (
    <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
      <Grid item className="">
        <SectionTitle title="Эпиданамнез" className="text-base font-medium" />
        <DiagnosticCeckboxItem
          label=" Контакт с инфекционными больными"
          description=" "
          checkBoxStle={'w-[100%]'}
          style="flex flex-col border p-2"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle="w-[100%]"
          children={<DefaultCheckbox label="нет," />}
        />
        <DiagnosticCeckboxItem
          label="Контакт с больными гриппом, ОРВИ:"
          checkBoxStle={'w-[360px]'}
          children={<DefaultCheckbox label="нет," />}
          titleStyle="w-[100%] border p-[5px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Выезд за пределы населенного пункта за 2 месяца ДО настоящего заболевания:"
          checkBoxStle={'w-[710px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Перенесенные инфекционные заболевания:"
          checkBoxStle={'w-[420px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Нахождение на стационарном лечении:"
          checkBoxStle={'w-[380px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Получение гемотрансфузий (крови и ее компонентов):"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[500px]'}
          description=" "
          actions={false}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Оперативные и массивные вмешательства за последние 6 месяцев:"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[610px]'}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Посещение стоматолога за последние 6 месяцев:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          checkBoxStle={'w-[460px]'}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label=" Профессия с подробным указанием
                                профессиональных вредностей и др.
                                особенностей (например, контакт с
                                животными):"
          description=" "
          checkBoxStle={'w-[100%]'}
          style="flex flex-col"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle="w-[100%]"
        />
        <DiagnosticCeckboxItem
          label="Дополнительная информация:"
          checkBoxStle={'w-[1060px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="педикюр," />
              <DefaultCheckbox label="маникюр," />
              <DefaultCheckbox label="татуировка," />
              <DefaultCheckbox label="пирсинг," />
              <DefaultCheckbox label="иглоукалывание," />
              <DefaultCheckbox label="иглоукалывание," />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          style="mt-[5px]"
          description=" "
        />
      </Grid>
    </Box>
  );
};

export default EpidemiologicalHistorySection;
