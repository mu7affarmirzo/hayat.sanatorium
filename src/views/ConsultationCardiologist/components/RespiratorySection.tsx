import { Box, OutlinedInput } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useCardiologistAppoinmnetContext } from '../module';
import RadioButtonGroup from 'components/RadioButtonGroup';
import { bodyTypeOptions } from '../constant/radioCheckboxData';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';

export const RespiratorySection = () => {
  const { methods } = useCardiologistAppoinmnetContext();

  return (
    <AppointmentSectionContainer boxTitle="Органы дыхания">
      <Box className="flex flex-row items-center gap-1">
        <AppoinmentItemTitle title="ЧДД:" />
        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
        />
        <AppoinmentItemTitle title="в 1 минуту" />
      </Box>

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Форма грудной клетки"
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
        label="При сравнительной перкуссии над легочными полями звук"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[25%]"
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
        label="При аускультации дыхание"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[43%]"
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
        label="Хрипы"
        categoryName={'for_sanatorium_treatment'}
        containerStyle="bg-white "
        children={
          <Box className="flex flex-row items-center gap-1 w-[97%]">
            <Box>
              <RadioButtonGroup
                name="auscultative_breathing"
                options={bodyTypeOptions}
              />
            </Box>
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="правая"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[27%] text-[#797979]"
              categoryName={'for_sanatorium_treatment'}
              fieldStyle="w-[90%]"
            />
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="верхняя"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[30%] text-[#797979]"
              categoryName={'for_sanatorium_treatment'}
              fieldStyle="w-[90%]"
            />
          </Box>
        }
      />
      <TextareActionBoxView isActions isDisabled={false} />
    </AppointmentSectionContainer>
  );
};
