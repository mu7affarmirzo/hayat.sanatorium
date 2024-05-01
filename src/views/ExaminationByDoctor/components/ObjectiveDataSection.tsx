import { Box } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox/AppointmentSectionBox';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { PulseOptions } from '../constant/ExaminationOption';

import { OutlineField } from 'components/Fields/OutlineField';
import { useExaminationByDoctorContext } from '../module';
import MultiSelectCheckboxGroup from 'components/RadioButtonGroup/multiSelectRadioButton';

export const ObjectiveDataSection = () => {
  const { methods } = useExaminationByDoctorContext();

  return (
    <AppointmentSectionContainer>
      <TextareActionBoxView title="Объективные данные" isActions />
      <Box className="flex flex-row items-center p-1">
        <AppoinmentItemTitle title="Температура" />
        <OutlineField medhods={methods} name="temperature" required={false} />

        <AppoinmentItemTitle title="(град.)." />

        <AppoinmentItemTitle title="Артериальное давление (мм рт. ст.):" />
        <OutlineField medhods={methods} name="arterial_high" required={false} />

        <AppoinmentItemTitle title="/" />
        <OutlineField medhods={methods} name="arterial_low" required={false} />

        <AppoinmentItemTitle title="ЧСС (уд. в мин):" />
        <OutlineField medhods={methods} name="imt" required={false} />
        <AppoinmentItemTitle title="Пульс" />
        <Box className="flex flex-row items-center ">
          <MultiSelectCheckboxGroup
            methods={methods}
            name="pulse"
            options={PulseOptions}
          />
        </Box>
      </Box>
    </AppointmentSectionContainer>
  );
};
