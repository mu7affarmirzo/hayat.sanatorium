import { Box, Typography } from '@mui/material';
import SectionTitle from 'components/SectionTitle/sectionTitle';
import DefaultButton from 'components/deafultButton/DefaultButton';

export const DiagnosisView = () => {
  return (
    <Box className="border w-full px-[10px] pt-[10px] mt-[10px]">
      <SectionTitle title="Диагноз" className="text-base font-semibold" />
      <Box className="flex gap-2 my-[10px] items-center">
        <Typography className={'text-sm'}>Диагноз не изменен :</Typography>
        <DefaultButton
          classStyle="bg-[#4CAF50] text-[#fff]"
          title="Добавить диагноз"
        />
      </Box>
    </Box>
  );
};
