import { Box, OutlinedInput } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useCardiologistAppoinmnetContext } from '../module';
import RadioButtonGroup from 'components/RadioButtonGroup';
import { bodyTypeOptions } from '../constant/radioCheckboxData';

export const ObjectiveResearchSection = () => {
  const { methods } = useCardiologistAppoinmnetContext();
  return (
    <AppointmentSectionContainer boxTitle="Данные объективного исследования">
      <Box className="flex flex-row items-center p-1">
        <AppoinmentItemTitle title="Рост" />
        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('height', { required: true })}
        />
        <AppoinmentItemTitle title="см," />
        <AppoinmentItemTitle title="вес" />
        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('weight', { required: true })}
        />
        <AppoinmentItemTitle title="кг, пульс" />

        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('heart_beat', { required: true })}
        />
        <AppoinmentItemTitle title="уд/м, давление" />

        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('arterial_high', { required: true })}
        />
        <AppoinmentItemTitle title="/" />

        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('arterial_low', { required: true })}
        />
        <AppoinmentItemTitle title="мм рт.ст., ИМТ" />

        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('imt', { required: true })}
        />
        <AppoinmentItemTitle title="кг/м2" />
        <AppoinmentItemTitle title="Интерпретация показателя ИМТ" />
        <OutlinedInput
          sx={{ width: '300px', height: '30px' }}
          className="mx-2"
          size="small"
          // {...formMethods.register('imt', { required: true })}
        />
      </Box>
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Телосложение"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[50%]"
        children={
          <Box>
            <RadioButtonGroup
              name="auscultative_breathing"
              options={bodyTypeOptions}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Кожные покровы"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Склеры и видимые слизистые"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Щитовидная железа"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-full"
      />
      <AppointmentSectionContainer>
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="шейные"
          isSearchAction
          isGetAction
          categoryName={'for_sanatorium_treatment'}
          fieldStyle="w-full"
        />
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="подмышечные"
          isSearchAction
          isGetAction
          categoryName={'for_sanatorium_treatment'}
          fieldStyle="w-full"
        />
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="паховые"
          isSearchAction
          isGetAction
          categoryName={'for_sanatorium_treatment'}
          fieldStyle="w-full"
        />
      </AppointmentSectionContainer>
    </AppointmentSectionContainer>
  );
};
