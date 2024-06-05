import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { Box } from '@mui/material';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import {
  AyesShellsOptions,
  RoadCrossedOption,
  fromToSanatoriumOption,
} from '../constant/ExaminationOption';
import RadioButtonGroup from 'components/RadioButtonGroup';
import { OutlineField } from 'components/Fields/OutlineField';
import { useExaminationByDoctorContext } from '../module';

export const ArrivalSection = () => {
  const { methods } = useExaminationByDoctorContext();
  return (
    <AppointmentSectionContainer boxTitle="Прибытие">
      <AutoComplateCategoryBoxView
        label="Состояние"
        formMethods={methods}
        categoryName={'state'}
        children={
          <Box className="flex flex-row items-center ">
            <RadioButtonGroup
              name="ayes_shells"
              options={AyesShellsOptions}
              methods={methods}
            />

            <OutlineField
              medhods={methods}
              name="ayes_shells"
              required={true}
              inputWidth="120px"
            />

            <AppoinmentItemTitle title="Рейс №:" />
            <OutlineField medhods={methods} name="arv_number" required={true} />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        label="До санатория доехал(а) на:"
        formMethods={methods}
        categoryName={'from_to_sanatorium'}
        children={
          <Box>
            <RadioButtonGroup
              name="from_to_sanatorium"
              options={fromToSanatoriumOption}
              methods={methods}
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        label="Дорогу перенес(ла):"
        formMethods={methods}
        categoryName={'road_crossed'}
        isSearchAction
        fieldStyle="w-[68%]"
        children={
          <Box>
            <RadioButtonGroup
              name="road_crossed"
              options={RoadCrossedOption}
              methods={methods}
            />
          </Box>
        }
      />
      <TextareActionBoxView title="Жалобы" />
    </AppointmentSectionContainer>
  );
};
