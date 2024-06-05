import { Box } from '@mui/material';
import { OutlineField } from 'components/Fields/OutlineField';
import TextareActionBox from 'components/TextareActionBox';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useRepeatedAppointmentContext } from '../module';

export const ObjectiveStatusSection = () => {
  const { methods } = useRepeatedAppointmentContext();

  return (
    <Box className="border p-[10px] flex flex-col mb-[10px] ">
      <TextareActionBox title="Объективные данные" isActions isDisabled />
      <Box className="flex flex-row items-center p-1 my-2">
        <AppoinmentItemTitle title="Артериальное давление:" />
        <OutlineField medhods={methods} name="arterial_high" required={true} />
        <AppoinmentItemTitle title="/" />
        <OutlineField medhods={methods} name="arterial_low" required={true} />
        <AppoinmentItemTitle title="мм.рт.ст. ЧСС" />
        <OutlineField medhods={methods} name="imt" required={true} />
        <AppoinmentItemTitle title="в минуту." />
      </Box>
    </Box>
  );
};
