import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { useCardiologistAppoinmnetContext } from '../module';
import { bodyTypeOptions } from '../constant/radioCheckboxData';
import RadioButtonGroup from 'components/RadioButtonGroup';
import { Box, OutlinedInput } from '@mui/material';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';

export const CardiovascularSection = () => {
  const { methods } = useCardiologistAppoinmnetContext();
  return (
    <AppointmentSectionContainer boxTitle="Сердечно-сосудистая система">
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Пульс"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[40%]"
        children={
          <Box className="flex flex-row items-center gap-1">
            <Box className="flex flex-row items-center gap-1">
              <OutlinedInput
                sx={{ width: '80px', height: '30px' }}
                className="mx-2"
                size="small"
              />
              <AppoinmentItemTitle title="уд. в 1'," />
            </Box>
            <RadioButtonGroup
              name="auscultative_breathing"
              options={bodyTypeOptions}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Нарушение ритма"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[80%]"
        defaultCheckbox
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Артериальное давление"
        categoryName={'for_sanatorium_treatment'}
        children={
          <Box className="flex flex-row items-center ">
            <OutlinedInput
              sx={{ width: '80px', height: '30px' }}
              className="mx-2"
              size="small"
            />
            <AppoinmentItemTitle title="/" />
            <OutlinedInput
              sx={{ width: '80px', height: '30px' }}
              className="mx-2"
              size="small"
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Граница сердца"
        categoryName={'for_sanatorium_treatment'}
        containerStyle="bg-white "
        children={
          <Box className="flex flex-row items-center gap-1 w-[90%] ">
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="левая"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[42%] text-[#797979]"
              categoryName={'for_sanatorium_treatment'}
              fieldStyle="w-[90%]"
            />
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="правая"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[42%] text-[#797979]"
              categoryName={'for_sanatorium_treatment'}
              fieldStyle="w-[90%]"
            />
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="верхняя"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[42%] text-[#797979]"
              categoryName={'for_sanatorium_treatment'}
              fieldStyle="w-[90%]"
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Сердечный толчок"
        categoryName={'for_sanatorium_treatment'}
        isSearchAction
        isGetAction
        fieldStyle="w-[90%]"
      />
      <AppointmentSectionContainer>
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="Тоны сердца"
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
          label="I тон"
          isSearchAction
          isGetAction
          categoryName={'for_sanatorium_treatment'}
          fieldStyle="w-[45%]"
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
          label="акцент II-го тона на"
          isSearchAction
          isGetAction
          categoryName={'for_sanatorium_treatment'}
          fieldStyle="w-[48%]"
          children={
            <Box>
              <RadioButtonGroup
                name="auscultative_breathing"
                options={bodyTypeOptions}
              />
            </Box>
          }
        />
      </AppointmentSectionContainer>
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Шум"
        categoryName={'for_sanatorium_treatment'}
        isSearchAction
        isGetAction
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
        label="Пульсация тыльных артерий стоп"
        categoryName={'for_sanatorium_treatment'}
        isSearchAction
        isGetAction
        fieldStyle="w-[40%]"
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
        label="Варикозное расширение поверхностных вен"
        categoryName={'for_sanatorium_treatment'}
        isSearchAction
        isGetAction
        fieldStyle="w-[30%]"
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
        label="Трофические изменения кожи"
        categoryName={'for_sanatorium_treatment'}
        isSearchAction
        isGetAction
        defaultCheckbox
        fieldStyle="w-[70%]"
      />
      <TextareActionBoxView isActions isDisabled={false} />
    </AppointmentSectionContainer>
  );
};
