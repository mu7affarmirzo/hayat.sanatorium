import { Box } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useCardiologistAppoinmnetContext } from '../module';
import RadioButtonGroup from 'components/RadioButtonGroup';
import {
  axillaryOptions,
  bodyTypeOptions,
  cervicalOptions,
  inguinalOptions,
  sclera_visible_mucosaOptions,
  skinOptions,
  thyroidsOptions,
} from '../constant/radioCheckboxData';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { OutlineField } from 'components/Fields/OutlineField';

export const ObjectiveResearchSection = () => {
  const { methods } = useCardiologistAppoinmnetContext();
  return (
    <AppointmentSectionContainer boxTitle="Данные объективного исследования">
      <Box className="flex flex-row items-center p-1">
        <AppoinmentItemTitle title="Рост" />
        <OutlineField medhods={methods} name="height" required={true} />
        <AppoinmentItemTitle title="см," />

        <AppoinmentItemTitle title="вес" />
        <OutlineField medhods={methods} name="weight" required={true} />

        <AppoinmentItemTitle title="кг, пульс" />
        <OutlineField medhods={methods} name="pulse_general" required={true} />

        <AppoinmentItemTitle title="уд/м, давление" />
        <OutlineField medhods={methods} name="arterial_high" required={false} />

        <AppoinmentItemTitle title="/" />

        <OutlineField medhods={methods} name="arterial_low" required={false} />
        <AppoinmentItemTitle title="мм рт.ст., ИМТ" />

        <OutlineField medhods={methods} name="imt" required={true} />
        <AppoinmentItemTitle title="кг/м2" />

        <AppoinmentItemTitle title="Интерпретация показателя ИМТ" />
        <OutlineField
          medhods={methods}
          name="imt_interpretation"
          required={true}
        />
      </Box>
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Телосложение"
        isSearchAction
        isGetAction
        categoryName={'for_sanatorium_treatment'}
        fieldStyle="w-[45%]"
        children={
          <Box>
            <RadioButtonGroup
              name="body_figure"
              options={bodyTypeOptions}
              methods={methods}
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
        fieldStyle="w-[40%]"
        children={
          <Box>
            <RadioButtonGroup
              name="skin"
              options={skinOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Склеры и видимые слизистые"
        isSearchAction
        isGetAction
        categoryName={'sclera_visible_mucosa'}
        fieldStyle="w-[35%]"
        children={
          <Box>
            <RadioButtonGroup
              name="sclera_visible_mucosa"
              options={sclera_visible_mucosaOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        formMethods={methods}
        label="Щитовидная железа"
        isSearchAction
        isGetAction
        categoryName={'thyroids'}
        fieldStyle="w-[40%]"
        children={
          <Box>
            <RadioButtonGroup
              name="thyroids"
              options={thyroidsOptions}
              methods={methods}
            />
          </Box>
        }
      />
      <AppointmentSectionContainer>
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="шейные"
          isSearchAction
          isGetAction
          categoryName={'cervical'}
          fieldStyle="w-[38%]"
          children={
            <Box>
              <RadioButtonGroup
                name="cervical"
                options={cervicalOptions}
                methods={methods}
              />
            </Box>
          }
        />
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="подмышечные"
          isSearchAction
          isGetAction
          categoryName={'axillary'}
          fieldStyle="w-[33%]"
          children={
            <Box>
              <RadioButtonGroup
                name="axillary"
                options={axillaryOptions}
                methods={methods}
              />
            </Box>
          }
        />
        <AutoComplateCategoryBoxView
          formMethods={methods}
          label="паховые"
          isSearchAction
          isGetAction
          categoryName={'inguinal'}
          fieldStyle="w-[37%]"
          children={
            <Box>
              <RadioButtonGroup
                name="inguinal"
                options={inguinalOptions}
                methods={methods}
              />
            </Box>
          }
        />
      </AppointmentSectionContainer>
      <TextareActionBoxView isActions isDisabled={false} />
    </AppointmentSectionContainer>
  );
};
