import { Box } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useCardiologistAppoinmnetContext } from '../module';
import RadioButtonGroup from 'components/RadioButtonGroup';
import {
  auscultationBreathingoptions,
  chestSheepOptions,
  pulmonaryFieldsOptions,
  wheezingOptions,
} from '../constant/radioCheckboxData';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { OutlineField } from 'components/Fields/OutlineField';

export const RespiratorySection = () => {
  const { methods } = useCardiologistAppoinmnetContext();

  return (
    <AppointmentSectionContainer boxTitle="Органы дыхания">
      <Box className="flex flex-row items-center gap-1">
        <AppoinmentItemTitle title="ЧДД:" />
        <OutlineField medhods={methods} name={'chdd_per_minute'} />
        <AppoinmentItemTitle title="в 1 минуту" />
      </Box>

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Форма грудной клетки"
        isSearchAction
        isGetAction
        categoryName={'chest_shape'}
        fieldStyle="w-[45%]"
        children={
          <Box>
            <RadioButtonGroup
              name="chest_shape"
              options={chestSheepOptions}
              methods={methods}
            />
          </Box>
        }
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="При сравнительной перкуссии над легочными полями звук"
        isSearchAction
        isGetAction
        categoryName={'pulmonary_fields'}
        fieldStyle="w-[25%]"
        children={
          <Box>
            <RadioButtonGroup
              name="pulmonary_fields"
              options={pulmonaryFieldsOptions}
              methods={methods}
            />
          </Box>
        }
      />

      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="При аускультации дыхание"
        isSearchAction
        isGetAction
        categoryName={'auscultation_breathing'}
        fieldStyle="w-[43%]"
        children={
          <Box>
            <RadioButtonGroup
              name="auscultation_breathing"
              options={auscultationBreathingoptions}
              methods={methods}
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
                name="wheezing"
                options={wheezingOptions}
                methods={methods}
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
