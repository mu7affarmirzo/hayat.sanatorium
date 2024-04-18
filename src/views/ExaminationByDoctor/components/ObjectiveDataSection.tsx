import { Box, OutlinedInput } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import RadioButtonGroup from 'components/RadioButtonGroup';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { ExaminationOption } from '../constant/ExaminationOption';
import { useExaminationByDoctorContext } from '../module';

export const ObjectiveDataSection = () => {
  const { methods } = useExaminationByDoctorContext();

  return (
    <AppointmentSectionContainer>
      <TextareActionBoxView title="Объективные данные" isActions />
      <Box className="flex flex-row items-center p-1">
        <AppoinmentItemTitle title="Температура" />
        <OutlinedInput
          sx={{ width: '100px', height: '30px' }}
          className="mx-2"
          size="small"
          {...methods.register('temperature', { required: false })}
        />

        <AppoinmentItemTitle title="(град.)." />

        <AppoinmentItemTitle title="Артериальное давление (мм рт. ст.):" />

        <OutlinedInput
          sx={{ width: '70px', height: '30px' }}
          className="mx-2"
          size="small"
          {...methods.register('arterial_high', { required: false })}
        />

        <AppoinmentItemTitle title="/" />
        <OutlinedInput
          sx={{ width: '70px', height: '30px' }}
          className="mx-2"
          size="small"
          {...methods.register('arterial_low', { required: false })}
        />
        <AppoinmentItemTitle title="уд/м, давление" />

        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          {...methods.register('temperature', { required: false })}
        />

        <AppoinmentItemTitle title="ЧСС (уд. в мин):" />
        <OutlinedInput
          sx={{ width: '80px', height: '30px' }}
          className="mx-2"
          size="small"
          {...methods.register('arv_number', { required: false })}
        />
        <AppoinmentItemTitle title="Пульс" />
        <Box className="flex flex-row items-center ">
          <RadioButtonGroup
            name="auscultative_breathing"
            options={ExaminationOption}
          />
        </Box>
      </Box>
    </AppointmentSectionContainer>
  );
};
