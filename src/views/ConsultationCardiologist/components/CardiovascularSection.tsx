import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { useCardiologistAppoinmnetContext } from '../module';
import {
  arterialPulseStopOptions,
  heartToneOptions,
  iToneOptions,
  iiToneOptions,
  pulseOptions,
  varicoseVeinsOfSuperficialVeinsOptions,
} from '../constant/radioCheckboxData';
import RadioButtonGroup from 'components/RadioButtonGroup';
import { Box } from '@mui/material';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { OutlineField } from 'components/Fields/OutlineField';

export const CardiovascularSection = () => {
  const { methods } = useCardiologistAppoinmnetContext();
  return (
    <AppointmentSectionContainer boxTitle="Сердечно-сосудистая система">
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Пульс"
        isSearchAction
        isGetAction
        categoryName={'pulse_per_min'}
        fieldStyle="w-[28%]"
        children={
          <Box className="flex flex-row items-center gap-1">
            <Box className="flex flex-row items-center gap-1">
              <OutlineField
                medhods={methods}
                name="pulse_per_min"
                required={true}
              />
              <AppoinmentItemTitle title="уд. в 1'," />
            </Box>
            <RadioButtonGroup
              name="pulse"
              options={pulseOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Нарушение ритма"
        isSearchAction
        isGetAction
        categoryName={'fault_of_pulse'}
        fieldStyle="w-[80%]"
        defaultCheckbox
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Артериальное давление"
        categoryName={'for_sanatorium_treatment'}
        children={
          <Box className="flex flex-row items-center ">
            <OutlineField
              medhods={methods}
              name="heart_arterial_high"
              required
            />
            <AppoinmentItemTitle title="/" />
            <OutlineField
              medhods={methods}
              name="heart_arterial_low"
              required
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
              categoryName={'right_heart_edges'}
              fieldStyle="w-[90%]"
            />
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="правая"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[42%] text-[#797979]"
              categoryName={'left_heart_edges'}
              fieldStyle="w-[90%]"
            />
            <AutoComplateCategoryBoxView
              formMethods={methods}
              label="верхняя"
              isSearchAction
              isGetAction
              containerStyle=" flex flex-row items-center gap-1 w-[42%] text-[#797979]"
              categoryName={'upper_heart_edges'}
              fieldStyle="w-[90%]"
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Сердечный толчок"
        categoryName={'heart_beat'}
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
          categoryName={'heart_tone'}
          fieldStyle="w-[58%]"
          children={
            <Box>
              <RadioButtonGroup
                name="heart_tone"
                options={heartToneOptions}
                methods={methods}
              />
            </Box>
          }
        />
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="I тон"
          isSearchAction
          isGetAction
          categoryName={'i_tone'}
          fieldStyle="w-[80%]"
          children={
            <Box>
              <RadioButtonGroup
                name="i_tone"
                options={iToneOptions}
                methods={methods}
              />
            </Box>
          }
        />
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="акцент II-го тона на"
          isSearchAction
          isGetAction
          categoryName={'ii_tone'}
          fieldStyle="w-[70%]"
          children={
            <Box>
              <RadioButtonGroup
                name="ii_tone"
                options={iiToneOptions}
                methods={methods}
              />
            </Box>
          }
        />
      </AppointmentSectionContainer>
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Шум"
        categoryName={'noise'}
        isSearchAction
        isGetAction
        fieldStyle="w-[77%]"
        children={
          <Box>
            <RadioButtonGroup
              name="noise"
              options={iiToneOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Пульсация тыльных артерий стоп"
        categoryName={'arterial_pulse_stop'}
        isSearchAction
        isGetAction
        fieldStyle="w-[45%]"
        children={
          <Box>
            <RadioButtonGroup
              name="arterial_pulse_stop"
              options={arterialPulseStopOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Варикозное расширение поверхностных вен"
        categoryName={'varicose_veins_of_superficial_veins'}
        isSearchAction
        isGetAction
        fieldStyle="w-[55%]"
        children={
          <Box>
            <RadioButtonGroup
              name="varicose_veins_of_superficial_veins"
              options={varicoseVeinsOfSuperficialVeinsOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Трофические изменения кожи"
        categoryName={'trophic_skin_changes'}
        isSearchAction
        isGetAction
        defaultCheckbox
        fieldStyle="w-[70%]"
      />
      <TextareActionBoxView isActions isDisabled={false} />
    </AppointmentSectionContainer>
  );
};
