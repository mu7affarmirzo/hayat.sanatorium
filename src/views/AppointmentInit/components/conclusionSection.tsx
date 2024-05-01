import { Box } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import { NewDefaultCheckbox } from 'components/checkbox/NewDefaultCheckbox';
import { useAppAppointmentInitContext } from '../module';
import TextareActionBoxView from 'components/TextareActionBox/textareActionBoxView';

const ConclusionSection = () => {
  const { methods } = useAppAppointmentInitContext();
  return (
    <Box className="border w-full p-[10px] mt-[10px]">
      <SectionTitle title="Заключение" className="text-base font-medium" />
      <NewDefaultCheckbox methods={methods} name={'cito'} label="Cito" />
      <TextareActionBoxView isActions title="Заключение:" />
    </Box>
  );
};

export default ConclusionSection;
