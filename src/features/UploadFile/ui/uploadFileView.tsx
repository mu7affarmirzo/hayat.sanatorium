/* eslint-disable react/style-prop-object */
import { Box, Typography } from '@mui/material';
import { AppointmentSectionContainer } from 'components/AppointmentSectionBox';
import SelectButton from 'components/buttons/SelectButton';

export const SelectData = [
  {
    id: 0,
    title: 'Начало приёма',
  },
  {
    id: 1,
    title: 'Начало приём2',
  },
];

export const UploadFileView = () => {
  return (
    <AppointmentSectionContainer boxTitle="Файлы">
      <Box className="flex flex-row items-center gap-2">
        <SelectButton
          data={SelectData}
          defaultValue="Добавить файл"
          style="w-[170px]"
        />
        <SelectButton data={SelectData} defaultValue="Сканировать" />
      </Box>
      <Typography className="text-[#686868bc] text-[14px] mt-[10px]">
        Прикрепленные документы отсутствуют
      </Typography>
    </AppointmentSectionContainer>
  );
};
