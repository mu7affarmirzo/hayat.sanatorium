import { Box } from '@mui/material';
import RadioButtonGroup from 'components/RadioButtonGroup';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import { RegimeOptions } from '../constant/ExaminationOption';
import DefaultButton from 'components/deafultButton/DefaultButton';
import { useExaminationByDoctorContext } from '../module';

export const DieateAndModeSection = () => {
  const { methods } = useExaminationByDoctorContext();
  return (
    <Box className="flex flex-row items-center gap-2">
      <Box className="w-[50%] border p-2 h-[107px]">
        <SectionTitle
          title="Диета"
          className="font-roboto font-medium text-base"
        />
      </Box>
      <Box className="w-[50%]  border p-2 h-[107px]">
        <SectionTitle
          title="Режим"
          className="font-roboto font-medium text-base"
        />
        <Box className="flex flex-row items-center justify-between">
          <RadioButtonGroup
            options={RegimeOptions}
            name="regime"
            methods={methods}
          />
          <DefaultButton
            title="Добавить причину"
            className="bg-green-400 py-2"
            classStyle="bg-[#4CAF50] h-[30px]"
          />
        </Box>
      </Box>
    </Box>
  );
};
