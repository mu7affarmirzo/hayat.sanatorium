/* eslint-disable react/style-prop-object */
import { Box, Typography, OutlinedInput, Grid } from '@mui/material';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultCheckbox from 'components/checkbox/DefaultCheckbox';
import DiagnosticCeckboxItem from 'components/AutocomplateCategoryBox/AutocomplateCategoryBoxView';
import {
  ConsciousnessOptions,
  ConstitutionOptions,
  GeneralStateOptions,
  LymphNodesOptions,
  PositionOptions,
  SkinMoistureOptions,
  SkinOptions,
  SkinTurgorOptions,
  SubcutaneousFatOption,
} from '../constant/radioOptions';
import { useAppAppointmentInitContext } from '../module';

const StatusPraesensSection = () => {
  const { methods } = useAppAppointmentInitContext();

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
          formMethods={methods}
          categoryName="general_state"
          children={
            <Box className="flex">
              <RadioButtonGroup
                options={GeneralStateOptions}
                name="general_state"
                methods={methods}
              />
            </Box>
          }
        />
        <DiagnosticCeckboxItem
          label="Сознание:"
          checkBoxStle={'w-[450px]'}
          actions={false}
          children={
            <Box className={'flex'}>
              <RadioButtonGroup
                options={ConsciousnessOptions}
                name="consciousness"
                methods={methods}
              />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Положение:"
          checkBoxStle={'w-[500px]'}
          children={
            <Box className={'flex'}>
              {/* <DefaultCheckbox label="активное," />
              <DefaultCheckbox label="пассивное," />
              <DefaultCheckbox label="вынужденное," /> */}
              <RadioButtonGroup
                options={PositionOptions}
                name="ill_part_stomach"
                methods={methods}
              />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Конституция:"
          checkBoxStle={'w-[500px]'}
          children={
            <Box className={'flex'}>
              <RadioButtonGroup
                options={ConstitutionOptions}
                name="constitution"
                methods={methods}
              />
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
              <RadioButtonGroup
                options={SkinOptions}
                name="skin"
                methods={methods}
              />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Пигментация:"
          children={<DefaultCheckbox label="нет," />}
          style="mt-[10px]"
          description=" "
          categoryName="pigmentation"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Депигментация:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="depigmentation"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Высыпания:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="rashes"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Сосудистые изменения:"
          checkBoxStle={'w-[280px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="vascular_changes"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Кровоизлияния:"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="hemorrhages"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />
        <DiagnosticCeckboxItem
          label="Рубцы"
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="scarring"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Трофические изменения:"
          checkBoxStle={'w-[280px]'}
          children={<DefaultCheckbox label="нет," />}
          description=" "
          categoryName="trophic_changes"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Видимые опухоли:"
          children={<DefaultCheckbox label="нет," />}
          checkBoxStle={'w-[250px]'}
          description=" "
          categoryName="visible_tumors"
          formMethods={methods}
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Влажность кожи:"
          checkBoxStle={'w-[500px]'}
          categoryName="skin_moisture"
          formMethods={methods}
          children={
            <Box className="flex">
              <RadioButtonGroup
                options={SkinMoistureOptions}
                name="skin_moisture"
                methods={methods}
              />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Тургор кожи:"
          checkBoxStle={'w-[400px]'}
          categoryName="skin_turgor"
          formMethods={methods}
          children={
            <Box className="flex">
              <RadioButtonGroup
                options={SkinTurgorOptions}
                name="skin_turgor"
                methods={methods}
              />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Подкожно-жировая клетчатка:"
          checkBoxStle={'w-[800px]'}
          categoryName="subcutaneous_fat"
          formMethods={methods}
          children={
            <Box className="flex">
              <RadioButtonGroup
                options={SubcutaneousFatOption}
                name="subcutaneous_fat"
                methods={methods}
              />
            </Box>
          }
          description=" "
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
          boxStyle=" w-[55%]"
        />

        <Box className="flex flex-row items-center p-1">
          <Typography>Рост</Typography>
          <OutlinedInput
            sx={{ width: '100px' }}
            className="mx-2"
            size="small"
            {...methods.register('height', { required: true })}
          />
          <Typography>см,</Typography>
          <Typography>вес</Typography>
          <OutlinedInput
            sx={{ width: '100px' }}
            className="mx-2"
            size="small"
            {...methods.register('weight', { required: true })}
          />
          <Typography>кг, пульс</Typography>
          <OutlinedInput
            sx={{ width: '100px' }}
            className="mx-2"
            size="small"
            {...methods.register('heart_beat', { required: true })}
          />
          <Typography>уд/м, давление</Typography>
          <OutlinedInput
            sx={{ width: '80px' }}
            className="mx-2"
            size="small"
            {...methods.register('arterial_high', { required: true })}
          />
          <Typography>/</Typography>
          <OutlinedInput
            sx={{ width: '80px' }}
            className="mx-2"
            size="small"
            {...methods.register('arterial_low', { required: true })}
          />
          <Typography>мм рт.ст., ИМТ</Typography>
          <OutlinedInput
            sx={{ width: '60px' }}
            className="mx-2"
            size="small"
            {...methods.register('imt', { required: true })}
          />
          <Typography>кг/м2</Typography>
        </Box>

        <DiagnosticCeckboxItem
          label="Интерпретация показателя ИМТ"
          checkBoxStle={'w-[full] '}
          children={
            <Box className="flex flex-row items-center gap-2">
              <DefaultCheckbox label="нет," />
              <OutlinedInput
                sx={{ width: '320px' }}
                placeholder="избыточная масса тела (предожирение)"
                className="mx-2"
                size="small"
                {...methods.register('extra_weight', { required: true })}
              />
            </Box>
          }
          titleStyle="w-[100%] border p-[10px] rounded-[4px]"
        />

        <DiagnosticCeckboxItem
          label="Отеки, пастозность:"
          checkBoxStle={'w-[250px]'}
          categoryName="swelling_pastiness"
          formMethods={methods}
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
          checkBoxStle={'w-[650px]'}
          categoryName="lymph_nodes"
          formMethods={methods}
          children={
            <Box className="flex">
              <RadioButtonGroup
                options={LymphNodesOptions}
                name="constitution"
                methods={methods}
              />
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
