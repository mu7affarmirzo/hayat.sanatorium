/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput, Grid } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/diagnosticCeckboxItem/DiagnosticCeckboxItem';
import { FC } from 'react';

interface Props {
  register: any;
}

const StatusPraesensSection: FC<Props> = ({ register }) => {
  return (
    <Box className="border px-[10px] py-[10px] flex flex-col gap-1 mb-[10px] ">
      <Grid item className="">
        <SectionTitle
          title="Status praesens objectivus"
          className="text-base font-medium"
        />
        <DiagnosticCeckboxItem
          label="Общее состояние:"
          description=" "
          checkBoxStle={'w-[100%]'}
          style="flex flex-col border p-2"
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle="w-[100%]"
          children={
            <Box className="flex">
              <DefaultCheckbox label="удовлетворительное," />
              <DefaultCheckbox label="относительное удовлетворительное," />
              <DefaultCheckbox label="средней тяжести," />
              <DefaultCheckbox label="тяжёлое" />
            </Box>
          }
        />
        <DiagnosticCeckboxItem
          label="Сознание:"
          checkBoxStle={'w-[450px]'}
          actions={false}
          children={
            <Box className={'flex'}>
              <DefaultCheckbox label="ясное," />
              <DefaultCheckbox label="ступор," />
              <DefaultCheckbox label="сопор," />
              <DefaultCheckbox label="кома," />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Положение:"
          checkBoxStle={'w-[500px]'}
          children={
            <Box className={'flex'}>
              <DefaultCheckbox label="активное," />
              <DefaultCheckbox label="пассивное," />
              <DefaultCheckbox label="вынужденное," />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Конституция:"
          checkBoxStle={'w-[500px]'}
          children={
            <Box className={'flex'}>
              <DefaultCheckbox label="нормастеник," />
              <DefaultCheckbox label="астеник," />
              <DefaultCheckbox label="гиперстеник," />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Кожные покровы:"
          boxStyle="w-[100%]"
          checkBoxStle={'w-[100%]  '}
          style="flex flex-col items-start border p-[5px] "
          children={
            <Box className="flex">
              <DefaultCheckbox label="нормальной окраски," />
              <DefaultCheckbox label="бледные," />
              <DefaultCheckbox label="гиперемия," />
              <DefaultCheckbox label="иктеричные," />
              <DefaultCheckbox label="субиктеричные," />
              <DefaultCheckbox label="акроцианоз," />
              <DefaultCheckbox label="землистого цвета" />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Пигментация:"
          children={<DefaultCheckbox label="нет," />}
          style="mt-[10px]"
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Депигментация:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Высыпания:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Сосудистые изменения:"
          checkBoxStle={'w-[280px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Кровоизлияния:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Рубцы"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Трофические изменения:"
          checkBoxStle={'w-[280px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Видимые опухоли:"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[250px]'}
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Влажность кожи:"
          checkBoxStle={'w-[500px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="обычная," />
              <DefaultCheckbox label="влажная," />
              <DefaultCheckbox label="сухая," />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Тургор кожи:"
          checkBoxStle={'w-[400px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="в норме," />
              <DefaultCheckbox label="снижет," />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Подкожно-жировая клетчатка:"
          checkBoxStle={'w-[800px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="развита умеренно," />
              <DefaultCheckbox label="развита слабо," />
              <DefaultCheckbox label="развита чрезмерно," />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle=" w-[55%]"
        />

        <Box className="flex flex-row items-center p-1">
          <Typography>Рост</Typography>
          <OutlinedInput
            sx={{ height: '35px', width: '100px' }}
            className="mx-2"
            {...register('height', { required: true })}
          />
          <Typography>см,</Typography>
          <Typography>вес</Typography>
          <OutlinedInput
            sx={{ height: '35px', width: '100px' }}
            className="mx-2"
            {...register('weight', { required: true })}
          />
          <Typography>кг, пульс</Typography>
          <OutlinedInput
            sx={{ height: '35px', width: '100px' }}
            className="mx-2"
            {...register('heart_beat', { required: true })}
          />
          <Typography>уд/м, давление</Typography>
          <OutlinedInput
            sx={{ height: '35px', width: '80px' }}
            className="mx-2"
            {...register('arterial_high', { required: true })}
          />
          <Typography>/</Typography>
          <OutlinedInput
            sx={{ height: '35px', width: '80px' }}
            className="mx-2"
            {...register('arterial_low', { required: true })}
          />
          <Typography>мм рт.ст., ИМТ</Typography>
          <OutlinedInput
            sx={{ height: '35px', width: '60px' }}
            className="mx-2"
            {...register('imt', { required: true })}
          />
          <Typography>кг/м2</Typography>
        </Box>

        <DiagnosticCeckboxItem
          label="Интерпретация показателя ИМТ"
          checkBoxStle={'w-[350px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="нет," />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Отеки, пастозность:"
          checkBoxStle={'w-[250px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="нет," />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Лимфатические узлы:"
          checkBoxStle={'w-[800px]'}
          children={
            <Box className="flex">
              <DefaultCheckbox label="не увеличены," />
              <DefaultCheckbox label="мягкие," />
              <DefaultCheckbox label="плотные," />
              <DefaultCheckbox label="эластичные," />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle=" w-[55%]"
        />
      </Grid>
    </Box>
  );
};

export default StatusPraesensSection;
