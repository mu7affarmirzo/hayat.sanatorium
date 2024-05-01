import { Box } from '@mui/material';
import { OutlineField } from 'components/Fields/OutlineField';
import TextareActionBox from 'components/TextareActionBox';
import { AppoinmentItemTitle } from 'components/defaultText/AppoinmentItemTitle';
import { useFinalAppointmentContext } from '../module';

export const OpjectiveStatusSection = () => {
  const { methods } = useFinalAppointmentContext();

  return (
    <Box className="border p-[10px] flex flex-col mb-[10px] ">
      <TextareActionBox title="Объективный статус" isActions isDisabled />
      <Box className="flex flex-row items-center p-1 my-2">
        <AppoinmentItemTitle title="Рост" />
        <OutlineField medhods={methods} name="height" required={true} />
        <AppoinmentItemTitle title="см," />

        <AppoinmentItemTitle title="вес" />
        <OutlineField medhods={methods} name="weight" required={true} />

        <AppoinmentItemTitle title="кг, пульс" />
        <OutlineField medhods={methods} name="heart_beat" required={true} />

        <AppoinmentItemTitle title="уд/м, давление" />
        <OutlineField medhods={methods} name="arterial_high" required={true} />

        <AppoinmentItemTitle title="/" />

        <OutlineField medhods={methods} name="arterial_low" required={true} />
        <AppoinmentItemTitle title="мм рт.ст., ИМТ" />

        <OutlineField medhods={methods} name="imt" required={true} />
        <AppoinmentItemTitle title="кг/м2" />

        <AppoinmentItemTitle title="Интерпретация показателя ИМТ" />
        <OutlineField
          medhods={methods}
          name="imt_interpretation"
          required={true}
          inputWidth="240px"
        />
      </Box>
    </Box>
  );
};
