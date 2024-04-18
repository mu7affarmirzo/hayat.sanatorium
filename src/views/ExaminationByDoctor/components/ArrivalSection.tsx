import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { useExaminationByDoctorContext } from '../module';
import { Box, OutlinedInput } from '@mui/material';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import AutoComplateCategoryBoxView from 'components/AutocomplateCategoryBox/AutocomplateCategoryField';
import { ExaminationOption } from '../constant/ExaminationOption';
import RadioButtonGroup from 'components/RadioButtonGroup';

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
              name="auscultative_breathing"
              options={ExaminationOption}
            />
            <OutlinedInput
              sx={{ width: '200px', height: '30px' }}
              className="mx-2"
              size="small"
            />
            <AppoinmentItemTitle title="Рейс №:" />
            <OutlinedInput
              sx={{ width: '100px', height: '30px' }}
              className="mx-2"
              size="small"
            />
          </Box>
        }
      />
      <AutoComplateCategoryBoxView
        label="До санатория доехал(а) на:"
        formMethods={methods}
        categoryName={'for_sanatorium_treatment'}
        children={
          <Box>
            <RadioButtonGroup
              name="auscultative_breathing"
              options={ExaminationOption}
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
              name="auscultative_breathing"
              options={ExaminationOption}
            />
          </Box>
        }
      />
      <TextareActionBoxView title="Жалобы" />
    </AppointmentSectionContainer>
  );
};
